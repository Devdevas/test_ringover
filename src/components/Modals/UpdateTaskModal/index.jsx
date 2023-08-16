import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
   ButtonsContainer,
   CancelButton,
   Form,
   ModalBody,
   ModalContainer,
   ModalFooter,
   ModalHeader,
   ValidateButton,
} from "../../Helper/modalStyle";
import PointsLoader from "../../Helper/PointLoader";
import { setOpenModal } from "../../../store/slice";
import { updateTask } from "../../../store/actions";
import moment from "moment";

const UpdateTaskModal = (task) => {
   const dispatch = useDispatch();
   const isLoading = useSelector((state) => state.tasks.isLoading);

   const [formErrors, setFormErrors] = useState({
      label: false,
      description: false,
      end_date: false,
   });

   const [taskData, setTaskData] = useState({
      label: task.task.label,
      description: task.task.description,
      start_date: task.task.start_date,
      end_date: task.task.end_date,
   });

   const handleValidateClick = () => {
      const hasErrors = handleFormErrors();
      if (!hasErrors) {
         const formattedEndDate = moment(taskData.end_date).format("YYYY-MM-DDTHH:mm:ss[Z]");
         dispatch(updateTask(task.task.label, taskData));
      }
   };

   const handleFormErrors = () => {
      let hasErrors = false;

      if (taskData.label === "") {
         setFormErrors({ ...formErrors, label: true });
         hasErrors = true;
      } else if (taskData.description === "") {
         setFormErrors({ ...formErrors, description: true });
         hasErrors = true;
      } else if (taskData.end_date <= taskData.start_date) {
         setFormErrors({ ...formErrors, end_date: true });
         hasErrors = true;
      }
      return hasErrors;
   };

   // Re-initialize formErrors when inputs change
   useEffect(() => {
      if (taskData.label !== "") {
         setFormErrors({ ...formErrors, label: false });
      }
      if (taskData.description !== "") {
         setFormErrors({ ...formErrors, description: false });
      }
      if (taskData.end_date >= taskData.start_date) {
         setFormErrors({ ...formErrors, end_date: false });
      }
   }, [taskData]);

   return (
      <>
         <ModalContainer>
            <ModalHeader>
               <h2>Update Task</h2>
            </ModalHeader>
            <ModalBody>
               <Form labelError={formErrors.label} descriptionError={formErrors.description}>
                  <fieldset>
                     <label htmlFor="label">Label*</label>
                     <input
                        autoFocus={formErrors.label}
                        required
                        type="text"
                        id="label"
                        name="label"
                        value={taskData.label}
                        onChange={(event) => setTaskData({ ...taskData, label: event.target.value })}
                     />
                     {formErrors.label && <span>Label required!</span>}
                  </fieldset>
                  <fieldset>
                     <label htmlFor="description">Description*</label>
                     <input
                        autoFocus={formErrors.description}
                        required
                        type="text"
                        id="description"
                        name="description"
                        value={taskData.description}
                        onChange={(event) => setTaskData({ ...taskData, description: event.target.value })}
                     />
                     {formErrors.description && <span>Description required!</span>}
                  </fieldset>
                  <fieldset>
                     <label htmlFor="start-date">Start Date*</label>
                     <input
                        autoFocus={formErrors.start_date}
                        type="date"
                        id="start-date"
                        name="start-date"
                        value={taskData.start_date.toString().substring(0, 10)}
                        onChange={(event) =>
                           setTaskData({
                              ...taskData,
                              start_date: moment(event.target.value).format("YYYY-MM-DDTHH:mm:ss[Z]"),
                           })
                        }
                     />
                  </fieldset>
                  <fieldset>
                     <label htmlFor="end-date">End Date*</label>
                     <input
                        autoFocus={formErrors.end_date}
                        type="date"
                        id="end-date"
                        name="end-date"
                        value={taskData.end_date.toString().substring(0, 10)}
                        onChange={(event) =>
                           setTaskData({
                              ...taskData,
                              end_date: moment(event.target.value).format("YYYY-MM-DDTHH:mm:ss[Z]"),
                           })
                        }
                     />
                     {formErrors.end_date && <span>End date cannot be earlier than the start date!!</span>}
                  </fieldset>
               </Form>
            </ModalBody>
            <ModalFooter>
               <ButtonsContainer>
                  {isLoading ? <PointsLoader /> : <ValidateButton onClick={handleValidateClick}>Update</ValidateButton>}
                  <CancelButton onClick={() => dispatch(setOpenModal(false))}>Cancel</CancelButton>
               </ButtonsContainer>
            </ModalFooter>
         </ModalContainer>
      </>
   );
};

export default UpdateTaskModal;
