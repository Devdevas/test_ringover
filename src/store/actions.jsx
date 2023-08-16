import axios, { createTaskUrl, deleteTaskUrl, getTasksUrl, updateTaskUrl } from "../services/axiosConfig";
import { loading, setError, setSuccess, setTasks } from "./slice";

// Action to fetch all tasks from API
export const getTasks = () => async (dispatch) => {
   try {
      dispatch(loading());
      const response = await axios.get(getTasksUrl());
      dispatch(setSuccess());
      dispatch(setTasks(response.data));
   } catch (error) {
      dispatch(setError({ code: error.response?.status, message: error.message }));
   }
};

// Action to create a new task
export const createTask = (taskData) => async (dispatch) => {
   try {
      dispatch(loading());
      await axios.post(createTaskUrl(), taskData);
      dispatch(setSuccess());
      dispatch(getTasks()); // Reload tasks after adding a task
   } catch (error) {
      dispatch(setError({ code: error.response?.status, message: error.message }));
   }
};

// Action to update the task using the label
export const updateTask = (label, taskData) => async (dispatch) => {
   try {
      dispatch(loading());
      await axios.put(updateTaskUrl(label), taskData);
      dispatch(setSuccess());
      dispatch(getTasks()); // Reload tasks after updating the task
   } catch (error) {
      dispatch(setError({ code: error.response?.status, message: error.message }));
   }
};

// Action to delete a specific task using the label
export const deleteTask = (label) => async (dispatch) => {
   try {
      dispatch(loading());
      await axios.delete(deleteTaskUrl(label));
      dispatch(setSuccess());
      dispatch(getTasks()); // Reload tasks after removing the task
   } catch (error) {
      dispatch(setError({ code: error.response?.status, message: error.message }));
   }
};
