import React from "react";
import "./sideList.css";
import {useRecoilValue} from 'recoil';
// DO NOT TOUCH THAT
import { useRenderMeter } from "../../ChallengeUtils/hooks.js";
import { sideBarListRenderMeterState } from "../../ChallengeUtils/renderMeter";
// ---------------------
import {rectangleIdArrayState} from '../atoms';
import SideBarItem from '../SideBarItem/SideBarItem';

function SideBarList() {
	//DO NOT TOUCH THAT
	useRenderMeter(sideBarListRenderMeterState);
	// ----------------
	const rectanglesArray = useRecoilValue(rectangleIdArrayState);
	return <ul className="sidebar__list">
			{rectanglesArray.map((index) => <SideBarItem id={index} width={index.width} height={index.height} color={index.color} />)}
	</ul>;
}

export default SideBarList;
