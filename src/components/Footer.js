import "../styles/components/Footer/index.css";

function Footer(props) {
  return (
    <footer>
      <div className="column col1">
        <h3>{props.name}</h3>
      </div>
    </footer>
  );
}

export default Footer;
