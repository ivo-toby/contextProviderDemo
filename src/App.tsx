import './App.css';
import { Ads, Analytics, Cookies, Functional, Youtube} from './components';
import { ConsentContextProvider } from './hooks/useConsent';

function App() {
    return (
    <ConsentContextProvider>
            <div className="App">
                <div>
                    <Cookies />
                </div>
                <hr/>
                <div>
                    <Youtube />
                    <Analytics />
                    <Ads />
                    <Functional />
                </div>
            </div>
    </ConsentContextProvider>
  );
}

export default App;
