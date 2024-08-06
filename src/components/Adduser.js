import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { adduser } from '../redux/userslice';
function Adduser({ping,setping}) {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newuser, setnewuser] = useState({
        name:"",
        Lastname:"",
        age:"",
        email:""
    }
    )
    const dispatch=useDispatch();
  return (
    <div>
        <>
      <Button variant="primary" onClick={handleShow}>
        add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={(e)=>setnewuser({...newuser,name:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>last name</Form.Label>
        <Form.Control type="password" placeholder="last name" onChange={(e)=>setnewuser({...newuser,Lastname:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>age</Form.Label>
        <Form.Control type="text" placeholder="Enter age" onChange={(e)=>setnewuser({...newuser,age:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>email</Form.Label>
        <Form.Control type="text" placeholder="Enter email" onChange={(e)=>setnewuser({...newuser,email:e.target.value})} />
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(adduser(newuser));setping(!ping)}}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default Adduser