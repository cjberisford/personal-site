import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div onClick={this.props.home} id="logo-1">
          <img
            src="https://fontmeme.com/permalink/190715/dc0012be7dc38e92f1dfd47c22d755bb.png"
            alt="Site logo"
            height="108px"
            width="537px"
          />
        </div>
        <div onClick={this.props.home} id="logo-2">
          <img
            src="https://fontmeme.com/permalink/190718/85ba4ba568480379194c59fbb4310287.png"
            alt="Site logo"
            height="143px"
            width="134px"
          />
        </div>
      </div>
    );
  }
}

export default Header;
