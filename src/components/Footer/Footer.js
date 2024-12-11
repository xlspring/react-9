import React from "react";
import { connect } from "react-redux";
import "./index.css";
import Menu from "../Menu/Menu";

function Footer(props) {
  const { menuItems, name } = props;

  return (
    <footer>
      <div className="footer-wrapper">
        <h3>{name}</h3>
        <Menu view={"horizontal"} list={menuItems} />
      </div>
    </footer>
  );
}

const mapStateToProps = (state) => ({
  menuItems: state.menu,
});

export default connect(mapStateToProps)(Footer);
