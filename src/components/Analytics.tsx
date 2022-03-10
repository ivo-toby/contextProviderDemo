import React from 'react'
import useConsent from '../hooks/useConsent';

function Analytics() {
    const consent = useConsent();
    const { analyticsConsent } = consent;

    return (
        <>
            {analyticsConsent && <div>Analytics</div>}
            {!analyticsConsent && <div>No Analytics for you</div>}
        </>

    );
}

export default Analytics