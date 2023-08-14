import axios from "axios";
const updateUser = (getData, fullName,email,avatarUrl,id) => async (dispatch) => {
  try {
    const user = await axios.put(`http://192.168.0.100:3000/User/`+id,
    {
        fullName,
        email, 
        avatarUrl
    });
    alert("data updated");
    getData()
    const result = user.data;
    dispatch({ type: "UPDATE_USER", payload: result });
  } catch (err) {
    console.error(err.message);
    alert("updated failed");
    setShow(false);
  }
};

export default updateUser;