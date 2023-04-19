import {useEffect} from "react";

const LoadingIndicator = (props) => {
    return  (
        <h3>{props.loadingState}</h3>
    )
}
export default LoadingIndicator;