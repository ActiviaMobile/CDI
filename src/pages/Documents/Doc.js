const { Link } = require('react-router-dom')

const Doc = () => {

    return(
        <>
            <Link to={'/EsquemaAWS'} target="_blank">Esquema AWS</Link>
            <a href={require('../../Documents/saf.pdf')}  target="_blank">Esquema SAF</a>
        </>
    )
}

export default Doc;