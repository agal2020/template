import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { TracksPage } from './Tracks';


export default function App() {
	return (
		<>
			<div className="head">
				<div className="logo">
					<svg className="logo_text">
						<text x="50%" y="60%" text-anchor="middle">
							TOP MUSIC
						</text>
					</svg>
				</div>
			</div>
			<div className="site_body">

				<div className="grid-container">
					<div className="post-1">
						<div className="search_area">
							<form className="input_form">
								<input type="search" id="song-search" name="song_name" className="input_search"
									placeholder="Search the song..." />
								<i className=" fa fa-search"></i>
							</form>
						</div>
						<div className="song_area">
							<div className="song_name">
								<h1 className="text_in_h1">Song name</h1>
							</div>
							<div className="artist_name">
								<h1 className="text_in_h1">Artist name</h1>
							</div>
							<img src="resource/sobaka-muzyka-naushniki-podushka-telefon-radost.jpg" alt="album" className="album_pic" />
						</div>
					</div>
					<h1 className="track_list_h" id="song_list_name">Track list</h1>
					<div className="post-2">
						<div>
							<Routes>
								<Route path="/tracks" element={<TracksPage />} />
								<Route path="*" element={<Navigate to="/tracks" />} />
							</Routes>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}