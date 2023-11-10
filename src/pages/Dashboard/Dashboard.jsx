import React, { useEffect, useState } from "react";
import { PlaylistCard } from "../../components/Cards";
import axios from "axios";

const Dashboard = () => {
    const [hitsSongs, setHitsSongs] = useState([])
    
    useEffect(() => {
        axios({
            method: 'GET',
            url: 'https://spotify23.p.rapidapi.com/search/',
            params: {
                q: "today hits",
                type: 'playlists',
                offset: '0',
                limit: '5',
                numberOfTopResults: '5'
            },
            headers: {
                'X-RapidAPI-Key': 'bf5cb05769msh17a276eada2e2f4p19fc55jsn96b74608f460',
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            }
        }).then((response) => {
            setHitsSongs(response.data.playlists.items)

            console.log(hitsSongs)
        }).catch((error) => {
            console.log(error)
        })
    }, [hitsSongs])

    return (
        <div className="h-screen">
            <div className="max-w-screen-xl mx-auto">
                <section id="hits-songs">
                    <h1 className="font-bold text-xl py-[15px]">Today's biggest hits</h1>
                    <div className="justify-between flex">
                        {hitsSongs.map((playlist) => (
                            <PlaylistCard key={playlist.data.uri} img={playlist.data.images.items[0].sources[0].url} name={playlist.data.name} description={playlist.data.description} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Dashboard;