import React, { useEffect, useRef, useState } from "react";
import {
   CardDropDown,
   DoneStatus,
   DropDownButton,
   DropDownItem,
   DropDownMenu,
   Status,
   TaskBody,
   TaskContainer,
   TaskFooter,
   TaskHeader,
   ToDoStatus,
} from "./style";
import moment from "moment/moment";
import { useDispatch } from "react-redux";
import { FaTrashAlt, FaEdit, FaEllipsisH } from "react-icons/fa";
import { setModalType, setOpenModal, setSelectedLabel } from "../../store/slice";
import * as colors from "../Helper/utils";
import doneIcon from "../../assets/done-icon.png";

const Task = ({ task }) => {
   const dispatch = useDispatch();

   const cardRef = useRef(null);

   const [clickedLabel, setClickedLabel] = useState("");

   const today = new Date();

   const handleEdit = () => {
      dispatch(setOpenModal(true));
      dispatch(setModalType("UPDATE_TASK"));
   };

   const handleDelete = () => {
      dispatch(setOpenModal(true));
      dispatch(setModalType("DELETE_TASK"));
   };

   const handleMenuClick = (label) => {
      if (clickedLabel === label) {
         setClickedLabel("");
         dispatch(setSelectedLabel(""));
      } else {
         setClickedLabel(label);
         dispatch(setSelectedLabel(label));
      }
   };

   const handleOutsideClick = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
         setClickedLabel("");
      }
   };

   const renderTaskStatus = (task) => {
      return new Date(task.end_date) <= today ? (
         <>
            <img src={doneIcon} alt="Done icon" />
            <DoneStatus>TERMINÉE</DoneStatus>
         </>
      ) : (
         <ToDoStatus>EN COURS</ToDoStatus>
      );
   };

   useEffect(() => {
      document.addEventListener("click", handleOutsideClick);
      return () => {
         document.removeEventListener("click", handleOutsideClick);
      };
   }, []);

   return (
      <TaskContainer>
         <TaskHeader>
            <h3 title={task.label}>{task.label}</h3>
            <CardDropDown ref={cardRef}>
               <DropDownButton
                  onClick={() => {
                     handleMenuClick(task.label);
                  }}
               >
                  <FaEllipsisH color={colors.primaryColor} />
               </DropDownButton>
               <DropDownMenu open={task.label === clickedLabel}>
                  <DropDownItem onClick={() => handleEdit(task.label)}>
                     <FaEdit color={colors.primaryColor} />
                     <p>Edit</p>
                  </DropDownItem>
                  <DropDownItem onClick={() => handleDelete(task.label)}>
                     <FaTrashAlt color={colors.primaryColor} />
                     <p>Delete</p>
                  </DropDownItem>
               </DropDownMenu>
            </CardDropDown>
         </TaskHeader>
         <TaskBody>
            <p>{task.description}</p>
         </TaskBody>
         <TaskFooter>
            <Status>{renderTaskStatus(task)}</Status>
            <p>
               <strong>End Date:</strong> {moment(task.end_date).format("DD/MM/YYYY")}
            </p>
         </TaskFooter>
      </TaskContainer>
   );
};

export default Task;
