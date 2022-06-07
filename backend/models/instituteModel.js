const mongoose = require("mongoose");

const instituteSchema = mongoose.Schema(
  {
    instituteName: {
      type: String,
      require: true,
    },
    instituteCode: {
      type: String,
      require: true,
      unique: true,
    },
    address: {
      type: String,
      require: true,
    },
    pincode: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
    state: {
      type: String,
      require: true,
    },
    phoneNo: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    website: {
      type: String,
      require: true,
    },
    principalName: {
      type: String,
      require: true,
    },
    principalPhoneNo: {
      type: String,
      require: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Institute = mongoose.model("Institute", instituteSchema);

module.exports = Institute;
