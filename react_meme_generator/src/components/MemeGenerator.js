import React,{Component} from "react"

class MemeGenerator extends Component {
    constructor(){
        super()
        this.state={
            topText:"Hello World",
            bottomText:"Printf",
            randomImage:"http://i.imgflip.com/1bij.jpg",
            allMemeImages:[]
        }
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

    render(){
        return(
            <div>
                <h3>{this.state.topText}</h3>
                <h3>{this.state.bottomText}</h3>
                {this.state.randomImage}
            </div>
        )
    }
}
export default MemeGenerator