const { User: UserRepository } = require("../entity");

exports.postSignup = async (userEntity) => {
  try {
    const result = await UserRepository.create(userEntity);
    return result;
  } catch (e) {
    throw new Error("Error");
  }
};

exports.getProfile = async (userEntity) => {
  try {
    const { id } = userEntity;
    const result = await UserRepository.findOne({
      raw: true,
      where: { id: id },
    });
    return result;
  } catch (e) {
    throw new Error("Error");
  }
};

exports.getUserList = async () => {
  try {
    const result = await UserRepository.findAll({ raw: true });
    return result;
  } catch (e) {
    throw new Error("Error");
  }
};

exports.putProfile = async (userEntity) => {
  try {
    const { id, pw, name } = userEntity;
    const result = await UserRepository.update(
      { pw, name },
      { where: { id: id } }
    );
    return result;
  } catch (e) {
    throw new Error("Error");
  }
};

exports.deleteUser = async (userEntity) => {
  try {
    const { id } = userEntity;
    const result = await UserRepository.destroy({ where: { id: id } });
    return result;
  } catch (e) {
    throw new Error("Error");
  }
};
