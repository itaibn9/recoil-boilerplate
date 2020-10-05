import React, { useState } from "react";
import "./menu.css";
import {useRecoilState} from 'recoil';
import {rectangleIdArrayState, counterIdState} from '../atoms';
import {rectAtomFamily} from '../atomFamily';

function Menu() {
	// Input states
	const [widthInput, setWidthInput] = useState(75);
	const [heightInput, setHeightInput] = useState(75);
	const [colorInput, setColorInput] = useState("#769fcd");
	const [rectanglesArrayIds, setRectanglesIds] = useRecoilState(rectangleIdArrayState);
	const [counterId, setCounterId] = useRecoilState(counterIdState);
	const [rectAtom, setRectAtom] = useRecoilState(rectAtomFamily(counterId));


	const submitShape = () => {
		setRectanglesIds((oldArray) => [...oldArray, counterId]);
		setRectAtom({...rectAtom, width:widthInput, height:heightInput, color:colorInput});
		setCounterId(counterId + 1)
	};
	return (
		<div className="sidebar__menu">
			<label htmlFor="widthInput">Width:</label>
			<input
				id="widthInput"
				type="number"
				placeholder="50"
				value={widthInput}
				onChange={({ target }) => setWidthInput(target.value)}
				min="0"
			/>
			<label htmlFor="heightInput">Height:</label>
			<input
				id="heightInput"
				type="number"
				placeholder="50"
				value={heightInput}
				onChange={({ target }) => setHeightInput(target.value)}
				min="0"
			/>
			<label htmlFor="colorPicker">Color:</label>
			<input
				type="color"
				id="colorPicker"
				value={colorInput}
				onChange={({ target }) => setColorInput(target.value)}
			/>
			<button onClick={submitShape} id="add-shape">
				Add Shape
			</button>
		<div id="idCounter">Number of Rectangles: {counterId}</div>
		</div>
	);
}


export default Menu;
