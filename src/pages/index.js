import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import { Link } from 'gatsby';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { store, persistor } from '../store';

import { View, Conteudo } from './styles';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Layout>
            <SEO title="Home" />
            <View>
              <Conteudo>
                Acessar conta {` `}<Link to="/app/profile">Proifile</Link>{` `} (Somente com Login).
              </Conteudo>
            </View>
        </Layout>
      </PersistGate>
    </Provider>
  );
}
