import { useDispatch, useSelector } from "react-redux";
import { BodyContainer, CancelButton, ConfirmButton, Container, Title } from "./style";
import PointsLoader from "../../Helper/PointLoader";
import { deleteTask } from "../../../store/actions";
import { setOpenModal } from "../../../store/slice";

const DeleteTaskModal = (task) => {
   const isLoading = useSelector((state) => state.tasks.isLoading);

   const dispatch = useDispatch();

   const handleDelete = () => {
      dispatch(deleteTask(task.task.label));
   };

   return (
      <Container>
         <Title>Voulez-vous vraiment supprimer la tâche ?</Title>
         <BodyContainer>
            {isLoading ? (
               <PointsLoader />
            ) : (
               <>
                  <CancelButton onClick={() => dispatch(setOpenModal(false))}>Annuler</CancelButton>
                  <ConfirmButton onClick={handleDelete}>Confirmer</ConfirmButton>
               </>
            )}
         </BodyContainer>
      </Container>
   );
};

export default DeleteTaskModal;
