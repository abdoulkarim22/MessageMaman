import React from "react";



const Toto = (props) =>{

const reponseToto = props.lestate.messageMaman !== null ? (<button>Reponse</button>) : (<button disabled>Reponse</button>);

  return(
    <div>
        <h2>Toto</h2>
       {reponseToto}
    </div>
  )
}

export default Toto
