import React from 'react';
import albums from "../albumData";
import { ListGroup, ListGroupItem } from 'reactstrap';


export default function AlbumInfo({album}){
    console.log(album.data);
    return(<>
        <h3>{album.title}</h3>
        <ListGroup>
            {album.data.tracks.map(album => {
                return <ListGroupItem>{album.title}</ListGroupItem>
            })}
        </ListGroup>
    </>)
}