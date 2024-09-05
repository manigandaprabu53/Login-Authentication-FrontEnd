import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import api from "../Service/ApiService";
import toast from 'react-hot-toast';
import ApiRoutes from '../Utils/ApiRoutes';

function ForgotPassword() {

  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget)
      const data = {}
      for(let [key, value] of formData.entries()){
        data[key] = value
      }
      let response = await api.post(ApiRoutes.ForgotPassword.path, data, {authenticate: ApiRoutes.ForgotPassword.authenticate});
      toast.success(response.message);
      console.log(response)
      navigate('/loginUser')
    } catch (error) {
        toast.error(error.response.data.message) || "Error Occured! Please Try Again"
    }
  }

  return (
    <div className='login-wrapper'>

        <h3 className='text-align-center'>Reset Password</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email'/>
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

export default ForgotPassword