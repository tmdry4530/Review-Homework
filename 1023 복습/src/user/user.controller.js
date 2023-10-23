const userService = require("./user.service");

exports.create = async (req, res, next) => {
  try {
    const signupDTO = req.body;
    const userEntity = {
      id: signupDTO.userid,
      pw: signupDTO.userpw,
      name: signupDTO.username,
    };
    const response = await userService.postSignup(userEntity);
    res.json(response);
  } catch (e) {
    next(e);
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const userProfileDTO = req.body;
    const userEntity = {
      id: userProfileDTO.userid,
    };
    const response = await userService.getProfile(userEntity);
    res.json(response);
  } catch (e) {
    next(e);
  }
};

exports.findAll = async (req, res, next) => {
  try {
    const response = await userService.getUserList();
    res.json(response);
  } catch (e) {
    next(e);
  }
};

exports.update = async (req, res, next) => {
  try {
    const putProfileDTO = req.body;
    const userEntity = {
      id: putProfileDTO.userid,
      pw: putProfileDTO.userpw,
      name: putProfileDTO.username,
    };
    const response = await userService.putProfile(userEntity);
    res.json(response);
  } catch (e) {
    next(e);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const deleteUserDTO = req.body;
    const userEntity = {
      id: deleteUserDTO.userid,
    };
    const response = await userService.deleteLUser(userEntity);
    res.json(response);
  } catch (e) {
    next(e);
  }
};
