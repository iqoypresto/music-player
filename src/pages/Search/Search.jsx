import React, { useEffect, useState } from "react";
import { FilterBar, Navbar } from "../../components/Navbar";
import { MusicCard, PlaylistCard, TopResultCard } from "../../components/Cards";
import axios from "axios";
import { useOutletContext } from "react-router-dom";

const Search = () => {
    const data = useOutletContext()

    useEffect(() => {
        console.log(data)
    }, [data])

    return (

        <div className="h-screen">
            <FilterBar />
            <div className="max-w-screen-xl mx-auto">
                <section id="content">
                    <section id="top-result" className="mt-[40px] pb-[20px] border-b-[1px]">
                        <h1 className="font-bold text-[20px] mb-[20px]">Top Result</h1>
                        <div className="artist-container">
                            <TopResultCard 
                                img  ={data.artist.picture_medium} 
                                name ={data.artist.name} 
                                fans ={data.artist.nb_fan} 
                                type ={data.artist.type} 
                            />
                        </div>
                    </section>
                    <section id="top-result" className="mt-[40px] pb-[20px]">
                        <div className="flex mb-[20px] items-center gap-[15px]">
                            <h1 className="font-bold text-[20px]">Tracks</h1>
                            <button className="border rounded-[8px] py-[5px] px-[20px] text-sm font-medium hover:bg-gray-200 transition">View All</button>
                        </div>
                        <div className="track-container w-[95%] mx-auto">
                            <header className="flex font-light text-[12px] border-b-[1px] pb-[10px] px-[10px]">
                                <div className="opacity-50 w-[40%]">TRACK</div>
                                <div className="opacity-50 w-[20%]">ARTIST</div>
                                <div className="opacity-50 w-[20%]">ALBUM</div>
                                <div className="opacity-50 w-[20%]">DURATION</div>
                            </header>
                            <div className="track-item">
                                {
                                    data.searchData.slice(0, 6).map((music) => (
                                        <MusicCard 
                                            img        ={music.album.cover_small} 
                                            name       ={music.title} 
                                            artistName ={music.artist.name} 
                                            albumName  ={music.album.title} 
                                            duration   ={`${parseInt(music.duration/60)}:${music.duration%60 >= 10 ? music.duration%60 : "0"+music.duration%60}`} />
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    )
}

export default Search;