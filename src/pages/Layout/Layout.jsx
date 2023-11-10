import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    const [searchData, setSearchData] = useState([])
    const [artist, setArtist] = useState([])
    return(
        <>
            <Navbar setData={setSearchData} setArtist={setArtist} />
            <section className="section">
                <Outlet context={{searchData, artist}} />
            </section>
        </>
    )
}

export default Layout;