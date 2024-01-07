import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";

export const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const fromPage = location.state?.from?.pathname || '/';

    console.log(fromPage)
    return (
        <div>
            {fromPage}
        </div>
    );
};

