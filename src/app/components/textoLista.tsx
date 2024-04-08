'use client'
import { Calendar, Gear, PenNib } from "@phosphor-icons/react";

export default function TextoLista(props: any){
    return(
        <a href={props.link} className="bg-[#191919]  flex items-center p-3 min-w-[20rem] max-w-[20rem] rounded-lg border-2 border-transparent hover:duration-300 hover:border-[#d32b0d]" >
            <div className="flex flex-col">
            <strong>{props.titulo}</strong>
            <div className="flex gap-5 flex-wrap items-center">
            <span className="flex items-center text-sm gap-2 mt-2 mb-2 italic"> <PenNib size={20} color="#d32b0d"/>{props.autor}</span>
            <span className="text-sm flex items-start gap-2 text-f italic"><Calendar size={20} color="#d32b0d"/>{props.data}</span>
            <span className="text-sm flex items-start gap-2 text-f italic"><Gear size={20} color="#d32b0d"/>{props.genero}</span>
            </div>
            </div>
            
        </a>
    )
}