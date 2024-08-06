import './Modal.css';

const Modal = (props) => {

    const setOpen = () => {
        props.modalTrigger();
    };

    if (props.isOpen) {

        return (
            <>
                <div className="overlay" />
                <div className='modal'>
                    <h2>{props.message}</h2>
                    <p>Username: {props.username}</p>
                    <p>Age: {props.age}</p>
                    <button onClick={setOpen} >Okay</button>
                </div>
            </>
        );
    }

    }   
   
   export default Modal