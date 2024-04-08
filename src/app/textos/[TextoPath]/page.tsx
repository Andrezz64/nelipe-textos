"use client"

import Textos from "@/app/Textos"
import Footer from "@/app/components/Footer";
import { CircleNotch } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

interface TextosInterface {
    Titulo: string
    Path:string
    LinkEmbded:string
}


export default function Texto({ params }: { params: { TextoPath: any } }){
    const [Texto, setTexto] = useState<TextosInterface | null>();
    
    
   useEffect(()=>{
    if (params.TextoPath) {

        const textoEncontrado = Textos.find(t =>t.Path == params.TextoPath);
        if (textoEncontrado) {
            setTexto(textoEncontrado);
        } 
    }
   },[params.TextoPath])
    return(
        <div>
                   <div className="flex justify-center items-center gap-5 flex-col p-3">
        <h1 className="mt-10 text-xl text-center max-w-[51rem] max-md:w-[30]">{Texto?.Titulo}</h1>
        {Texto?(
           <div className=" bg-[#121212] border-2 p-2 rounded-lg"> <iframe src={Texto.LinkEmbded} className="w-[51rem] h-screen max-md:w-[30rem]"></iframe></div>
        )
        :(
            <div className="animate-spin"><CircleNotch size={50} color="#d32b0d" /></div>
        )
    }   

        </div>
        {/* <Footer></Footer> */}
        </div>
    )
} 