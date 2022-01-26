import {React,Component} from 'react';
import axios from 'axios'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Updateemployee extends Component{
  constructor(props){
    super(props);
    this.handlesubmit=this.handlesubmit.bind(this)
    this.setvalue=this.setvalue.bind(this)
    this.onChangename=this.onChangename.bind(this)
    this.onChangesalary=this.onChangesalary.bind(this)
    this.onChangeaddress=this.onChangeaddress.bind(this)
    this.onChangeteam=this.onChangeteam.bind(this)
    this.nextPath=this.nextPath.bind(this)
    this.dosomething=this.dosomething.bind(this)

    this.state={
      dataS:[],
      name:"",
      salary:"",
      address:"",
      team:"",
      gender:""

    };

  }

  nextPath(path) {
    this.props.history.push(path);
  }

  dosomething(x){
    console.log(x);
    console.log(10);
    console.log(10);
    console.log(10);
    console.log(10);
    console.log(10);
    console.log(10);
    console.log(10);

  }

  

  handlesubmit(event){
    event.preventDefault()
    let id=this.props.match.params.id;
    console.log(id)
    let s=''+id;//convert number to string
    let url='http://127.0.0.1:8000/employee/employee_list/'+s;//add id a the last of url to make required url
    console.log(url)
    axios({
      method:'put',
      url:url,
      data:{
        name:this.state.name,
        salary:this.state.salary,
        address:this.state.address,
        team:this.state.team,
        gender:this.state.gender
      }
      
    }).then(()=>this.getdata())

    this.dosomething(10)
    this.dosomething(10)
    this.dosomething(10)
    this.dosomething(10)
    this.dosomething(10)
    this.nextPath('/list')

  }


  componentDidMount(){
    this.getdata()
  }

  getdata=()=>{
    axios.get('http://127.0.0.1:8000/employee/employee_list')
    //.then(response=>response.json())
    .then((response)=>{
      this.setState({
        dataS:response.data
      })
      //console.log(response.data)
    })
  }

  onChangename(event){
    this.setState({
      name:event.target.value
    })
  }
  onChangesalary(event){
    this.setState({
      salary:event.target.value
    })
  }
  onChangeaddress(event){
    this.setState({
      address:event.target.value
    })
  }
  onChangeteam(event){
    this.setState({
      team:event.target.value
    })
  }

  setvalue(event){
    event.preventDefault()
    let id=this.props.match.params.id;
    console.log(id)
    let employee=[];
    this.state.dataS.map((emp)=>{
      if(emp.id==id)
      {
        employee=emp;
      }
    });
    console.log(this.state.dataS)


    this.setState(
      {
        name:employee.name,
        salary:employee.salary,
        address:employee.address,
        team:employee.team,
        gender:employee.gender
      },
      ()=>{
        console.log(this.state.name)
      }
    )

  }



  render(){
    //console.log(employee)
    //we can't update state in render method 
    // this.setState({
    //   name:employee.id
    // })
    //console.log(employee.name)

    return(
      <>
        {/* acess the parameters which comes with url */}
        {/* <h1>{this.props.match.params.id}</h1>
        <h2>Hello</h2> */}

        <h1>Update Employee</h1>
        <Button onClick={this.setvalue}>Click here to see previous details</Button>
        <Form onSubmit={this.handlesubmit}>
          <Row>
            <Col>
              <Label for="name">Employee Name</Label>
              <Input className="form-control" type="text" name="name" id="name"
              value={this.state.name} onChange={this.onChangename} />
            </Col>
            <Col>
              <Label for="salary">Salary</Label>
              <Input type="number" name="salary" id="salary"
              value={this.state.salary} onChange={this.onChangesalary}/>
            </Col>
          </Row>
          <Row>
            <Label for="address">Address</Label>
            <Input type="text" name="address" id="address" 
            value={this.state.address} onChange={this.onChangeaddress}/>
          </Row>
          <Row>
            <Label for="team">Team</Label>
            <Input type="text" name="team" id="team"
            value={this.state.team} onChange={this.onChangeteam}/>
          </Row>
  
          <FormGroup tag="fieldset">
            <legend>Gender</legend>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="gender" value="Male"/>{' '}
                Male
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="gender" value="Female"/>{' '}
                Female
              </Label>
            </FormGroup>
            <FormGroup check disabled>
              <Label check>
                <Input type="radio" name="gender" value="Other"/>{' '}
                Don't want to specify
              </Label>
            </FormGroup>
          </FormGroup>
          <br/>
          <Button type="submit">Update</Button>
        </Form>
      </>
    );
  }
}

export default Updateemployee;