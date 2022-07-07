import CheckBox from "./CheckBox"

const CheckBoxContainer = ({financiadoras}) => {

    return(
        <div>
            {financiadoras.map(({id,Nombre}) => <CheckBox name={Nombre} id={id} key={id}/>)}
        </div>
    )
}

export default CheckBoxContainer