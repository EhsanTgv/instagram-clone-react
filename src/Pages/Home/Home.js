import React from "react";
import { Routes, Route } from 'react-router-dom'
import Header from '../../Components/Header';
import NewHome from "../NewHome/NewHome";
import Explore from "../Explore/Explore";

const Home = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={NewHome} />
                <Route path="/explore" element={Explore} />
            </Routes>
        </div>
    )
}

export default Home;