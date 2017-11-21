import {locations} from '../data/locations'
const selectedQuestion = locations.map(() => {
	return 0
})
const initialState = {
	selectedQuest : 0,
	focusedQuest : 0,
	selectedQuestion: selectedQuestion,
}


export const quests = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_SELECTED_QUEST':
			return {
				...state,
				selectedQuest: action.selectedId
			};
		case 'SET_FOCUSED_QUEST': 
			return {
				...state,
				focusedQuest : action.selectedId
			};
		case 'NEXT_QUESTION':
			let newSelectedQuestion = state.selectedQuestion.slice();
			newSelectedQuestion[state.selectedQuest]++;
			return {
				...state,
				selectedQuestion : newSelectedQuestion,
			};
		default:
			return state;
	}
}

export const setQuest = (selectQuest) => {
	return dispatch => {
		dispatch({
			type: 'SET_SELECTED_QUEST',
			selectedId: selectQuest
		})
	}
}

export const setFocusedQuest = (selectQuest) => {

	return dispatch => {
		dispatch({
			type: 'SET_FOCUSED_QUEST',
			selectedId: selectQuest
		})
	}
}

export const nextQuestion = () => {

	return dispatch => {
		dispatch({
			type: 'NEXT_QUESTION'
		})
	}
}

