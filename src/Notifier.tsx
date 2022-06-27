import React from 'react';
import { Track, getTopTracks, getSearchedTracks } from "../src/scripts";
import { useSearchParams } from "react-router-dom";



export function Notifier(props: { isError: boolean, errorText: string, reset: Function }) {

    if (props.isError) {
        return (
            <>
                <div className="alert">
                    <span className="closebtn" onClick={() => props.reset()}>×</span>
                    <p className="error">{props.errorText}</p>
                </div>
            </>
        )
    }

    return (<></>);
}