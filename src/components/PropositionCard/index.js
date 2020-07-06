import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const PropositionCard = React.memo(({ 
    title, 
    imageURL, 
    price, 
    areaAmount, 
}) => {
    return (
        <Card className='proposition-card'>
            <img className='proposition-photo' src={imageURL} alt={title} />
            <Card.Content>
                <Card.Meta>
                    <span>{title}</span>
                </Card.Meta>
                <Card.Header className='proposition-prise'>
                    {price} {price !== '' ? '$' : ''}
                </Card.Header>
            </Card.Content>
            <Card.Content 
                extra 
                className='extra-content-card'
            >
                <span>
                    <Icon name='home' />
                    {areaAmount} m²
                </span>
            </Card.Content>
        </Card>
    )
});

export default PropositionCard;
