import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import authImage from '../Assets/image3.jpeg';
import Form from 'react-bootstrap/Form';
import { registerAPI } from '../services/allAPI';

// both login page and register page are almost same. so here we use a single page 
// and change the content inside that page
function Auth({ register }) {
  const registerForm = register ? true : false;
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: ""
  })
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("user details");
    console.log(userData);
    const { username, email, password } = userData;
    if (!username || !email || !password) {
      alert("please fill the form completely")
    }
    else {
      // call function to insert user details 
      const result = await registerAPI(userData)
      if(result.status===200){
        alert("user registered successfully")
        setUserData({
          username:"",
          email:"",
          password:""
        })
      }
      else{
        alert(result.response.data)
      }
    }
  }
  return (
    <>
      <Header />
      <div className='d-flex justify-content-center align-items-center' style={{ width: "100%", height: "100vh" }}>
        <div className='container w-75'>
          <Link to={'/'} style={{ textDecoration: "none", color: "blue" }}>
            <i class="fa-solid fa-arrow-left me-3"></i>Back to Home
          </Link>
          <div className='bg-success p-5 rounded mt-3'>
            <div className='row align-items-center'>
              <div className="col-lg-6 col-md-6">
                <img src={authImage} alt="" width={"100%"} />
              </div>
              <div className="col-lg-6 col-md-6">
                <div className='d-flex align-items-center flex-column'>
                  <h3 className='text-light'><i class="fa-brands fa-stack-overflow me-3"></i>Project fair</h3>
                  <h5 className='text-light mt-3'>
                    {
                      registerForm ? "Signup your account" : "Signin your account"
                    }
                  </h5>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="text" placeholder="Enetr username" value={userData.username}
                        onChange={(e) => setUserData({ ...userData, username: e.target.value })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" value={userData.email}
                        onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" value={userData.password}
                        onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                    </Form.Group>
                    {
                      registerForm ?
                        <div>
                          <button className='btn btn-warning rounded mt-3' onClick={handleRegister} >Register</button>
                          <p>Already a user? Click here to <Link to={'/login'} style={{ color: "blue" }}>Login</Link> </p>
                        </div> :
                        <div>
                          <Link to={'/dashboard'}>
                            <button className='btn btn-warning rounded mt-3'>Login</button>
                          </Link>
                          <p>New user? Click here to <Link to={'/register'} style={{ color: "blue" }}>Register</Link> </p>
                        </div>
                    }
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Auth