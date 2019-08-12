import React from 'react';

//HOC takes in a component and returns the component with some additional props passed
function Higher(App, data) {
    return class extends React.Component {
        render() {
            return (
                <App higherData={data} {...this.props} />
            );
        }
    }
}

export default Higher;
