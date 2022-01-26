import {React,Component} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'


class Addemployee extends Component {
  constructor(props){
    super(props);
    this.handlesubmit=this.handlesubmit.bind(this); 
    this.nextPath=this.nextPath.bind(this);   
  }

  nextPath(path) {
    this.props.history.push(path);
  }

  dosomething=(x)=>{
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

    //another way of reading values from form
    // console.log(event.target[0].value);
    // console.log(event.target[1].value);
    // console.log(event.target[2].value);
    // console.log(event.target[3].value);


    //post data in django api
    axios({
      method:'post',
      url:'http://127.0.0.1:8000/employee/employee_list',
      data:{
        name:event.target.name.value,
        salary:event.target.salary.value,
        address:event.target.address.value,
        team:event.target.team.value,
        gender:event.target.gender.value
      }
    }).then(()=>this.getdata())

    this.dosomething(10)

    this.nextPath('/')
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





  render(){
    return (
      <>
        <h1>Add Employee</h1>
        <Form onSubmit={this.handlesubmit}>
          <Row>
            <Col>
              <Label for="name">Employee Name</Label>
              <Input type="text" name="name" id="name"/>
            </Col>
            <Col>
              <Label for="salary">Salary</Label>
              <Input type="number" name="salary" id="salary"/>
            </Col>
          </Row>
          <Row>
            <Label for="address">Address</Label>
            <Input type="text" name="address" id="address"/>
          </Row>
          <Row>
            <Label for="team">Team</Label>
            <Input type="text" name="team" id="team"/>
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
          <Button type="submit">Submit</Button>
        </Form>
      </>
    );

  }

  
}

export default Addemployee;