import { Link, useRouteError } from 'react-router-dom';

const Error: React.FC = (): JSX.Element => {
    const error = useRouteError() as { status?: number };

    console.log('error', error);
    if (error.status === 404) {
        return (
            <div>
                <h1>Opsi! We have a 404</h1>
                <p>
                    It seems that we cannot find the page you are looking for...
                </p>
                <Link to={'/'}>Back home</Link>
            </div>
        );
    }

    return <h1>Something went wrong </h1>;
};
export default Error;
