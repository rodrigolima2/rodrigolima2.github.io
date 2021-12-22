import GlobalContext from "./index";
import useGlobalProvider from "../../hooks/useGlobalProvider";

export function GlobalProvider({ children }) {
    const globalProvider = useGlobalProvider();

    return (
        <GlobalContext.Provider value={globalProvider}>
            {children}
        </GlobalContext.Provider>
    );
}