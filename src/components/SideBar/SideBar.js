  import "./index.css";

import Social from "../Social/Social";
import Menu from "../Menu/Menu";

import Telegram from "../../assets/telegram.svg";
import Twitter from "../../assets/twitter.svg";
import Instagram from "../../assets/instagram.svg";

function SideBar(props) {
  return (
    <aside>
      <h3>{props.name}</h3>
      <Menu
        view={"vertical"}
        list={[
          { text: "Google", url: "http://google.com" },
          { text: "Facebook", url: "http://facebook.com" },
          { text: "Netflix", url: "http://netflix.com" },
          { text: "Apple", url: "http://apple.com" },
          { text: "lcoalhost", url: "http://localhost:3000/" },
          { text: "Microsoft" },
        ]}

      />
      <Social icon={Telegram} link={"https://telegram.org"} />
      <Social icon={Twitter} link={"https://twitter.com"} />
      <Social icon={Instagram} link={"https://instagram.com"} />
    </aside>
  );
}

export default SideBar;
