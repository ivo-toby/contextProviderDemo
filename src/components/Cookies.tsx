import React from 'react'
import useConsent from '../hooks/useConsent';

function Cookies() {
    const consent = useConsent();
    const { setConsent, marketingConsent, analyticsConsent, socialConsent, functionalConsent } = consent;

  return (
      <div>
          <form>
            <div>
                <label>
                      <input type="checkbox" name="cookie-1" checked={marketingConsent} onClick={() => {
                          setConsent({
                              ...consent,
                              marketingConsent: !marketingConsent
                          })
                      }} />
                      Marketing
                </label>
            </div>
            <div>
                <label>
                      <input type="checkbox" name="cookie-2" checked={analyticsConsent} onClick={() => {
                          setConsent({
                              ...consent,
                              analyticsConsent: !analyticsConsent
                          })
                      }} />
                      Analytics
                </label>
            </div>
            <div>
                <label>
                      <input type="checkbox" name="cookie-3" checked={socialConsent} onClick={() => {
                          setConsent({
                              ...consent,
                              socialConsent: !socialConsent
                          })
                      }} />
                      Social
                </label>
            </div>
            <div>
                <label>
                      <input type="checkbox" name="cookie-4" checked={functionalConsent} onClick={() => {
                          setConsent({
                              ...consent,
                              functionalConsent: !functionalConsent
                          })
                      }} />
                      Functional
                </label>
            </div>
          </form>
      </div>
  );
}


export default Cookies