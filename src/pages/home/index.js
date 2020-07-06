import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { actions } from '../../store';
import Propositions from './Propositions';
import { Pagination } from 'semantic-ui-react';

const Home = ({ 
    isLoadingPropositions, 
    propositions, 
    currentPage, 
    totalPages,
    getPropositions,
}) => {

    useEffect(() => {
        getPropositions(currentPage);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onPageChange = (e, { activePage }) => {
        getPropositions(activePage);
    }

    return (
        <div className='wrap-home-page'>
            <div className='wrap-title-page'>
                <h1 className='title-page'>Elite real estate in the suburbs</h1>
            </div>
            <Propositions
                isLoading={isLoadingPropositions}
                propositions={propositions}
            />
            <div className='wrap-home-pagination'>
                <Pagination 
                    activePage={currentPage}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                    disabled={isLoadingPropositions}
                />
            </div>
        </div>
    )
}

const mapStateToProps = store => ({
    isLoadingPropositions: store.home.isLoadingPropositions,
    propositions: store.home.propositions,
    currentPage: store.home.currentPage,
    totalPages: store.home.totalPages,
})

const mapDispatchToProps = dispatch => ({
    getPropositions: pageNumber => dispatch(actions.home.getPropositions(pageNumber)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);