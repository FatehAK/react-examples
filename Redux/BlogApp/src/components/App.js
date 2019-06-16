import React from 'react';
import PostList from './PostList';

const App = () => {
    return (
        <div className="ui container"><PostList /></div>
    );
};

export default App;

//*Steps
//>>Initial Setup
/*
1. We define the skeleton for reducers and actions.
2. We import Provider, Redux methods and Redux Thunk.
3. We create a Redux store by applying all the combined reducers.
4. We hook up components that need to use the store with Connect.
*/

//>>Working
/*
1. Now we create our Action creator and return a function (which gets resolved to action object later) that does AJAX request possible through Redux Thunk.
2. We then pass this Action creator to our component, hook it up with connect and call it as props.
3. When the call is made the action creator is wrapped into a dispatch() method and sent to the reducers.
4. The reducers will take the state (initial or previous) and the action object returned by action creator and apply some transform to the state, which results in a new state.
5. Once all reducers are run, the combined reducers are supplied to the createStore() method to actually create the redux store for this data and we also specify middleware
   applyMiddleware() method.
6. Now back in our component we create the mapStateToProps() function that takes that new state and supplies it as props to the component.
7. The component recieves the props and then rerenders itself immediately.
8. On each call to the action creators (dispatch) we update the store with fresh data and the cycle repeats.
9. So cycle is,
                          returns action                       (state, action)
                 Dispatch(Action Creator) -----> MiddleWare -----> Reducers -----> Store (Update)
                      ^                                                                     |
                      |_____________________________________________________________________|
*/
