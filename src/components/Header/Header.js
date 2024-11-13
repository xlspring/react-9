import "./index.css";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";
import DateTime from "../DateTime/DateTime";

function Header(props) {
  return (
    <header>
      <div className={"container"}>
        <Logo />
        <DateTime />
      </div>
      <Menu
        view={"horizontal"}
        list={[
          { text: "Google", url: "http://google.com" },
          { text: "Facebook", url: "http://facebook.com" },
          { text: "Netflix", url: "http://netflix.com" },
          { text: "Apple", url: "http://apple.com" },
          { text: "lcoalhost", url: "http://localhost:3000/" },
          { text: "Microsoft" },
        ]}

      />
    </header>
  );
}

export default Header;
