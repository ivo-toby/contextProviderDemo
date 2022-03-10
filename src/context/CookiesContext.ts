import * as React from 'react';

export interface CookiesContextModel {
    ads: boolean;
    analytics: boolean;
    social: boolean;
    technical: boolean;
}

const COOKIE_DEFAULT = {
    ads: true,
    analytics: true,
    social: true,
    technical: true,
};

const CookiesContext = React.createContext<CookiesContextModel>(COOKIE_DEFAULT);

export default CookiesContext;
