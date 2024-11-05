import "./index.css";
import Menu from "../Menu/Menu";

function Footer(props) {
  return (
    <footer>
      <div className="footer-wrapper">
        <h3>{props.name}</h3>
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
      </div>
    </footer>
  );
}

export default Footer;
