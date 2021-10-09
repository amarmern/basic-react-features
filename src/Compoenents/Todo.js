import React, { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
const Todo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    console.log("cancel");
    setModalIsOpen(false);
  }
  function confirModalHandler() {
    console.log("confirm");
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2> {props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={confirModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
};
export default Todo;
