import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { Provider } from "react-redux";
import store from './Redux/store';
import "./Assets/scss/_base_.scss";
import "./Assets/scss/style.scss";
import "./index.css";
import { Authenticator } from '@aws-amplify/ui-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <Authenticator.Provider>
          <RouterProvider router={router}/>
        </Authenticator.Provider>
      </Provider>
  </React.StrictMode>
);