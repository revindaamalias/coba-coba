import { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Keranjang from "./Keranjang";
import Product from "./Product";
import Home from "./Home";
import About from "./About";

import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavItem>
                <NavLink href="/home">Home</NavLink>
                <Home />
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
                <About />
              </NavItem>
              <NavItem>
                <NavLink href="/product">Product</NavLink>
                <Product />
              </NavItem>
              <NavLink href="/keranjang">Keranjang</NavLink>
              <Keranjang />
            </NavItem>
          </Nav>
          <NavbarText>Washing Machine</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
