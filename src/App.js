import React from 'react';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom"
import './App.css';
import AlbumList from "./components/AlbumList";
import AlbumInfo from "./components/AlbumInfo";
import albums from "./albumData";



function App() {
    console.log('album.data 2');
    console.log(albums);
  return (

      <div className="app">
        <BrowserRouter>
            <div className="exampleSelect">
                <h3>Examples</h3>

            </div>
            <Link to="/list">Album List</Link>
          <Switch>
            <Route path="/list" component={AlbumList}/>
            <Route path={`/album_info/1`} component={AlbumInfo}/>
            <Route path={`/album_info/2`} component={AlbumInfo}/>

          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
