import axios from "axios";

export const GET_KONTAK = "GET_KONTAK";
export const ADD_KONTAK = "ADD_KONTAK";

export const getListKontak = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    //get API
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        //berhasil get API
        dispatch({
          type: GET_KONTAK,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //gagal get API
        dispatch({
          type: GET_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addKontak = (data) => {
  console.log("2. Masuk Action");
  return (dispatch) => {
    //loading
    dispatch({
      type: ADD_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    //get API
    axios({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/users",
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        console.log("3. Berhasil dapat data:", response.data);
        //berhasil get API
        dispatch({
          type: ADD_KONTAK,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("3. Gagal dapat data :", error);
        //gagal get API
        dispatch({
          type: ADD_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
