import "../styles/components/Menu/index.css";

import MenuItem from "./MenuItem";

export default function Menu(props) {
  return (
    <ul className={props.view === "horizontal" ? "horizontal" : "vertical"}>
      {props.list.map((x, i) => (
        <MenuItem
          text={x.text}
          url={x.url}
          target={window.location.href === x.url ? "_self" : "_blank"}
          key={i}
        />
      ))}
    </ul>
  );
}
