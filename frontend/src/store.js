import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {deleteImageReducer, samplesReducer,uploadReducer,uploadsReducer} from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
    samples: samplesReducer,
    upload: uploadReducer,
    uploads: uploadsReducer,
    deleteImage: deleteImageReducer,
})
const initialState = {

}

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

const store = createStore(rootReducer, initialState,composedEnhancer)

export default store