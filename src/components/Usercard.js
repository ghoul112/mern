import React from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { deleteuser } from '../redux/userslice';
import Edituser from './Edituser';
function Usercard({user,ping, setping}) {
  const dispatch=useDispatch();
  return (
    <div>
            <Card style={{ width: '18rem',margin:"10px" }}>
      <Card.Body>
        <Card.Title><p>{user?.name}</p><p>{user?.Lastname}</p></Card.Title>
        <Card.Text>
            <h6>{user?.email}</h6>
            <p>{user?.age}</p>
            <button onClick={()=>{dispatch(deleteuser(user._id));setping(!ping)}}>x</button>
            <Edituser user={user} ping={ping} setping={setping}/>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Usercard
