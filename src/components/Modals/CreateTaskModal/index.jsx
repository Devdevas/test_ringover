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
import { createTask } from "../../../store/actions";

const CreateTaskModal = () => {
   const dispatch = useDispatch();
   const isLoading = useSelector((state) => state.tasks.isLoading);

   const today = new Date();

   const [formErrors, setFormErrors] = useState({
      label: false,
      description: false,
   });

   const [taskData, setTaskData] = useState({
      label: "",
      description: "",
      start_date: today,
   });

   const handleValidateClick = () => {
      const hasErrors = handleFormErrors();
      if (!hasErrors) {
         dispatch(createTask(taskData));
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
   }, [taskData]);

   return (
      <>
         <ModalContainer>
            <ModalHeader>
               <h2>Create A New Task</h2>
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
                        onChange={(event) => setTaskData({ ...taskData, description: event.target.value })}
                     />
                     {formErrors.description && <span>Description required!</span>}
                  </fieldset>
                  <fieldset>
                     <label htmlFor="start-date">Start Date*</label>
                     <input
                        autoFocus={formErrors.start_date}
                        required
                        type="date"
                        id="start-date"
                        name="start-date"
                        onChange={(event) => setTaskData({ ...taskData, start_date: new Date(event.target.value) })}
                     />
                  </fieldset>
               </Form>
            </ModalBody>
            <ModalFooter>
               <ButtonsContainer>
                  {isLoading ? (
                     <PointsLoader />
                  ) : (
                     <ValidateButton onClick={() => handleValidateClick()}>Create</ValidateButton>
                  )}
                  <CancelButton onClick={() => dispatch(setOpenModal(false))}>Cancel</CancelButton>
               </ButtonsContainer>
            </ModalFooter>
         </ModalContainer>
      </>
   );
};

export default CreateTaskModal;
