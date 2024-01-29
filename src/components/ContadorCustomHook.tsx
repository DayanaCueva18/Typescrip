
import { useCountener } from "../hook/useCountener"

export const ContadorCustomHook = () => {

    const{valor,contador}=useCountener(0);
  return (
    <div style={{ textAlign: 'center' }}>
        <h3>Acumulador: <small>{valor}</small></h3>
        <button className="btn btn-primary" 
        onClick={()=>contador(5)}>Incrementar +5</button>
        
        &nbsp;
        &nbsp;

        <button className="btn btn-success" onClick={()=>contador(-5)}>Disminuir -5</button>
        </div>
  )
}

