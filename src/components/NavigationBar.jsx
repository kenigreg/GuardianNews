import React from 'react';
import { Link } from '@reach/router';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import NClogo from '../assets/NClogo.jpg';

const NavigationBar = props => {
  return (
    <div>
      <Navbar collapseOnSelect bg="light" expand="lg">
        <Link to="/">
          <Navbar.Brand>
            <img
              alt="NCLogo"
              src={NClogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {" Greg's Guardian News"}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">
              <li className="nav-link">News</li>
            </Link>
            <Link to="/politics">
              <li className="nav-link">Politics</li>
            </Link>
            <Link to="/sports">
              <li className="nav-link">Sports</li>
            </Link>
            <Link to="/culture">
              <li className="nav-link">Culture</li>
            </Link>
            <Link to="/business">
              <li className="nav-link">Business</li>
            </Link>
            <Link to="/technology">
              <li className="nav-link">Technology</li>
            </Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
              className="mr-sm-2"
            />
            <Button
              variant="outline-success"
              onClick={e => {
                e.preventDefault();
              }}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;

// onChange={this.handleSearch}
// onChange={this.handleSearchTerm}
