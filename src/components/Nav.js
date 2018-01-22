import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <a section="1" href="/personal">Personal Info</a>
            </li>
            <li>
              <a href="/academic">Studies</a>
            </li>
            <li>
              <a href="/experience">Experience</a>
            </li>
            <li>
              <a href="/hobbies">Hobbies</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
