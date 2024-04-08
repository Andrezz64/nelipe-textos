import TextoLista from "../components/textoLista";
import Textos from "../Textos";



export default function Trabalhos(){
    
    return(
        <div className="flex justify-center items-center flex-col gap-5">
            <h1 className="text-xl mt-[5rem]">Feitos com carinho e caos</h1>
            <div className="flex gap-5 flex-wrap justify-center">
            {Textos.map((data)=>{
                return  <TextoLista titulo={data.Titulo} link={"textos/"+data.Path}></TextoLista>
            })}
            </div>
     
        </div>
    )
}