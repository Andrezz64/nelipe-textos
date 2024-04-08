import TextoLista from "../components/textoLista";
import Textos from "../Textos";



export default function Trabalhos(){
    
    return(
        <div className="flex justify-center items-center flex-col gap-5">
            <title>Textos</title>
            <h1 className="text-xl mt-[5rem]">Textos diversos</h1>
            <div className="flex gap-5 flex-wrap justify-center">
            {Textos.map((data)=>{
                return  <TextoLista titulo={data.Titulo} data={data.Data} genero={data.Genero} link={"textos/"+data.Path} autor={data.Autor}></TextoLista>
            })}
            </div>
     
        </div>
    )
}