import "./index.css";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";
import DateTime from "../DateTime/DateTime";

import {useSelector, useDispatch} from "react-redux";

function Header(props) {
  const logo = useSelector(state => state.logo);
  const menuItems = useSelector(state => state.menu);

  return (
    <header>
      <div className={"container"}>
        <Logo image={logo} />
        <DateTime />
      </div>
      <Menu
        view={"horizontal"}
        list={menuItems}
      />
    </header>
  );
}

export default Header;
