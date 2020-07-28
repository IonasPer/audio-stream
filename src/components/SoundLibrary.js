import albums from "../albumData";
import React from "react";
import {useAudioPlayer} from "react-use-audio-player";
export default function SoundLibrary() {

    const libraryData = albums;
    console.log('libraryData');
    console.log(libraryData);
    const {ready, load, playing, loading, error} = useAudioPlayer();
    console.log("ready:" + ready + " load:" + load + " playing:" + playing + " loading:" + loading + " error:" + error);
    return (
        <div className="soundLibrary page">
            <div className="page__title">Sound Library</div>
            <div className="soundLibrary__sounds">
                {libraryData.map((album) => {
                return album.data.tracks.map((track,i)=>{
                    const song = track.song;
                    return (
                        <div
                            key={i}
                            className="track"
                            onClick={() => {
                                load({song, autoplay: !playing, html5: true})
                            }}
                        >
                            <i className="fa fa-music track__icon"/>
                            <div className="track__title">
                                {track.title} {track.artist}
                            </div>
                        </div>
                    )
                })
            })}
            </div>
        </div>
    )
}