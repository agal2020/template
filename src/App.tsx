import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { TracksPage } from './Tracks';


export default function App() {
	return (
		<div>
			<Routes>
				<Route path="/tracks" element={<TracksPage />} />
				<Route path="*" element={<Navigate to="/tracks" />} />
			</Routes>
		</div>
	);
}