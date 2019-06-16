import React from 'react';
import Pic from '../img/pic.jpeg';

//stateless function components
class Comments extends React.Component {
    //reference to access dom node --> alternate to querySelector
    imageRef = React.createRef();

    componentDidMount() {
        console.log('Image ref is', this.imageRef);
        //works but in case of AJAX image loading use the 'load' event listener
        console.log(this.imageRef.current.clientHeight);
        //in case of AJAX image loading use this method
        this.imageRef.current.addEventListener('load', this.getHeight);
    }

    getHeight = () => {
        console.log(this.imageRef.current.clientHeight);
    }

    //default props
    static defaultProps = {
        date: '10/10/19'
    };

    render() {
        //Direct props
        console.log('Props in Comment', this.props);
        //child to parent value passing
        this.props.logSomething('Boo');
        return (
            <div className="comment-main">
                <div>{this.props.commentText} , {this.props.date}</div>
                <img ref={this.imageRef} src={Pic} alt="pic" width="200px" height="200px" />
            </div>
        );
    }
}

export default Comments;
