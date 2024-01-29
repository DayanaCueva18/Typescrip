import { useState } from "react";

export const useCountener = (inicial: number) => {
    const[valor, setValor]= useState(inicial);

    const contador=(num: number)=>{
        setValor(valor+num)

    }
    return{
        valor,
        contador,

}
  
}
