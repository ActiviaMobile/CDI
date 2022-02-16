import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Logo from "../components/SvgComponents/Logo"
import styles from "./LoginPage.module.css"

export default function HomePage(){ 
    const [searchParams] = useSearchParams();
    const [passport ] = useState(searchParams.get('passport'));
    const [token , setToken] = useState('')

    const triggerRequest = () => {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('POST', 'http://172.16.1.6:8088/', true);
        // build SOAP request
        var sr =
        '<?xml version="1.0" encoding="utf-8"?>'+
            '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">'+
                '<soap:Body>'+
                    '<tokenUsuarioGet xmlns="http://HomologacionWebsiteServices.activia.com.ar/">'+
                        `<passportHash>${passport}</passportHash>`+
                    '</tokenUsuarioGet>'+
            '</soap:Body>'+
        '</soap:Envelope>';
    
        xmlhttp.onreadystatechange = function () {
            var XMLParser = require('react-xml-parser');
            if (xmlhttp.readyState === 4) {
                if (xmlhttp.status === 200) {
                    //console.log(xmlhttp.response)
                    console.log(xmlhttp.response.getElementsByTagName('Name'));
                    alert(xmlhttp.response);
                }
            }
        }
        xmlhttp.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
        xmlhttp.setRequestHeader('SOAPAction', 'http://HomologacionWebsiteServices.activia.com.ar/tokenUsuarioGet');
        xmlhttp.send(sr);

    }
    return(
        <div className={styles.page}>
            <Logo/>
            <div>HOLAAA</div>
            <button onClick={triggerRequest}>Ganzos</button>
        </div>
    )
}