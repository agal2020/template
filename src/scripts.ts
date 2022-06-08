const api_key = '51e1eaecc2e69d888206180ce0d05c5a';

export type Artist = {
    name: string,
    url: string
};

export type Track = {
    name: string,
    url: string,
    artist: Artist
};

async function request(url: string) {
    const response = await fetch(url);
    return response.json();
}

export function getTopTracks(limit: number): Promise<Track[]> {
    const url = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${api_key}&format=json&limit=${limit}`
    let json = request(url);
    return json.then(element => {
        return element.tracks.track;
    });
}

export function getSearchedTracks(songName: string, limit: number): Promise<Track[]> {
    const url = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${songName}&api_key=${api_key}&format=json&limit=${limit}`
    let json = request(url);
    return json.then(element => {
        return element.results.trackmatches.track.map((e: Track) => {
            return {
                name: e.name,
                url: e.url,
                artist: {
                    name: e.artist
                }
            };
        });
    });
}
