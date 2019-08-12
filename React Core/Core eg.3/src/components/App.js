import React, { Suspense, lazy } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Modal from './Modal';

//lazy imports
const Comone = lazy(() => import('./Comone'));
const Comtwo = lazy(() => import('./Comtwo'));

class App extends React.Component {
    render() {
        console.log('props in App:', this.props);

        return (
            <>
                <Suspense fallback={<div>loading...</div>}>
                    <ErrorBoundary>
                        <Comone {...this.props} />
                        <Comtwo />
                    </ErrorBoundary>
                </Suspense>
                <Modal>
                    <div>I'm outside parent root</div>
                </Modal>
            </>
        );
    }
}

export default App;
