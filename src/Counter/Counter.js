import { useState } from "react";

const Counter = () => {

  const [state, setstate] = useState(0)

  const handleIncrement = () =>{
      if(state < 10){
        setstate(state + 1)
      }
    
  }

  const handleDecrement = () => {
      if(state > 0){
        setstate(state - 1)
      }
  }
    return(
        <div className="container">
            <div className="row my-5 w-50">
                <div className="col">
                    <div className="card shadow">
                        <div className="card-body">
                            <button onClick={ handleIncrement } className="btn btn-sm btn-success">++</button> &nbsp;
                            <button onClick={ handleDecrement } className="btn btn-sm btn-danger">--</button>
                            <hr/>  
                            <h1>{ state }</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Counter;