import React from "react";
import { connect } from "react-redux";
import "./index.css";
import Social from "../Social/Social";
import Menu from "../Menu/Menu";

import Telegram from "../../assets/telegram.svg";
import Twitter from "../../assets/twitter.svg";
import Instagram from "../../assets/instagram.svg";

function SideBar(props) {
  const { menuItems, name } = props;

  return (
    <aside>
      <h3>{name}</h3>
      <Menu view={"vertical"} list={menuItems} />
      <Social icon={Telegram} link={"https://telegram.org"} />
      <Social icon={Twitter} link={"https://twitter.com"} />
      <Social icon={Instagram} link={"https://instagram.com"} />
    </aside>
  );
}

const mapStateToProps = (state) => ({
  menuItems: state.menu,
});

export default connect(mapStateToProps)(SideBar);