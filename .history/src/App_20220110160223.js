import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';

function App() {
  const utf8 = require('utf8');

  const triggerRequest = () => {
    console.log('HOLA')
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'https://salonalice.com.ar/landings/wsturnos/test/serviciosTurnos.php', true);
    var auth = 'Basic ' + utf8.encode('pepe:123456');
    // build SOAP request
    var sr =
        '<?xml version="1.0" encoding="utf-8"?>' +
        '<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="https://salonalice.com.ar/landings/wsturnos/test/serviciosTurnos.php">' +
            '<soapenv:Header/>' +
            '<soapenv:Body>' +
                '<ser:getReservaServiciosDisponibles soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"/>' +
            '</soapenv:Body>' +
        '</soapenv:Envelope>';

    xmlhttp.onreadystatechange = function () {
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
    xmlhttp.setRequestHeader('SOAPAction', 'https://www.salonalice.com.ar/landings/wsturnos/test/serviciosTurnos.php/getReservaServiciosDisponibles');
    xmlhttp.setRequestHeader('Host','salonalice.com.ar');
    xmlhttp.setRequestHeader('authorization', auth);
    xmlhttp.send(sr);
    // send request
    // ...
  }
  return (
    <div className="App">
      <LoginPage/>
    </div>
  );
}

export default App;