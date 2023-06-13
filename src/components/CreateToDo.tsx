import {useForm} from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";

interface IForm {
    toDo: string;
  }

function CreateToDo(){
    const setToDos = useSetRecoilState(toDoState);
    const {register, handleSubmit, setValue} = useForm<IForm>();
    const onValid = (data:IForm) => {
        setToDos((prev) => [{ text: data.toDo, id: Date.now(), category: "TO_DO" } , ...prev])
        setValue("toDo","")
    };
    return (
    <form onSubmit={handleSubmit(onValid)}>
        <input {...register("toDo", { 
            required: "please write a to do", })} 
            placeholder= "Write a to do" />
        <button>Add</button>
    </form>
    );
}

export default CreateToDo;