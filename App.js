import React from "react";
import ChoicesProvider from "./components/store/ChoicesProvider";
import GameState from "./components/GameState";

export default function App() {
	return (
		<ChoicesProvider>
			<GameState />
		</ChoicesProvider>
	);
}
