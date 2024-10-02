import "../styles/components/Content/index.css";

function Content(props) {
  return (
    <main>
      <div className="content-wrapper">
        <h1>{props.title}</h1>
        {props.children}
      </div>
    </main>
  );
}

export default Content;
