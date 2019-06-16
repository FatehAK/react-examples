import React from 'react';
import Comments from './Comments';
import Blog from './Blog';

class App extends React.Component {
    //getting value from child
    logSomething(value) {
        console.log('logging value from child: ' + value);
    }

    render() {
        return (
            <div className="main">
                <Blog blogTitle="My First Blog">
                    {/* passing entire component as prop to Blog this is used for showing a component inside of a component */}
                    <Comments commentText="This is first comment" logSomething={this.logSomething} />
                </Blog>
                <Blog>
                    {/* can also pass non component children */}
                    <div className="mydiv">Are you sure?</div>
                    <span className="myspan">Really?</span>
                </Blog>
            </div>
        );
    }
}

export default App;
