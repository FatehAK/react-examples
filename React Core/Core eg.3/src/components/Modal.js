import React from 'react';
import ReactDOM from 'react-dom';

//for portal
const anotherRoot = document.querySelector('#another');

class Modal extends React.Component {
    constructor(props) {
        super(props);
        //Create a div that we'll render the modal into. Because each
        //Modal component has its own element, we can render multiple
        //modal components into the modal container.
        this.el = document.createElement('div');
    }

    componentDidMount() {
        anotherRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        anotherRoot.removeChild(this.el);
    }

    render() {
        //using portal to render the modal outside of the parent component
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}

export default Modal;
