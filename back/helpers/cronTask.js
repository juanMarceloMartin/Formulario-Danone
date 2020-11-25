const schedule = require("node-schedule");
const { use } = require("../routes/users");
const fetchUsers = require("./fetchData");
const generateExcel = require("./generateExcel");
const sendEmail = require("./sendEmail");
const util = require('util');

const cronTask = () => {
  schedule.scheduleJob("0 0 * * *", async () => {
    console.log("Recolectando usuarios registrados...");
    try {
      const users = await fetchUsers();
      console.log(users);
      if (!users.length) {
        console.log("No se registraron usuarios ayer");
      } else {
        await generateExcel(users);

        setTimeout(()=>{
          sendEmail();
        }, 3000);
        
      }
    } catch (e) {
      console.log(e);
    }
  });
};

module.exports = cronTask;
