import React from "react";



const Toto = (props) =>{

const reponseToto = props.lestate.messageMaman !== null ? (<button onClick={props.reponseToto}>Reponse</button>) : (<button disabled>Reponse</button>);

  return(
    <div>
        <h2>Toto</h2>
       {reponseToto}
       <p>{props.lestate.messageToto}</p>
    </div>
  )
}

export default Toto
