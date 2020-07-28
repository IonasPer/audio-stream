import React from "react";
import {AudioSeekBar} from "./AudioSeekBar.tsx";
import {DurationLabel} from "./DurationLabel.tsx";
import {VolumeControl} from "./VolumeControl.tsx";
import {useAudioPlayer} from "react-use-audio-player";

export default function PlayBar(){
    const { togglePlayPause, playing, ready } = useAudioPlayer()
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