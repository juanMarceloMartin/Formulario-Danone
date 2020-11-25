const isValidCuit = (cuit) => {
  let charArr = String(cuit).split("");
  let i = 0;
  let notNum = false;
  while (i < charArr.length && notNum === false) {
    if (isNaN(charArr[i])) notNum = true;
    i++;
  }
  if (notNum) return false;

  cuit = cuit.replace(/[^0-9]/g, ""); // validates only numbers

  if (cuit.length != 11) {
    return false;
  }

  let acumulado = 0;
  let digitos = cuit.split("");
  let digito = digitos.pop();

  for (let i = 0; i < digitos.length; i++) {
    acumulado += digitos[9 - i] * (2 + (i % 6));
  }

  let verif = 11 - (acumulado % 11);
  if (verif == 11) {
    verif = 0;
  }

  return digito == verif;
};

export default isValidCuit;
