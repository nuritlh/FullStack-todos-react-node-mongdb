import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { ConnectedDashboard } from './Dashboard';

export const Main = () => (
    <Provider store={store}>
      <div>
        <h2>Hello Nurit</h2>
        <div>
          <ConnectedDashboard/>
        </div>
      </div>
    </Provider>
);

export default Main;
