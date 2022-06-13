import React, { useState } from "react";
// Styled Components
import styled from "styled-components";

export default function MapUI() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [showFilter, setShowFilter] = useState(false);

  const handleFilterUI = (location) => {
    setShowFilter(!showFilter);
  };

  return (
    <FormContainer>
      <FormStyled onSubmit={handleSubmit}>
        <div className="filterUI">
          <input
            className="mapSearchInput"
            type="text"
            placeholder="Wo darf's hingehen?"
          />
          <div className="filterContainer">
            <StyledBtn onClick={handleFilterUI}>Was</StyledBtn>
            <StyledBtn>Wann</StyledBtn>
            <StyledBtn>Wer</StyledBtn>
            <StyledBtn>Extras</StyledBtn>
          </div>
        </div>
        {showFilter ? (
          <FilterStyled style={{ opacity: 1, zIndex: 99 }}>
            <div className="flexContainer1">
              <h2>Was</h2>
              <button onClick={() => setShowFilter(false)}>Close</button>
            </div>
            <div className="flexContainer2">
              <div className="checkboxContainer">
                <label htmlFor="zimmer">Unterkunft/Zimmer</label>
                <input type="checkbox" name="zimmer" id="zimmer" />
              </div>
              <div className="checkboxContainer">
                <label htmlFor="stellplatz">Stellplatz</label>
                <input type="checkbox" name="stellplatz" id="stellplatz" />
              </div>
              <div className="checkboxContainer">
                <label htmlFor="schlafplatz">Schlafplatz</label>
                <input type="checkbox" name="schlafplatz" id="schlafplatz" />
              </div>
            </div>
          </FilterStyled>
        ) : null}
      </FormStyled>
    </FormContainer>
  );
}

const FormContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  height: 100%;
  width: 100%;
  .filterUI {
    width: 90%;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  .mapSearchInput {
    color: #4f4f4f;
    width: 90%;
    padding: 0.8rem 1.25rem;
    border: 1px solid #e9e9e9;
    border-radius: 10rem;
    :focus {
      outline: 1px solid #ff7144;
    }
    ::placeholder {
      color: #dadada;
    }
  }
  .filterContainer {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FilterStyled = styled.div`
  width: 100%;
  height: 30%;
  padding: 0 2rem;
  background-color: white;
  border: 1px solid #d3d3d3;
  border-radius: 2.5rem 2.5rem 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  .flexContainer1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .flexContainer2 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 1rem;
  }
  .checkboxContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const StyledBtn = styled.button`
  width: 5rem;
  height: 2.25rem;
  font-size: 0.75rem;
  color: #4f4f4f;
  border: 1px solid #e9e9e9;
  border-radius: 10rem;
  padding: 0.5rem 1.25rem;
  background-color: white;
  :focus {
    background-color: #dadada;
    color: white;
  }
`;
