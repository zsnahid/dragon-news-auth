import { Button } from "@material-tailwind/react";
import { Link, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-center max-w-lg shadow p-10 rounded-md">
        <h2 className="text-3xl text-red-500 mb-1">Error</h2>
        <p className="text-black bg-gray-300 mb-3 p-5 rounded-md">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">
          <Button>Go Back Home</Button>
        </Link>
      </div>
    </div>
  );
}
