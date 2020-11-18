import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'localforage'

import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const persistor = persistStore(store)

if (module.hot) {
  console.log('test')
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers').default
    store.replaceReducer(
      persistReducer(persistConfig, nextRootReducer),
    )
  })
}

export {
  store,
  persistor,
}
