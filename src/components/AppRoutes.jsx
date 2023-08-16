import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TasksList from "./TasksList";

const AppRoutes = () => {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<TasksList />} />
         </Routes>
      </Router>
   );
};

export default AppRoutes;
