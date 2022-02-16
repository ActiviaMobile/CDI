import Schemes from "./Schemes"

export default function SchemesList(){
    const lstObj = [{title : 'Esquema SAF', route : 'SAF'},{title : 'Esquema WS' , route : 'WS'}]
    return(
        <div>
            {lstObj.map(element => <Schemes title={element.title} route={element.route} />)}
        </div>
    )
}