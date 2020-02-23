import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavCategories from './NavCategories';
import NavCartContainer from '../../container/NavCartContainer';
import LoginContainer from '../../container/LoginContainer';
import Register from './Register';
import logo from '../../picture/logo/logo.png';
import { Button } from 'reactstrap';

const axios = require('axios');

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      dropdownOpen: false,
      modal: false,
      loginmodal: false,
      registermodal: false,
      cart: [],
    }
  }

  componentDidMount() {
    if (localStorage.getItem('Token')) {
      axios.get('http://localhost:5002/checklogin', { withCredentials: true })
        .then((res) => {
          if (res.data.message === 'token success') {
            this.props.isLoginReducer()
          }
        }).catch((error) => {
          console.log(error)
        })
    }
  }

  loginToggle = () => {
    this.setState({
      loginmodal: !this.state.loginmodal,
    });
  }

  closeRegister = () => {
    this.setState({
      registermodal: !this.state.registermodal,
    });
  }

  registerToggle = () => {
    this.setState({
      registermodal: !this.state.registermodal,
    });
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  }

  toggleNavitem = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onMouseEnterNavitem = () => {
    this.setState({
      dropdownOpen: true,
    })
  }

  onMouseLeaveNavitem = () => {
    this.setState({
      dropdownOpen: false,
    });
  }

  dropCategory = (e) => {
    let checkclass = e.target.className.split(' ')
    checkclass.forEach(element => {
      if ( element === 'categoryDrop') {
        this.toggleNavitem()
      }
    });
  }

  handleLogout = () => {
    this.props.unsetTokenReducer()
    localStorage.removeItem('Token')
    axios.get('http://localhost:5002/handlelogout', { withCredentials: true })
      .then((res) => {
        this.props.isLogoutReducer()
      }).catch((error) => {
        console.log(error)
      })
  }

  render() {
    let { dropdownOpen, modal, loginmodal, registermodal } = this.state;
    let { isDropNav, toggleMeun, closeDropNav } = this.props;

    let isLogin = this.props.ckeckReducer.isLogin
    return (
      <div className="fixed-top bk-white">
        <div className="nav">
          <Link className="nav-logo" to="/">
            <div className="nav-logo-block">
              <img className="logo-image" src={logo} alt="" />
            </div>
            <div className="logo-des">Boom Studio</div>
          </Link>

          <ul className={`nav-link ${isDropNav ? 'nav-link-active' : ''}`} >
            <div className="nav-button margin-bottom-10">
            </div>
            <li className="nav-link-item categoryDrop" 
                onMouseEnter={this.onMouseEnterNavitem} 
                onMouseLeave={this.onMouseLeaveNavitem}
                onClick={(e)=>this.dropCategory(e)}
                >
                {/* onClick={this.toggleNavitem} onClick={closeDropNav} */}
              <Link to="/Categories">商品分類</Link>
              {' '}
              {/* <span className="display-none mobile-inline-block" onClick={this.toggleNavitem}>↓</span> */}
              {dropdownOpen ? <NavCategories closeDropNav={closeDropNav} /> : ''}
            </li>
            <li className="nav-link-item" onClick={closeDropNav}>
              <Link to="/allFestival">
                節慶精選
              </Link>
            </li>
            <li className="nav-link-item" onClick={closeDropNav}>
              <Link to="/about">
                氣球老師
              </Link>
            </li>
            <li className="nav-link-item" onClick={closeDropNav}>
              <Link to="/customized">
                客製化氣球
              </Link>
            </li>
          </ul>
          <Button className={`mobile-sm-btn mobile-cart ${isDropNav ? 'mobile-cart-active' : ''}`} color="primary" onClick={this.toggle}>
            購物車({this.props.cartReducer.cart.length})
          </Button>
          <div className={`login-logout mobile-login-logout ${isDropNav ? 'mobile-login-logout-active' : ''}`}>
          { isLogin ? ('') : (
              <div className="margin-right-10">
                <Button color="primary mobile-sm-btn" onClick={this.loginToggle}>登入</Button>
                <LoginContainer loginToggle={this.loginToggle} loginmodal={loginmodal} />
              </div>)
          }
          { isLogin ? ( <Button className="mobile-sm-btn" color="danger" onClick={() => this.handleLogout()}>登出</Button>
            ) : ( <div>
                    <Button color="primary mobile-sm-btn" onClick={this.registerToggle}>註冊</Button>
                    <Register history={this.props.history}
                      registerToggle={this.registerToggle}
                      registermodal={registermodal}
                      closeRegister={this.closeRegister}
                    />
                  </div>)
          }
          </div>
          <NavCartContainer toggle={this.toggle} modal={modal} />
          <div className="humberger" onClick={toggleMeun}>
            <div className="nav-line"></div>
            <div className="nav-line"></div>
            <div className="nav-line"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
