import {atomFamily} from 'recoil';

export const rectAtomFamily = atomFamily({
	key: "rectAtom",
	default: id => ({
		id: `Rect ${id}`
	})
});