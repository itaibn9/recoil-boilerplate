import React from "react";
import "./rectangle.css";
import {rectAtomFamily} from '../atomFamily';
import {useRecoilValue} from 'recoil';

function Rectangle({id}) {
	console.log(id);
	const rectAtom = useRecoilValue(rectAtomFamily(id));
	console.log(rectAtom.name);
	return <div className="rect" 
	style={{
		width:`${rectAtom.width}px`,
		height:`${rectAtom.height}px`,
		backgroundColor:rectAtom.color}}>
		</div>;
}

export default Rectangle;
