import React from 'react'
import { Placeholder } from 'semantic-ui-react';

const LoadingCardPlaceholder = () => {
    return (
        <Placeholder className='loading-card-placeholder'>
            <Placeholder.Image square />
            <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
            </Placeholder.Paragraph>
        </Placeholder>
    )
}

export default LoadingCardPlaceholder;