import axios from "axios";

const instance = axios.create({
   baseURL: "http://localhost:9000/v1", // Base URL of the API
});

export const getTasksUrl = () => {
   return `/tasks`;
};

export const createTaskUrl = () => {
   return `/tasks`;
};

export const updateTaskUrl = (label) => {
   return `/tasks/${label}`;
};

export const deleteTaskUrl = (label) => {
   return `/tasks/${label}`;
};

export default instance;
