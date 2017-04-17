/* eslint no-script-url: 0 */

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import { AppBar, Tabs, Tab, IconButton, NavigationClose, FlatButton } from 'material-ui';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { Nav, NavItem, Navbar } from 'react-bootstrap'
import { Link } from 'react-router'

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

import Scroll from 'react-scroll'

const styles = {
  title: {
    cursor: 'pointer',
  },
};

import scrollToElement from 'scroll-to-element'

class MainNavigation extends React.Component {
    getChildContext() {
      return { muiTheme: getMuiTheme(baseTheme) };
    }

    render() {
      return (
        <AppBar 
            title="Wasya co" 
            onTitleTouchTap={handleTouchTap}
            iconElementRight={<FlatButton label="About" />} >
          <div>
            Wasya co [About] [Knowledge Base] [Services] [Our Process] [Our Technology] [Clients] [Contact]
          </div>
        </AppBar>
      );
    }
}

MainNavigation.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

// can I have completely custom nav, no mui, no material-ui?
class Nav2 extends React.Component {

  handleSelect (selectedKey) {
    switch (selectedKey) {
      // case 'blog':
      //  window.location = 'http://blog.wasya.co';
      //  break;
      case 'wiki':
        window.location = 'http://wiki.wasya.co';
        break;
      default:
        scrollToElement('#'+selectedKey);
    }
  }

  render () {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Wasya co</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav bsStyle="pills" pullRight onSelect={this.handleSelect}>
            <li role="presentation"><Link to="/">Home</Link></li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Nav2