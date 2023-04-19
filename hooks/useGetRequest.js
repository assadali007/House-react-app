import {useCallback, useState} from "react";
import loadingStatus from "@/helpers/loadingStatus";

const useGetRequest = (url) => {
    const [loadingState,setLoadingState] = useState(loadingStatus.isLoading);

    // this callback hook ensures the get function is not recreated
    // but the same reference is used to across rerender unless the url change
    const get =  useCallback(async () => {
        setLoadingState(loadingStatus.isLoading);
        try {
             const response = await fetch(url);
             const result = await response.json();
             setLoadingState(loadingStatus.loaded);
             return result;
        } catch {
            setLoadingState(loadingStatus.hasErrored);
        }
    },[url]);

    return {get,loadingState}
}
export default useGetRequest;




