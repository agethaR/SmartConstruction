import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './Analyses.css';

class Analyses extends Component {
	
    constructor(props){
	     super(props);
	     this.state = {} //state contents here
	     this.handleClick1 = this.handleClick1.bind(this);
	     this.handleClick2 = this.handleClick2.bind(this);
	     this.handleClick2 = this.handleClick2.bind(this);
  	}

  	state = {
    poll: 0
    };



     handleClick1(e) {
    document.getElementById("demo").innerHTML  = "Gaz";
    const { poll } = this.state;
    return this.setState({ poll: 1 });
  }

  handleClick2(e) {
    document.getElementById("demo").innerHTML  = "Particules";
    const { poll } = this.state;
    return this.setState({ poll: 2 });
  }

  handleClick3(e) {
    document.getElementById("demo").innerHTML  = "Son";
    const { poll } = this.state;
    return this.setState({ poll: 3 });
    
  }
 

    render() {
         
        const { poll } = this.state;
   
    	return (
      		<Row Class>
      			<Col xs="12" sm="12"> <h1 className="titreresults">Analyses de la pollution sur le chantier </h1> </Col> 
      		
                
	      		<Col xs="3" sm="3"><Button className="polluant" onClick={(e)=>this.handleClick1(e)}>Gaz polluants</Button></Col>
	      		<Col xs="3" sm="3"><Button className="polluant" onClick={(e)=>this.handleClick2(e)}>Particules fines</Button></Col>
	      		<Col xs="3" sm="4"><Button className="polluant" onClick={(e)=>this.handleClick3(e)}>Nuisances sonores</Button></Col>
	            <Col xs="3" sm="2"></Col>
	            <div id="demo"></div>
			</Row>
    	);
  	}
}

export default Analyses;
