import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
    //where, resource === this.state.resource
    //     , setResource('val') === this.setState({key: 'val'})
    //     , useState('posts') ==== state {resource: 'posts'} (i.e initial state value)
    //keys don't exist in state we directly pass values instead
    const [resource, setResource] = useState('posts');
    //can use multiple state values like this -
    //const [currentCount, setCount] = useState(0); === state { resource: 'posts', count: 0 }
    return (
        <div className="app">
            <UserList />
            <div>
                <button onClick={() => setResource('posts')}>Posts</button>
                <button onClick={() => setResource('todos')}>Todos</button>
            </div>
            <ResourceList resource={resource} />
        </div>
    );
}

export default App;
