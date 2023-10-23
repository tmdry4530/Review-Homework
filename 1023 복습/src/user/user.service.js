const { User: UserRepository } = require("../entity");

exports.postSignup = async (userEntity) => {
  const result = await UserRepository.create(userEntity);
  return result;
};

exports.getProfile = async (userEntity) => {
  const { id } = userEntity;
  const result = await UserRepository.findOne({
    raw: true,
    where: { id: id },
  });
  return result;
};

exports.getUserList = async () => {
  const result = await UserRepository.findAll({ raw: true });
  return result;
};

exports.putProfile = async (userEntity) => {
  const { id, pw, name } = userEntity;
  const result = await UserRepository.update(
    { pw, name },
    { where: { id: id } }
  );
  return result;
};

exports.deleteLUser = async (userEntity) => {
  const { id } = userEntity;
  const result = await UserRepository.destroy({ where: { id: id } });
  return result;
};
