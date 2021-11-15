import React,{ useState } from "react"
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Modal} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import { LinkContainer } from "react-router-bootstrap"

function logoutLocal() {
return(
  localStorage.removeItem("loggedin"),
  window.location.reload()
)
}

function Header(){
  const isLoggedin = JSON.parse(localStorage.getItem('loggedin'));
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 

 
    return (
        <>
        <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="./">Geeksynergy</Navbar.Brand>
        <Nav className="ml-auto">          
          <Nav.Link onClick={handleShow}>Company Info</Nav.Link>
          {isLoggedin??<Nav.Link href="/register">Register</Nav.Link>}
          {isLoggedin??<Nav.Link href="/login">Login</Nav.Link>}
          <Nav.Link onClick={logoutLocal}>Log out</Nav.Link>
          
        </Nav>
        </Container>
      </Navbar>

<Modal show={show} onHide={handleClose}>

<Modal.Body>
    <ul>
    <li><b>Company:</b> Geeksynergy Technologies Pvt Ltd</li>
    <li><b>Address:</b> Sanjayanagar, Bengaluru-56</li>
    <li><b>Phone:</b> XXXXXXXXX09</li>
    <li><b>Email:</b> XXXXXX@gmail.com</li>
    </ul>
    </Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
 
</Modal.Footer>
</Modal>
        </>
      
    )
   
}

export default Header