import React, { useState } from "react";
import "./sideBarItem.css";
import {useRecoilState, useSetRecoilState} from 'recoil';
import {rectangleIdArrayState} from '../atoms';
import {rectAtomFamily} from '../atomFamily';


function SideBarItem({id}) {
	const [rectanglesArray, setRectanglesArray] = useRecoilState(rectangleIdArrayState);
	const [rectAtom, setRectAtom] = useRecoilState(rectAtomFamily(id));
	const [widthInput, setWidthInput] = useState(rectAtom.width);
	const [heightInput, setHeightInput] = useState(rectAtom.height);
	const [colorInput, setColorInput] = useState(rectAtom.color);

	const onChange = () => {
		// setRectanglesArray((oldArray) =>
		//  [...oldArray.slice(0, index),
		// 	 {width:widthInput, height:heightInput, color:colorInput},
		// 	  ...oldArray.slice(index + 1)]);
		setRectAtom( {...rectAtom, width: parseInt(widthInput), height:parseInt(heightInput), color:colorInput })
	}
	return (
		<li className="sidebar__row">
			<span className="sidebarItemName"></span>
			<label>Width: </label>
			<input id="shapeWidthInput" type="number" placeholder={rectAtom.width} min="0" value={widthInput}
			onChange={({ target }) => {
				 setWidthInput(target.value);
				 onChange();
			}} />
			<label>Height: </label>
			<input id="shapeHeightInput" type="number" placeholder={rectAtom.height} min="0" value={heightInput}
			onChange={({ target }) => {
				setHeightInput(target.value);
				onChange();
				}}/>
			<label>Color :</label>
			<input type="color" id="colorModifier" value={colorInput} 
			onChange={({ target }) => {
				 setColorInput(target.value);
				 onChange();
			}}/>
		</li>
	);
}

export default SideBarItem;
