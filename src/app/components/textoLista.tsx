
export default function TextoLista(props: any){
    return(
        <a href={props.link} className="bg-[#191919] w-[20rem] h-[5rem] flex items-center p-5 rounded-lg border-2 border-transparent hover:duration-300 hover:border-[#d32b0d]" >
           {props.titulo}
            
        </a>
    )
}