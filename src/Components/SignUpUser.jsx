import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import ApiRoutes from "../Utils/ApiRoutes"
import api from "../Service/ApiService"
import toast from 'react-hot-toast';

function SignUpUser() {

  let navigate = useNavigate();

  const handleSignUp = async(e)=>{
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget)
      const data = {}

      for(let [key, value] of formData.entries()){
        data[key] = value
      }

      let response = await api.post(ApiRoutes.SignUpUser.path, data, {authenticate: ApiRoutes.SignUpUser.authenticate})
      toast.success(response.message);
      navigate('/login')
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='login-wrapper'>

      <h3 className='text-align-center'>Welcome To World Of Recipes</h3>
            <p className='text-align-center'>Already have an account? Login <Link to='/login'>Here</Link></p>
            <Form onSubmit={handleSignUp}>

            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" name='name'/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name='email'/>
            </Form.Group>

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

export default SignUpUser