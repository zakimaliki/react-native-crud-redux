import axios from "axios";
const daleteUser = (id) => async (dispatch) => {
  try {
    const user = await axios.delete(`http://192.168.0.100:3000/User/`+id);
    alert("data deleted");
    const result = user.data;
    dispatch({ type: "DELETE_USER", payload: result });
  } catch (err) {
    console.error(err.message);
    alert("deleted failed");
    setShow(false);
  }
};

export default daleteUser;