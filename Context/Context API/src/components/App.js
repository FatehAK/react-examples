import React from 'react';
import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {

    state = {
        language: 'english'
    };

    onLanguageChange = (language) => {
        this.setState({
            language: language
        });
    };

    render() {
        console.log(this.state);

        return (
            <div className="ui container">
                <LanguageSelector onLanguageChange={this.onLanguageChange} />
                {/* pass updated state to the context object which is used by the nested children Button and Field */}
                {/* Dynamic value Provider */}
                <LanguageContext.Provider value={this.state.language}>
                    {/* Static value Provider - this can be placed outside as well makes no difference*/}
                    <ColorContext.Provider value="red">
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageContext.Provider>

                {/* Use Default context value (No provider)
                <UserCreate /> */}

            </div>
        );
    }
}

export default App;
