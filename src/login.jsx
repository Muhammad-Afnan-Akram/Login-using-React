import React, { useState } from 'react';

const Login = () => {
  const [useremail, setuseremail] = useState('');
  const [password, setPassword] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async(event) => {
    event.preventDefault();
    await fetch("https://task01-9ef47-default-rtdb.firebaseio.com/data.json",
        {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify({useremail, password})
        }
    )
    setFormSubmitted(true);
    setuseremail('');
    setPassword('');


  };
  return (

  <>
 {formSubmitted && (
        <div className="notify">
          <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">Well done!</h4>
            <p>Data saved to Firebase</p>
          </div>
        </div>
      )}
  <form onSubmit={handleSubmit} className="formstyle">
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={useremail} onChange={(event) => setuseremail(event.target.value)}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>       
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button onSubmit= "" type="submit" className="btn btn-primary">Submit</button>
</form>
</>
)};

export default Login;
