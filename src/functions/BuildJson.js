export default function buildJson (formData , user){
    return {
        "Id"                 : null,
        "Nombre"             : formData.software,
        "DesarrolladorId"    : user.IdentityId,
        "AmbitoId"           : parseInt(formData.ambito),
        "EtapaID"            : parseInt(formData.etapa),
        "EstaHomologado"     : false,
        "FechaHomologacion"  : null,
        "HomologadorId"      : null,
        "NivelAmbitoId"      : null,
        "Codigo"             : null,
        "CodigoFinanciadora" : formData.financiadora,
        "CuitPrestador"      : formData.cuit,
        "EsMovil"            : false

    }
}

// "FechaHomologacion"  : new Date().toISOString().split('T')[0].replace('-','').replace('-',''),