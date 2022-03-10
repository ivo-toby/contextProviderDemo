import React from 'react'
import useConsent from '../hooks/useConsent';

function Youtube() {
    const consent = useConsent();
    const { socialConsent } = consent;

    return (
        <>
            {socialConsent && <div>Youtube</div>}
            {!socialConsent && <div>No Youtube for you</div>}
        </>

    );
}

export default Youtube