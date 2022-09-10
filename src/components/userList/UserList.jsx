import React from "react";

const UserList = () => {
  const userList = [
    { name: "John", gender: "M", salary: 35000 },
    { name: "Jade", gender: "F", salary: 42000 },
    { name: "Joe", gender: "M", salary: 32000 },
    { name: "Jacky", gender: "F", salary: 38000 },
  ];

  // Combien les hommes gagnerait au total s'ils étaient augmentés de 1000€ chacun ?

  const menSalaryTotal = userList
    .filter((user) => user.gender === "M")
    // Nouveau tableau ne contenant que les genders M
    .map((user) => user.salary + 1000)
    // Nouveau tableau contenant les deux salaires + 1000
    .reduce((menSalaryTotal, menSalary) => menSalaryTotal + menSalary);
    // Je récupère la valeur menSalaryTotal qui est "l'accumulation" des 2 valeurs du tableau

  console.log(menSalaryTotal);

  return (
    <div>
      <h3>User-List</h3>
    </div>
  );
};

export default UserList;
