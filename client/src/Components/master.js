import React from 'react';
import { useParams } from 'react-router';

const Master = () => {
    const { type } = useParams();
    return (
        <>
            { type }
        </>
    );
};

export default Master;
