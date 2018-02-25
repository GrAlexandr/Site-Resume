import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducers from './reducers/reducers'

const persistConfig = {
	key: 'root',
	storage: storage
};

const reducer = persistReducer(persistConfig, reducers);

export default () => {
	let store = createStore(reducer);
	let persist = persistStore(store);
	return { store, persist }
}