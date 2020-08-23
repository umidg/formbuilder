var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var myform = new Schema({
  panel: {
    type: Array,
  },

  // values: Array,
  // edit: Boolean
});

module.exports = mongoose.model("responsebuilding", myform, "response");
