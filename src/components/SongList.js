import React from 'react';
import SongDetails from './SongDetails';

const SongList = ({songs, loaded}) => {

    if(!loaded) {
        return <p>Loading...</p>
    }

    const songsArray = songs.feed.entry.map((song) => {
        return (
            <SongDetails song={song} />
        )
    });

    return(
        <>
        {songsArray}
        </>
    );
}

export default SongList;

