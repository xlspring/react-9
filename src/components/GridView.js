import "../styles/components/GridView/index.css";

function GridView(props) {
  return (
    <main>
      <div className="content-wrapper">{props.children}</div>
    </main>
  );
}

export default GridView;
