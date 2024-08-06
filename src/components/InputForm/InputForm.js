import { useRef } from "react";
import './InputForm.css';

const InputForm = (props) => {
    const usernameRef = useRef();
    const ageRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        if (usernameRef.current.value.trim() !== '' && ageRef.current.value !== 0) {
            props.triggerModal(usernameRef.current.value, ageRef.current.value);
        }
        else
        {
            
        }
    }


    return (
        <div className="shell" >
            <form onSubmit={submitHandler}>
                <label>Username</label>
                <input 
                    id='user-name'
                    type='text'
                    ref={usernameRef}
                />
                <label>Age</label>
                <input 
                    id='age'
                    type="number"
                    ref={ageRef}
                />
                <button type ='submit'>Login</button>
            </form>
        </div>
    );
};

export default InputForm;