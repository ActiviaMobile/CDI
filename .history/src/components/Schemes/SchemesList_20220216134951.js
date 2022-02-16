import Schemes from "./Schemes"

export default function SchemesList(){
    const lstObj = [{title : 'Esquema SAF', route : ''},{title : 'Esquema WS' , route : ''},{}]
    return(
        <div>
            <Schemes/>
        </div>
    )
}