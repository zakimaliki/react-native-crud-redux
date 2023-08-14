import axios from "axios";
const getUser = () => async (dispatch) => {
  try {
    const user = await axios.get(
      "http://192.168.0.100:3000/User"
    );
    const result = user.data;
    dispatch({ type: "GET_ALL_USER", payload: result });
  } catch (err) {
    console.error(err.message);
  }
};



export default getUser ;