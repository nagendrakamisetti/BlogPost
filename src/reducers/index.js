import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from '../reducers/reducer_posts';

const rootReducer = combineReducers({
    Posts: PostsReducer,
    form: formReducer
});

export default rootReducer;
