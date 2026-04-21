
import { taskfunck } from "./lib/task.js";
import Button from "./components/Button/Button";

import TaskCard from "./components/taskcard/Card";

export default async function Home () {
  const taskdata=await taskfunck();
 
  return (
    <div className="space-y-10">
      <Button></Button>
<div className="grid grid-col-2 md:grid-cols-3 my-10 lg:grid-cols-4 mx-10 gap-10  ">

{taskdata.map(t_data=><TaskCard key={t_data.id} t_data={t_data}></TaskCard>)}



</div>
</div>
  );
}
