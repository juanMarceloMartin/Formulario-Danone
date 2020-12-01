const Sequelize = require("sequelize");
const db = require("../config/database");

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  lastname: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  phone: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
    unique: {
      args: true,
      msg: "Este telefono ya se encuentra registrado.",
    },
  },
  mail: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  businessName: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  activity: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  cuit: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
    unique: {
      args: true,
      msg: "Este CUIT ya se encuentra registrado.",
    },
  },
  dni: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  dniPhoto: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  cuitPhoto: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  applicationLetterPhoto: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  taxPhoto: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  shopPhoto: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  openingTime: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  street: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  streetNumber: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  city: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  zipCode: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  lat: {
    type: Sequelize.FLOAT,
    defaultValue: '0'
  },
  lng: {
    type: Sequelize.FLOAT,
    defaultValue: '0'
  },
  territory: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
});

User.sync().then(() => {
  console.log("table created");
});

module.exports = User;
