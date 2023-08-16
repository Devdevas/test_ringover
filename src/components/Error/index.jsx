import React from "react";
import { useSelector } from "react-redux";
import { ErrorContainer } from "./style";

const Error = () => {
   const error = useSelector((state) => state.tasks.error);

   return (
      <ErrorContainer>
         <h3>Error {error.code}</h3>
         <p>{error.message}</p>
      </ErrorContainer>
   );
};

export default Error;
