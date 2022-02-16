import AuthFieldsContainer from "../components/AuthFields/AuthFieldsContainer"
import Logo from "../components/SvgComponents/Logo"
import styles from "./LoginPage.module.css"
export default function LoginPage() {

    const triggerRequest = () => {
        console.log('HOLA')
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('POST', 'http://172.16.1.6:8088/', true);
        // build SOAP request
        var sr =
            '<?xml version="1.0" encoding="utf-8"?>' +
            '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<soap:Body>' +
            '<UsuarioGet xmlns="http://HomologacionWebsiteServices.activia.com.ar/">' +
            '<tokenUsuario>string</tokenUsuario>' +
            '<id>int</id>' +
            '</UsuarioGet>' +
            '</soap:Body>' +
            '</soap:Envelope>';

        xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4) {
                    if (xmlhttp.status == 200) {
                        console.log(xmlhttp.responseText)
                        alert(xmlhttp.responseText);
                        // alert('done. use firebug/console to see network response');
                    }
                }
            }
            // Send the POST request
        xmlhttp.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
        xmlhttp.setRequestHeader('SOAPAction', 'http://172.16.1.6:8088/HomologacionWebsiteServices.asmx?op=UsuarioGet');
        xmlhttp.setRequestHeader('Host', '172.16.1.6');
        xmlhttp.send(sr);
        // send request
        // ...
    }
    return ( <
        div className = { styles.page } >
        <
        Logo / >
        <
        AuthFieldsContainer / >
        <
        button > Ganzos < /button> <
        /div>
    )
}