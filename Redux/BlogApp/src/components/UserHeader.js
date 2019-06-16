import React from 'react';
import { connect } from 'react-redux';

const UserHeader = (props) => {
    //find the user we care about
    const { user } = props;

    if (!user) {
        return null;
    }

    return (
        <div className="header">{user.name}</div>
    );
}

//mapStateToProps() also allows us to perform precalculation before we send the props to the component
const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find((user) => user.id === ownProps.userId)
    };
};

export default connect(mapStateToProps)(UserHeader);
