import React from "react";

const Todo = ({ task, FormOpen}) => {
  const deleteHandel = () =>{
    console.log("delete",task)
  }
  return (
    <div>
      <div className="p-10 border border-black m-5 w-1/2">
        <p className="text-2xl font-bold">{task}</p>
        <button className="ping"
          type="button"
          onClick={()=>FormOpen()} className="my-2 border w-20 backdrop-saturate-100"
          
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Todo;
