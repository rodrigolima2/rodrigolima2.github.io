import { useState } from "react";

function useGlobalProvider() {
    const [openMenu, setOpenMenu] = useState(true);
    const [currentContent, setCurrentContent] = useState(false);

    return {
        openMenu,
        setOpenMenu,
        currentContent,
        setCurrentContent
    };
}

export default useGlobalProvider;