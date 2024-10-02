import "../styles/components/Social/index.css";

function Social(props) {
  return (
    <a href={props.link}>
      <img src={props.icon} alt="" />
    </a>
  );
}

export default Social;
