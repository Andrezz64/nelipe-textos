"use client"

import Textos from "@/app/Textos"
import Footer from "@/app/components/Footer";
import { CircleNotch, PenNib } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

interface TextosInterface {
    Titulo: string
    Path:string
    LinkEmbded:string
    Autor:string
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
     
                <title>{Texto?.Titulo}</title>
      
        <div className="flex justify-center items-center gap-5 flex-col p-3">
        <div>
        <h1 className="mt-10 text-xl text-center max-w-[51rem] max-md:w-[30]">{Texto?.Titulo}</h1>
        {
            Texto?.Autor?( <h2 className="text-sm flex mt-2 items-center gap-1 italic"> <PenNib size={17} color="#d32b0d"/>Por {Texto?.Autor}</h2>):("")
        }
        </div>
        {Texto?(
           <div className=" bg-white p-1 rounded-lg"> <iframe src={Texto.LinkEmbded} className="w-[51rem] h-screen max-md:w-[30rem]"></iframe></div>
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