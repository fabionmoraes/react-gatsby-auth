import Reactotron from 'reactotron-react-js';

import { reactotronRedux } from 'reactotron-redux'; //eslint-disable-line
import reactotronSaga from 'reactotron-redux-saga'; //eslint-disable-line

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
