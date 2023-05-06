import React, { useState } from "react";
import { useForm } from "react-hook-form";

/* function ToDoList() {
  const [toDo, setToDo] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {currentTarget: { value }} = event;
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toDo);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="Write a to do" />
        <button>Add</button>
      </form>
    </div>
  );
} */

interface IForm {
    email:string;
    username:string;
    password:string;
    password1:string;
}


function ToDoList() {
    const { register, handleSubmit, formState:{errors} } = useForm<IForm>({defaultValues:{email:"@naver.com"}});
    const onValid = (data:any) => {
        console.log(data)
    }
    console.log(errors.email?.message)
    return (
        <div>
          <form
            style={{display:"flex", flexDirection:"column"}} 
            onSubmit={handleSubmit(onValid)}>

            <input {...register("email", { required:"Email is required", pattern: {value:/^[A-Za-z0-9._%+-]+@naver.com$/, message:"you have to write email address"} })} placeholder="email" />
            <span>{errors?.email?.message as string}</span>

            <input {...register("username", { required:"write here" })} placeholder="username" />
            <span>{errors?.username?.message as string}</span>

            <input {...register("password", { required:"Password is required", minLength:{value:10, message:"your password is too short"} })} placeholder="password" />
            <span>{errors?.password?.message as string}</span>

            <input {...register("password1", { required:"write here", minLength:10 })} placeholder="again password" />
            <span>{errors?.password1?.message as string}</span>

            <button>Add</button>

          </form>
        </div>
      );
}

export default ToDoList;