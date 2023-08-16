import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../store/actions";
import Task from "../Task";
import Error from "../Error";
import {
   Container,
   IconContainer,
   ModalOverlay,
   NoTasksMessage,
   TasksListBody,
   TasksListContainer,
   TasksListHeader,
   Title,
} from "./style";
import { FaPlus } from "react-icons/fa";
import CreateTaskModal from "../Modals/CreateTaskModal";
import { setModalType, setOpenModal } from "../../store/slice";
import UpdateTaskModal from "../Modals/UpdateTaskModal";
import DeleteTaskModal from "../Modals/DeleteTaskModal";
import { SearchBar } from "../Helper/SearchBar";
import moment from "moment";
import { LoadingPoints } from "../Helper/PointLoader/style";

const TasksList = () => {
   const dispatch = useDispatch();
   const tasks = useSelector((state) => state.tasks.tasks);
   const error = useSelector((state) => state.tasks.error);
   const isLoading = useSelector((state) => state.tasks.isLoading);
   const openModal = useSelector((state) => state.tasks.openModal);
   const modalType = useSelector((state) => state.tasks.modalType);
   const selectedLabel = useSelector((state) => state.tasks.selectedLabel);

   const [selectedTask, setSelectedTask] = useState();
   const [filteredTasks, setFilteredTasks] = useState(tasks || []);

   useEffect(() => {
      if (tasks) {
         setFilteredTasks(tasks);
      }
   }, [tasks]);

   useEffect(() => {
      dispatch(getTasks());
   }, [dispatch]);

   useEffect(() => {
      const task = tasks.find((task) => task.label === selectedLabel);
      setSelectedTask(task);
   }, [selectedLabel]);

   const handleCreateTask = () => {
      dispatch(setOpenModal(true));
      dispatch(setModalType("CREATE_TASK"));
   };

   const handleCloseModal = () => {
      dispatch(setOpenModal(false));
      dispatch(setModalType(""));
   };

   const handleSearch = (searchText) => {
      const searchKey = ["label", "start_date", "end_date"];
      if (tasks) {
         const filteredList = tasks.filter((task) => {
            const matchesKeys = searchKey.some((key) => {
               const keyValue = task[key];

               if (key === "start_date" || key === "end_date") {
                  const formattedDate = moment(keyValue).format("DD/MM/YYYY");
                  return formattedDate.includes(searchText);
               } else {
                  return keyValue?.toLowerCase().includes(searchText.toLowerCase());
               }
            });
            return matchesKeys;
         });
         if (searchText === "") {
            setFilteredTasks(tasks);
         } else {
            setFilteredTasks(filteredList);
         }
      }
   };

   return (
      <Container>
         <Title>Mes tâches</Title>
         <TasksListContainer>
            <TasksListHeader>
               <h2>Gérer mes tâches</h2>
               <SearchBar onSearch={handleSearch} />
               <button onClick={handleCreateTask}>
                  <IconContainer>
                     <FaPlus size={16} />
                  </IconContainer>
                  Nouvelle Tâche
               </button>
            </TasksListHeader>
            <TasksListBody>
               {filteredTasks.length && !isLoading ? (
                  filteredTasks.map((task, index) => <Task key={index} task={task} />)
               ) : isLoading ? (
                  <LoadingPoints />
               ) : !isLoading && error ? (
                  <Error />
               ) : filteredTasks.length === 0 ? (
                  <NoTasksMessage>Pas de tâches trouvées !</NoTasksMessage>
               ) : (
                  <></>
               )}
            </TasksListBody>
         </TasksListContainer>
         {openModal && <ModalOverlay onClick={handleCloseModal} />}
         {openModal && modalType === "CREATE_TASK" && <CreateTaskModal />}
         {openModal && modalType === "UPDATE_TASK" && <UpdateTaskModal task={selectedTask} />}
         {openModal && modalType === "DELETE_TASK" && <DeleteTaskModal task={selectedTask} />}
      </Container>
   );
};

export default TasksList;
