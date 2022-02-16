import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Logo from "../components/SvgComponents/Logo"
import styles from "./LoginPage.module.css"

export default function HomePage(){ 
    const [searchParams] = useSearchParams();
    const [token , setToken] = useState('')
    const passport = searchParams.get('passport')
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
            if (xmlhttp.readyState === 4) {
                if (xmlhttp.status === 200) {
                    var XMLParser = require('react-xml-parser');
                    var xml = new XMLParser().parseFromString(xmlhttp.responseText);       
                    var token = xml.getElementsByTagName('tokenUsuarioGetResult');   
                    setToken(token[0].value);
                    console.log(token[0].value);
                }
            }
        }
        xmlhttp.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
        xmlhttp.setRequestHeader('SOAPAction', 'http://HomologacionWebsiteServices.activia.com.ar/tokenUsuarioGet');
        xmlhttp.send(sr);

    }
    useEffect( () => triggerRequest() ,[passport])

    return(
        <div className={styles.page}>
            <Logo/>
            <div>{
                token ?  token : '...'
            }</div>
        </div>
    )
}