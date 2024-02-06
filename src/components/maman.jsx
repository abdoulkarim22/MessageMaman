import { Component } from "react";

class maman extends Component{

    state = {
        messageMaman: null,
        messageToto: null,
    }
    ordreMaman = () =>{
        this.setState({
            messageMaman:'va ranger ta chambre',
        })
    }

render(){
    return(
        <div>
            <h1>Maman</h1>
                <button onClick={this.ordreMaman}>Ordre de la Maman</button>
                <p>{this.state.messageMaman}</p>
            <hr />

            TOTO
            
        </div>
    )
}
}
export  default maman