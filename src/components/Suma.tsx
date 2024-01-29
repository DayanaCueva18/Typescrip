import { useState } from "react";

export const Suma =()=>{
    
    const [lado, setLado] = useState(0);
    const [area, setArea] = useState(0);
  
    const calcular = (lado: number): number => {
       return lado * lado;
    };
   
    const Calculo = (event: React.ChangeEvent<HTMLInputElement>) => {
       const valor = Number(event.target.value);
       setLado(valor);
       setArea(calcular(valor));
    };
   
    return (  <div>
      <input type="number" value={lado} onChange={Calculo} />
      <p>El Área del cuadrado que ingreso es: {area}</p>
    </div>)
    
}