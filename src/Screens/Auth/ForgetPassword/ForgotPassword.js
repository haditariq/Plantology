import React, {Component} from 'react';
import style from './ForgotPassword.module.css';
import {Col, Row} from 'reactstrap';
import bigFlower from '../../../Assets/BigFlower.jpg';

class ForgotPassword extends Component {
  render() {
    return (
      <div className={style.container}>
        <Row style={{height: '100%', width: '100%', margin: 0}}>
          <Col
            lg="8"
            className={['d-none', ' d-lg-block', style.imageContainer].join(
              ' '
            )}
            style={{backgroundImage: `url(${bigFlower})`}}
          >
            <div className={style.image}/>
          </Col>
          <Col lg="4" className={style.formContainer}>
            <h3 className={style.registerHeading}>Reset Password</h3>

            <form action="" className={style.form}>
              <input
                className={style.input}
                type="email"
                placeholder={'Email Address'}
              />

              <input
                className={style.btnStyle}
                style={{marginTop: 17}}
                type="submit"
                value={'SENT RESET PASSWORD LINK'}
                onClick={() => {
                  alert("Reset password link is sent you via email.");
                  this.props.history.push('./register');
                }}
              />
            </form>

          </Col>
        </Row>
      </div>
    );
  }
}

export default ForgotPassword;
