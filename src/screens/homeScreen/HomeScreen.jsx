import React from "react";
import OperationMath from "../../components/operationMath/OperationMath";
import UserList from "../../components/userList/UserList";
import "./homeScreen.scss";

const HomeScreen = () => {
  return (
    <main>
      <OperationMath />
      <UserList />
    </main>
  );
};

export default HomeScreen;
