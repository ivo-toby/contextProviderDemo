import { useContext, createContext, useState, PropsWithChildren, useEffect } from 'react';

const CONSENT_DEFAULT = {
    loaded: false,
    marketingConsent: false,
    analyticsConsent: false,
    socialConsent: false,
    functionalConsent: false
}

export type ConsentContextType = {
    loaded: boolean;
    marketingConsent: boolean;
    analyticsConsent: boolean;
    socialConsent: boolean;
    functionalConsent: boolean;
    setConsent: (consent: ConsentContextType) => void;
};

type ProviderProps = PropsWithChildren<{
}>



const ConsentContext = createContext<ConsentContextType | null>(null);

function useConsent() {
    const context = useContext(ConsentContext);
    if (context === null) throw new Error('Missing Provider');
    return context;
}

function ConsentContextProvider({ children }: ProviderProps) {
    const [loaded, setLoaded] = useState(false);
    // normally you would not expose setConsent to the provider, but a method to store the cookies (and a export a method to do so)
    const [consent, setConsent] = useState<Omit<ConsentContextType, 'loaded'|'setConsent'>>(CONSENT_DEFAULT);

    // const loadGivenConsent = async (): Promise<any> => {
        // const consents = await getGivenConsent();
        // setConsent({
        //     functionalConsent: consents.technical,
        //     marketingConsent: consents.ads,
        //     analyticsConsent: consents.analytics,
        //     socialConsent: consents.social
        // })
    // }

    useEffect(() => {
        // normally you'd load a consentmanager here (and inject the script somewhere)
        // loadGivenConsent()
        setLoaded(true);
    }, [])

    useEffect(() => {
        console.log(consent)
    }, [consent])

    const contextValue: ConsentContextType = {
        loaded,
        ...consent,
        setConsent
    }

    return <ConsentContext.Provider value={contextValue}>{children}</ConsentContext.Provider>
}


export { useConsent, ConsentContextProvider, ConsentContext };
export default useConsent;
