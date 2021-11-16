const { Schema } = require("mongoose");

const PostSchema = new Schema({
  user: {},
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "public",
  },
  allowComments: {
    type: Boolean,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});
