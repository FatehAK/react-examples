import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {

    renderSubmit(value) {
        return value === 'english' ? 'Submit' : 'Voorleggen';
    }

    //this.context vs Consumer
    //Consumer can be used to get value from multiple context objects
    //this.context can get value from only one context object
    render() {
        return (
            //since we need to change the button color we need to wrap it up with ColorContext and return the entire JSX
            <ColorContext.Consumer>
                {(color) => (
                    <button className={`ui button ${color}`}>
                        {/* Using Consumer Component and passing it a 'function child' (mandatory) with context value as param */}
                        <LanguageContext.Consumer>
                            {(value) => this.renderSubmit(value)}
                        </LanguageContext.Consumer>
                    </button>
                )}
            </ColorContext.Consumer>
        );
    }
}

export default Button;
