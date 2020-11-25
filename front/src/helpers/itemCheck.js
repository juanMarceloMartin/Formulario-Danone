const itemCheck = (item, entry, setItemExists) => {
  fetch(`http://localhost:3001/${item}/${entry}`)
    .then((res) => res.json())
    .then((res) => {
      if (res[item]) {
        setItemExists(true);
      }
    })
    .catch((error) => {
      setItemExists(false);
      console.error("Error:", error);
    });
};

export default itemCheck;
