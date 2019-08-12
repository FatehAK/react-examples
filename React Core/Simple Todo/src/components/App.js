import React from 'react';
import img1 from '../img/1.png';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';

import ImageList from './ImageList';

class App extends React.Component {

    state = {
        clicked: false,
        images: [img1, img2, img3],
    };

    doSomething = () => {
        // if (this.state.clicked === false) {
        //     this.setState({
        //         clicked: true
        //     });
        //     evt.target.innerHTML = 'foo';
        // }
        // if (this.state.clicked === true) {
        //     this.setState({
        //         clicked: false
        //     });
        //     evt.target.innerHTML = 'Click';
        // }

        if (this.state.clicked === false) {
            this.setState({
                clicked: true
            });
        }

        if (this.state.clicked === true) {
            this.setState({
                clicked: false
            });
        }
    };

    refreshList = (arr) => {
        this.setState({
            images: arr
        });
    };

    renderImage = () => {
        let arr = this.state.images.map((image) => {
            return <ImageList key={image} image={image} imageList={this.state.images} refreshList={this.refreshList}/>
        });
        return arr;
    };

    render() {
        return (
            <div className="app">
                <button onClick={() => this.doSomething()}>Click</button>
                {(this.state.clicked) && this.renderImage()}
            </div>
        );
    }
}

export default App;
