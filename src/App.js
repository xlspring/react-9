import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import Article from "./components/Article/Article";
import SideBar from "./components/SideBar/SideBar";
import {Provider} from "react-redux";
import {store} from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SideBar name="SideBar" />
        <Header name="example website (Header)" />
        <Content title="Чистий React (Content)">
          <Article />
        </Content>
        <Footer name="Footer" />
      </div>
    </Provider>
  );
}

export default App;
