import React, { Component } from "react";
import style from "./Nav.module.css";
import search from "../../Assets/search.png";
import cross from "../../Assets/cross.png";
import menu from "../../Assets/menu.png";
import { Link, withRouter } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    console.log("props form nav", this.props.location.pathname);
    this.state = {
      showInputField: true,
      loggedIn: localStorage.getItem("USER"),
      collapsed: false
    };
  }

  toggleInput = () => {
    this.setState({ showInputField: !this.state.showInputField });
  };

  toggle = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    const textStyle = [style.text, style.textMargin].join(" ");
    console.log({ loginValue: this.state.loggedIn });

    return this.props.location.pathname !== "/register" &&
      this.props.location.pathname !== "/login" &&
      this.props.location.pathname !== "/forgot-password" ? (
      <Navbar expand="md" className={style.container}>
        <NavbarBrand href="/" className={style.brand}>
          Plant Database
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} style={{ color: "white" }}>
          <img src={menu} alt="" style={{ width: 25, height: 25 }} />
        </NavbarToggler>
        <Collapse
          navbar
          className={style.collapse}
          style={
            this.state.collapsed ? { display: "flex" } : { display: "none" }
          }
        >
          <Nav className="mr-auto" navbar>
            {this.state.loggedIn !== "true" ? (
              <NavItem>
                <Link to={"/register"} className={textStyle}>
                  Register
                </Link>
              </NavItem>
            ) : null}
            {this.state.loggedIn !== "true" ? (
              <NavItem>
                <Link
                  to={"/login"}
                  href={"#"}
                  className={textStyle}
                  style={{ marginRight: 40 }}
                >
                  Log in
                </Link>
              </NavItem>
            ) : null}
            {this.state.loggedIn === "true" ? (
              <NavItem>
                <Link to={"/profile"} href={"#"} className={textStyle}>
                  Profile
                </Link>
              </NavItem>
            ) : null}

            <NavItem className={style.searchBarContainer}>
              <input
                className={[style.input].join(" ")}
                style={{ pointerEvent: "none" }}
                placeholder={"Search"}
                onChange={this.props.onQuery}
              />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    ) : null;
  }
}

export default withRouter(Header);
