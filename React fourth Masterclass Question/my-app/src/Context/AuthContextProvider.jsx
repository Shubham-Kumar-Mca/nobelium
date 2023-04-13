import React, { useReducer } from 'react'
import { createContext } from 'react'
import reducer from '../Reducer/reducer';

export const AuthContext = createContext();

const initialState = {
    data: [],
    singleUserData : {}
}

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider