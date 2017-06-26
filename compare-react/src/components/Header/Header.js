import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
    this.handleNavToggle = this.handleNavToggle.bind(this);
  }

  handleNavToggle(){
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {

    let menuActive = this.state.isToggleOn ? 'is-active':'';

    return (
      <div className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <a href="" className="nav-item">POOMUGAM</a>
          </div>
    
          <span className={'nav-toggle '+ menuActive} onClick={this.handleNavToggle}>
            <span></span>
            <span></span>
            <span></span>
          </span>
    
          <div className={'nav-right nav-menu ' + menuActive}>
    
            <Link to="/" className="nav-item r-item">Home</Link>
            <Link to="/products" className="nav-item r-item">Products</Link>
            <Link to="/" className="nav-item r-item">About</Link>
            <Link to="/" className="nav-item r-item">Contact</Link>

            <div className="nav-item">
              <p className="control">
                <a className="button is-primary is-outlined">
                  <span className="icon">
                    <i className="fa fa-rss"></i>
                  </span>
                  <span>Blog</span>
                </a>
              </p>
            </div>
    
          </div>
    
        </div>
      </div>
    );
  }
}

export default Header;
