import React from 'react';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom"
import './App.css';
/*import AlbumList from "./components/AlbumList";*/
import AlbumInfo from "./components/AlbumInfo";
import albums from "./albumData";
import {AlbumList} from "./components/AlbumList"


function App() {

  return (

      <div className="app">
          <div className={"container col-md-12"} style={{textAlign:"center"}}>
        <BrowserRouter>
            <div className="exampleSelect">
                <h3>Audio stream Example</h3>

            </div>
            <Link to="/list">Album List</Link>
          <Switch>
            <Route path="/list" component={AlbumList}/>
            <Route path={`/album_info/1`} component={AlbumInfo}/>
            <Route path={`/album_info/2`} component={AlbumInfo}/>

          </Switch>
        </BrowserRouter>
      </div>
      </div>
  );
}

export default App;
