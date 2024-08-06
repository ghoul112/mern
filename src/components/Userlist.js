import React from 'react'
import Usercard from './Usercard'
import { useSelector } from 'react-redux'
import Adduser from './Adduser';

function Userlist(ping,setping) {
    const users=useSelector((state)=>state.user.userlist);
  return (
    <>
    <div className='add'>
        <Adduser ping={ping} setping={setping}/>
    </div>
    <div className='container'>
        {users?.map((el)=>(
            <Usercard user={el} ping={ping} setping={setping}/>
            ))}
    </div>
    </>
  )
}

export default Userlist