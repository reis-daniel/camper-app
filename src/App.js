// Components
import Nav from "./components/Nav";
import AppLogin from "./components/AppLogin";
import Home from "./components/Home";
// Styling
import GlobalStyle from "./components/GlobalStyle";
// React Router
import { Routes, Route, useLocation } from "react-router-dom";
import StartScreen from "./components/StartScreen";

function App() {
  const location = useLocation();
  const hideNavComponents = ["/", "/applogin"];

  return (
    <div>
      <GlobalStyle />
      {hideNavComponents.includes(location.pathname) ? null : <Nav />}
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<StartScreen />} />
        <Route path="/applogin" exact element={<AppLogin />} />
        <Route path="/home" exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
