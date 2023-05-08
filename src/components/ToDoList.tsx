import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue } from "recoil";

interface IForm {
  toDo: string;
}

interface IToDos {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE" ;
}

const toDoState = atom<IToDos[]>({
  key: "toDo",
  default:[],
})


function ToDoList() {
    const [toDos, setToDos] = useRecoilState(toDoState)
    const { 
        register, handleSubmit, setValue
    } = useForm<IForm>();
    const onValid = (data:IForm) => {
        console.log('add to do', data.toDo)
        setToDos((prev) => [{ text: data.toDo, id: Date.now(), category: "TO_DO" } , ...prev])
        setValue("toDo","")
    }
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(onValid)}>
        <input {...register("toDo", { 
            required: "please write a to do", })} 
            placeholder= "Write a to do" />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => <li key={toDo.id}>{toDo.text}</li>)}
      </ul>
    </div>
  );
} 


export default ToDoList;