import React from 'react';

class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    };

    static getDerivedStateFromError(error) {
        console.log('d:', error);
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Error Occured</h1>
        };

        return this.props.children;
    }
}

export default ErrorBoundary;
