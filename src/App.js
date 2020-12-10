import logo from "./logo.svg";
import "./App.css";
import { withTranslation } from "react-i18next";

const App = (props) => {
  const { t } = props;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{t("Hi")}</p>
        <p>{t("Welcome")}</p>
      </header>
    </div>
  );
};

export default withTranslation()(App);
