import React from 'react';
import { Track, getTopTracks, getSearchedTracks } from "../src/scripts";
import { useSearchParams } from "react-router-dom";


export function TracksPage(props : {onError : Function, onTrackChange: Function}) {
    const [searchParams, setSearchParams] = useSearchParams();

    let q = searchParams.get("song_name");
    let header = document.getElementsByClassName("track_list_h").item(0);

    if (q) {
        if (header)
            header.innerHTML = "Search: " + q;
        return (
            <>
                <TracksList trackName={q} onError={props.onError} onTrackChange={props.onTrackChange} />
            </>
        );
    } else {
        if (header)
            header.innerHTML = "Chart";

        return (
            <>
                <TracksList trackName={''} onError={props.onError} onTrackChange={props.onTrackChange} />
            </>);
    }
}

function TracksList(props: { trackName: string, onError: Function, onTrackChange: Function }) {
    const [data, setData] = React.useState<Track[]>([]);
    let [hasError, setHasError] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (props.trackName != ''){
            getSearchedTracks(props.trackName, 100).then(
                e => {
                    setData(e);
                },
                err => {
                    props.onError(err);
                    setHasError(true);
                });
        } else{
            getTopTracks(100).then(
                e => { 
                    setData(e); 
                },
                err => {
                    props.onError(err);
                    console.log(err);
                    setHasError(true);
                });
        }
    }, []);

    if(!hasError) {
        return (
            <>
                <ol className="rectangle">{data.map((item) => {
                    return <li key={item.url}><a className='linq_a' href={item.url} onMouseOver={() => { props.onTrackChange(item.name, item.artist.name); }
                    }>{item.artist.name + ' - ' + item.name}</a></li>;
                })}
                </ol>
            </>);
    } 

    return <></>;
}
