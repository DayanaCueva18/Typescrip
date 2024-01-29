import React from 'react'

export const Parametro =()=> {
    
    const suma = [5,10,15,20,25,30,35,40,45,50];

    let suma2= 0;
    function arraySuma(retorno: number[]): number {
        const suma = retorno.reduce((i) => suma2 += i)
        return suma; 
    }
    return (<div>La suma de los elementos es: {arraySuma(suma)}
    </div>)
    
    }