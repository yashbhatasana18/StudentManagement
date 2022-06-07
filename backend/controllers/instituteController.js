const asyncHandler = require("express-async-handler");
const res = require("express/lib/response");
const Institute = require("../models/instituteModel");

const getInstitutes = asyncHandler(async (req, res) => {
  const institutes = await Institute.find({ user: req.user._id });
  res.json(institutes);
});

const addInstitute = asyncHandler(async (req, res) => {
  const {
    instituteName,
    instituteCode,
    address,
    pincode,
    city,
    state,
    phoneNo,
    email,
    website,
    principalName,
    principalPhoneNo,
  } = req.body;
  if (!instituteName || !instituteCode || !email || !website) {
    res.status(400);
    throw new Error("Please Fill The Mandatory(*) Fields.");
  } else {
    const institute = new Institute({
      user: req.user._id,
      instituteName,
      instituteCode,
      address,
      pincode,
      city,
      state,
      phoneNo,
      email,
      website,
      principalName,
      principalPhoneNo,
    });

    const addedInstitute = await institute.save();

    res.status(201).json(addedInstitute);
  }
});

const getInstituteById = asyncHandler(async (req, res) => {
  const institute = await Institute.findById(req.params.id);
  if (institute) {
    res.json(institute);
  } else {
    res.status(404).json({ message: "Institute Not Found" });
  }
});

const updateInstitute = asyncHandler(async (req, res) => {
  const {
    instituteName,
    instituteCode,
    address,
    pincode,
    city,
    state,
    phoneNo,
    email,
    website,
    principalName,
    principalPhoneNo,
  } = req.body;

  const institute = await Institute.findById(req.params.id);

  if (institute.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action.");
  }

  if (institute) {
    (institute.instituteName = instituteName),
      (institute.instituteCode = instituteCode),
      (institute.address = address),
      (institute.pincode = pincode),
      (institute.city = city),
      (institute.state = state),
      (institute.phoneNo = phoneNo),
      (institute.email = email),
      (institute.website = website),
      (institute.principalName = principalName),
      (institute.principalPhoneNo = principalPhoneNo);

    const updatedInstitute = await institute.save();
    res.json(updatedInstitute);
  } else {
    res.status(404);
    throw new Error("Institute not found!");
  }
});

const deleteInstitute = asyncHandler(async (req, res) => {
  const institute = await Institute.findById(req.params.id);

  if (institute.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action.");
  }

  if (institute) {
    await institute.remove();
    res.json({ message: "Institute Deleted Successfully" });
  } else {
    res.status(404);
    throw new Error("Institute not found!");
  }
});

module.exports = {
  getInstitutes,
  addInstitute,
  getInstituteById,
  updateInstitute,
  deleteInstitute,
};
