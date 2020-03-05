import React, { Component } from "react";
import style from "./Register.module.css";
import { Col, Row } from "reactstrap";
import bigFlower from "../../../Assets/bg.jpg";

class Register extends Component {

  goToLogin = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className={style.container}>
        <Row style={{ height: "100%", width: "100%", margin: 0 }}>
          <Col
            md="8"
            className={["d-none", "d-lg-block", style.imageContainer].join(" ")}
            style={{ backgroundImage: `url(${bigFlower})` }}
          >
            <div className={style.image} />
          </Col>
          <Col md="4" className={style.formContainer}>
            <h3 className={style.registerHeading}>Register As New User</h3>

            <form action="" onSubmit={(e)=>e.preventDefault()} className={style.form}>
              <input
                className={style.input}
                type="text"
                placeholder={"Full Name"}
              />
              <input
                className={style.input}
                type="email"
                placeholder={"Email Address"}
              />
              <input
                className={style.input}
                type="password"
                placeholder={"Password"}
              />
              <input
                className={style.input}
                type="password"
                placeholder={"Confirm Password"}
              />
              <input
                className={style.btnStyle}
                style={{ marginTop: 17 }}
                type="submit"
                value={"REGISTER"}
                onClick={() => {
                  this.props.history.push('/');
                }}
              />
            </form>
            <p className={style.agreement}>
              By registering I agree to the{" "}
              <button href="#" className={style.tos} onClick={()=> alert("Terms of services.")}>
                Terms of Service
              </button>
              .
            </p>
            <h4 className={style.haveAnAccount}>Have an Account?</h4>
            <button
              className={[style.btnStyle, style.loginBtn].join(" ")}
              onClick={this.goToLogin}
            >
              LOGIN
            </button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Register;
