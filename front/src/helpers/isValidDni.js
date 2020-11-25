const isValidDni = (dni) => {
  if (isNaN(dni)) {
    return false;
  }

  if (dni.length != 8) {
    return false;
  } else {
    return true;
  }
};

export default isValidDni;
