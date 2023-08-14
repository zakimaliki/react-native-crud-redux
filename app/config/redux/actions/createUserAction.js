import axios from "axios";
const createUser =  (getData, fullName,email,avatarUrl) =>async (dispatch ) => {
  try {
    const user = await axios.post("http://192.168.0.100:3000/User",
    {
        fullName,
        email, 
        avatarUrl
    });
    alert("data created");
    getData();
    const result = user.data;
    dispatch({ type: "CREATE_USER", payload: result });
  } catch (err) {
    console.error(err.message);
    alert("created failed");
  }
};

export default createUser;