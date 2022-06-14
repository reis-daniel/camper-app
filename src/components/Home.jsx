import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Components
import MapUI from "./MapUI";
// Images & Styling
import MapImage from "../assets/img/OutlineMap.svg";
import styled from "styled-components";

export default function Home({ places }) {
  const navigate = useNavigate();
  const [showInfo, setShowInfo] = useState(false);
  const [activePlace, setActivePlace] = useState();
  const [locationInfo, setLocationInfo] = useState({
    id: "",
    type: "",
    description: "",
  });

  const handleLocationInfo = (location) => {
    setLocationInfo({
      type: places[location - 1].type,
      title: places[location - 1].title,
      description: places[location - 1].description,
    });
    setActivePlace(location);
    setShowInfo(!showInfo);
  };

  const handleNavToPlaceDetail = () => {
    console.log("Lets visite the Place Detailpage, shall we?");
    navigate(`/places/${activePlace}`);
  };

  return (
    <div>
      <MapUI />
      <MainContainer
        style={{
          backgroundImage: `url(${MapImage})`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
        }}
      >
        <div>
          <LocationUser
            src={require("../assets/img/YourLocation.svg").default}
            alt="mySvgImage"
          />
          <div>
            <LocationCamping
              src={require("../assets/img/MarkerCamping.svg").default}
              alt="mySvgImage"
              id="lc03"
              onClick={() => handleLocationInfo(3)}
            />
          </div>
          <div>
            <LocationVan
              src={require("../assets/img/MarkerVan.svg").default}
              alt="mySvgImage"
              id="lc02"
              onClick={() => handleLocationInfo(2)}
            />
          </div>
          <div>
            <LocationHouse
              src={require("../assets/img/MarkerHouse.svg").default}
              alt="mySvgImage"
              id="lc01"
              onClick={() => handleLocationInfo(1)}
            />
          </div>
        </div>
        {showInfo ? (
          <LocationModal
            onClick={() => {
              setShowInfo(!showInfo);
              handleNavToPlaceDetail();
            }}
          >
            <h2>{locationInfo.type}</h2>
            <h1>{locationInfo.title}</h1>
            <p>{locationInfo.description}</p>
          </LocationModal>
        ) : null}
      </MainContainer>
    </div>
  );
}

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
`;

const LocationUser = styled.img`
  z-index: 21;
`;
const LocationCamping = styled.img`
  position: absolute;
  bottom: 26%;
  left: 6rem;
  z-index: 21;
  cursor: pointer;
`;
const LocationVan = styled.img`
  position: absolute;
  top: 25%;
  left: 2rem;
  z-index: 21;
  cursor: pointer;
`;

const LocationHouse = styled.img`
  position: absolute;
  top: 38%;
  right: 30%;
  z-index: 21;
  cursor: pointer;
`;

const LocationModal = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 12%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 21;
  background-color: white;
  height: 20%;
  width: 80%;
  border: 1px solid #ff9635;
  border-radius: 0.75rem;
  text-align: center;
  padding: 1.5rem 1rem;
  h1 {
    font-size: 1.5rem;
  }
  h2 {
    color: #ff7144;
    font-size: 0.6rem;
  }
  p {
    font-size: 0.8rem;
  }
  :focus {
    background-color: #f4f4f4;
  }
`;
