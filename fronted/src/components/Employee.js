import {React,Component} from 'react'
import axios from 'axios'
import Carditem from './Carditem';

class Employee extends Component{
  
  constructor(props){
    super(props);

    this.state={
      dataS:[]
    }

  }
  componentDidMount(){
    axios.get('http://127.0.0.1:8000/employee/employee_list')
    //.then(response=>response.json())
    .then(response=>{
      this.setState({
        dataS:response.data
      })
      console.log(response.data)
    })
  }

  render(){
    const show=this.state.dataS.map((emp)=>{
      return(
        // <div key={emp.id} className="col-12 col-md-5 m-1">
        //   <Carditem emp={emp}/>
        // </div>
        <Carditem emp={emp}/>
      );

    });
    return(
      <div>
        {show}
      </div>
    )
  }

}

export default Employee
