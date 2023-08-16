import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/actions";

const CreateTask = () => {
   const dispatch = useDispatch();
   const [taskData, setTaskData] = useState({
      label: "",
      description: "",
      start_date: "",
   });

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addTask(taskData));
      setTaskData({ label: "", description: "", start_date: "" });
   };

   return (
      <div>
         <h2>Add New Task</h2>
         <form onSubmit={handleSubmit}>
            <input
               type="text"
               placeholder="Label"
               value={taskData.label}
               onChange={(e) => setTaskData({ ...taskData, label: e.target.value })}
            />
            <input
               type="text"
               placeholder="Description"
               value={taskData.description}
               onChange={(e) => setTaskData({ ...taskData, description: e.target.value })}
            />
            <input
               type="datetime-local"
               placeholder="Start Date"
               value={taskData.start_date}
               onChange={(e) => setTaskData({ ...taskData, start_date: e.target.value })}
            />
            <button type="submit">Add Task</button>
         </form>
      </div>
   );
};

export default CreateTask;
