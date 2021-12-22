import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

function useGlobal() {
    return useContext(GlobalContext);
}

export default useGlobal;