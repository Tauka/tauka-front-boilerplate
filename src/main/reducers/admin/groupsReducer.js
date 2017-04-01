export default function reducer(state={
	groups: [],
}, action) {
	switch(action.type) {
		case answerActions.ANSWER_FETCH_PENDING: {
			return {...state, answerFetching: true}
		}

	return state;
}