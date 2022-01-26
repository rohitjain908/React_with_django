import {React,Component} from 'react';
import {Button} from 'reactstrap'

class Temparory extends Component{
  constructor(props){
    super(props);

    this.state={
      name:"Rohit"
    }
    this.handleClick=this.handleClick.bind(this)
  }

  handleClick(){
    console.log("Previous name"+" "+this.state.name);
    this.setState({
      name:"Mohit"
    },()=>{
      console.log("Current name"+" "+this.state.name);
    })
    console.log("Current name"+" "+this.state.name);

  }


  render(){
    return(
      <>
        <div>{this.state.name}</div>
        <Button onClick={this.handleClick}>Change</Button>
      </>
    )
  }
}

export default Temparory