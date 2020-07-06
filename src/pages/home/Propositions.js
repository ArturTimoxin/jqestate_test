import React from 'react';
import LoadingCardPlaceholder from '../../components/LoadingCardPlaceholder';
import { Message } from 'semantic-ui-react';
import PropositionCard from '../../components/PropositionCard';
import DefaultPhoto from '../../assets/default-photo.png';

const Propositions = ({ isLoading, propositions }) => {

    if(isLoading) {
        const loadingCards = [];
        let i = 0;
        while(i < 12) {
            const time = new Date().getTime();
            loadingCards.push(<LoadingCardPlaceholder key={i + time} />)
            i++;
        }
        return (
            <div className='wrap-propositions'>
                {loadingCards}
            </div>
        );
    }

    if(!propositions.length) {
        return (
            <Message negative>
                <Message.Header>Results not found</Message.Header>
            </Message>
        )
    }

    return (
        <div className='wrap-propositions'>
            {propositions.map(proposition => (
                <PropositionCard 
                    key={proposition.createdAt + proposition.createdByUserId}
                    title={`House in "${proposition.location.localityName}"`}
                    imageURL={proposition.images.length ? `https://images.jqestate.ru/${proposition.images[0].id}-jqestate-1024` : DefaultPhoto}
                    price={proposition.saleOffer ? proposition.saleOffer.multiCurrencyPrice.usd : ''}
                    areaAmount={proposition.specification.area}
                />
            ))}
            <div className='empty-proposition-block' />
            <div className='empty-proposition-block' />
            <div className='empty-proposition-block' />
            <div className='empty-proposition-block' />
        </div>
    )
}

export default Propositions;