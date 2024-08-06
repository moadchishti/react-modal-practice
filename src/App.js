import { useState } from "react";
import InputForm from "./components/InputForm/InputForm";
import Modal from "./components/Modal/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalUser, setModalUser] = useState('');
  const [modalAge, setModalAge] = useState('');

  const triggerModal = (username, age) => {
    if (!isOpen) {
      setIsOpen(true);
      setModalUser(username);
      setModalAge(age);
    } else if (isOpen) {
      setIsOpen(false);
      setModalUser('');
      setModalAge('');
    }
  }

  return (
    <div className="App">
      <InputForm triggerModal={triggerModal} />
      <Modal isOpen={isOpen} username={modalUser} age={modalAge} modalTrigger={triggerModal}/>
    </div>
  );
}

export default App;
