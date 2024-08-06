import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { edituser } from '../redux/userslice';
function Edituser({ping,setping,user}) {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [edited, setedited] = useState({
        name:user.name,
        Lastname:user.Lastname,
        age:user.age,
        email:user.email
    }
    )
    const dispatch=useDispatch();
  return (
    <div>
        <>
      <Button variant="primary" onClick={handleShow}>
        edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>edit user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>name</Form.Label>
        <Form.Control type="text" placeholder={user?.name} onChange={(e)=>setedited({...edited,name:e.target.value})}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>last name</Form.Label>
        <Form.Control type="password" placeholder={user?.Lastname} onChange={(e)=>setedited({...edited,Lastname:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>age</Form.Label>
        <Form.Control type="text" placeholder={user?.age} onChange={(e)=>setedited({...edited,age:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>email</Form.Label>
        <Form.Control type="text" placeholder={user?.email} onChange={(e)=>setedited({...edited,email:e.target.value})} />
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{
            dispatch(edituser({id:user.id,edited}))
            {setping(!ping)}}}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default Edituser