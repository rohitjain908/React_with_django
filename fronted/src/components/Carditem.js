import React from 'react';
import { Card, CardText, CardBody,CardTitle } from 'reactstrap';


function Carditem(props){
  return(
    <div style={{marginLeft:'530px'}}>
      <Card style={{width:'200px', borderColor: '#333' }}>
        <CardBody>
          <CardTitle tag="h5">{props.emp.name}</CardTitle>
          <CardText>salary:{props.emp.salary}</CardText>
          <CardText>address:{props.emp.address}</CardText>
          <CardText>team:{props.emp.team}</CardText>
          <CardText>gender:{props.emp.gender}</CardText>
        </CardBody>
      </Card>
      <br></br>
    </div>
  );
}

export default Carditem


