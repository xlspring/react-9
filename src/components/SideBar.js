import "../styles/components/SideBar/index.css";

import Social from "./Social";

import Telegram from "../assets/telegram.svg";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram.svg";

function SideBar(props) {
  return (
    <aside>
      <h3>{props.name}</h3>
      <Social icon={Telegram} link={"https://telegram.org"} />
      <Social icon={Twitter} link={"https://twitter.com"} />
      <Social icon={Instagram} link={"https://instagram.com"} />
    </aside>
  );
}

export default SideBar;
