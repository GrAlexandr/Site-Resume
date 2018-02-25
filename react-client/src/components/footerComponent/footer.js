import React, { Component } from 'react';
import FaGoogle from 'react-icons/lib/fa/google-plus-square';
import FaFacebook from 'react-icons/lib/fa/facebook-square';
import FaGit from 'react-icons/lib/fa/github-square';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.google = 'https://plus.google.com/u/0/118181332799614363419';
    this.state.facebook = 'https://www.facebook.com/profile.php?id=100012792163522';
    this.state.github = 'https://github.com/GrAlexandr';
  }
  render() {
    return (
      <footer className="footer">
        <a href={this.state.google} target="_blank">
          <FaGoogle />
        </a>
        <a href={this.state.facebook} target="_blank">
          <FaFacebook />
        </a>
        <a href={this.state.github} target="_blank">
          <FaGit />
        </a>
      </footer>
    )
  }
}

export default Footer;