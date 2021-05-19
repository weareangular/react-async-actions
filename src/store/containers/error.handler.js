import React from "react";
import { useSelector } from "react-redux";

export const ErrorHanlder = () => {
  const isError = useSelector((store) => store.general.isError);
  const error = useSelector((store) => store.general.error);
  const statusCode = useSelector((store) => store.general.statusCode);

  return (
    <>
      {isError && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "56px",
            width: "250px",
            borderRadius: 8,
          }}
        >
          <span>{error}</span>
          <span>{statusCode}</span>
        </div>
      )}
    </>
  );
};
