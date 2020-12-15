import React from 'react';
import { Container, Form, Button, Card, Jumbotron, ProgressBar } from 'react-bootstrap';
import Strengthmeter from './Strengthmeter';
import {useState} from 'react';

function App() {
  const[password,setPassword] = useState('');
  
  return (
    <Container>
      <Jumbotron className="m-3">
        <h3 className="text-center">Password Strength Checker</h3>
      </Jumbotron>
        <Card className="m-5 p-5">
          <h4 className="text-center"><b>Registration Form</b></h4>
          <br></br>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email" 
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password"  
                placeholder="Password" 
                onChange = {(e) =>setPassword(e.target.value)}
              />
            </Form.Group>
            <Strengthmeter password = {password}/>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>ConfirmPassword</Form.Label>
              <Form.Control 
                type="password"  
                placeholder="Password" 
              />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check 
                type="checkbox" 
                label="Check me out" 
              />
            </Form.Group>


            <Button 
              variant="primary"
              type="submit">
              Submit
            </Button>
            
          </Form>
          </Card>
    </Container>
  );
}

export default App;