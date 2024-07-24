import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

import PATHS from "../router/paths";

const useRedirect = (condition: boolean) => {
    const navigate = useNavigate();

    useEffect(() => {
        if(condition){
            navigate(PATHS.MAIN_PAGE)
        };
    }, [])
}

export default useRedirect;