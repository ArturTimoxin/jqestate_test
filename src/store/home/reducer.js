import * as actionTypes from './actionTypes';

const initialState = {
    isLoadingPropositions: false,
    propositions: [],
    currentPage: 1,
    totalPages: 0,
    limit: 32,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_PROPOSITIONS_LOADING: {
            return {
                ...state,
                isLoadingPropositions: !state.isLoadingPropositions
            }
        }
        case actionTypes.SET_PROPOSITIONS_DATA: {
            return {
                ...state,
                propositions: action.payload.propositions,
                isLoadingPropositions: false,
                currentPage: action.payload.currentPage,
                totalPages: action.payload.totalPages,
                limit: action.payload.limit,
            }
        }
        default:
            return state;
    }
}