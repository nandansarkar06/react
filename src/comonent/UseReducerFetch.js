import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

const intialState = {
    loading: true,
    error: '',
    post: {}
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCHED_DATA':
            return {
                loading: false,
                error: '',
                post: action.payload
            }
        case 'ERROR':
            return {
                loading: false,
                error: 'Eorror',
                post: {}
            }
        default:
            return state
    }
}


function UseReducerFetch() {
    const [state, dispatch] = useReducer(reducer, intialState);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => {
                dispatch({ type: 'FETCHED_DATA', payload: response.data })
            })
            .catch(error => {
                dispatch({ type: 'ERROR', payload: null })
            })
    }, [])
    return (
        <div>
            {state.loading ? 'loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default UseReducerFetch
