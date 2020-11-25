const uploadImg = async (base64) => {
    
  const url =
    "https://q92wrrxv8j.execute-api.sa-east-1.amazonaws.com/dev/uploadImage";
  let result;
  let status;
  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "text/html",
        "Connection": "keep-alive"
      },
      body: base64,
    });
    status = response.status;
    result = await response.json();
  } catch (e) {
    console.log(e);
  }
console.log(result.Location,result.Key)
  return result;
};

export default uploadImg;
