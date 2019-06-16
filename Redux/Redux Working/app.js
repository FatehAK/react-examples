/* eslint-disable no-undef */

"use strict";

//*Action creators -> return the action object
const createPolicy = (name, amount) => ({
    type: 'CREATE_POLICY',
    payload: {
        name: name,
        amount: amount
    }
});

const deletePolicy = (name) => ({
    type: 'DELETE_POLICY',
    payload: {
        name: name
    }
});

const createClaim = (name, amountToCollect) => ({
    type: 'CREATE_CLAIM',
    payload: {
        name: name,
        amountToCollect: amountToCollect
    }
});

//*Reducers
//*Rules
//>> Should always return some value.
//>> Should take in an action and data, perrform some modification on data based on the action.
//>> It should never modify the original array, always return a new array with modifications.
//>> Should be assigned defaults in case of first call.

//part of claim department which adds the claim to the existing claims array
const claimsHistory = (oldClaims = [], action) => {
    if (action.type === 'CREATE_CLAIM') {
        return [...oldClaims, action.payload];
    }

    return oldClaims;
};

//part of the account department where substract money from bag if claim is made
//else if a new policy is made then we add that money to the bag
const accounting = (bagOfMoney = 100, action) => {
    if (action.type === 'CREATE_CLAIM') {
        return bagOfMoney - action.payload.amountToCollect;
    } else if (action.type === 'CREATE_POLICY') {
        return bagOfMoney + action.payload.amount;
    }

    return bagOfMoney;
};

//part of policy department which adds the policy to the existing policy array
//else if there is need to delete policy then we remove that name and return new array
const policies = (listOfPolicies = [], action) => {
    if (action.type === 'CREATE_POLICY') {
        return [...listOfPolicies, action.payload.name];
    } else if (action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter((name) => name !== action.payload.name);
    }

    return listOfPolicies;
};

//*Redux Store
const { createStore, combineReducers } = Redux;

//produces a state object
const ourDepartments = combineReducers({
    accounting: accounting,
    claimsHistory: claimsHistory,
    policies: policies
});

const store = createStore(ourDepartments);

//dispatch this action (object) to all the reducers which process and update the store
//only the dispatch method can modify the store(i.e state)
store.dispatch(createPolicy('Jack', 40));
store.dispatch(createPolicy('Mark', 40));
//get state at this point
console.log(store.getState());

store.dispatch(createClaim('Bob', 40));
store.dispatch(createClaim('Jack', 20));
console.log(store.getState());

store.dispatch(deletePolicy('Jack'));
console.log(store.getState());
