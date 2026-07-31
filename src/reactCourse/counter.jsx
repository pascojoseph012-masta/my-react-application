import React from "react";
import { useState } from "react";

const counter = () => {
    const[user, setuser] =useState({name: "pasco", age: 18})
  return (
    <div>
      counter: {user.age} {user.name}
      <br />
      <button onClick={()=>{setuser((pervuser)=>({...pervuser,age: pervuser.age + 1,}))}}>Increment</button>
      <button onClick={()=>{
        setuser((pervuser)=>({
          ...pervuser,
          age: pervuser.age - 1,
        }))
      }}>Decrement</button>
      <button onClick={()=>setuser((pervuser)=>({
        ...pervuser,
        age: 18,

      }))}>Reset</button>
    </div>
  );
};

export default counter;
