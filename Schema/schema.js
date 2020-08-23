var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var myforms = new Schema({
  panel: {
    type: Array,
  },

  // values: Array,
  // edit: Boolean
});

module.exports = mongoose.model("formbuilding", myforms, "forms");
