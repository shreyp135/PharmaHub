import React from 'react';
import { useNavigate } from 'react-router-dom';;

export default function Consult() {
    const navigate = useNavigate();
    const handleJoin = async ()=>{
        navigate("/videoRoom");
    };

  return ( <>
    <div>videoConsult</div>
    <button onClick={handleJoin}>Join</button>
    </>
  )
}
