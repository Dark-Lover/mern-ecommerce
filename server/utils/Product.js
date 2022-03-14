class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }
  filter() {
    const queryObj = { ...this.query };
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
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.replace(",", " ");
      this.query = this.query.sort(sortBy);
    }
    return this;
  }

  fields() {
    if (this.queryString.fields) {
      const fieldsToShow = this.queryString.fields.replace(",", " ");
      this.query = this.query.select(fieldsToShow);
    } else {
      this.query = this.query.select("-__v");
    }
  }
}

module.exports = APIFeatures;
