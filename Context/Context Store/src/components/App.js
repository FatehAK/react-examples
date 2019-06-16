import React from 'react';
import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {

    render() {
        return (
            <div className="ui container">
                {/* wrapping eveything with our 'Context Store' */}
                <LanguageStore>
                    <LanguageSelector />
                    {/* Static value Provider - this can be placed outside as well makes no difference*/}
                    <ColorContext.Provider value="red">
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageStore>

            </div>
        );
    }
}

export default App;
