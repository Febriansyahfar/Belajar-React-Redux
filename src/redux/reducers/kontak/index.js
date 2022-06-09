import { GET_KONTAK } from "../../actions/kontakAction";

const initialState = {
  getListKontakResult: false,
  getListKontakLoading: false,
  getListKontakError: false,
};

const kontak = (state = initialState, action) => {
  switch (action.type) {
    case GET_KONTAK:
      console.log("4. masuk reducer:", action);
      return {
        ...state,
        getListKontakResult: action.payload.data,
        getListKontakLoading: action.payload.loading,
        getListKontakError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default kontak;
