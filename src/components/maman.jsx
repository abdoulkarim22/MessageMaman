import { Component } from "react";
import Toto from "../components/toto";

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

    reponseToto = () =>{
        this.setState({
            messageToto: "D'accord maman",
        })
    }

render(){
    return(
        <div>
            <h1>Maman</h1>
                <button onClick={this.ordreMaman}>Ordre de la Maman</button>
                <p>{this.state.messageMaman}</p>
            <hr />

            <Toto lestate={this.state}/>
  

        </div>
    )
}
}
export  default maman