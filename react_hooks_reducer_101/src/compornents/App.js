import React, { useReducer, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from '../reducers';
import EventForm from './EventForm';
import Events from './Events';
import OperationLogs from './OperationLogs';
import AppContext from '../contexts/AppContext';

const APP_KEY = 'appWithRedux';

function App() {
  // リロード時、ローカルストレージからイベントと操作ログを取得する
  const appState = localStorage.getItem(APP_KEY);
  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // JSON.stringifyでlocalStorageに保存できる形式に変更する
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
}

export default App;
