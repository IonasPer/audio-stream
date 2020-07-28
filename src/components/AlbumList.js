import React from 'react';
import albums from "../albumData";
import {ListGroup, ListGroupItem} from 'reactstrap';
import cover from "./../albums/Luv Sic.jpg";
import {Switch, Route, Link} from "react-router-dom";
/*import AlbumInfo from "./AlbumInfo";*/



const AlbumInfo = () => {
    console.log('album.info');
    console.log('test');

    return (<div>
        Test
        {/*        <h3>{album.title}</h3>
        {album.data.tracks.map((track,key)=>{return <Card key={key}>

            <CardBody>
                test
                {track.title} {track.artist}
            </CardBody>
        </Card>})}*/}
    </div>)
}
export default function AlbumList(){


    console.log('album.list');
    albums.map((album,key) => {
        console.log(album.data);
    })
    return(<div>
        <h3>Album List</h3>

        <div className="fullNavigation">
            <div className="navigation">


                    {albums.map((album,key) => {

                        return <div key={key}>

                            <Link className="navigation__link" to={`/album_info`}>
                            <img src={cover} width={"100rem"} height={"100rem"}/>
                            <h5>The title {album.title}</h5>
                            </Link>
                        </div>

                    })}

            </div>


        </div>
    </div>)
}