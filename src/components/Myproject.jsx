import React from 'react'
import Addproject from './Addproject';

function Myproject() {
  return (
    <>
      <div className='card shadow p-5 ms-3 mb-5'>
        <div className="d-flex ">
          <h3 className='text-success ms-3'>My Projects</h3>
          <div className='ms-auto'>
            <Addproject />
          </div>
        </div>
        <div className='mt-5'>
          <div className='border d-flex align-items-center rounded p-2'>
            <h5>Projecct title</h5>
            <div className='ms-auto'>
              <button className='btn'><i class="fa-solid fa-pen-to-square text-info"></i></button>
              <button className='btn'><i class="fa-brands fa-github text-success"></i></button>
              <button className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
            </div>
          </div>
          <p className='text-danger fw-bolder fs-5 mt-3'>No project Uploaded yet</p>
        </div>
      </div>
    </>
  )
}

export default Myproject;