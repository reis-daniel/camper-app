import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Components
import MapUI from "./MapUI";
// Images & Styling
import MapImage from "../assets/img/OutlineMap.svg";
import styled from "styled-components";

export default function Home() {
  const [showInfo, setShowInfo] = useState(false);
  const [locationInfo, setLocationInfo] = useState({
    id: "",
    type: "",
    description: "",
  });

  const LocationData = [
    {
      id: "lc01",
      type: "Stellplatz/Übernachtung",
      title: "Weingut Haas",
      description:
        "Supporting or descriptive text for card goes here. Nam libero tempore",
    },
    {
      id: "lc02",
      type: "Stellplatz",
      title: "Straßenwirtschaft Blume",
      description:
        "Supporting or descriptive text for card goes here. Nam libero tempore",
    },
    {
      id: "lc03",
      type: "Schlafplatz",
      title: "Naturcamping Mosel",
      description:
        "Supporting or descriptive text for card goes here. Nam libero tempore",
    },
  ];

  const handleLocationInfo = (location) => {
    setLocationInfo({
      type: LocationData[location - 1].type,
      title: LocationData[location - 1].title,
      description: LocationData[location - 1].description,
    });
    setShowInfo(!showInfo);
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
  justify-content: center;
  z-index: 21;
  background-color: white;
  height: 20%;
  width: 80%;
  border: 1px solid #ff9635;
  border-radius: 0.75rem;
  h1 {
    font-size: 1rem;
  }
  h2 {
    color: #ff7144;
    font-size: 0.4rem;
  }
  p {
    font-size: 0.6rem;
  }
  :focus {
    background-color: #f4f4f4;
  }
`;
