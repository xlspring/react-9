import "./index.css";

function Social(props) {
  return (
    <a className={"social"} href={props.link}>
      <img src={props.icon} alt="" />
    </a>
  );
}

export default Social;
