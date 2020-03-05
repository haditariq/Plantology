import React, {Component} from 'react';
import style from './Login.module.css';
import {Col, Row} from 'reactstrap';
import bigFlower from '../../../Assets/bg.jpg';

class Login extends Component {
  state = {
    rememberMe: false
  };
  changeOverRememberMe = () => {
    document.getElementById('rememberMe').click();
  };

  render() {
    return (
      <div className={style.container}>
        <Row style={{height: '100%', width: '100%', margin: 0}}>
          <Col
            md="8"
            className={['d-none', ' d-lg-block', style.imageContainer].join(
              ' '
            )}
            style={{backgroundImage: `url(${bigFlower})`}}
          >
            <div className={style.image}/>
          </Col>
          <Col md="4" className={style.formContainer}>
            <h3 className={style.registerHeading}>Login to Application</h3>

            <form action="" onSubmit={(e)=>e.preventDefault()} className={style.form}>
              <input
                className={style.input}
                type="email"
                placeholder={'Email Address'}
              />
              <input
                className={style.input}
                type="password"
                placeholder={'Password'}
              />
              <button
                className={style.forgotBtn}
                onClick={() => {
                  this.props.history.push('/forgot-password');
                }}
              >
                Forgot Password?
              </button>
              <br/>
              <button
                className={style.checkBoxContainer}
                style={{float: 'left'}}
                onClick={this.changeOverRememberMe}
              >
                <input
                  type="checkbox"
                  className={style.logincheckBox}
                  id={'rememberMe'}
                  onClick={() => this.setState({rememberMe: !this.state.rememberMe})}
                  checked={this.state.rememberMe}
                />
                Remember me
              </button>
              <input
                className={style.btnStyle}
                style={{marginTop: 17}}
                type="submit"
                value={'LOGIN'}
                onClick={() => {
                  this.props.history.push('/');
                }}
              />
            </form>

            <h4 className={style.haveAnAccount}>Prefer Email Registration?</h4>
            <button
              className={[style.btnStyle, style.loginBtn].join(' ')}
              onClick={() => {
                this.props.history.push('/register');
              }}
            >
              REGISTER WITH EMAIL
            </button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Login;
