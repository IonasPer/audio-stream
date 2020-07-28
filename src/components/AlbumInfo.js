import React from 'react';
import albums from "./../albumData";
import {Card,CardBody} from "reactstrap";
import {useAudioPlayer} from "react-use-audio-player";
export default function AlbumInfo(){
    console.log('album.info');
    const sounds = ["http://134.209.81.210/audio/nujabes.mp3","http://audio-ogg.ibiblio.org:8000/wcpe.ogg"];
    const currentAlbum = albums.filter(album =>{
        if(window.location.href.includes(album.id)){
            console.log(album.id);
            return album} else {
            return null;
        }}

    ).pop();
    console.log('currentAlbum');
    console.log(currentAlbum);
    return(<div style={{textAlign:"center"}}>
        Test
        <h3>{currentAlbum.title}</h3>
        {currentAlbum.data.tracks.map((track,key)=>{return <Card key={key}>

            <CardBody>
                test
                {track.title} {track.artist}
            </CardBody>
        </Card>})}
    </div>)

}