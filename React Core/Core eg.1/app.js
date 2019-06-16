/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */

import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

//elem, props, content
const element = React.createElement('div', null, 'hello-world');

ReactDOM.render(element, document.querySelector('#root1'));

//element nesting
const nameList = React.createElement('ul', null,
    React.createElement('li', null, 'Jack'),
    React.createElement('li', null, 'Jones'),
    React.createElement('li', null, 'James')
);

ReactDOM.render(nameList, document.querySelector('#root2'));

//element nesting with map
const names = ['Jack', 'Jonas', 'James'];

const nameMap = React.createElement('ul', null,
    names.map((name, index) => (
        //the key is necessary to help track changes to the child elements and update state as necessary
        React.createElement('li', { key: index }, name)
    ))
);

ReactDOM.render(nameMap, document.querySelector('#root3'));

//with JSX
const nameJSX = <ul>
    <span>JSX</span>
    {names.map((name, index) => (
        <li key={index}>{name}</li>
    ))}
</ul>;

ReactDOM.render(nameJSX, document.querySelector('#root4'));

//Components Reuse
class ContactList extends React.Component {
    render() {
        //Hard coded contacts
        const contacts = ['Jack', 'Jonas', 'James'];

        return (
            <ul>
                <span>{this.props.name}</span>
                {contacts.map((contact, index) => (
                    <li key={index}>{contact}</li>
                ))}
            </ul>
        );
    }
}

//passing prop 'name' to our render function in class
ReactDOM.render(<ContactList name="Contacts" />, document.querySelector('#root5'));

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <ContactList />
                <ContactList />
                <ContactList />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root6'));

//Dynamically Passing values
class AnotherList extends React.Component {
    render() {
        const contacts = this.props.contactNames;

        return (
            <ul>
                {contacts.map((contact, index) => (
                    <li key={index}>{contact}</li>
                ))}
            </ul>
        );
    }
}

class AnotherApp extends React.Component {
    render() {

        return (
            <div className="AnotherApp">
                <AnotherList contactNames={['Mick', 'Mike', 'Michael']} />
                <AnotherList contactNames={['John', 'Johnny', 'Jones']} />
            </div>
        );
    }
}

ReactDOM.render(<AnotherApp />, document.querySelector('#root7'));
