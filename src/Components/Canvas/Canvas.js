import React from "react";
import "./canvas.css";
// DO NOT TOUCH THAT
import { canvasRenderMeterState } from "../../ChallengeUtils/renderMeter.js";
import { useRenderMeter } from "../../ChallengeUtils/hooks.js";
import {canvasBackgroundColorState} from '../atoms';
import {useRecoilValue} from 'recoil';
import {rectangleIdArrayState} from '../atoms';
import Rectangle from '../Rectangle/Rectangle';

function Canvas() {
	// TOUCH THAT IF YOU WANT TO GET KILLED
	useRenderMeter(canvasRenderMeterState);
	// ---------------------------------------------
	const backGroundColor = useRecoilValue(canvasBackgroundColorState)
	const rectanglesArray = useRecoilValue(rectangleIdArrayState);
	// console.log(rectanglesArray);
	return (
		<div
			className="canvas"
			id="canvas"
			style={{ backgroundColor: backGroundColor }}>
				{rectanglesArray.map((id) => <Rectangle id={id}/>)}
			</div>
	);
}

export default Canvas;
