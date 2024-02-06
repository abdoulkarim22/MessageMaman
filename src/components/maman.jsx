import { Component } from "react";

class maman extends Component{

    state = {
        messageMaman: null,
        messageToto: null,
    }
    ordreMaman = () =>{

    }

render(){
    return(
        <div>
            <h1>Maman</h1>
                <button onClick={this.ordreMaman}>Ordre de la Maman</button>
            <hr />
        </div>
    )
}
}
export  default maman