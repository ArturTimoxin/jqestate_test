import * as actionTypes from './actionTypes';
import API from '../../utils/API';

export const setPropositionsData = ({ propositions, currentPage, totalPages, limit }) => {
    return {
        type: actionTypes.SET_PROPOSITIONS_DATA,
        payload: {
            propositions,
            currentPage,
            totalPages,
            limit,
        }
    }
}

export const togglePropositionsLoading = () => {
    return {
        type: actionTypes.TOGGLE_PROPOSITIONS_LOADING
    }
}

export const getPropositions = (pageNumber) => {
    return (dispatch, getState) => {
        dispatch(togglePropositionsLoading());
        const { limit } = getState().home;
        API.get(`/properties/country?pagination[offset]=${limit * pageNumber}`)
            .then(resp => {
                const { pagination } = resp.data;
                const totalPages = Math.floor(pagination.total / pagination.limit);
                dispatch(setPropositionsData({ 
                    propositions: resp.data.items,
                    currentPage: pageNumber,
                    totalPages,
                    limit: resp.data.pagination.limit,
                }));
            })
            .catch(err => {
                dispatch(togglePropositionsLoading());
            })
    }
}