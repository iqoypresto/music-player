import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Navbar = ({ setData, setArtist }) => {
    const [searchString, setSearchString] = useState('')

    const handleChange = (e) => {
        setSearchString(e.target.value)
    }
    const handleClick = () => {
        axios({
            method: 'GET',
            url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
            params: {
                q: searchString,
                offset: '0',
                limit: '10'
            },
            headers: {
                'X-RapidAPI-Key': 'bf5cb05769msh17a276eada2e2f4p19fc55jsn96b74608f460',
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        }).then((response) => {
            setData(response.data.data)
            axios({
                method: 'GET',
                url: `https://deezerdevs-deezer.p.rapidapi.com/artist/${response.data.data[0].artist.id}`,
                headers: {
                    'X-RapidAPI-Key': 'bf5cb05769msh17a276eada2e2f4p19fc55jsn96b74608f460',
                    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
                }
            }).then((response) => {
                setArtist(response.data)
            }).catch((error) => {
                console.log(error)
            })
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <nav className="w-full border-b-[1px] bg-white sticky top-0 z-10">
            <div className="max-w-screen-xl mx-auto py-[10px] flex items-center gap-[10px]">
                <Link to="dashboard"><h1>Logo Brand</h1></Link>
                <form className="flex w-full" action="">
                    <input onChange={handleChange} className="outline-none py-[5px] px-[15px] rounded-[8px] w-full" type="text" placeholder="Search" />
                    <Link to="search"><button onClick={handleClick} className="py-[5px] px-[15px] border border-slate-800 rounded-[8px]">Search</button></Link>
                </form>
            </div>
        </nav>
    )
}


export const FilterBar = () => {
    return (
        <nav className="w-full shadow-md">
            <div className="max-w-screen-xl mx-auto pt-[20px] flex gap-[40px]">
                <button className="font-light pb-[20px] px-[3px] border-b-[2px] border-opacity-100 border-purple-700">
                    <Link>All</Link>
                </button>
                <button className="font-light pb-[20px] px-[3px] opacity-50 border-b-[2px] border-opacity-0 border-purple-700 hover:opacity-100 hover:border-opacity-100">
                    <Link>Tracks</Link>
                </button>
                <button className="font-light pb-[20px] px-[3px] opacity-50 border-b-[2px] border-opacity-0 border-purple-700 hover:opacity-100 hover:border-opacity-100">
                    <Link>Albums</Link>
                </button>
                <button className="font-light pb-[20px] px-[3px] opacity-50 border-b-[2px] border-opacity-0 border-purple-700 hover:opacity-100 hover:border-opacity-100">
                    <Link>Playlists</Link>
                </button>
                <button className="font-light pb-[20px] px-[3px] opacity-50 border-b-[2px] border-opacity-0 border-purple-700 hover:opacity-100 hover:border-opacity-100">
                    <Link>Artists</Link>
                </button>
                <button className="font-light pb-[20px] px-[3px] opacity-50 border-b-[2px] border-opacity-0 border-purple-700 hover:opacity-100 hover:border-opacity-100">
                    <Link>Episodes</Link>
                </button>
                <button className="font-light pb-[20px] px-[3px] opacity-50 border-b-[2px] border-opacity-0 border-purple-700 hover:opacity-100 hover:border-opacity-100">
                    <Link>Podcasts</Link>
                </button>
                <button className="font-light pb-[20px] px-[3px] opacity-50 border-b-[2px] border-opacity-0 border-purple-700 hover:opacity-100 hover:border-opacity-100">
                    <Link>Profiles</Link>
                </button>
            </div>
        </nav>
    )
}