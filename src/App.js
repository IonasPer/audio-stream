import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css';
import AlbumList from "./components/AlbumList";
import AlbumInfo from "./components/AlbumInfo";
import albums from "../albumData";
function App() {
  return (

      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path="/list" component={AlbumList}/>
              {albums.map((album) =>{
                  return (
                  <Route path={"/album_info/"+album.title} component={AlbumInfo({album})}/>
                  )
              })}


          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
