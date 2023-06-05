import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

function Error() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <>
        <div>{error.status}</div>
        <div>{error.data}</div>
      </>
    );
  }
  return <h1>Something went wrong</h1>;
}

export default Error;
