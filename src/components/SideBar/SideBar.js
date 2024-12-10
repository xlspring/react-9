import "./index.css";

import Social from "../Social/Social";
import Menu from "../Menu/Menu";

import Telegram from "../../assets/telegram.svg";
import Twitter from "../../assets/twitter.svg";
import Instagram from "../../assets/instagram.svg";

import {useSelector} from "react-redux";

function SideBar(props) {
  const menuItems = useSelector(state => state.menu);

  return (
    <aside>
      <h3>{props.name}</h3>
      <Menu
        view={"vertical"}
        list={menuItems}
      />
      <Social icon={Telegram} link={"https://telegram.org"} />
      <Social icon={Twitter} link={"https://twitter.com"} />
      <Social icon={Instagram} link={"https://instagram.com"} />
    </aside>
  );
}

export default SideBar;
