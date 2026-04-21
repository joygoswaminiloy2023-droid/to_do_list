
import { taskfunck } from "../lib/task";

import TaskCard from "./components/TaskCard/TaskCard.jsx";

export default async function Home () {
  const taskdata=await taskfunck();
 
  return (
<div className="grid grid-col-2 md:grid-cols-3 my-10 lg:grid-cols-4 mx-10 gap-10  ">

{taskdata.map(t_data=><TaskCard key={t_data.id} t_data={t_data}></TaskCard>)}



</div>
  );
}
