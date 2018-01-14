"use strict";

const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  SkillSchema = new Schema({
    name: {
      type: String,
      required: [true, "Укажите название навыка"]
    },
    percents: {
      type: Number,
      required: [true, "Укажите значение"]
    },
    type: {
      type: Number,
      required: [true, "Укажите type"]
    }
  });

mongoose.model("skill", SkillSchema);
