import React, { Component } from 'react';

class MainLayout extends Component {
  render() {
    return (
      <>
        <div className="container mx-auto">
          {this.props.children}
        </div>
      </>
    );
  }
}

export default MainLayout;
