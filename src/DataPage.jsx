import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteData, addData, updateData } from "./actions";
import { useState } from "react";

const DataPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const storeData = useSelector((state) => state.dataHandler);
  const dispatch = useDispatch();

  const submitHandler = () => {
    return (
      dispatch(addData(firstName, lastName, email)),
      setShow(false),
      setFirstName(""),
      setLastName(""),
      setEmail("")
    );
  };

  const editHandler = (id, fName, lName, emailId) => {
    setShow(true);
    setFirstName(fName);
    setLastName(lName);
    setEmail(emailId);
    dispatch(deleteData(id));
    dispatch(updateData(id));
  };

  return (
    <div className="main-div">
      <button onClick={() => setShow(true)} className="add-btn">
        Add Data
      </button>
      {storeData ? (
        <div>
          {storeData.map((user) => {
            return (
              <div className="name-container" key={user.id}>
                <h4>Name : {user.name}</h4>
                <h4>LastName : {user.lastName}</h4>
                <h4>Email : {user.email}</h4>
                <button
                  onClick={() =>
                    editHandler(user.id, user.name, user.lastName, user.email)
                  }
                  className="update-btn"
                >
                  Update
                </button>
                <button
                  onClick={() => dispatch(deleteData(user.id))}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <h2>There is no data to show. Please add data!!!</h2>
        </>
      )}
      {show ? (
        <div className="input-model">
          <h4>Please, Enter your details...</h4>
          <input
            value={firstName}
            type="text"
            placeholder="Enter your Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <input
            value={lastName}
            type="text"
            placeholder="Enter your Lastname"
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <input
            value={email}
            type="text"
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <button onClick={submitHandler} className="add-btn">
            Submit
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export { DataPage };
