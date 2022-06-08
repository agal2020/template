import React from 'react';
import { Track, getTopTracks, getSearchedTracks } from "../src/scripts";
import { useSearchParams } from "react-router-dom";

export function TracksPage() {
    const [searchParams, setSearchParams] = useSearchParams();

    let q = searchParams.get("song_name");
    let header = document.getElementsByClassName("track_list_h").item(0);

    if (q) {
        if (header)
            header.innerHTML = "Search: " + q;
        return (
            <>
                <TracksList tracks={getSearchedTracks(q, 100)} />
            </>
        );
    } else {
        if (header)
            header.innerHTML = "Chart";

        return (
            <>
                <TracksList tracks={getTopTracks(100)} />
            </>);
    }
}

function TracksList({ ...props }: { tracks: Promise<Track[]> }) {
    const [data, setData] = React.useState<Track[]>([]);

    React.useEffect(() => {
        props.tracks.then((e) => setData(e))
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <ol className="rectangle">{data.map((item) => {
                return <li key={item.url}><a className='linq_a' href={item.url} onMouseOver={() => {

                    let song_name_tag = document.getElementsByClassName("song_name").item(0);
                    if (song_name_tag)
                        song_name_tag.innerHTML = `<h1>${item.name}</h1>`;

                    let artist_name_tag = document.getElementsByClassName("artist_name").item(0);
                    if (artist_name_tag)
                        artist_name_tag.innerHTML = `<h1>${item.artist.name}</h1>`;
                }
                }>{item.artist.name + ' - ' + item.name}</a></li>;
            })}
            </ol>
        </>);
}
