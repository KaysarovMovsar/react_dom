import React, {useEffect, useState} from 'react';
import {NavLink, useLocation} from "react-router-dom";

export const HomePage = () => {
    const location = useLocation()
    console.log(location)
    return (
        <div className="flex">
            HomePage
        </div>
    );
};

