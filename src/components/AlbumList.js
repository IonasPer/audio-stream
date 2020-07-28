/*import React from 'react';*/
import albums from "../albumData";
import React from "react"
import {Link, Route, Switch} from "react-router-dom"
import {AudioPlayerProvider, useAudioPlayer} from "react-use-audio-player"

import {AudioSeekBar} from "./AudioSeekBar.tsx"
import {VolumeControl} from "./VolumeControl.tsx"
import {DurationLabel} from "./DurationLabel.tsx"
import "../styles/styles.scss"
import cover from "./../albums/Luv Sic.jpg";

/*import SoundLibrary from "./SoundLibrary";
import PlayBar from "./Playbar";*/
import AlbumInfo from "./AlbumInfo";

const PlayBar = () => {
    console.log('playbar');
    const { togglePlayPause, playing, ready } = useAudioPlayer();
    return (
        <div className="playBar">
            <button
                className="playBar__playButton"
                onClick={togglePlayPause}
                disabled={!ready}
            >
                <i className={`fa ${playing ? "fa-pause" : "fa-play"}`} />
            </button>
            <div className="playBar__timeStuff">
                <AudioSeekBar className="playBar__seek" />
                <DurationLabel />
            </div>
            <VolumeControl />
        </div>
    )
}

const SoundLibrary = () => {
    const sounds = ["http://134.209.81.210/audio/nujabes.mp3","http://134.209.81.210/audio/nujabes.mp3"];

    const albumList = albums;
    console.log(albumList)
    const { ready,load, playing,loading, error } = useAudioPlayer();
    console.log("ready:" + ready + " load:" + load + " playing:"+playing + " loading:"+ loading + " error:" + error);
    return (
        <div className="soundLibrary page">
            <div className="page__title">Sound Library</div>
            <div className="soundLibrary__sounds">

                {sounds.map((src, i) => {

                    return (
                        <div style={{border:"1px solid blue"}}
                            key={i}
                            className="track"
                            onClick={() => {
                                load({ src, autoplay: !playing,html5:true  })
                            }}
                        >
                            <i className="fa fa-music track__icon" />
                            <div className="track__title">
                                Click to listen {"Nujabes"}
                            </div>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}



export const AlbumList = props => {


    const url = props.match?.url;
    console.log('album.list');
    albums.map((album, key) => {
        console.log(album.data);
    })
    return (<div className={"col-md-6"} style={{textAlign:"center"}}>
            <h3>Album List</h3>

            <AudioPlayerProvider>
                <div className="globalPlayerExample" >
                    <div>
                    </div>
                    <div className={"col-md-6"}>{albums.map((album, key) => {

                        return <div key={key}>

                            <Link className="navigation__link" to={`${url}/album_info/${key + 1}`}>
                                <img src={cover} width={"100rem"} height={"100rem"}/>
                                <h5>The title {album.title}</h5>
                            </Link>
                        </div>

                    })}</div>
                    <Link className="navigation__link" to={`${url}/library`}>Play Stream</Link>
                    <Switch>
                        <Route path={`${url}/album_info/1`} component={AlbumInfo}/>
                        <Route path={`${url}/album_info/2`} component={AlbumInfo}/>
                        <Route path={`${url}/library`} component={SoundLibrary}/>
                    </Switch>
                    <PlayBar/>
                </div>
            </AudioPlayerProvider>
        </div>
    )
}
