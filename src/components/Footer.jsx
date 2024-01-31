import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className='footer d-flex align-items-center justify-content-evenly w-100 mb-5 mt-5 bg-success p-2'>
        <div style={{ width: "400px" }}>
          <h4>
            <Link to={'/'} style={{textDecoration:"none",color:"white"}}><i class="fa-brands fa-stack-overflow me-3"></i>Project Fair</Link>
          </h4>
          <h6 style={{ textAlign: "justify" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Atque perferendis esse earum aliquam excepturi numquam cupiditate
            id repellat dolores, architecto doloremque ipsum provident quaerat
            blanditiis consequatur voluptas dolore ea nisi.</h6>
        </div>
        <div>
          <h4>Links</h4>
          <Link to={'/'} style={{ textDecoration: "none", color: "white" }}>
            <h6>Home</h6>
          </Link>

          <Link to={'/login'} style={{ textDecoration: "none", color: "white" }}>
            <h6>Login</h6>
          </Link>

          <Link to={'/register'} style={{ textDecoration: "none", color: "white" }}>
            <h6>Register</h6>
          </Link>

        </div>
        <div>
          <h4>Guides</h4>
          <h6>React</h6>
          <h6>React Bootstrap</h6>
          <h6>Bootswatch</h6>
        </div>
        <div>
          <h4>Contact Us</h4>
          <div className='d-flex'>
            <input type="text" placeholder='Enter your Email'
              className='form-control' />
            <button className='btn btn-warning ms-2'>Subscribe</button>
          </div>
          <div className='d-flex justify-content-evenly fs-4 mt-5'>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-facebook"></i>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <p>Copyright &#169; 2024. Project fair built with React and Redux</p>
      </div>
    </>

  )
}

export default Footer