import { useState } from "react";

function useGlobalProvider() {
    const [openMenu, setOpenMenu] = useState(true);
    const [openModalImage, setOpenModalImage] = useState(false);
    const [currentContent, setCurrentContent] = useState(false);

    return {
        openMenu,
        setOpenMenu,
        openModalImage,
        setOpenModalImage,
        currentContent,
        setCurrentContent
    };
}

export default useGlobalProvider;