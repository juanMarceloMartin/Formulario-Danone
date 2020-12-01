const moment = require("moment");
const Sequelize = require("sequelize");
const User = require("../model/User");
const Op = Sequelize.Op;

const fetchUsers = async () => {
  const yesterday = new Date(moment().subtract(1, "days").format("LL"));
  const today = new Date(moment().format("LL"));

  try {
    const users = await User.findAll({
      where: { createdAt: { [Op.between]: [yesterday, today] } },
    });

    // console.log(Array.isArray(users));
    // console.log(users[0].dataValues);
    return users;
  } catch (e) {
    console.log(e);
  }
};

module.exports = fetchUsers;
