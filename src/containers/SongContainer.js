import React, {useState, useEffect} from 'react';
import SongList from '../components/SongList';

const SongContainer = () => {

    const [songs, setSongs] = useState({});
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        getSongs();
    }, [])

    const getSongs = () => {
        console.log("getting song info");
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(data => setSongs(data))
        .then(() => setLoaded(true))
    }

    return(
        <>
        <h1>UK Top 20</h1>
        <SongList song={songs} 
        loaded={loaded}
        />
        </>
    );
}

export default SongContainer;