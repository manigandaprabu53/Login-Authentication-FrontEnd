import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from "../Service/ApiService";
import toast from 'react-hot-toast';
import ApiRoutes from '../Utils/ApiRoutes';
import setter from '../Utils/helper.js';
import axios from 'axios';


function ResetPassword() {
  const navigate = useNavigate();
  let {token} = useParams();
  console.log(token)
  const handleReset = async(e)=>{
    e.preventDefault();
    try {
      sessionStorage.setItem('token', token)
      const formData = new FormData(e.currentTarget)
      const data = {}
      for(let [key, value] of formData.entries()){
        data[key] = value
      }
      console.log(typeof sessionStorage.getItem('token'))
      let response = await axios.post(`https://login-authentication-backend-5ft6.onrender.com/users/resetPassword/${token}`, data)
      toast.success(response.data.message);
      console.log("Line Number: "+sessionStorage.getItem('token'))
      sessionStorage.clear();
      navigate('/loginUser')
    } catch (error) {
        toast.error(error.response.data.message) || "Error Occured! Please Try Again"
    }
  }


  return (
    <div className='login-wrapper'>

        <h3 className='text-align-center'>Enter New Password</h3>
        <Form onSubmit={handleReset}>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password'/>
          </Form.Group>

          <div className="text-align-center">
            <Button variant="primary" type="submit">
              Submit
            </Button>
        </div>
      </Form>

    </div>
  )
}

export default ResetPassword