import React, { useState,useEffect } from "react";
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

useEffect(() => {
onChange()
}, [widthInput, heightInput, colorInput])

	const onChange = () => {
		setRectAtom( {...rectAtom, width: parseInt(widthInput), height:parseInt(heightInput), color:colorInput })
	}
	return (
		<li className="sidebar__row">
			<span className="sidebarItemName"></span>
			<label>Width: </label>
			<input id="shapeWidthInput" type="number" placeholder={rectAtom.width} min="0" value={widthInput}
			onChange={({ target }) => {
				 setWidthInput(target.value);
			}} />
			<label>Height: </label>
			<input id="shapeHeightInput" type="number" placeholder={rectAtom.height} min="0" value={heightInput}
			onChange={({ target }) => {
				setHeightInput(target.value);
				}}/>
			<label>Color :</label>
			<input type="color" id="colorModifier" value={colorInput} 
			onChange={({ target }) => {
				 setColorInput(target.value);
			}}/>
		</li>
	);
}

export default SideBarItem;
