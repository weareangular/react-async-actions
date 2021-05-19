import React from "react";
import { useSelector } from "react-redux";

export const User = () => {
  const user = useSelector((store) => store.user);
  const { avatar, name } = user;
  return (
    <>
      <img style={{ height: 56 }} alt={name} src={avatar} />
      <h1>{name}</h1>
    </>
  );
};
