const { Schema, model } = require("mongoose");

const pollsSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  totalVotes: Number,
  options: {
    type: [
      {
        name: String,
        vote: Number,
      },
    ],
  },
});

const polls = model("pools", pollsSchema);
module.exports = polls;
