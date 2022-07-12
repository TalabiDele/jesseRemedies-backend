const slugify = require("slugify");

module.exports = {
  async beforeCreate(event) {
    if (event.params.data.customer_id) {
      event.params.data.slug = slugify(event.params.data.customer_id, {
        lower: true,
      });
    }
  },
  async beforeUpdate(event) {
    if (event.params.data.customer_id) {
      event.params.data.slug = slugify(event.params.data.customer_id, {
        lower: true,
      });
    }
  },
};
