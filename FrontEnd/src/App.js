/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react';

class HoverExample extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
      <div>
        <div
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          Hover Me
        </div>
        {
          this.state.isHovering &&
          <div>
            Hovering right meow!<span> 🐱</span>
          </div>
        }
      </div>
    );
  }
}
export default  HoverExample ;