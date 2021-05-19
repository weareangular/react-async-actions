import React from "react";
import { useSelector } from "react-redux";

export const Loader = () => {
  const isLoading = useSelector((store) => store.general.isLoading);
  console.log({ isLoading });
  return <> {isLoading && <span>Loading...</span>} </>;
};
