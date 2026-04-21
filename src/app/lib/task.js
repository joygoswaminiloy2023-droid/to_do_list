import TASK from "../db/data.json"
export const taskfunck= async()=>{
return TASK;
}

export const addTask=async(newTask)=>{
    newTask.id=TASK.length+1;
    TASK.push(newTask);
    return {Success:true,message:"Task add successfully"}
}