const xl = require("excel4node");

const generateExcel = async (usersArray) => {
  const usersData = await usersArray;
  const wb = new xl.Workbook();
  const ws = wb.addWorksheet("pagina 1");


  usersData.map((user, index) => {
    let column = 1;
    delete user.dataValues.updatedAt;

    //generate table names
    if (index === 0) {
      for (let key in user.dataValues) {
        ws.cell(1, column).string(String(key));
        column++;
      }
      column = 1;
    }

    for (let key in user.dataValues) {

      if (key.includes("Photo")) {
        ws.cell(index + 2, column).link(user.dataValues[key]);
      }
      if (key === "dni") {
        ws.cell(index + 2, column).number(Number(user.dataValues[key]));
        if (typeof key === Object) {
          ws.cell(index + 2, column).date(Date(user.dataValues[key]));
        }
      } else {
        ws.cell(index + 2, column).string(String(user.dataValues[key]));
      }
      column++;
    }
  });

  wb.write("Excel.xlsx");
};

module.exports = generateExcel;
