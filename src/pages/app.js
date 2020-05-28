import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import Layout from '../components/Layout';
import Route from '../Route';
import '../config/ReactotronConfig';

import { store, persistor } from '../store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Layout>
          <Route />
          <ToastContainer autoClose={3000} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
