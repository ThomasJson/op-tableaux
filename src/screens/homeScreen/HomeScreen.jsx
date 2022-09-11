import React from "react";
import Counter from "../../components/counter/Counter";
import OperationMath from "../../components/operationMath/OperationMath";
import UserList from "../../components/userList/UserList";
import "./homeScreen.scss";

const HomeScreen = () => {
  return (
    <main>
      {/* <OperationMath /> */}
      {/* <UserList /> */}
      <Counter />
    </main>
  );
};

export default HomeScreen;
