class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filter() {
    // Take a copy of the queryString and delete all [default] params

    const queryObj = { ...this.queryString };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((field) => delete queryObj[field]);
    const queryStr = JSON.stringify(queryObj).replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    );
    const queryFilter = JSON.parse(queryStr);
    this.query.find(queryFilter);
    return this;
  }

  sort() {
    // Sort using specific sort param
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.replace(",", " ");
      this.query = this.query.sort(sortBy);
    }
    return this;
  }

  fields() {
    // Select fields using specific fields param

    if (this.queryString.fields) {
      const fieldsToShow = this.queryString.fields.replace(",", " ");
      this.query = this.query.select(fieldsToShow);
    } else {
      this.query = this.query.select("-__v");
    }
    return this;
  }

  paginate() {
    // Paginate using specific fields [page] [limit]

    const page = +this.queryString.page || 1;
    const limit = +this.queryString.limit || 20;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

module.exports = APIFeatures;
