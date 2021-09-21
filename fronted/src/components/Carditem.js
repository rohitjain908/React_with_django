import React from 'react';
import { Card, CardText, CardBody,CardTitle } from 'reactstrap';


function Carditem(props){
  return(
    <div style={{marginLeft:'530px'}}>
      <Card  style={{width:'200px', borderColor: '#333' }}>
        <CardBody>
          <CardTitle tag="h5">{props.emp.name}</CardTitle>
          <CardText>salary:{props.emp.salary}</CardText>
          <CardText>{props.emp.email}</CardText>
        </CardBody>
      </Card>
      <br></br>
    </div>
  );
}

export default Carditem


