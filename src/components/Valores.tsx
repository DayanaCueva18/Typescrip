import React from 'react';

export const Valores = () => {

  const devolver = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

  const Arreglo = devolver.map((num) => num / 5);

  console.log(Arreglo);

  return (
    <div>{Arreglo.join(' ')}</div>
  );
};

