const paginatedData = (model) => {
  return async (req, res, next) => {
    let page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 10;
    let sort = req.query.sortBy || "";
    let order = parseInt(req.query.orderBy) || 1;
    let fillter = req.query.fillter || {};
    fillter = JSON.parse(fillter);

    let listCount = await model.countDocuments().exec();
    let totalPage = Math.ceil(listCount / limit);

    let startIndex = (page - 1) * limit;
    let endIndex = page * limit;

    let result = {};

    if (startIndex > 0) {
      result.prev = { page: page - 1, limit };
    }
    if (endIndex < listCount) {
      result.next = { page: page + 1, limit };
    }

    result.totalPage = totalPage;

    try {
      result.data = await model
        .find(fillter)
        .sort(sort && { [sort]: order })
        .limit(limit)
        .skip(startIndex)
        .exec();
      res.result = result;
      next();
    } catch (err) {
      res
        .status(500)
        .json({ err: true, message: "Something went wrong try agian later." });
    }
  };
};

module.exports = paginatedData;
