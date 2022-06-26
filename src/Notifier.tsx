import React from 'react';
import { Track, getTopTracks, getSearchedTracks } from "../src/scripts";
import { useSearchParams } from "react-router-dom";



export function Notifier(props: { isError: boolean, errorText: string, reset: Function }) {
    let [hasError, setHasError] = React.useState<boolean>(props.isError);
    let [error, setError] = React.useState<string>(props.errorText);
   
   React.useEffect(() => {
    setHasError(props.isError);
    setError(props.errorText);
   });

    if (hasError) {
        return (
            <>
                <div className="alert">
                    <span className="closebtn" onClick={() => props.reset()}>×</span>
                    <p className="error">{error}</p>
                </div>
            </>
        )
    }

    return (<></>);
}