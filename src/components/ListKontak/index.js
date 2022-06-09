import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListKontak } from "../../redux/actions/kontakAction";

function ListKontak() {
  const { getListKontakResult, getListKontakLoading, getListKontakError } =
    useSelector((state) => state.kontakReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    //panggil action get listkontak
    dispatch(getListKontak());
  }, [dispatch]);
  return (
    <div>
      <h4>List Kontak</h4>
      {getListKontakResult ? (
        getListKontakResult.map((kontak) => {
          return (
            <p key={kontak.id}>
              {kontak.name} - {kontak.email}
            </p>
          );
        })
      ) : getListKontakLoading ? (
        <p> Loading . . .</p>
      ) : (
        <p>{getListKontakError ? getListKontakError : "DATA KOSONG"}</p>
      )}
    </div>
  );
}

export default ListKontak;
