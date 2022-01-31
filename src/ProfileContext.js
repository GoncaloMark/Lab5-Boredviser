import React, {createContext, useState} from 'react'

const Profilecontext = createContext()

export const Profilecontextprovider = ({children}) => {
    const [verifyUser, setVerify] = useState(false)
    const [verify2, setVerify2] = useState(false)

    return(
        <Profilecontext.Provider value={{verifyUser, setVerify, verify2, setVerify2}}>
            {children}
        </Profilecontext.Provider>
    )
}

export default Profilecontext
