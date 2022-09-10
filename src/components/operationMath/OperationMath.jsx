import React from "react";

const OperationMath = () => {
  const someArr = [1, 2, 3, 4, 5];

  // 1) Multiplier les valeurs
  const doubleArr = someArr.map((e) => e * 2);
  console.log(doubleArr);

  // 2) Filtrer les valeurs pairs
  const evenArr = someArr.filter((e) => e % 2 === 0);
  console.log(evenArr);

  // 3) Afficher la valeur la plus grande du tableau
  // "acc" signifie accumulateur. C'est la valeur de sortie que l'on souhaite
  // pour un booléen, on pourra l'appeler par ex: isValid,
  // pour la somme des valeurs du tab, on pourra l'appeler: sum
  // .reduce compare les éléments du tableau :
  // Ici, 1 et 2 => Math.max renvoie le plus grand des deux
  // 2 et 3 => etc etc ..
  const maxValueArr = someArr.reduce((acc, e) => Math.max(acc, e));
  console.log(maxValueArr);

  // 4) Additionner les valeurs du tableau
  const sumArrValue = someArr.reduce((sum, e) => sum + e);
  console.log(sumArrValue);

  // 5) Récupérer un booléen, y a t'il des nb pairs dans le tableau ?
  const isOddValueArr = someArr.filter((e) => e % 2 !== 0).lenght !== 0;
  // Ici je passe ma condition filter
  // J'applique .lenght pour savoir si j'en ai au moins 1
  // Si oui, isOddValueArr vaut true
  console.log(isOddValueArr);

  return (
    <div>
      <h3>Map, Filter ou Reduce</h3>
      <ul>
        <li>Mon tableau de sortie fait la même longueur : MAP</li>
        <li>Mon tableau de sortie fait la même longueur ou plus petit : FILTER</li>
        <li>Mon tableau de sortie est une valeur : REDUCE</li>
      </ul>
    </div>
  );
};

export default OperationMath;
