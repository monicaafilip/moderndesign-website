import React, { useState } from "react";
// import {useHistory, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import {
//  Link
// } from 'react-router-dom';
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import "./mynavbar.css";
import logo from "../../assets/initial-logo.png";
import Search from "../search/search.component";
import data from "../../redux/directory/MOCK_DATA.json";

const MyNavbar = (props) => {
  // const history = useHistory();
  // const currentPath = history.location.pathname.toLowerCase();
  // var searchValue = useState("");

  // const changePage  = (event) => {
  // 	let path = `/moderndesignWebsite/produse`;
  // 	history.push(path);
  // 	searchValue = event.target.value;  // not good
  // 	console.log(searchValue);
  //   }
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand className="nav-link" href="/moderndesignWebsite">
          <img className="img fluid logoImg" src={logo} alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav.Link className="nav-link" href="/moderndesignWebsite/acasa">
            Acasă
          </Nav.Link>
          <Nav.Link className="nav-link" href="/moderndesignWebsite/desprenoi">
            Despre noi
          </Nav.Link>
          <Nav.Link className="nav-link" href="/moderndesignWebsite/produse">
            Produse
          </Nav.Link>

          <Search
            placeholder="Caută după categorie(ex:bucatarie)"
            data={data}
          />

          {/* <Form className="d-flex">
					<FormControl
					type="search"
					placeholder="Search"
					className="me-2"
					aria-label="Search"
					/>
					<Button variant="outline-success">Search</Button>
				</Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
