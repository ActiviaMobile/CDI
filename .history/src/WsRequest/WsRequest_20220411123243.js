export const getTokenRequest = (setToken, updateToken, passport) => {
    var XMLParser = require('react-xml-parser');
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'http://172.16.1.6:8088/', true);
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
                var token = xml.getElementsByTagName('tokenUsuarioGetResult');
                sessionStorage.setItem('token', token[0].value);
                setToken(token[0].value);
                updateToken(token[0].value)
            }
        }
    }
    xmlhttp.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
    xmlhttp.setRequestHeader('SOAPAction', 'http://HomologacionWebsiteServices.activia.com.ar/tokenUsuarioGet');
    xmlhttp.send(sr);

}

export const ambitoGetAll = (token) => {
    var XMLParser = require('react-xml-parser');
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'http://172.16.1.6:8088/', true);
    // build SOAP request
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
        '<soap:Body>' +
        '<AmbitoGetAll xmlns="http://HomologacionWebsiteServices.activia.com.ar/">' +
        `<tokenUsuario>${token}</tokenUsuario>` +
        '</AmbitoGetAll>' +
        '</soap:Body>' +
        '</soap:Envelope>';

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4) {
            if (xmlhttp.status === 200) {
                var xml = new XMLParser().parseFromString(xmlhttp.responseText);
                var ambitos = xml.getElementsByTagName('AmbitoGetAllResult');
                const json = JSON.parse(ambitos[0].value)
                console.log(JSON.stringify(json))
            }
        }
    }
    xmlhttp.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
    xmlhttp.setRequestHeader('SOAPAction', 'http://HomologacionWebsiteServices.activia.com.ar/AmbitoGetAll');
    xmlhttp.send(sr);
}

export const wsRequest = (setRsp, token, method, id) => {
    var XMLParser = require('react-xml-parser');
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'http://172.16.1.6:8088/', true);
    // build SOAP request
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
        '<soap:Body>' +
        `<${method} xmlns="http://HomologacionWebsiteServices.activia.com.ar/">` +
        `<tokenUsuario>${token}</tokenUsuario>` +
        `</${method}>` +
        '</soap:Body>' +
        '</soap:Envelope>';
    console.log(sr)
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4) {  
            if (xmlhttp.status === 200) {
                console.log('status : ' + xmlhttp.status)
                var xml = new XMLParser().parseFromString(xmlhttp.responseText);
                var res = xml.getElementsByTagName(`${method}Result`);
                setRsp(res)
            } else if (xmlhttp.status === 500) {
                console.log('status : ' + xmlhttp.status)
            }
        }
    }
    xmlhttp.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
    xmlhttp.setRequestHeader('SOAPAction', `http://HomologacionWebsiteServices.activia.com.ar/${method}`);
    xmlhttp.send(sr);
}