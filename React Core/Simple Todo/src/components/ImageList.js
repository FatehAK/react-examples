import React from 'react';

class ImageList extends React.Component {

    state = {
        checked: false
    };

    setCheck = (evt) => {
        this.setState({
            checked: evt.target.checked
        });
    };

    deleteImg = (image) => {
        if (this.state.checked) {
            let arr = this.props.imageList.filter((imageInState) => imageInState !== image);
            this.props.refreshList(arr);
        }
    };

    render() {
        console.log(this.state.checked);
        return (
            <div className="img-display">
                <img src={this.props.image} alt="pic" width="300" height="300" />
                <input type="checkbox" onChange={(evt) => this.setCheck(evt)} checked={this.state.checked}></input>
                <button onClick={() => this.deleteImg(this.props.image)}>Delete</button>
            </div>
        )
    }
}

export default ImageList;
