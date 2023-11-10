import React from "react";
import { Link } from "react-router-dom";

export const PlaylistCard = (params) => {
    return (
        <div className="playlist-container w-fit bg-slate-700 text-white overflow-hidden p-[20px] rounded-[15px]">
            <div className="playlist-img aspect-[1/1] w-[180px] rounded-[15px] overflow-hidden mb-[15px]">
                <img src={params.img} alt="" />
            </div>
            <div className="playlist-details w-[180px]">
                <h1 className="text-lg font-bold truncate">{params.name}</h1>
                <p className="font-thin description-ellipsis">{params.description}</p>
            </div>
        </div>
    )
}

export const MusicCard = (props) => {
    return (
        <div className="flex items-center text-[14px] py-[10px] hover:bg-gray-200 px-[10px]">
            <div className="track-name w-[40%] flex items-center gap-[10px]">
                <img className="aspect[1/1]" width="40px" src={props.img} alt="" />
                <Link className="hover:underline"><h5 className="truncate">{props.name}</h5></Link>
            </div>
            <div className="artist-name w-[20%]">
                <Link className="hover:underline"><h5 className="truncate">{props.artistName}</h5></Link>
            </div>
            <div className="album-name w-[20%]">
                <Link className="hover:underline"><h5 className="truncate">{props.albumName}</h5></Link>
            </div>
            <div className="duration-time w-[20%] opacity-50">
                <h5>{props.duration}</h5>
            </div>
        </div>
    )
}

export const TopResultCard = (props) => {
    return (
        <div className="flex items-center gap-[20px]">
            <Link className="rounded-full overflow-hidden">
                <img className="mx-auto aspect[1/1]" width="180px" src={props.img} alt="" />
            </Link>
            <div className="">
                <Link className="hover:underline" href="">{props.name}</Link>
                <h3 className="opacity-50 font-light mt-[5px] mb-[10px]">{props.fans} fans</h3>
                <h5 className="text-[10px] bg-black bg-opacity-80 text-white w-fit px-[5px] rounded-[2px]">{props.type}</h5>
            </div>
        </div>
    )
}