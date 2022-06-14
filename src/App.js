// Components
import Nav from "./components/Nav";
import AppLogin from "./components/AppLogin";
import Home from "./components/Home";
// Styling
import GlobalStyle from "./components/GlobalStyle";
// React Router
import { Routes, Route, useLocation } from "react-router-dom";
import StartScreen from "./components/StartScreen";
import Place from "./components/Place";

function App() {
  const location = useLocation();
  const hideNavComponents = ["/", "/applogin"];

  const places = [
    {
      id: "1",
      title: "Weingut Haas",
      description:
        "Supporting or descriptive text for card goes here. Nam libero tempore",
    },
    {
      id: "2",
      title: "Straßenwirtschaft Blume",
      description:
        "Supporting or descriptive text for card goes here. Nam libero tempore",
    },
    {
      id: "3",
      title: "Naturcamping Mosel",
      description:
        "Supporting or descriptive text for card goes here. Nam libero tempore",
    },
  ];

  return (
    <div>
      <GlobalStyle />
      {hideNavComponents.includes(location.pathname) ? null : <Nav />}
      <Routes location={location} key={location.pathname}>
        <Route path="/" exact element={<StartScreen />} />
        <Route path="/applogin" exact element={<AppLogin />} />
        <Route path="/home" exact element={<Home places={places} />} />
        <Route path="/places/:placeId" element={<Place places={places} />} />
      </Routes>
    </div>
  );
}

export default App;
