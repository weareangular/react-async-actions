import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../components/button";
import { general, user } from "../modules";
import { DBClient } from "../repositories";

export const Options = () => {
  const dispatch = useDispatch();

  //EPIC
  const fetchData = () => dispatch(general.fetchData());

  //ASYNC/AWAIT
  const breack = async () => {
    try {
      dispatch(general.showLoader());
      dispatch(user.clearUser());
      const data = await DBClient.getGeneralConfig();
      dispatch(user.updateUser(data));
    } catch (error) {
      dispatch(user.clearUser());
      dispatch(general.showError(error.message));
    }
  };

  return (
    <div style={{ height: 100 }}>
      <Button text="OBSERVABLE" onClick={fetchData} />
      <Button text="ASYNC/AWAIT" onClick={breack} />
    </div>
  );
};
