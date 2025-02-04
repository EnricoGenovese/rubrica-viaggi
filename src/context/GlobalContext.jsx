import { createContext, useContext } from "react";


const GlobalContext = createContext();


const GlobalProvider = ({ children }) => {

    const collectionData = {

    }

    return (
        <GlobalContext.Provider value={collectionData}>
            {children}
        </GlobalContext.Provider>
    );
}

function useGlobalContext() {
    const context = useContext(GlobalContext);

    if (!context) {
        throw new Error("useGlobalContext is not inside the context provider GlobalProvider");
    }
    return context;
}

export { GlobalProvider, useGlobalContext };