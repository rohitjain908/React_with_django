import {React,Component} from 'react';
import axios from 'axios'
import {Button} from 'reactstrap';
import Employee from './Employee';
import {Link} from 'react-router-dom'

class Deleteemployee extends Component{
  constructor(props){
    super(props);

    this.state={
      dataS:[],
      delete:true,
      name:"Rohit"
    };
    this.handleclick=this.handleclick.bind(this)
  }


  componentDidMount(){
    
    //console.log(this.state.delete)
    axios.get('http://127.0.0.1:8000/employee/employee_list')
    //.then(response=>response.json())
    .then((response)=>{
      this.setState({
        dataS:response.data
      })
      //console.log(response.data)
    })    
  }

  handleclick(){
    let id=this.props.match.params.id;
    let s=''+id;//convert number to string
    let url='http://127.0.0.1:8000/employee/employee_list/'+s;//add id a the last of url to make required url
    axios({
      method:'delete',
      url:url
    })

    console.log("Previous value"+" "+this.state.delete);
    this.setState({
      delete:!this.state.delete
    },()=>{
      console.log("Current value1"+" "+this.state.delete);
    })
    console.log("Current value2"+" "+this.state.delete);
    
  }

  render(){

    const f=this.state.delete
    if(f){
      return(
        <div>
          <h4>Are you sure?,Please click on Delete Button for permnalty delete this record from database</h4>
          <Button onClick={this.handleclick}>Delete</Button>     
        </div>
      )
    }
    else{
      return(
        <div>
          <div>Delete succesfully</div>
          <Link to="/">Home</Link>
        </div>
      )
    }
  }





  // render(){
  //   return(
  //     <div>
  //       <h4>Are you sure?,Please click on Delete Button for permnalty delete this record from database</h4>
  //       <Button onClick={this.handleclick}><Link to="/">Delete</Link></Button>
  //     </div>
  //   );
  // }
}

export default Deleteemployee;