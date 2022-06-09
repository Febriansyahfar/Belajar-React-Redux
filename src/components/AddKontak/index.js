import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addKontak, getListKontak } from "../../redux/actions/kontakAction";

function AddKontak() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");

  const { addKontakResult } = useSelector((state) => state.kontakReducer);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("1. masuk handleSubmit");

    dispatch(addKontak({ nama: nama, email: email }));
  };

  useEffect(() => {
    if (addKontakResult) {
      dispatch(getListKontak());
      setNama("");
      setEmail("");
    }
  }, [addKontakResult, dispatch]);

  return (
    <div>
      <h4>ADD KONTAK</h4>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          name="name"
          placeholder="Name . . . "
          value={nama}
          onChange={(event) => setNama(event.target.value)}
        />
        <input
          type="text"
          name="email"
          placeholder="Email . . .  "
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddKontak;
