

const RspAddReferente = ({res}) => {
    return(
        <div>{res === '0' ? 'referente guardado on exito' : 'error al guardar referente'}</div>
    )
}

export default RspAddReferente