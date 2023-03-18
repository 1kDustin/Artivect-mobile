import React from 'react';
import {persistor, store} from './store';
import {PersistGate} from 'redux-persist/integration/react';
import {AuthSwitch} from './src/utils/AuthSwitch';
import {Provider} from 'react-redux';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthSwitch />
      </PersistGate>
    </Provider>
  );
}

export default App;
