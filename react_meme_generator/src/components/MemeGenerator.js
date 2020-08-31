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
        this.btnChange=this.btnChange.bind(this)
    }

    componentDidMount(){ 
      
        fetch("https://api.imgflip.com/get_memes")
        .then(data=> data.json())
        .then(response=> {
            const {memes} = response.data
            
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
  btnChange=(event)=>{
     event.preventDefault()

     const randomNum = Math.floor(Math.random()* this.state.allMemeImages.length)
     const randomMemeImg = this.state.allMemeImages[randomNum].url
     console.log(randomMemeImg);
    
     this.setState({
         randomImage : randomMemeImg
     })
  }
    render(){
        return(
            <div>
               <form  onSubmit={this.btnChange}>
                   <input  type="text"  
                        placeholder=" Top text " 
                        name="topText"  
                        value={this.state.topText} 
                        onChange={this.memeChange}
                    />
                   <input   
                        type="text"   
                        placeholder=" Bottom text "
                        name="bottomText" 
                        value={this.state.bottomText}  
                        onChange={this.memeChange}
                    />
                   <button  >Generate</button>
               </form>

               <div  className="meme_photo_disp">
                  <img  src={this.state.randomImage} alt="meme photo" />
                  <h2 className="topText"> {this.state.topText}</h2>
                 <h2   className="bottomText"> {this.state.bottomText}</h2>
               </div>
            </div>
        )
    }
}
export default MemeGenerator