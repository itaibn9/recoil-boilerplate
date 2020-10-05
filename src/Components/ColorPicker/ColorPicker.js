import React from "react";
import {canvasBackgroundColorState} from '../atoms';
import {useSetRecoilState} from 'recoil';
import "./colorPicker.css";

function ColorPicker() {
	const setBackgroungColor = useSetRecoilState(canvasBackgroundColorState);
	return (
		<div className="colorPicker">
			<label htmlFor="colorPickerInput">
				change canvas color to random color:
				<input id="colorPickerInput" type="color" onChange={(e) => setBackgroungColor(e.target.value)} />
			</label>
		</div>
	);
}

export default ColorPicker;
