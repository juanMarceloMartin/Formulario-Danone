const emailCheck = (email, setEmailStatus, sendEmailInfo) => {
  fetch(`http://localhost:3001/email/${email}`)
    .then((res) => res.json())
    .then((res) => {
      if (res.mail) {
        setEmailStatus(true);
        sendEmailInfo(true);
      }
    })
    .catch((error) => {
      setEmailStatus(false);
      sendEmailInfo(false);
      console.error("Error:", error);
    });
};

export default emailCheck;
