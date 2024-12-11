import React, { useState } from "react";
import { connect } from "react-redux";
import Helpers from "../../helpers";
import "./index.css";
import CatList from "../CatList/CatList";
import { setLogo } from "../../redux/slices/logoSlice";

function Article(props) {
  const { setLogo, logo } = props;

  const [cache, _setCache] = useState(new Helpers());
  const [id, setId] = useState(undefined);
  const [response, setResponse] = useState("");
  const [logoText, setLogoText] = useState("");

  const changeLogo = () => {
    console.log("LOGO NEW ", logoText);
    setLogo(logoText);
  };

  const fireCache = () => {
    id === ""
      ? setResponse(cache.getId(undefined))
      : setResponse(cache.getId(id));
  };

  return (
    <article>
      <input
        type="text"
        onChange={(text) => setLogoText(text.target.value)}
      />
      <button onClick={() => changeLogo()}>uygtfghjuio</button>
      <h1>коти</h1>
      <CatList />
      <h1>кеш</h1>
      <div>
        <div>
          <input
            type="text"
            placeholder="param"
            onChange={(e) => {
              console.log(e.target.value);
              setId(e.target.value);
            }}
          />
          <button onClick={() => fireCache()}>Fire</button>
        </div>

        <textarea
          name="helperOutput"
          id="helperOutput"
          value={response}
          readOnly
        ></textarea>
      </div>

      <h2>Налаштування сторінки</h2>
      <p>
        Після виконная команди npx create-react-app my-app, в теці my-app Ви
        побачите наступну структуру:
      </p>
      <ul>
        <li>Тека node_modules – тека куди встанавлюются пакети з npm</li>
        <li>
          Тека public – тека з загально доступними файлами, такими як
          index.html, favicon, robots.txt та інші.
        </li>
        <li>Тека src – тут лежить вихідний код проекту</li>
        <li>
          Файли package.json та package-lock.json – файли з описом залежностей,
          npm скриптів, та іншої службової інформації
        </li>
      </ul>
      <h2>Налаштування сторінки. Index.html</h2>
      <p>
        Файл index.html знаходится в теці public і містить в собі html вузол в
        який буде монтуватися наш додаток. За замовчування це div з id=root
      </p>
      <h2>Налаштування сторінки. Тека src</h2>
      <p>
        В цій теці зберігаєтся весь вихідний кол проекту. Зокрема файл index.js
        – який є вхідною точкою дотатку, тут вказуєтся точка мотування, та
        викликаєтся рендерінг головного компоненту. Крім того тут можуть
        підключатись стилі, або викликатись якісь службові скрипти.
      </p>
    </article>
  );
}

const mapStateToProps = (state) => ({
  logo: state.logo,
});

const mapDispatchToProps = {
  setLogo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
