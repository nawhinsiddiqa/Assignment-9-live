import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1 className='text-center mx-auto text-2xl font-bold my-3'>Ooooops This page is not found</h1>
            <img  className="w-[600px] mx-auto" src="https://xdguru.b-cdn.net/wp-content/uploads/2020/04/404-page-template-for-xd-1-1014x487.jpg"></img>
        </div>
    );
};

export default ErrorPage;
