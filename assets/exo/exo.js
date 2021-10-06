//Je défini ma valeur de référence
const referenceValue = 0;
//Création d'un array avec des nombres positifs & négatifs
const arr = [6, 2, 3, -4, 54, 6, 7, 888, 99, 10, 1, 800, 500, -400, 1000];

//En utilisant la méthode reduce en utilisant Math.abs pour avoir un résulat positif
// si ma current value moins la value de référence est inférieur à la valeur précédente - la valeur de référence alors j'affiche la current value
// sinon la valeur précédente

//cas concret => on va avoir (6 - 0 = 6) < (0 - 0 = 0) = 6 puis
//(2 - 0) < (6 - 0 ) = 2 puis (3 -0 ) = 3 < (2 - 0) = 2 etc...
const result = arr.reduce((previousValue, currentValue) =>
  Math.abs(currentValue - referenceValue) <
  Math.abs(previousValue - referenceValue)
    ? currentValue
    : previousValue
);
