import { Link } from 'react-router-dom'

import { useState } from 'react'
import Login from './Login'
import './Signup.css'

const Signup = () => {

    const [inputValue, setinputValue] = useState({ email: "", password: "", conformPassword: "" })

    const [userDetails, setuserDetails] = useState([])

    let handleInputs = ({ target: { name, value } }) => {

        setinputValue({...inputValue,[name]: value })

    }
    let handleSignup=(e)=>{
        e.preventDefault();
        // setinputValue("")

if(inputValue.password!==inputValue.conformPassword)
{
    alert("password not mathced")
}
        
    }

    return (<>

        <div>
            {/* <h1>{JSON.stringify(inputValue)}</h1> */}
            <center>

                <form onSubmit={handleSignup}>
                    <div className="signup_parent">
                        <h1>Signp</h1>
                        <br />
                        <span>Email:</span>
                        <br />

                        <input type="email" name="email" value={inputValue.email} onChange={handleInputs} placeholder='abc@example.come' required /><br />
                        <span>Password</span>
                        <br />

                        <input type="password" name="password" value={inputValue.password} onChange={handleInputs} placeholder="pasword" required />
                        <br />
                        <span>Conform Password</span>

                        <input type="password" name="conformPassword" value={inputValue.conformPassword} onChange={handleInputs} placeholder="conform password" required />

                       {inputValue.password!==inputValue.conformPassword ?<button type='submit' id='btn'>Sign Up</button>: <Link to={`/login${JSON.stringify(inputValue)}`}>
                            <button type='submit' id='btn'>Sign Up</button>
                        </Link>}

                    </div>
                </form>
            </center>

        </div>


    </>

    );
}

export default Signup;






