const fetchCuit = async (cuit) => {
  let response, data;
  try {
    response = await fetch(
      `https://afip.tangofactura.com/Rest/GetContribuyenteFull?cuit=${cuit}`
    );

    data = await response.json();
  } catch (err) {
    console.error(err);
  }
  return data;
};

export default fetchCuit;
