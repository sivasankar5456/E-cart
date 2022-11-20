import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Signup.css'
import { Link } from 'react-router-dom'


const Login = () => {

    let {inputValue}=useParams()
    inputValue=JSON.parse(inputValue)

    const [recievedValues,setrecievedValues] = useState({ email:inputValue.email, password:inputValue.password})

    let handleInputs = ({ target: { name, value } }) => {

        setrecievedValues({...recievedValues,[name]: value })

    }
    let handleSignup=(e)=>{
        e.preventDefault();

if(inputValue.conformPassword!==recievedValues.password|| inputValue.email!==recievedValues.email || recievedValues.email=="")
{
    alert("Sign in details not matched")
}
        
    }

    return ( <div>

<center>

<form onSubmit={handleSignup}>
    <div className="signup_parent">
      <h1>Signp</h1>
      <br />
        <span>Email:</span>
        <br />
        <input type="email" name="email" value={recievedValues.email} onChange={handleInputs} placeholder='abc@example.come'required /><br />

        <span>Password</span> 
        <br />

        <input type="password" name="password" value={recievedValues.password} onChange={handleInputs} placeholder="pasword" required />

        <br />

        {inputValue.conformPassword!==recievedValues.password || inputValue.email!==recievedValues.email || recievedValues.email=="" ?<button type='submit' id='btn'>Login</button>: <Link to="/">
                            <button type='submit' id='btn'>Login</button>
                        </Link>}


    </div>
</form>
</center>


    </div> );
}
 
export default Login;








