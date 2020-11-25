const createUser = (user, setShowModal, handleReset) => {
  fetch("http://localhost:3001/users/add", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => {
      setShowModal(true);
      handleReset();
      console.log("Success:", response);
    });
};

export default createUser;
