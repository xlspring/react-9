import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Article from "./components/Article";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <SideBar name="SideBar" />
      <Header name="example website (Header)" />
      <Content title="Чистий React (Content)">
        <Article />
      </Content>
      <Footer name="Footer" />
    </div>
  );
}

export default App;
