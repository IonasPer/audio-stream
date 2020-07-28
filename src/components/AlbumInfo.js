import React from 'react';
import albums from "./../albumData";
import {Card,CardBody} from "reactstrap";
export default function AlbumInfo(){
    console.log('album.info');

    const currentAlbum = albums.filter(album =>{
        if(window.location.href.includes(album.id)){
            console.log(album.id);
            return album}
        }
    ).pop();
    console.log('currentAlbum');
    console.log(currentAlbum);
    return(<div>
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