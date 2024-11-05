import "../styles/components/Header/index.css";
import Menu from "./Menu";

function Header(props) {
  return (
    <header>
      <p className="logo">🦝 {props.name}</p>
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
