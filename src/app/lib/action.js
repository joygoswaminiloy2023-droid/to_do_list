import { revalidatePath } from "next/cache";
import { addTask } from "./task";

export const createAtask = async (formData) => {
  "use server";

  const newTask = Object.fromEntries(formData.entries());

  // ✅ FIX: convert tags string → array
  if (newTask.tags) {
    newTask.tags = newTask.tags
      .split(",")
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);
  }

  console.log("adding a task:", newTask);

  const res = await addTask(newTask);

  if (res.Success === true) {
    revalidatePath("/task");
  }

  return res;
};