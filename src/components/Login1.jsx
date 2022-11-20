import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Signup.css'


const Login1 = () => {

   

    const [recievedValues,setrecievedValues] = useState({ email:"", password:""})

    let handleInputs = ({ target: { name, value } }) => {

        setrecievedValues({...recievedValues,[name]: value })

    }
    let handleLogin=()=>{
        alert("your not signed in....,Please Sign in first ")
    }


    return ( <div>

<center>

<form onSubmit={handleLogin}>
    <div className="signup_parent">
      <h1>Signp</h1>
      <br />
        <span>Email:</span>
        <br />

        <input type="email" name="email" value={recievedValues.email} onChange={handleInputs} placeholder='abc@example.come' required /><br />

        <span>Password</span> 
        <br />

        <input type="password" name="password" value={recievedValues.password} onChange={handleInputs} placeholder="pasword" required />

        <br />


        <button id='btn'type='submit'>Login</button>

    </div>
</form>
</center>


    </div> );
}
 
export default Login1;








