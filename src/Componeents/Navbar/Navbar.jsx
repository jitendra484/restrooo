
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { assets } from '../../assets/assets';
import Button from 'react-bootstrap/Button';
import './Navbar.css'



const NavBar = () => {
 
  return (
    
        <Navbar expand="lg fixed-top bg-white" >
      <Container>
      
        <Navbar.Brand href="#home">
            <img src= {assets.logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            
            <Nav.Link href="hero">Home</Nav.Link>
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            

          </Nav>
          <div className='d-flex justify-content-end gap-4'>
                <img src={assets.search_icon} alt="" />
                <div className='basketdot'>

                <img src={assets.basket_icon} alt="" />
                <div className="dot"></div>
                
                </div>
                <Button className=' border rounded-4' variant="primary ">Log In</Button>{' '}

            </div>

        </Navbar.Collapse>
      
      </Container>
    </Navbar>


    

    
  )
  

}

export default NavBar