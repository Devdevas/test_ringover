import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   tasks: [],
   loading: false,
   error: {
      code: null,
      message: "",
   },
   openModal: false,
   modalType: "",
   selectedLabel: "",
};

const slice = createSlice({
   name: "tasks",
   initialState,
   reducers: {
      setTasks: (state, action) => {
         state.tasks = action.payload;
      },
      addTask: (state, action) => {
         state.tasks.push(action.payload);
      },
      removeTask: (state, action) => {
         const labelToremove = action.payload;
         state.tasks = state.tasks.filter((task) => task.label !== labelToremove);
      },
      loading(state) {
         state.loading = true;
      },
      setSuccess(state) {
         state.loading = false;
         state.openModal = false;
         state.error = { code: null, message: "" };
      },
      setError(state, action) {
         state.loading = false;
         state.openModal = false;
         state.error.code = action.payload.code;
         state.error.message = action.payload.message;
      },
      setOpenModal(state, action) {
         state.openModal = action.payload;
      },
      setModalType(state, action) {
         state.modalType = action.payload;
      },
      setSelectedLabel(state, action) {
         state.selectedLabel = action.payload;
      },
   },
});

export const {
   setTasks,
   addTask,
   removeTask,
   loading,
   setSuccess,
   setError,
   setOpenModal,
   setModalType,
   setSelectedLabel,
} = slice.actions;

export default slice.reducer;
