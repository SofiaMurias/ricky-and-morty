import React, { useState, useEffect } from "react";
import getApiData from "../services/api";
import logo from "../images/logo.png";
import CharacterList from "./CharacterList";
import ls from "../services/local-storage";
import Filter from "./Filter";
import CharacterDetails from "./CharacterDetails";
import PageNotFound from "./PageNotFound";
import CharacterNotFound from "./CharacterNotFound";
import { Route, Switch } from "react-router-dom";
import "../stylesheet/App.scss";

const App = () => {
  const characterLocalStorageData = ls.get("character", []);
  const [character, setCharacter] = useState(characterLocalStorageData);
  const [filterName, setFilterName] = useState(ls.get("FilterName", ""));

  useEffect(() => {
    if (character.length === 0) {
      getApiData().then((characterData) => {
        setCharacter(characterData);
      });
    }
  }, []);

  useEffect(() => {
    ls.set("character", character);
  }, [character]);

  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    }
  };

  const renderCharacterDetails = (props) => {
    //buscar el personaje
    const id = props.match.params.id;
    const foundCharacter = character.find((item) => item.id === parseInt(id));

    if (foundCharacter === undefined) {
      return <PageNotFound></PageNotFound>;
    } else {
      return <CharacterDetails character={foundCharacter} />;
    }
  };

  /* Seccion de filtrado */

  const filteredCharacters = character.filter((eachCharacter) =>
    eachCharacter.name.toLowerCase().includes(filterName)
  );

  return (
    <>
      <div className="container">
        <h1>
          <img className="title" src={logo} alt="Ricky and Morty" />
        </h1>
        <Switch>
          <Route exact path="/">
            <Filter handleFilter={handleFilter} name={filterName} />
            {filteredCharacters.length > 0 ? (
              <CharacterList character={filteredCharacters} />
            ) : (
              <CharacterNotFound />
            )}
          </Route>

          <Route
            exact
            path="/character/:id"
            component={renderCharacterDetails}
          ></Route>

          <Route component={PageNotFound} />
        </Switch>
        {/* <CharacterDetails /> */}
      </div>
    </>
  );
};

export default App;
