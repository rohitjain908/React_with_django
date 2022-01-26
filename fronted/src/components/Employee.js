import {React,Component} from 'react'
import axios from 'axios'
import {Table,Button,Card} from 'reactstrap';
import Updateemployee from './Updateemployee';
import {Link} from 'react-router-dom'

class Employee extends Component{
  
  constructor(props){
    super(props);

    this.state={
      dataS:[],
      render:false
    }
    this.togglerender=this.togglerender.bind(this)

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

  togglerender(event){
    event.preventDefault()
  }

  render(){
    const tablebody=this.state.dataS.map((emp)=>{
      return(
        //key is needed when we want to render more than one time of any component
        <tr key={emp.id}>
          <td>{emp.id}</td>
          <td>{emp.name}</td>
          <td>{emp.gender}</td>
          <td>{emp.salary}</td>
          <td>{emp.team}</td>
          <td>{emp.address}</td>
          <td>
            {/* passing parameters with url */}
            <Link to={`/update/${ emp.id }`}>Edit/</Link>
            <Link to={`/delete/${ emp.id }`}>Delete</Link>
          </td>
        </tr>
      )
    });
    return(
      <div>
        <Table>
          <thead>
            <tr>
              <th>Employee id</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Salary</th>
              <th>Team</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tablebody}
          </tbody>
        </Table>
        <Button><Link to="/add">Add employee</Link></Button>
      </div>
    )
  }

}

export default Employee
