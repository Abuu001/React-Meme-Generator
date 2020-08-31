import React,{Component} from "react"

class MemeGenerator extends Component {
    constructor(){
        super()
        this.state={
            topText:"",
            bottomText:"",
            randomImage:"http://i.imgflip.com/1bij.jpg",
            allMemeImages:[]
        }
        this.memeChange=this.memeChange.bind(this)
    }

    componentDidMount(){ 
       
        fetch("https://api.imgflip.com/get_memes")
        .then(data=> data.json())
        .then(response=> {
            const {memes} = response.data
            console.log(memes);
            this.setState({
                allMemeImages :  memes
            })
        })
    
    }
  memeChange=(event)=>{
    const{name , value}=event.target
        this.setState({
           [ name ]: value
        })
  }
    render(){
        return(
            <div>
               <form>
                   <input  type="text"  placeholder=" Top text " name="topText"  value={this.state.topText}  onChange={this.memeChange}/>
                   <input     type="text"   placeholder=" Bottom text "  name="bottomText" value={this.state.bottomText}  onChange={this.memeChange}/>
                   <button>Generate</button>
               </form>

               <h2> {this.state.topText}</h2>
               <h2> {this.state.bottomText}</h2>
            </div>
        )
    }
}
export default MemeGenerator