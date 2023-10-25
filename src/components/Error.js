import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();

    return (
        <div>
            <h1>Error</h1>
            <h3>Oops something went wrong !</h3>
            <h3>{error.status}: {error.statusText}</h3>
        </div>
    )
};

export default Error;