import React from 'react';

class Comtwo extends React.Component {
    state = {
        counter: 0
    };

    handleClick() {
        this.setState((state) => ({
            counter: state.counter + 1
        }));
    };

    render() {
        if (this.state.counter === 5) {
            throw new Error('foo');
        }
        return (
            <div className="comone" onClick={() => this.handleClick()}>
                Comtwo {this.state.counter}
            </div>
        );
    }
}

export default Comtwo;
