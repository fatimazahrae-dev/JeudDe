import React from "react";
import Dé from "./Dé.PNG";
import face1 from "./face1.png";
import face2 from "./face2.png";
import face3 from "./face3.png";
import face4 from "./face4.png";
import face5 from "./face5.png";
import face6 from "./face6.png";
const faces = {
  1: face1,
  2: face2,
  3: face3,
  4: face4,
  5: face5,
  6: face6,
};
export default class JeuDe extends React.Component{
    constructor(props){
        super(props);
            this.state={face:null,compteur:0,end:false};
        }
        jouer(){
            let valFace=Math.floor(Math.random()*6+1)
            this.setState({face:valFace,compteur:this.state.compteur+1,end:valFace===this.props.cache})
            // if (valFace==this.props.cache)
            //     this.setState.end({end:true})
        }
        inistaliser(){
            this.setState({face:null,compteur:0,end:false})
        }
        render(){
            return(
                <>
                <img src={this.state.face == null? Dé: faces[this.state.face]} style={{height:"200px"}} />
                <h5>Jouer:{this.state.face}</h5>
                <h6>Nombre d essaie:{this.state.compteur}</h6>
                {this.state.end==true?
                <> <p>Bravo Vous Avez Trouvez le Nombre Cache</p><button onClick={()=>this.inistaliser()}>Inisialiser</button></>:
                <button onClick={()=>this.jouer()}>Jouer</button>
                }
                
                </>
            )
        }
    }
