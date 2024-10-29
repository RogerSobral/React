import { useState } from "react"

function Titulo({nome,paragrafo,cor}){
    const [texto,setTexto]= useState("Titulo para inicializar")
    const [inputText, setInputText]= useState("")

    function clicou(){
        setTexto(inputText)
    }

    return (
        <div>
            <h1 style={{color:cor}}>{texto} {nome} st</h1>
            <input value={inputText} type="text" onChange={(e)=>{setInputText(e.target.value)}} />
            <button onClick={clicou}>mudar</button>
        
        </div>
    )
    

}

export default Titulo