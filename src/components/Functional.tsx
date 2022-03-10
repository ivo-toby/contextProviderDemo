import React from 'react'
import useConsent from '../hooks/useConsent';

function Functional() {
    const consent = useConsent();
    const { functionalConsent } = consent;

    return (
        <>
            {functionalConsent && <div>Functional</div>}
            {!functionalConsent && <div>No Functional for you</div>}
        </>

    );
}

export default Functional