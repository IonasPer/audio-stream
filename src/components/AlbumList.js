import React from 'react';
import albums from "../albumData";
import { ListGroup, ListGroupItem } from 'reactstrap';


export default function AlbumList(){

    return(<>
            <ListGroup>
                {albums.map(album => {
                    return <ListGroupItem>{album.title}</ListGroupItem>
                })}
            </ListGroup>
    </>)
}