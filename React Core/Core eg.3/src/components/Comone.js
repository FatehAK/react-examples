import React from 'react';

class Comone extends React.Component {
    render() {
        console.log('props in Comone:', this.props);
        return (
            <div className="comone">
                Comone
            </div>
        );
    }
}

export default Comone;
