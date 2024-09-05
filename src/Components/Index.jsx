import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useLogout from '../Hooks/useLogout'

function Index() {
  let logout = useLogout();
  return (
    <div className='login-wrapper'>
      <h3>Login SuccessFull</h3>
      <Form>
        <Form.Text>Click below button to logout</Form.Text>
          <div className="text-align-center">
            <Button variant="danger" onClick={()=>logout}>
              Logout
            </Button>
        </div>
      </Form>

    </div>
  )
}

export default Index