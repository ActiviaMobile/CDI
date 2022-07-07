
export const getTokenRequest = async (handleRsp,handleError,passport,setToken) => {
    var XMLParser = require('react-xml-parser');
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'http://172.16.1.6:8088/HomologacionWebsiteServices.asmx', true);
    // build SOAP request
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
        '<soap:Body>' +
        '<tokenUsuarioGet xmlns="http://HomologacionWebsiteServices.activia.com.ar/">' +
        `<passportHash>${passport}</passportHash>` +
        '</tokenUsuarioGet>' +
        '</soap:Body>' +
        '</soap:Envelope>';

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4) {
            if (xmlhttp.status === 200) {
                var xml = new XMLParser().parseFromString(xmlhttp.responseText);
                var rsp = xml.getElementsByTagName('tokenUsuarioGetResult');
                wsRequest(handleRsp,handleError,rsp[0].value,'UsuarioGetByToken')
            } else if (xmlhttp.status === 500) {
                handleError()
            }
        }
    }
    xmlhttp.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
    xmlhttp.setRequestHeader('SOAPAction', 'http://HomologacionWebsiteServices.activia.com.ar/tokenUsuarioGet');
    xmlhttp.send(sr);

}

export const wsRequest = (handleRef,handleRsp, handleError ,parameters, method) => {
    var xmlTag = ''
    Object.keys(parameters).map(key => xmlTag += `<${key}>${parameters.key}</${key}>`)

    var XMLParser = require('react-xml-parser');
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'http://172.16.1.6:8088/HomologacionWebsiteServices.asmx', true);
    // build SOAP request
    var sr = 
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
        '<soap:Body>' +
        `<${method} xmlns="http://HomologacionWebsiteServices.activia.com.ar/">` +
        xmlTag +
        `</${method}>` +
        '</soap:Body>' +
        '</soap:Envelope>'

    xmlhttp.onreadystatechange = function() {
        handleRef(true)
        if (xmlhttp.readyState === 4) {  
            handleRef(true)
            if (xmlhttp.status === 200) {
                var xml = new XMLParser().parseFromString(xmlhttp.responseText);
                var res = xml.getElementsByTagName(`${method}Result`);
                handleRsp(res[0].value)
            } else {
                handleError()
            }
        }
    }
    xmlhttp.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
    xmlhttp.setRequestHeader('SOAPAction', `http://HomologacionWebsiteServices.activia.com.ar/${method}`);
    xmlhttp.send(sr);
}