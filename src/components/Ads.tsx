import React from 'react'
import useConsent from '../hooks/useConsent';

function Ads() {
    const consent = useConsent();
    const { marketingConsent } = consent;

    return (
        <>
            {marketingConsent && <div>Ads</div>}
            {!marketingConsent && <div>No Ads for you</div>}
        </>

    );
}

export default Ads