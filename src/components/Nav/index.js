import React, {Component} from 'react';
import Header from '../Header';

function Nav() {
    return (
        <Header/>
    )
}


// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     Container,
//     Row,
//     Col,
//     Jumbotron,
//     Button
// } from 'reactstrap';

// class Navi extends Component {
//     constructor(props) {
//         super(props); 

//         this.toggle = this.toggle.bind(this);
//         this.state = {
//             isOpen: false
//         };
//     }
//     toggle() {
//         this.setState({
//             isOpen: !this.state.isOpen
//         });
//     }
//     render() {
//         return (
//             <div>
//                 {/* <h1>
//                     Example heading <Badge variant="secondary">New</Badge>
//                 </h1> */}
//                 {/* <Navbar expand="lg" variant="light" bg="light">
                    
//                     <Navbar.Brand href="#">Navbar</Navbar.Brand>
                    
//                 </Navbar> */}
//                 <Navbar color="inverse" light expand="md">
//                     <NavbarBrand href="/">eli</NavbarBrand>
//                     <NavbarToggler onClick={this.toggle} />
//                     <Collapse isOpen={this.state.isOpen} navbar>
//                         <Nav className="ml-auto" navbar>
//                             <NavItem>
//                                 <NavLink href="/components/">Components</NavLink>
//                             </NavItem>
//                             <NavItem>
//                                 <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
//                             </NavItem>
//                         </Nav>
//                     </Collapse>
//                 </Navbar>
//                 <Jumbotron>
//                     <Container>
//                         <Row>
//                             <Col>
//                                 <h1>Welcome to React</h1>
//                                 <p>
//                                     <Button
//                                         tag="a"
//                                         color="success"
//                                         size="large"
//                                         href="http://reactstrap.github.io"
//                                         target="_blank"
//                                     >
//                                         View Reactstrap Docs
//                                         </Button>
//                                 </p>
//                             </Col>
//                         </Row>
//                     </Container>
//                 </Jumbotron>
//             </div>
//         )
//     }
// }

export default Nav