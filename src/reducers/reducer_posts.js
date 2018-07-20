import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_POSTS:
            console.log(" Reducer " + _.mapKeys(action.payload.data, 'id'));
            return _.mapKeys(action.payload.data, 'id');
        case FETCH_POST:
            /* ES5 syntax
            const post = action.payload.data;
            const newState = { ...state };
            newState[post.id] = post;
            return newState; */
            // ES6 syntax
            console.log(" reducer " + action.payload.data.id);
            return { ...state, [action.payload.data.id]: action.payload.data };
        case DELETE_POST:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}