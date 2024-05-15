import {Children, createContext, useState} from 'react'

export const FirebaseContext = createContext(null)
export const AuthContext = createContext(null);

export default function Context(){
                const [user,setUser]=useState(null)
                return(
                                <AuthContext.Provider value={{user,setUser}}>
                                                {Children}
                                </AuthContext.Provider>
                )
}