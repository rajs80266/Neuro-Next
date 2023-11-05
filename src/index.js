import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import PersistedStore from "./PersistedStore";
import App from './App.js';

ReactDom.render(
        <Provider store={PersistedStore.getDefaultStore().store}>
            <App />
        </Provider>                                                                                                                                                             , 
    document.getElementById('root')
);
