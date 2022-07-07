const rawHTML = `<html><head><style type="text/css">
body {
	background-color: #fff;
	font-family:Tahoma, Verdana, Trebuchet MS, Geneva, sans-serif;
	font-size:8pt;
	padding:20;
}
.t8 {
	font-family:Tahoma, Verdana, Trebuchet MS, Geneva, sans-serif;
	font-size:8pt;
}
a, td {
	font-family:Tahoma, Verdana, Trebuchet MS, Geneva, sans-serif;
	font-size:8pt;
}
.nulo {
	color: #999;
}
.alert {
	color: #F90;
}
.ida {
	color:#F60;
	font-weight:bold;
}
.vuelta {
	color:#60F;
	font-weight:bold;
}

.tbold {
	font-weight: bold;
}

.tachado {
	text-decoration: line-through;
}

.fixed_headers {
  table-layout: fixed;
  border-collapse: collapse;
}
.fixed_headers th {
  text-decoration: underline;
}
.fixed_headers th,
.fixed_headers td {
  padding: 5px;
  text-align: left;
}
.fixed_headers td:nth-child(1),
.fixed_headers th:nth-child(1) {
  min-width: 200px;
}
.fixed_headers td:nth-child(2),
.fixed_headers th:nth-child(2) {
  width: 100%;
}
.fixed_headers td:nth-child(3),
.fixed_headers th:nth-child(3) {
  width: 100%;
}

.fixed_headers thead tr {
  display: block;
  position: relative;
  font-weight:bold;
  color:#FC0;
}

.fixed_headers thead a:link {
	color: #fff;
	text-decoration: none;
}

.fixed_headers tbody {
  display: block;
  overflow: auto;
  width: 100%;
  height:450px;
}
.fixed_headers tbody tr:nth-child(even) {
  background-color: #e9e9e9;
}
.old_ie_wrapper {
  height: 300px;
  width: 750px;
  overflow-x: hidden;
  overflow-y: auto;
}
.old_ie_wrapper tbody {
  height: auto;
}

a:link {
	color: #06F;
	text-decoration: none;
	font-weight: bold;
}
a:visited {
	text-decoration: none;
	color: #06F;
}
a:hover {
	text-decoration: none;
	color: #F00;
}
a:active {
	text-decoration: none;
	color: #06F;
}

a.tooltips{
  position: relative;
  display: inline;
  color:#000;
  text-decoration:none;
  font-weight:normal;
}

a.tooltipsReq{
  position: relative;
  display: inline;
  color:#F00;
  text-decoration:none;
  font-weight:normal;
}

a.tooltipsOpc{
  position: relative;
  display: inline;
  color:#090;
  text-decoration:none;
  font-weight:normal;
}
/*1*/
a.tooltips span {
  white-space: nowrap;
  position: absolute;
  max-width:500;
  padding-left:10;
  padding-right:10;
  color: #FFFFFF;
  background: #333333;
  height: 30px;
  line-height: 30px;
  text-align: center;
  visibility: hidden;
  border-radius: 6px;
}
a.tooltips span:after {
  content: '';
  position: absolute;
  top: 50%;
  right: 100%;
  margin-top: -8px;
  width: 0; height: 0;
  border-right: 8px solid #333333;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
}
a:hover.tooltips span {
  visibility: visible;
  opacity: 1;
  left: 100%;
  top: 50%;
  margin-top: -15px;
  margin-left: 15px;
  z-index: 999;
}

/*2*/
a.tooltipsReq span {
  white-space: nowrap;
  position: absolute;
  max-width:500;
  padding-left:10;
  padding-right:10;
  color: #FFFFFF;
  background: #333333;
  height: 30px;
  line-height: 30px;
  text-align: center;
  visibility: hidden;
  border-radius: 6px;
}
a.tooltipsReq span:after {
  content: '';
  position: absolute;
  top: 50%;
  right: 100%;
  margin-top: -8px;
  width: 0; height: 0;
  border-right: 8px solid #333333;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
}
a:hover.tooltipsReq span {
  visibility: visible;
  opacity: 1;
  left: 100%;
  top: 50%;
  margin-top: -15px;
  margin-left: 15px;
  z-index: 999;
}

/*3*/
a.tooltipsOpc span {
  white-space: nowrap;
  position: absolute;
  max-width:500;
  padding-left:10;
  padding-right:10;
  color: #FFFFFF;
  background: #333333;
  height: 30px;
  line-height: 30px;
  text-align: center;
  visibility: hidden;
  border-radius: 6px;
}
a.tooltipsOpc span:after {
  content: '';
  position: absolute;
  top: 50%;
  right: 100%;
  margin-top: -8px;
  width: 0; height: 0;
  border-right: 8px solid #333333;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
}
a:hover.tooltipsOpc span {
  visibility: visible;
  opacity: 1;
  left: 100%;
  top: 50%;
  margin-top: -15px;
  margin-left: 15px;
  z-index: 999;
}

.noaplica {
	text-decoration: line-through;
	color:#999;
}

a.noaplica {
  position: relative;
  display: inline;
  color:#000;
  text-decoration:none;
  font-weight:normal;
  text-decoration: line-through;
}

a.noaplica span {
  white-space: nowrap;
  position: absolute;
  max-width:500;
  padding-left:10;
  padding-right:10;
  color: #FFFFFF;
  background: #333333;
  height: 30px;
  line-height: 30px;
  text-align: center;
  visibility: hidden;
  border-radius: 6px;
}
a.noaplica span:after {
  content: '';
  position: absolute;
  top: 50%;
  right: 100%;
  margin-top: -8px;
  width: 0; height: 0;
  border-right: 8px solid #333333;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
}
a:hover.noaplica span {
  visibility: visible;
  opacity: 1;
  left: 100%;
  top: 50%;
  margin-top: -15px;
  margin-left: 15px;
  z-index: 999;
}
a.noaplica1 {  position: relative;
  display: inline;
  color:#000;
  text-decoration:none;
  font-weight:normal;
  text-decoration: line-through;
}
a.noaplica2 {  position: relative;
  display: inline;
  color:#000;
  text-decoration:none;
  font-weight:normal;
  text-decoration: line-through;
}
</style>
<meta charset="ISO-8859-1">
 
<title>Esquema AWS - Activia S.A.</title> 
<script type="text/javascript" src="http://www.activia.com.ar/jq/jquery-3.5.1.min.js"></script>
<script type="text/javascript"> 
        $(document).ready(function() {
			
				$("tr:even").css("background-color", "#fff");
			
                $('td:nth-child(2)').show();
                $('td:nth-child(3)').hide();
                
            $('a#definicion').click(function() {
                $('td:nth-child(2)').fadeIn();
                $('td:nth-child(3)').hide();
            });
            $('a#aplica').click(function() {
                $('td:nth-child(2)').hide();
                $('td:nth-child(3)').fadeIn();
            });
        });
    </script> 
</head> 
<body>
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody><tr>
    <td align="left" valign="middle"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgMAAAAaCAYAAAAqnV8tAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAC0JJREFUeNrsXY2R6jgMFjfXQF4JoYRsCaEEtoRsCVAClAAlQAmkBFLCUsJRAgfvSRet8H9sAoc1k4FlnUSWPkuyrSiTy+UCmTJlypQpU6b3pb+HXmCyzULMlMlC9fU44RFCxfWorkd3Pc5P3tcSj3bANSr87J6kTw3qrs1QTkqvhPP/BV0aTTBwdewHxwvMshgzPQndjMfqeiyfyHlIOiB/6wF9vF1j9gIOaY76mLDfVvi5dLwGtZ+NjJubqVxgcLN8g2Bgjn014XSBn7Y2t+BpPxLOa+xLjf0halmQuRxZ1r5j4uErAzUKLEfAj595zBMbv//zbKLGz0zPG7C9Em4ooCnQ6e0hfFXnlajEfq8NMiMnZpLJakQnd9PdDn3YVgR6VR4T7sHA7+jpOvNfQ6YxDFMmf2rFLDTT89HsxXBzRof4bpugnZgUqmbc3JmdDG3GWqXbIO8zjc7zmPAIBjJlypTp3QPMd6SOOfpWM5tt2fe9YcY7RjBQ4cQqZ7KNGAwUDAQuiVKUZERReJcIFK6JKMTPyRLtth79SpkEUzDZqfh0lSnpzaV9xe5rk4MvH7UDdrhsfYx1yHk+ckmhcz6e2sj8DqU6wbglbPnaDhd51x526ZG4CbVFMcaEzn6c8Z6lQU90n7mBp5NGLyHyqT3HAQwcg76+I9Z9Q3Hryq/VR/81hNvJ9jfD39fjH/iT+HHAvy/4m6QF/v7N2h+x/UEI4gL6pfODaC+vf8T/E1+V4vwjtv9m/ND3Gv/HeTvg95VCGdRn3i+6d2FROL/mRRyyr7f2O7w29WnF2nOZ3to0hn4fGY+69gW7/lHI4QJ9MpEvH3TtnWj/rdB7I3R0EHjRYWWuOW+j0ImvXIbo3GYAjmI8XTRYJz4OCn4XlvscDdekcXRh/fDVrct4JWzx8fqt0aWvvF2wNQZudLLR2SKV7Qrh0WQ/VKsilQGf5Egqh4AhFKeNo+2VdGIBiS/5+A6VPG0+C7DdyjImXGyiD7/OPjo4GLgGAiUyfotIPuDP/tvt+AV/9kO+xCkb6JNTpqz9JNIMY4UCWiIPE+Sr0BiMCvosYd7+jO0bXG6asn4t8R6NAOAX9pn36RP6jGXTstyMLWvNxMFBwsHDM6D32JbLdIq/bxQDg/q9Zv2e4gCW7amvX6wtyUlm/PrycUCgqq7dMaO30WBsaXGqlEQ0FTqhBCMYIJchOjfxfED8fQgZLjUzMNn+F/K/sgQELZiTLuXjXb66daEdYmst9D9T2ANfebtgy4SbTsj0KxJuTLO7Wlxjhr/vImDbZD9UDrWyzNBb8Zvsy2kgTmmp/0NhexeWYOCE160S+g6VPE0ykTN4U2DogltXfr189IQXHbo6+NsfS5cEwmvbBTL1y2F5pMIIRvd41YE5Q24YdY+YyPYlRjtfcL9fVOD/1uze8nwZde8M9z5if10SQDbYl6lDVCofx5IA2SL/rkudKpmY+l1gpMh19A+eOyQzWMWHTcY+slZhxXQetf+Efs/TVy6+Or84nL/DcfIB6u0f2UcTtshoTjVjk8YjlwF48qvTrQrLUr6+9sBH3q7Y8sUNXTc2blxsEb9nCLZ97IfO9tLEgOT8za4ZC6c2u09jZGrxNeQQKXDpDMvoIb5DJ88dXu/D0NdfGr274taHX6uP5nUGVCsDq1tQoDlUUZnLPglFS6meUqD9q62Gvxbcs/Vby1JT6zETOgXOmlT3/AK/Pc8TA4gL0T5eKcA1dB9MxUfJ9GILIkOSuUzntXjvcoBcUuh8jvg9e7bX9bEwzI46Znx1Y6lNgLEU9kDK2xVbvrjZey5B++LG9Z4h2PaxHzxB0CSbVtNGYmcITnW2t7CsttJqGm1F0TL6Du5zHUJ8h06eHVspUo0rm5N3wW0Iv042RRUMbBXL1XTsFaDZOTjaCtImNtkqnnUewcDZYuBcHEkJ9wUvHkk1hD2qKPu2ZzOCMiIftQMeQh9Rcjmv85RPap37ZmCXliXHTmPQpaMxLfN2iTA2JMhzkXcdaGtccNMmwI2LA6wTYlt3DZtcVfcpRZsYOFUFn5WD3NfQL43PMDigbZcmke/YCz3xSZUN86649eHXx0crnyY4XRr7QL226Sbb//Zx5owROraRZ5g2AZWg309K/Qz/HAFWiSDiEYVKKPqtxCCJce81Xn8jZjst3BcdScnHM1JMnRcBeCceQouXdIz/zjKDia3b4sXG2LtRp1iNKBTBQCHwowoGhuI0BtF2wRpXCVbMP8X0HZSzUAv/57PaFtPXUaVFFx897NHCW27BNSBYIwMEmBoHbQPqvZOUTrF2WP6KTbQvQ3uD/LEN+l/KPh9ZJCyXmS4RjMIMwVexT+oX7U2m5uPZaEydyxm2aTvrbJnFbMSMpFLMPJ5Bt88i73ehk5g9qx4HpK0mHgzUoM4vGoLT2LRlM+U2ge/Yw/1TJDTGYgWuPvxS/oDVR8eqMyBLGDdoaBp4XAEIclyPJurjGFUbqZb4NPEM6aRYBaAIe/9APmLS+UV1zmlIvXxy6pViVrEfAWOvIO8xqAiQ+1DnyvMGOtBv83YMP6a6GLHf63COfG5M39FigCqDpJjYDeFX6aOvk/nmOqn/7aP/SgTgLQMygPnZVZ3z4ee7dHSs/flyRCNZCHk90pHumcx9+XDBgy6RCSKcNzSHJbbOfftqS3L1ue9cBAP7B2DM1x6UkbEVqoMaHl+dkGP1EdgGuN/L1/Wb5zOo8l5i4RQM9wgZuxzPsX0HrXTwPI/CATeuuI3Fr/TRyYKBUkRhJ/Crv++aKMLblzBOff8zDH9Jji1p0TUoGDsIKjz05YKH0GQo03l14Gwrts6H9rUDfRU4Xwc4Z/roHoAxX3twToCtENw8OvBuFLPt1NiWTqeA+1wAzgtv0ybCKZfH0GBsDj9XOlP4Dh5k1+BWcdEVt7H4lT5aGQyUt8qCpuPW6FZ0CL+rqoXt2OwRoE822ylmIroCEVvo3+bH228U99yjsHca4FUJVw5oj6hmRpP61QhDYovEFwpl2e4N0L9hjfraQF98pIJhFfFkxnYB/RMG20A+OB4awR9vt4W+yEoleDAFirRHthC809voOvB/vWpsnavwTjxzGa6gT+BU9VFV2MbVGdI+Zs343j8AY6T/lZAhXbMeIG9XbIGHTOkZ8KG4MQXzEt8N9q8VjiQ1tmXQoQpIZDDZGALJEJwWCjt0APvrlTkvOr8k8xpS+A6a5dea1TbTmLDh1off0iIL7qOVwUADfXUl3UEK28HP8rRUtvZGM/i5P/PJOsFLm5ag3sdZKtpvQP/YExVr2MF9Wd9jxOhUxyfJgZ5n5e9AP4C5clYHfZEI4vnbYWWEKrPN8b7U1wb6TNIa1KWhXaNoXr6S+reAn4U4QvggPGzYOXRexRwknXsUPKwsA+sL+hKvdB4NgNkT6FwVDFBVNi7DEtR5N9THWvSR+Dl4BjYrUCc5pcLYJ/S5JxxXnWJ8+8rbBVsm3MwVuEmZk1Qp8L1Bfj4fjG2u94rhwmS7aEJ3ioRTacOpiNCnw8oA918Xhe5VhbZi+w5e8MnnMVpX3Lrya/XRl6b3vT8qEIbQZHsXudhemFCyAKBjQgMNkH1e3AGKWdmj9vhMfJaOS4xDXnpjeqHH0L1OPnOxLXn58uH6kiufFyXpZNo+oc59ZWjr4wnSLWWnwFjIi3lc5e37AjUd3lK+dIzbPl+Mp8R2Shtp00cpZuOh8g/R4Ri+AwJtog+/SlnwCoSxgoGYAyJTpkyZ3oWy7cs0GtnKEWfKlClTpkyZ3ohyMJApU6ZMmTLlYCBTpkyZMmXK9M7095Pwsc+qyJQp0xtStn2ZnoIGJxBmypQpU6ZMmV6b/hVgABOsMqOKW+vBAAAAAElFTkSuQmCC" width="515" height="26"><br>
    <span style="padding-left:4">Versión 2.0 | Actualizado 20/07/2021 - 13:20</span></td>
    <td align="left" valign="middle">&nbsp;</td>
    <td align="left" valign="middle">&nbsp;</td>
    <td align="left" valign="middle">&nbsp;</td>
    <td align="left" valign="middle">&nbsp;</td>
    <td align="left" valign="middle">&nbsp;</td>
    <td align="right" valign="middle" style="padding-left:10"><a href="http://www.activia.com.ar"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAAgCAYAAADAHpCrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACU1JREFUeNrsXAtwFdUZ/vO6NyEJeZAQEnCUoOUxHaBISctTCLbFjECnhqHTUSNYWiylOliFgtaKkVqLVae2FIwGi8hQOgVsaSe2UKQPeZSGABVG0lszBBISA3mQxw1J+v27/zUny+7evZFAc7v/zHfv3t3z2HPOd/7XbhJBTqXIl4LPuUAuMA7IBhLkahPgA8qAfcBOWjz8I3Il7CTCAVHG4HMVsADwOGy3Hfg1UAjinHCn+f+BMEW+eHw+C3wLiOpl+13Az4GVIE6jO93hSpgi3yjREGOuUT9ngPkgzUl3ysONMEW+HHz+Fki7xn3VA18EaQ660x4uhCnyjcbnu31AFpU0U1xNEw6E0X2WQ9fQDNmZpwmuT9M/JVI5fvY6kIXlVuBH7tT3Zw2jh85lTqKh7MRoWpgdT60dXVTX1knFHzT1NnpiLVPqLkH/kmj5XuM0dN44JY1ys2I/XvXSj/xUWufvDVEfB756oycgK2PoAHzxgLxAC9B0rrryiksNq4XTM7hV5CApd9+tCbR5ehrV+zspyaNbswPVrTTjd1Uaeazk9jQPJcbo5T9sukK+Rm09+CMLWqYmxAXmhkqAm4A4IA8LfNxh3XFapEY0DfgUkA5UAJeATtIz18Nk8/wbOA0cATiyextoVZrj+7dSrwMN5v593OMc9M8bs0DaSQTuBF6TPlnagM+h7EWH4+HxvwckAf8CvgLslrlhOYu2ZgdpI1MCnU65r8moc9lOw8xzQpaMuChaPymFTte3U15JNf1jXpZGmmkZsfTQ6ER65X1zH3YI6u2/K5PioyPoFOrm7D5v7PvVEEnOicRc5fdPgGCTwo80VgOTZFJ+ATwF/BOT02lSfphov+8A9wOzgAcBXsg60UQ8qZzR3iYkZHkY2CzEi5aFHCSLQVJvhBzzuXLgMeDPQIycXwssczgXXG6s3NO3MZYW3HsHjkfK9f84aOMl8SsDwpr/STvC5DqxH69PS6MUbxTNKblA5dAQDx+s086xPD8plUoqW+mDhvar6q4Zn6yR5RK00tx3LlBDe4/1mR0KYTAZvHMKgV2yK2/n+8f5+zBZb5iUjxJyLA7sdOBulC236wfXz/KwUH8Dvpfj9z6be6pWflag7CXRWGZSqRxXoywv7t/QxqOycCxL8Xszrh0OMhfpsglY0+UrY1L7OBukjbu5LvAc8E0h+GM4vxXtnbKKksYGWyjWIHOGxVHhsUt0pLZNO8fO7p6zLdpxXFQEFcNURRnSgKOTY2jJyATqhL1asK/GjFBjQzRFTIpm4Ouy89vk8su4PtSk2hMKWS6L+Sp32ifKNgKFDhx4s2MzaVaO25R+XsbXW8qavIbxxARp6xVZ4BWov1c5r6r6piCE20T6w+JVoh1JfLlf4nq0FWGy7e7q0yke+jE0yFE4t8+U1ve4tuQvtZrmYJk82Evf/0xyd8MgzyY4yDE4ePzIRXqnssWs+REhmCLehXcwWTBBNcBJIQTJxPEkRxic2RVK/W2o47vBPmODclxvuLZEfCZt2kV7WC32fNEM24VsqrQ6vJci8QEL0EYXUIzjPXJtIvHzPwvCJFi1yI7qjlnp2uLf/24ttXf23ECVzR207O/dbzGsHpdM04foEdTyMQNpSoaXfvNhM60/Xm/VhQdOt8eBdmHT8wyTAgN7W7n0gjikLF8wEGSUYWxH/weCjE4bbcbaYIGieVZj3ONN5oJ9IjaVpxTtaUWYJov5/AabZvF7KgykDSzWUyg32S5xdzUFpw6ikUkxtBaa5cRFP+Wke6m94GbqWnSLhoLbEujN8suUsqVCw6A3K+hwTRuNQp11E1PoDEzQAwdqg+rpIGThKG4Hz6miNgOT3CFRR2CS16F8jkVTsdeBEEmfpDLGU6aMkU1CMcbjNRT7qfRzj5As1PmcIP7SLqPfh9+VSv/s/21D+VQjYUw7ZQ2RPzyejtX56bkynXQHQYY1R7v9uRdzUmnogCjNLAXQDna8MSNNc5Tz99ZoIbiN+BFW+20GFyFRxy3MfvYpTCb5lGKaomWQyRJmquHhzD4iSeJViVBriQxWFuPZIKExyzg1YsG4WAMtBL4rJtlMBijHCSab71eihZZa9M+maaf8vMlo6iMl39BDZmbGaiF0BxZ/0YGepuh5mJc/ndO1HofVG6em9Rj5qrFJ9Nk0L62E3+IgoRfMAV0pqrMYAymxKfeC5EtIyFUsWme9UiYPA8/tA8JEOdXYkGSH2ohD+NpAmIv7nggMIf3doj+Iw2tt5u03X7Y4yudt2liqRHrzVFPPAyxTS3Lqf8eswRQNx2XT6UbN2e1hhJlEcHYbJTy+C9HTgyP1TTY+1UNPjk/SHNyXTjY4mewyG+2SJ34LO0mPBFHlbJoekBAzMEjObzzNHr+yo3ei3fxQIjNgIWD3jC3eghBmou74OJvxcDLzIYWQmyXBx8eL2Em16WOQcpyiHP9ANt8BactuPqsM/uAPMQd3BAizV3Vyd8/OoFRvpPas6OlS83RCRdMVWnGoOxnJ2ui2gTG0ZUY6NcAmFTj3W/5osVD8msVWub9CyW0Es/8nRNMEhB+mTpfw+16JQHjBtqP9/cC9ZqE4znnYyQaekLzNW4Zw2CjpFotlJmp/g+1CZ4yHTcfv5ScTdg5rmyCaQcuxKseZMqZ8xWw/GoRwAXkd+KvBn8mKFnvFdtOTHhtJy97To57LWPjzzR2Wrb0K7bNg+ACanRWnEe3w3EzNRC2G9jlnU8+QWt9lsmDsnK4j/aVyXqifhWAeCiXdHjANnIo/ignawskoIdCXgM/zruHucP6iZHBbREPESvLrGLtpTGrUt8uYtkpZUrK1dj6MWpY1wAWb8o+IifVL1najgznwK334Mb6bpR0+dwRjOeTQAe9C3eWyYQI5kbWBp9VbqRcPAjkxd/zLQz9O2O2vaqWZe6qcapdtcHhv6MNHSQYOFEeRJ8Vv9xzFlV683mCUr42I154XecGa7b5mLZR2IO7rDf2aMDppODZffp363QCyLHWnv/+JGgZ+T3IXfS1nJIJxpV8TZvFwtt33SBjbV8IZwPnu+7zhoWGYNBxG5vURaQJ/ZuL+xUDYEEYnDT/Mm3qNzROboSnu3ySFI2F00vDzGX47jR+dd3yC9rskjzLB1SzhFiVZifvH+K6ERJhu4tj9uw92mPkhpvvvPsJc/ivAAJF2NagRCO12AAAAAElFTkSuQmCC" width="140" height="32"></a></td>
  </tr>
</tbody></table>
<br>
<br>
<hr size="1">
<p><a href="#Financiadoras"><br>
  <br>
  <br>
</a><strong>Introducción
</strong></p>
<p>Para que los prestadores de salud puedan validar las transacciónes en las diferentes financiadoras, Activia provee un servicio de validación por 
  medio del consumo de web services.</p>
<p>Para llevar a cabo el proceso de validación, el prestador deberá conectarse a una URL provista por Activia y consumir un método del web 
  service, aguardando su respuesta.<br>
  El método a consumir es:<br>
  <br>
  <span style="padding-left:30; font-weight:bold; color:#C00">ExecuteFileTransactionSL</span> (Salud)<br>
  <span style="padding-left:30; font-weight:bold; color:#C00">ExecuteFileTransactionAO</span> (Odontología)<br>
  <br>
  La firma de este método tiene dos parámetros:</p>
<p> <span style="padding-left:30"><strong>Pos:</strong> string y que se deberá informar con el valor ‘0000’</span><br>
  <span style="padding-left:30"><strong>FileContent: </strong>Este es un string con formato xml y contendrá el mensaje transaccional a validar.</span></p>
<p> Ejemplo:</p>
<p><span style="padding-left:30; font-weight:bold; color:#C00">Respuesta = ExecuteFileTransactionSL(“0000” as string, archivoxml as string)</span></p>
<p><a name="esquema"></a><br>
<span class="tbold">Estructura del mensaje XML:</span></p>
<table width="100%" border="0" align="center" cellpadding="5" cellspacing="0" class="fixed_headers" id="TablaXML">
  <thead>
    <tr>
      <td valign="middle" bgcolor="#000000">Campo</td>
      <td valign="middle" bgcolor="#000000">Definición del campo [ <a href="#esquema" id="aplica">ver cuándo aplica</a> ]</td>
      <td valign="middle" bgcolor="#000000">Aplica en:<span class="nulo"> (</span><span class="noaplica">No aplica</span><span class="nulo"><span class="tbold"> / </span></span><span class="requerido" style="color: #F00">Requerido</span><span class="nulo"><span class="tbold"> / <span class="opcional" style="color: #090">Opcional</span></span>) </span>[ <a href="#esquema" id="definicion">ver definición</a> ]</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="200"><a class="tooltips" href="#">Mensaje <span>Nivel 1</span></a></td>
      <td>&nbsp;</td>
      <td><a class="tooltipsReq" href="#TT01A">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltipsReq" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02E">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02I">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02Q">02Q<span>Registración de Cirugía</span></a> <span class="nulo">| <a class="tooltipsReq" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> |</span> <a class="tooltipsReq" href="#TT03A">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT04A">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:16"><a class="tooltips" href="#">EncabezadoMensaje <span>Nivel 2</span></a></td>
      <td>&nbsp;</td>
      <td><a class="tooltipsReq" href="#TT01A">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltipsReq" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02E">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02I">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02Q">02Q<span>Registración de Cirugía</span></a> <span class="nulo">| <a class="tooltipsReq" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> |</span> <a class="tooltipsReq" href="#TT03A">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT04A">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">VersionMsj <span>Nivel 3</span></a> <a class="tooltips" href="#Aclaraciones" style="font-weight:bold">[ ! ]<span style="font-weight:normal">Valor actual = ACT20</span></a></td>
      <td>Versión Del Mensaje.</td>
      <td><a class="tooltipsReq" href="#TT01A">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltipsReq" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02E">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02I">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02Q">02Q<span>Registración de Cirugía</span></a> <span class="nulo">| <a class="tooltipsReq" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> |</span> <a class="tooltipsReq" href="#TT03A">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT04A">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:32">&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">Rta <span>Nivel 3</span></a></td>
      <td>&nbsp;</td>
      <td><a class="tooltips" href="#TT01A">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltips" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02E">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02I">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02Q">02Q<span>Registración de Cirugía</span></a> <span class="nulo">| <a class="tooltips" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> |</span> <a class="tooltips" href="#TT03A">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT04A">04A<span>Anulación de Transacción</span></a><span class="nulo"> |</span> <span class="noaplica"><strong>Ida</strong></span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">CodRtaGeneral <span>Nivel 4</span></a></td>
      <td>Código de aceptación o rechazo general de la transacción. <strong>00</strong> = OK, Autorizado -
      <strong>01</strong> = ERROR, Error Validacion</td>
      <td><a class="tooltips" href="#TT01A">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltips" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02E">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02I">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02Q">02Q<span>Registración de Cirugía</span></a> <span class="nulo">| <a class="tooltips" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> |</span> <a class="tooltips" href="#TT03A">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT04A">04A<span>Anulación de Transacción</span></a><span class="nulo"> |</span> <span class="noaplica"><strong>Ida</strong></span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">DescripcionRtaGeneral <span>Nivel 4</span></a></td>
      <td>Descripción general de la respuesta</td>
      <td><span class="nulo">Sujeto a la política de respuesta de cada Financiador |</span><span class="tbold"><span class="nulo"> <strong class="noaplica">Ida</strong> /</span> <span class="vuelta">Vuelta</span></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">MensajeDisplay <span>Nivel 4</span></a></td>
      <td>Mensaje para el usuario a ser mostrado en pantalla (en la actualidad este mensaje es de 40 posiciones)</td>
      <td><a class="tooltips" href="#TT01A">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltips" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02E">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02I">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02Q">02Q<span>Registración de Cirugía</span></a> <span class="nulo">| <a class="tooltips" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> |</span> <a class="tooltips" href="#TT03A">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT04A">04A<span>Anulación de Transacción</span></a><span class="nulo"> |</span> <span class="noaplica"><strong>Ida</strong></span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">MensajePrinter <span>Nivel 4</span></a></td>
      <td>Mensaje para el usuario a ser impreso (en la actualidad este mensaje es de 80 posiciones). Mensaje principal</td>
      <td><a class="tooltips" href="#TT01A">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltips" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02E">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02I">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02Q">02Q<span>Registración de Cirugía</span></a> <span class="nulo">| <a class="tooltips" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> |</span> <a class="tooltips" href="#TT03A">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT04A">04A<span>Anulación de Transacción</span></a><span class="nulo"> |</span> <span class="noaplica"><strong>Ida</strong></span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">RtaAdicional <span>Nivel 3</span></a></td>
      <td>&nbsp;</td>
      <td><span class="nulo">Sujeto a la política de respuesta de cada Financiador |</span><span class="tbold"><span class="nulo"> <strong class="noaplica">Ida</strong> /</span> <span class="vuelta">Vuelta</span></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">CodigoRtaAdicional <span>Nivel 4</span></a><a class="tooltips" href="#Inconsistencias" style="font-weight:bold">[ ! ]<span style="font-weight:normal">(Clic para ver tabla de inconsistencias)</span></a></td>
      <td>Código de inconsistencia</td>
      <td><span class="nulo">Sujeto a la política de respuesta de cada Financiador |</span><span class="tbold"><span class="nulo"> <strong class="noaplica">Ida</strong> /</span> <span class="vuelta">Vuelta</span></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">Mensaje <span>Nivel 4</span></a></td>
      <td>Mensaje adicional</td>
      <td><span class="nulo">Sujeto a la política de respuesta de cada Financiador |</span><span class="tbold"><span class="nulo"> <strong class="noaplica">Ida</strong> /</span> <span class="vuelta">Vuelta</span></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">Coseguro <span>Nivel 4</span></a></td>
      <td>Coseguro total a abonar por el afiliado por el total de la transacción</td>
      <td><span class="nulo">Sujeto a la política de respuesta de cada Financiador |</span><span class="tbold"><span class="nulo"> <strong class="noaplica">Ida</strong> /</span> <span class="vuelta">Vuelta</span></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">MontoFinanciador <span>Nivel 4</span></a></td>
      <td>&nbsp;</td>
      <td><span class="nulo">Sujeto a la política de respuesta de cada Financiador |</span><span class="tbold"><span class="nulo"> <strong class="noaplica">Ida</strong> /</span> <span class="vuelta">Vuelta</span></span></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">GeneradorRespuesta <span>Nivel 3</span></a></td>
      <td>&nbsp;</td>
      <td><span class="nulo">Sujeto a la política de respuesta de cada Financiador |</span><span class="tbold"><span class="nulo"> <strong class="noaplica">Ida</strong> /</span> <span class="vuelta">Vuelta</span></span></td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">NroReferencia <span>Nivel 3</span></a></td>
      <td>Número De Referencia o transacción devuelto por el validador</td>
      <td><a class="tooltips" href="#TT01A">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltips" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02E">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02I">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02Q">02Q<span>Registración de Cirugía</span></a> <span class="nulo">| <a class="tooltips" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> |</span> <a class="tooltips" href="#TT03A">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT04A">04A<span>Anulación de Transacción</span></a><span class="nulo"> |</span> <span class="noaplica"><strong>Ida</strong></span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">NroReferenciaCancel <span>Nivel 3</span></a></td>
      <td>En la anulación (04A), número de referencia de la cancelación que necesita el validador para identificar la transacción a anular: debe enviarse el IdMsj de la transacción original.<br>
        En el Informe de Diagnóstico (02Z), el número de la transacción cuyo diagnóstico se está informando.</td>
      <td><a class="noaplica" href="#TT01A" style="color:#999">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="noaplica" href="#TT01B" style="color:#999">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT01C" style="color:#999">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02A" style="color:#999">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02B" style="color:#999">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02C" style="color:#999">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02D" style="color:#999">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02E" style="color:#999">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02I" style="color:#999">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02L" style="color:#999">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02P" style="color:#999">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02Q" style="color:#999">02Q<span>Registración de Cirugía</span></a> <span class="nulo">|</span><span class="nulo"> <a class="tooltipsReq" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a></span> <span class="nulo">|</span> <a class="noaplica" href="#TT03A" style="color:#999">03A<span>Consulta de Resolución</span></a> <span class="nulo">| </span><a class="tooltipsReq" href="#"> 04A<span>Anulación de Transacción</span></a><span class="nulo"> |</span><span class="ida"> Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">TipoMsj <span>Nivel 3</span></a></td>
      <td>Tipo de Mensaje:  <strong>OL</strong> = Directo, <strong>RV</strong> = Reverso</td>
      <td><a class="tooltipsReq" href="#TT01A">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltipsReq" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02E">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02I">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02Q">02Q<span>Registración de Cirugía</span></a> <span class="nulo">| <a class="tooltipsReq" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> |</span> <a class="tooltipsReq" href="#TT03A">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT04A">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">TipoTransaccion <span>Nivel 3</span></a></td>
      <td>Tipo de transacción: códigos para cada una de las transacciónes disponibles</td>
      <td><a class="tooltipsReq" href="#TT01A">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltipsReq" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02E">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02I">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02Q">02Q<span>Registración de Cirugía</span></a> <span class="nulo">| <a class="tooltipsReq" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> |</span> <a class="tooltipsReq" href="#TT03A">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT04A">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">IdMsj <span>Nivel 3</span></a></td>
      <td>Identificación Del Mensaje: N° de mensaje interno del sistema que emite la transacción</td>
      <td>(opcional)</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">InicioTrx <span>Nivel 3</span></a></td>
      <td>&nbsp;</td>
      <td><a class="tooltipsReq" href="#TT01A">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltipsReq" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02E">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02I">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02Q">02Q<span>Registración de Cirugía</span></a> <span class="nulo">| <a class="tooltipsReq" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> |</span> <a class="tooltipsReq" href="#TT03A">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT04A">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">FechaTrx <span>Nivel 4</span></a></td>
      <td>Fecha de la transacción (Formato AAAAMMDD)</td>
      <td><a class="tooltipsReq" href="#TT01A">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltipsReq" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02E">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02I">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02Q">02Q<span>Registración de Cirugía</span></a> <span class="nulo">| <a class="tooltipsReq" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> |</span> <a class="tooltipsReq" href="#TT03A">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT04A">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">HoraTrx <span>Nivel 4</span></a></td>
      <td>Hora de la transacción (Formato HHMM, 24 horas)</td>
      <td><a class="tooltipsReq" href="#TT01A">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltipsReq" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02E">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02I">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02Q">02Q<span>Registración de Cirugía</span></a> <span class="nulo">| <a class="tooltipsReq" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> |</span> <a class="tooltipsReq" href="#TT03A">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT04A">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">Terminal <span>Nivel 3</span></a></td>
      <td>&nbsp;</td>
      <td><a class="tooltipsReq" href="#TT01A">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltipsReq" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02E">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02I">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02Q">02Q<span>Registración de Cirugía</span></a> <span class="nulo">| <a class="tooltipsReq" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> |</span> <a class="tooltipsReq" href="#TT03A">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT04A">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">TipoTerminal <span>Nivel 4</span></a></td>
      <td>Tipo: <strong>PC</strong> ; <strong>IVR</strong> ; <strong>POS</strong></td>
      <td><a class="tooltipsReq" href="#TT01A">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltipsReq" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02E">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02I">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02Q">02Q<span>Registración de Cirugía</span></a> <span class="nulo">| <a class="tooltipsReq" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> |</span> <a class="tooltipsReq" href="#TT03A">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT04A">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">NumeroTerminal <span>Nivel 4</span></a></td>
      <td>Número o identificación única que identifica al lugar físico. Este número será provisto por Activia</td>
      <td><a class="tooltipsReq" href="#TT01A">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltipsReq" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02E">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02I">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02Q">02Q<span>Registración de Cirugía</span></a> <span class="nulo">| <a class="tooltipsReq" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> |</span> <a class="tooltipsReq" href="#TT03A">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT04A">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">Software <span>Nivel 3</span></a></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">CodigoSoft <span>Nivel 4</span></a><a class="tooltips" href="#Aclaraciones" style="font-weight:bold">[ ! ]<span style="font-weight:normal">Solicitar a Activia el código de soft</span></a></td>
      <td>Este código será provisto por Activia para identificar el soft que emite la transacción</td>
      <td><a class="tooltipsReq" href="#TT01A">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltipsReq" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02E">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02I">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02Q">02Q<span>Registración de Cirugía</span></a> <span class="nulo">| <a class="tooltipsReq" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> |</span> <a class="tooltipsReq" href="#TT03A">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT04A">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">NombreSoftware <span>Nivel 4</span></a></td>
      <td>Nombre del sistema de gestión o aplicación que genera la transacción en el prestador</td>
      <td><a class="tooltipsReq" href="#TT01A">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltipsReq" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02E">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02I">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02Q">02Q<span>Registración de Cirugía</span></a> <span class="nulo">| <a class="tooltipsReq" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> |</span> <a class="tooltipsReq" href="#TT03A">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT04A">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">VersionSoftware <span>Nivel 4</span></a></td>
      <td>Versión del soft emisor de la transacción</td>
      <td>(opcional)</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">SetCaracteres <span>Nivel 3</span></a></td>
      <td>&nbsp;</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td style="padding-left:36"><a class="tooltips" href="#">Financiador <span>Nivel 3</span></a></td>
      <td>&nbsp;</td>
      <td><a class="tooltipsReq" href="#TT01A">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltipsReq" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02E">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02I">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02Q">02Q<span>Registración de Cirugía</span></a> <span class="nulo">| <a class="tooltipsReq" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> |</span> <a class="tooltipsReq" href="#TT03A">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT04A">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">CodigoFinanciador <span>Nivel 4</span></a> <a class="tooltips" href="#Financiadoras" style="font-weight:bold">[ ! ]<span style="font-weight:normal">Ver tabla financiadoras</span></a></td>
      <td>Código de identificación de la financiadora para la cual se realiza la transacción. Este código se toma de la tabla financiadoras adjunta en este documento. En caso de no figurar se debe solicitar a Activia.</td>
      <td><a class="tooltipsReq" href="#TT01A">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltipsReq" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02E">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02I">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02Q">02Q<span>Registración de Cirugía</span></a> <span class="nulo">| <a class="tooltipsReq" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> |</span> <a class="tooltipsReq" href="#TT03A">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT04A">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">SystemTrace <span>Nivel 4</span></a></td>
      <td class="nulo">(Aún no definido)</td>
      <td class="nulo">(Aún no definido)</td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">AprobacionParcial <span>Nivel 4</span></a></td>
      <td>Indica si el financiador maneja <strong>aprobación parcial <span><a class="tooltips" href="#AprobacionParcial" style="font-weight:bold">[ ! ]<span style="font-weight:normal">Acerca del tipo de aprobación</span></a></span></strong>: <strong>1</strong> = Si, <strong>0</strong> = No</td>
      <td><a class="tooltips" href="#TT01A">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltips" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02E">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02I">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02Q">02Q<span>Registración de Cirugía</span></a> <span class="nulo">| <a class="tooltips" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> |</span> <a class="tooltips" href="#TT03A">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT04A">04A<span>Anulación de Transacción</span></a><span class="nulo"> |</span> <span class="noaplica"><strong>Ida</strong></span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">Prestador <span>Nivel 3</span></a></td>
      <td>&nbsp;</td>
      <td><a class="tooltipsReq" href="#TT01A">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltipsReq" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02E">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02I">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02Q">02Q<span>Registración de Cirugía</span></a> <span class="nulo">| <a class="tooltipsReq" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> |</span> <a class="tooltipsReq" href="#TT03A">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT04A">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">CuitPrestador <span>Nivel 4</span></a></td>
      <td>CUIT del prestador sin guiones ni espacios</td>
      <td><a class="tooltipsReq" href="#TT01A">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltipsReq" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02E">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02I">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02Q">02Q<span>Registración de Cirugía</span></a> <span class="nulo">| <a class="tooltipsReq" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> |</span> <a class="tooltipsReq" href="#TT03A">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT04A">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">SucursalPrestador <span>Nivel 4</span></a></td>
      <td>Identificador de la sucursal <span class="nulo">(Valor y formato aún no definidos)</span></td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">RazonSocial <span>Nivel 4</span></a></td>
      <td>Razón Social o nombre de fantasía del prestador</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">CodigoPrestador <span>Nivel 4</span></a></td>
      <td class="nulo">(Aún no definido)</td>
      <td class="nulo">(Aún no definido)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">Direccion <span>Nivel 4</span></a></td>
      <td>Domicilio de la sucursal <span class="nulo">(Valor y formato aún no definidos)</span></td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">CodigoParaFinanciador <span>Nivel 4</span></a></td>
      <td class="nulo">(Aún no definido)</td>
      <td class="nulo">(Aún no definido)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">NroTransaccionInterno <span>Nivel 4</span></a></td>
      <td>Número interno de transacción del prestador que envía la solicitud</td>
      <td>(opcional)</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td style="padding-left:16"><a class="tooltips" href="#">EncabezadoAtencion <span>Nivel 2</span></a></td>
      <td>&nbsp;</td>
      <td><a class="tooltipsReq" href="#TT01A">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltipsReq" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02E">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02I">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02Q">02Q<span>Registración de Cirugía</span></a> <span class="nulo">| <a class="tooltipsReq" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> |</span> <a class="tooltipsReq" href="#TT03A">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT04A">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">Efector <span>Nivel 3</span></a></td>
      <td>&nbsp;</td>
      <td>(opcional)</td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">ApellidoEfector <span>Nivel 4</span></a></td>
      <td>Apellido del profesional que efectúa la práctica</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">NombreEfector <span>Nivel 4</span></a></td>
      <td>Nombre del profesional que efectúa la práctica</td>
      <td>(opcional) <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">ProvinciaEfector <span>Nivel 4</span></a><a class="tooltips" href="#Provincias" style="font-weight:bold">[ ! ]<span style="font-weight:normal">(Clic para ver tabla de códigos)</span></a></td>
      <td>Provincia: letra de las patentes viejas</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">TipoMatriculaEfector <span>Nivel 4</span></a></td>
      <td>Tipo Prescriptor: <strong>M </strong>= Médico; <strong>O </strong>= Odontólogo</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">NroMatriculaEfector <span>Nivel 4</span></a></td>
      <td>Número de matrícula</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">CuitEfector <span>Nivel 4</span></a></td>
      <td>CUIT del profesional que efectúa la práctica</td>
      <td>(opcional)</td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">EspecialidadEfector <span>Nivel 4</span></a></td>
      <td>Especialidad del profesional que efectúa la práctica</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">CodParaFinanciadorEfect <span>Nivel 4</span></a></td>
      <td>Código para el Financiador</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">Prescriptor <span>Nivel 3</span></a></td>
      <td>&nbsp;</td>
      <td><a class="noaplica" href="#TT01A" style="color:#999">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="noaplica" href="#TT01B" style="color:#999">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT01C" style="color:#999">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">| </span><a class="tooltipsOpc" href="#">02A<span>Registración de Prestación</span></a><span class="nulo"> |</span> <a class="noaplica" href="#TT02B" style="color:#999">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02C" style="color:#999">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02D" style="color:#999">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02E" style="color:#999">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02I" style="color:#999">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02L" style="color:#999">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02P" style="color:#999">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02Q" style="color:#999">02Q<span>Registración de Cirugía</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02Z" style="color:#999">02Z<span>Envío de Diagnóstico</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT03A" style="color:#999">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT04A" style="color:#999">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">FechaReceta <span>Nivel 4</span></a></td>
      <td>Fecha de prescripción / emisión de la receta (Formato AAAAMMDD)</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">ApellidoPrescriptor <span>Nivel 4</span></a></td>
      <td>Apellido del profesional que prescribe la práctica</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">NombrePrescriptor <span>Nivel 4</span></a></td>
      <td>Nombre del profesional que prescribe la práctica</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">ProvinciaPrescriptor <span>Nivel 4</span></a><a class="tooltips" href="#Provincias" style="font-weight:bold">[ ! ]<span style="font-weight:normal">(Clic para ver tabla de códigos)</span></a></td>
      <td>Provincia: letra de las patentes viejas</td>
      <td><a class="noaplica" href="#TT01A" style="color:#999">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="noaplica" href="#TT01B" style="color:#999">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT01C" style="color:#999">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">| </span><a class="tooltipsOpc" href="#">02A<span>Registración de Prestación</span></a><span class="nulo"> |</span> <a class="noaplica" href="#TT02B" style="color:#999">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02C" style="color:#999">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02D" style="color:#999">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02E" style="color:#999">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02I" style="color:#999">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02L" style="color:#999">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02P" style="color:#999">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02Q" style="color:#999">02Q<span>Registración de Cirugía</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02Z" style="color:#999">02Z<span>Envío de Diagnóstico</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT03A" style="color:#999">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT04A" style="color:#999">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">TipoPrescriptor <span>Nivel 4</span></a></td>
      <td>Tipo Prescriptor: <strong>M </strong>= Médico; <strong>O</strong> = Odontólogo</td>
      <td><a class="noaplica" href="#TT01A" style="color:#999">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="noaplica" href="#TT01B" style="color:#999">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT01C" style="color:#999">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">| </span><a class="tooltipsOpc" href="#">02A<span>Registración de Prestación</span></a><span class="nulo"> |</span> <a class="noaplica" href="#TT02B" style="color:#999">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02C" style="color:#999">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02D" style="color:#999">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02E" style="color:#999">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02I" style="color:#999">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02L" style="color:#999">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02P" style="color:#999">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02Q" style="color:#999">02Q<span>Registración de Cirugía</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02Z" style="color:#999">02Z<span>Envío de Diagnóstico</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT03A" style="color:#999">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT04A" style="color:#999">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">NroMatriculaPrescriptor <span>Nivel 4</span></a></td>
      <td>Número de matrícula</td>
      <td><a class="noaplica" href="#TT01A" style="color:#999">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="noaplica" href="#TT01B" style="color:#999">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT01C" style="color:#999">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">| </span><a class="tooltipsOpc" href="#">02A<span>Registración de Prestación</span></a><span class="nulo"> |</span> <a class="noaplica" href="#TT02B" style="color:#999">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02C" style="color:#999">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02D" style="color:#999">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02E" style="color:#999">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02I" style="color:#999">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02L" style="color:#999">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02P" style="color:#999">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02Q" style="color:#999">02Q<span>Registración de Cirugía</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02Z" style="color:#999">02Z<span>Envío de Diagnóstico</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT03A" style="color:#999">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT04A" style="color:#999">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">CuitPrescriptor <span>Nivel 4</span></a></td>
      <td>CUIT del profesional que prescribe la práctica</td>
      <td>(opcional)</td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">EspecialidadPrescriptor <span>Nivel 4</span></a></td>
      <td>Especialidad del profesional que prescribe la práctica</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">CodParaFinanciadorPres <span>Nivel 4</span></a></td>
      <td>Código para el Financiador</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">Beneficiario <span>Nivel 3</span></a></td>
      <td>&nbsp;</td>
      <td><a class="noaplica" href="#TT01A" style="color:#999">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="noaplica" href="#TT01B" style="color:#999">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT01C" style="color:#999">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02A" style="color:#999">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02B" style="color:#999">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02C" style="color:#999">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02D" style="color:#999">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02E" style="color:#999">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02I">02I<span>Ingreso de Internación</span></a><span class="nulo"> |</span> <a class="noaplica" href="#TT02L" style="color:#999">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02P" style="color:#999">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02Q" style="color:#999">02Q<span>Registración de Cirugía</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02Z" style="color:#999">02Z<span>Envío de Diagnóstico</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT03A" style="color:#999">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT04A" style="color:#999">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">TipoDocBeneficiario <span>Nivel 4</span></a><a class="tooltips" href="#TipoDocs" style="font-weight:bold">[ ! ]<span style="font-weight:normal">(Clic para ver tabla de códigos)</span></a></td>
      <td>Tipo de documento de identidad</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">NroDocBeneficiario <span>Nivel 4</span></a></td>
      <td>Número de documento de identidad</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">ApellidoBeneficiario <span>Nivel 4</span></a></td>
      <td>Apellido del afiliado</td>
      <td><a class="tooltips" href="#TT01A">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltips" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02E">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02I">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02Q">02Q<span>Registración de Cirugía</span></a> <span class="nulo">| <a class="tooltips" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> |</span> <a class="tooltips" href="#TT03A">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT04A">04A<span>Anulación de Transacción</span></a><span class="nulo"> |</span> <span class="noaplica"><strong>Ida</strong></span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">NombreBeneficiario <span>Nivel 4</span></a></td>
      <td>Nombre del afiliado</td>
      <td><a class="tooltips" href="#TT01A">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltips" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02E">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02I">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02Q">02Q<span>Registración de Cirugía</span></a> <span class="nulo">| <a class="tooltips" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> |</span> <a class="tooltips" href="#TT03A">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT04A">04A<span>Anulación de Transacción</span></a><span class="nulo"> |</span> <span class="noaplica"><strong>Ida</strong></span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">Sexo <span>Nivel 4</span></a></td>
      <td>Sexo del afiliado. <strong>M </strong>= Masculino - <strong>F </strong>= Femenino - <strong>N </strong>= Indeterminado</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">FechaNacimiento <span>Nivel 4</span></a></td>
      <td>Fecha de nacimiento del afiliado (Formato AAAAMMDD)</td>
      <td><span class="nulo">Sujeto a la política de respuesta de cada Financiador |</span><span class="tbold"><span class="nulo"> <strong class="noaplica">Ida</strong> /</span> <span class="vuelta">Vuelta</span></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">Parentesco <span>Nivel 4</span></a></td>
      <td>Parentesco del beneficiario respecto al titular. 
        <strong>T</strong> = Titular -
        <strong>C</strong> = Cónyuge -
        <strong>H</strong> = Hijo(a) -
        <strong>M</strong> = Madre -
        <strong>P</strong> = Padre -
      <strong>D</strong> = Dependiente</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">HistoriaClinica <span>Nivel 4</span></a></td>
      <td>Número del historia clínica del paciente de la transacción</td>
      <td><a class="noaplica" href="#TT01A" style="color:#999">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="noaplica" href="#TT01B" style="color:#999">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT01C" style="color:#999">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02A" style="color:#999">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02B" style="color:#999">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02C" style="color:#999">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02D" style="color:#999">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02E" style="color:#999">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02I">02I<span>Ingreso de Internación</span></a><span class="nulo"> |</span> <a class="noaplica" href="#TT02L" style="color:#999">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02P" style="color:#999">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02Q" style="color:#999">02Q<span>Registración de Cirugía</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02Z" style="color:#999">02Z<span>Envío de Diagnóstico</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT03A" style="color:#999">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT04A" style="color:#999">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">Credencial <span>Nivel 3</span></a></td>
      <td>&nbsp;</td>
      <td><a class="tooltipsReq" href="#TT01A">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltipsReq" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02E">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02I">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02Q">02Q<span>Registración de Cirugía</span></a> <span class="nulo">| <a class="tooltipsReq" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> |</span> <a class="tooltipsReq" href="#TT03A">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT04A" style="color:#999">04A<span>Anulación de Transacción</span></a><span class="nulo"> |</span><span class="ida"> Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">NumeroCredencial <span>Nivel 4</span></a></td>
      <td>Número embozado o impreso sin guiones ni espacios</td>
      <td><a class="tooltipsReq" href="#TT01A">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltipsReq" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02E">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02I">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02Q">02Q<span>Registración de Cirugía</span></a> <span class="nulo">| <a class="tooltipsReq" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> |</span> <a class="tooltipsReq" href="#TT03A">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT04A" style="color:#999">04A<span>Anulación de Transacción</span></a><span class="nulo"> | </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">Track <span>Nivel 4</span></a> <a class="tooltips" href="#Aclaraciones" style="font-weight:bold">[ ! ]<span style="font-weight:normal">Obligatorio si el campo <b>ModoIngreso = A</b></span></a></td>
      <td>Track: track 1 y track 2 concatenados tal cual son leidos por el lector de banda magnética</td>
      <td><a class="noaplica" href="#TT01A" style="color:#999">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="noaplica" href="#TT01B" style="color:#999">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT01C" style="color:#999">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltips" href="#TT02A">02A<span>Registración de Prestación</span></a><span class="nulo"> |</span> <a class="noaplica" href="#TT02B" style="color:#999">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02C" style="color:#999">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02D" style="color:#999">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02E" style="color:#999">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02I" style="color:#999">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02L" style="color:#999">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02P" style="color:#999">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02Q" style="color:#999">02Q<span>Registración de Cirugía</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02Z" style="color:#999">02Z<span>Envío de Diagnóstico</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT03A" style="color:#999">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT04A" style="color:#999">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="nulo"><strong> / </strong></span><span class="noaplica"><strong>Vuelta</strong></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">VersionCredencial <span>Nivel 4</span></a> </td>
      <td>Versión: en caso de que hiciera falta una identificación extra</td>
      <td><a class="noaplica" href="#TT01A" style="color:#999">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="noaplica" href="#TT01B" style="color:#999">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT01C" style="color:#999">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltipsOpc" href="#">02A<span>Registración de Prestación</span></a><span class="nulo"> |</span> <a class="noaplica" href="#TT02B" style="color:#999">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02C" style="color:#999">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02D" style="color:#999">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02E" style="color:#999">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02I" style="color:#999">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02L" style="color:#999">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02P" style="color:#999">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02Q" style="color:#999">02Q<span>Registración de Cirugía</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02Z" style="color:#999">02Z<span>Envío de Diagnóstico</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT03A" style="color:#999">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT04A" style="color:#999">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="nulo"><strong> / </strong></span><span class="noaplica"><strong>Vuelta</strong></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">Vencimiento <span>Nivel 4</span></a></td>
      <td>Fecha de vencimiento de la credencial  (Formato AAAAMMDD)</td>
      <td><span class="nulo">Sujeto a la política de envío de cada Financiador |</span> <span class="ida">Ida</span><strong><span class="nulo"> / </span><span class="noaplica">Vuelta</span></strong>  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">ModoIngreso <span>Nivel 4</span></a> <a class="tooltips" href="#Aclaraciones" style="font-weight:bold">[ ! ]<span style="font-weight:normal">A - Automática / M - Manual</span></a></td>
      <td>Modo de Ingreso: <strong>M </strong>= Manual -  <strong>A </strong>= Banda Magnética</td>
      <td><a class="tooltipsReq" href="#TT01A">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltipsReq" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02E">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02I">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02Q">02Q<span>Registración de Cirugía</span></a> <span class="nulo">| <a class="tooltipsReq" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> |</span> <a class="tooltipsReq" href="#TT03A">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT04A" style="color:#999">04A<span>Anulación de Transacción</span></a><span class="nulo"> |</span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">EsProvisorio <span>Nivel 4</span></a></td>
      <td>Informa si la credencial es o no provisoria:  <strong>0</strong> = Normal / <strong>1</strong> = Provisoria</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">PlanCredencial <span>Nivel 4</span></a></td>
      <td>Plan de cobertura del afiliado</td>
      <td><span class="nulo">Sujeto a la política de respuesta de cada Financiador |</span><span class="tbold"><span class="nulo"> <strong class="noaplica">Ida</strong> /</span> <span class="vuelta">Vuelta</span></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">CondicionIVA <span>Nivel 4</span></a></td>
      <td>Condición IVA del afiliado: <strong>E</strong> = exento / <strong>G</strong> = gravado</td>
      <td><span class="nulo">Sujeto a la política de respuesta de cada Financiador |</span><span class="tbold"><span class="nulo"> <strong class="noaplica">Ida</strong> /</span> <span class="vuelta">Vuelta</span></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">NroInternoPaciente <span>Nivel 4</span></a></td>
      <td>Identificación interna del paciente en el hospital</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">CodigoSeguridad<span>Nivel 4</span></a></td>
      <td>Se informan los tres dígitos del código de seguridad de la credencial <strong>solo si la financiadora lo posee</strong></td>
      <td><a class="noaplica" href="#TT01A" style="color:#999">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="noaplica" href="#TT01B" style="color:#999">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT01C" style="color:#999">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02A">02A<span>Registración de Prestación</span></a><span class="nulo"> |</span> <a class="noaplica" href="#TT02B" style="color:#999">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02C" style="color:#999">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02D" style="color:#999">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02E" style="color:#999">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02I" style="color:#999">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02L" style="color:#999">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02P" style="color:#999">02P<span>Envío de Documentación (Protocolo o Informe)</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02Q" style="color:#999">02Q<span>Registración de Cirugía</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02Z" style="color:#999">02Z<span>Envío de Diagnóstico</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT03A" style="color:#999">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT04A" style="color:#999">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">CoberturaEspecial <span>Nivel 3</span></a></td>
      <td>Flag que podría indicar si el afiliado tiene alguna cobertura especial por ej. Internacion, PMI, etc.</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">Preautorizacion <span>Nivel 3</span></a></td>
      <td>&nbsp;</td>
      <td><a class="noaplica" href="#TT01A" style="color:#999">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="noaplica" href="#TT01B" style="color:#999">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT01C" style="color:#999">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02A" style="color:#999">02A<span>Registración de Prestación</span></a><span class="nulo"> |</span> <a class="noaplica" href="#TT02B" style="color:#999">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02C" style="color:#999">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02D" style="color:#999">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02E" style="color:#999">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02I" style="color:#999">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a><span class="nulo"> |</span> <a class="tooltipsReq" href="#TT02Q">02Q<span>Registración de Cirugía</span></a><span class="nulo"> | </span><span class="nulo"><a class="tooltipsReq" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a></span> <span class="nulo">|</span> <a class="tooltipsOpc" href="#">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT04A" style="color:#999">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">CodigoPreautorizacion<span>Nivel 4</span></a></td>
      <td>Código de preautorización o de orden de autorización para la transacción</td>
      <td><a class="noaplica" href="#TT01A" style="color:#999">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="noaplica" href="#TT01B" style="color:#999">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT01C" style="color:#999">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02A" style="color:#999">02A<span>Registración de Prestación</span></a><span class="nulo"> |</span> <a class="noaplica" href="#TT02B" style="color:#999">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02C" style="color:#999">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02D" style="color:#999">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02E" style="color:#999">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02I" style="color:#999">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a><span class="nulo"> |</span> <a class="tooltipsReq" href="#TT02Q">02Q<span>Registración de Cirugía</span></a><span class="nulo"> | </span><span class="nulo"><a class="tooltipsReq" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a></span> <span class="nulo">|</span> <a class="tooltipsOpc" href="#">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT04A" style="color:#999">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">FechaPreautorizacion<span>Nivel 4</span></a></td>
      <td>Fecha de la Preautorización (Formato AAAAMMDD)</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">Documentacion <span>Nivel 3</span></a></td>
      <td>&nbsp;</td>
      <td><a class="noaplica" href="#TT01A" style="color:#999">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="noaplica" href="#TT01B" style="color:#999">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT01C" style="color:#999">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02A" style="color:#999">02A<span>Registración de Prestación</span></a><span class="nulo"> |</span> <a class="noaplica" href="#TT02B" style="color:#999">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02C" style="color:#999">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02D" style="color:#999">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02E" style="color:#999">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02I" style="color:#999">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02L" style="color:#999">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a><span class="nulo"> |</span><a class="noaplica" href="#TT02Q" style="color:#999">02Q<span>Registración de Cirugía</span></a><span class="nulo"> |</span> <a class="noaplica" href="#TT02Z" style="color:#999">02Z<span>Envío de Diagnóstico</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT03A" style="color:#999">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT04A" style="color:#999">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">Archivo<span>Nivel 4</span></a></td>
      <td>Contenido del archivo a enviar con encode a base 64 (no se pueden enviar archivos mayores a los 1,5 mb)</td>
      <td><a class="noaplica" href="#TT01A" style="color:#999">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="noaplica" href="#TT01B" style="color:#999">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT01C" style="color:#999">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02A" style="color:#999">02A<span>Registración de Prestación</span></a><span class="nulo"> |</span> <a class="noaplica" href="#TT02B" style="color:#999">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02C" style="color:#999">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02D" style="color:#999">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02E" style="color:#999">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02I" style="color:#999">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02L" style="color:#999">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a><span class="nulo"> |</span><a class="noaplica" href="#TT02Q" style="color:#999">02Q<span>Registración de Cirugía</span></a><span class="nulo"> |</span> <a class="noaplica" href="#TT02Z" style="color:#999">02Z<span>Envío de Diagnóstico</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT03A" style="color:#999">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT04A" style="color:#999">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="nulo"><strong> / </strong></span><span class="noaplica"><strong>Vuelta</strong></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">NombreArchivo<span>Nivel 4</span></a></td>
      <td>Nombre del documento con extensión</td>
      <td><a class="noaplica" href="#TT01A" style="color:#999">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="noaplica" href="#TT01B" style="color:#999">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT01C" style="color:#999">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02A" style="color:#999">02A<span>Registración de Prestación</span></a><span class="nulo"> |</span> <a class="noaplica" href="#TT02B" style="color:#999">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02C" style="color:#999">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02D" style="color:#999">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02E" style="color:#999">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02I" style="color:#999">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02L" style="color:#999">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a><span class="nulo"> |</span><a class="noaplica" href="#TT02Q" style="color:#999">02Q<span>Registración de Cirugía</span></a><span class="nulo"> |</span> <a class="noaplica" href="#TT02Z" style="color:#999">02Z<span>Envío de Diagnóstico</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT03A" style="color:#999">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT04A" style="color:#999">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="nulo"><strong> / </strong></span><span class="noaplica"><strong>Vuelta</strong></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">TipoArchivo <span>Nivel 4</span></a> <a class="tooltips" href="#Aclaraciones" style="font-weight:bold">[ ! ]<span style="font-weight:normal">P - Protocolo / I - Informe médico</span></a></td>
      <td>Define el tipo de documento que se envía: Protocolo Quirúrgico / Informe Médico</td>
      <td><a class="noaplica" href="#TT01A" style="color:#999">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="noaplica" href="#TT01B" style="color:#999">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT01C" style="color:#999">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02A" style="color:#999">02A<span>Registración de Prestación</span></a><span class="nulo"> |</span> <a class="noaplica" href="#TT02B" style="color:#999">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02C" style="color:#999">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02D" style="color:#999">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02E" style="color:#999">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02I" style="color:#999">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02L" style="color:#999">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02P">02P<span>Envío de Documentación (Protocolo o Informe)</span></a><span class="nulo"> |</span><a class="noaplica" href="#TT02Q" style="color:#999">02Q<span>Registración de Cirugía</span></a><span class="nulo"> |</span> <a class="noaplica" href="#TT02Z" style="color:#999">02Z<span>Envío de Diagnóstico</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT03A" style="color:#999">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT04A" style="color:#999">04A<span>Anulación de Transacción</span></a> <span class="nulo">| </span><span class="ida">Ida</span><span class="nulo"><strong> / </strong></span><span class="noaplica"><strong>Vuelta</strong></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">OrigenArchivo<span>Nivel 4</span></a></td>
      <td class="nulo">(Aún no definido)</td>
      <td class="nulo">(Aún no definido)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">Atencion <span>Nivel 3</span></a></td>
      <td>&nbsp;</td>
      <td><a class="noaplica" href="#TT01A" style="color:#999">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="noaplica" href="#TT01B" style="color:#999">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT01C" style="color:#999">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02A" style="color:#999">02A<span>Registración de Prestación</span></a><span class="nulo"> |</span> <a class="noaplica" href="#TT02B" style="color:#999">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02C" style="color:#999">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02D">02D<span>Registración Diferida</span></a><span class="nulo"> |</span> <a class="noaplica" href="#TT02E" style="color:#999">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02I" style="color:#999">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02L" style="color:#999">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02P" style="color:#999">02P<span>Envío de Documentación (Protocolo o Informe)</span></a><span class="nulo"> |</span><a class="noaplica" href="#TT02Q" style="color:#999">02Q<span>Registración de Cirugía</span></a><span class="nulo"> |</span> <a class="noaplica" href="#TT02Z" style="color:#999">02Z<span>Envío de Diagnóstico</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT03A" style="color:#999">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT04A">04A<span>Anulación de Transacción</span></a><span class="nulo"> | </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">FechaAtencion<span>Nivel 4</span></a></td>
      <td>Fecha de atención del paciente (Formato AAAAMMDD)</td>
      <td><a class="noaplica" href="#TT01A" style="color:#999">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="noaplica" href="#TT01B" style="color:#999">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT01C" style="color:#999">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02A" style="color:#999">02A<span>Registración de Prestación</span></a><span class="nulo"> |</span> <a class="noaplica" href="#TT02B" style="color:#999">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02C" style="color:#999">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02D">02D<span>Registración Diferida</span></a><span class="nulo"> |</span> <a class="noaplica" href="#TT02E" style="color:#999">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02I" style="color:#999">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02L" style="color:#999">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02P" style="color:#999">02P<span>Envío de Documentación (Protocolo o Informe)</span></a><span class="nulo"> |</span><a class="noaplica" href="#TT02Q" style="color:#999">02Q<span>Registración de Cirugía</span></a><span class="nulo"> |</span> <a class="noaplica" href="#TT02Z" style="color:#999">02Z<span>Envío de Diagnóstico</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT03A" style="color:#999">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT04A">04A<span>Anulación de Transacción</span></a><span class="nulo"> | </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">HoraAtencion<span>Nivel 4</span></a></td>
      <td>Hora de atención del paciente (Formato HHMM, 24 horas)</td>
      <td>(opcional)</td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">TipoAtencion<span>Nivel 4</span></a></td>
      <td>Define el contexto de la atención: <strong>A </strong>= Accidente, <strong>E </strong>= Emergencia, <strong>L </strong>= Laboral y en tránsito, <strong>R </strong>= Rutina</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">Sector<span>Nivel 4</span></a></td>
      <td>Sector hospitalario</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">Cama<span>Nivel 4</span></a></td>
      <td>Cama asignada</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">Diagnostico <span>Nivel 3</span></a></td>
      <td>&nbsp;</td>
      <td>(opcional)</td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">CodDiagnostico<span>Nivel 4</span></a></td>
      <td>Código de diagnóstico asociado con la atención</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">DescripcionDiagnostico<span>Nivel 4</span></a></td>
      <td>Descripción del diagnóstico</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">Nomenclador<span>Nivel 4</span></a></td>
      <td>Nomenclador de diagnóstico utilizado</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">CodFinalizacionTramiento <span>Nivel 3</span></a></td>
      <td>Código de finalización de tratamiento prolongado, o sesiones,  o codigo de alta internación</td>
      <td>(opcional) <span class="T05"><span class="nulo">| </span></span> <span class="ida">Ida</span><strong><span class="nulo"> / </span><span class="noaplica">Vuelta</span></strong></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">MensajeParaFinanciador <span>Nivel 3</span></a></td>
      <td>Texto libre destinado a mensajes desde el prestador hacia el financiador (Máx. 80 caracteres). <strong>Importante:</strong> a la fecha ningún Financiador tiene políticas definidas de tratamiento para este campo, por lo que Activia sólo puede garantizar la transmisión del valor, pero no que el mismo sea procesado por la obra social.</td>
      <td>(opcional) <span class="T05"><span class="nulo">| </span></span> <span class="ida">Ida</span><strong><span class="nulo"> / </span><span class="noaplica">Vuelta</span></strong>  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">Derivacion <span>Nivel 3</span></a></td>
      <td>&nbsp;</td>
      <td>(opcional)</td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">ApellidoDerivacion<span>Nivel 4</span></a></td>
      <td>Apellido del profesional que deriva al paciente</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">NombreDerivacion<span>Nivel 4</span></a></td>
      <td>Nombre del profesional que deriva al paciente</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">ProvinciaDerivacion<span>Nivel 4</span></a> <a class="tooltips" href="#Provincias" style="font-weight:bold">[ ! ]<span style="font-weight:normal">(Clic para ver tabla de códigos)</span></a></td>
      <td>Provincia: letra de las patentes viejas</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">TipoPrescriptorDerivacion<span>Nivel 4</span></a></td>
      <td>Tipo Prescriptor: <strong>M</strong> = Médico; <strong>O </strong>= Odontólogo</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">NroMatriculaDerivacion<span>Nivel 4</span></a></td>
      <td>Número de matrícula</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">CuitDerivacion<span>Nivel 4</span></a></td>
      <td>CUIT del profesional que deriva al paciente</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">EspecialidadDerivacion<span>Nivel 4</span></a></td>
      <td>Especialidad del profesional que deriva al paciente</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:48"><a class="tooltips" href="#">CodParaFinanciadorDeriv<span>Nivel 4</span></a></td>
      <td class="nulo">(Aún no definido)</td>
      <td class="nulo">(Aún no definido)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td style="padding-left:16"><a class="tooltips" href="#">DetalleProcedimientos <span>Nivel 2</span></a></td>
      <td>&nbsp;</td>
      <td><a class="noaplica" href="#TT01A" style="color:#999">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltipsReq" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02E" style="color:#999">02E<span>Egreso de Internación</span></a> <span class="nulo">| </span><a class="noaplica" href="#TT02I" style="color:#999">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02P" style="color:#999">02P<span>Envío de Documentación (Protocolo o Informe)</span></a><span class="nulo"> | </span> <a class="tooltipsReq" href="#TT02Q">02Q<span>Registración de Cirugía</span></a><span class="nulo"> | <a class="tooltipsReq" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> | </span><a class="noaplica" href="#TT03A" style="color:#999">03A<span>Consulta de Resolución</span></a><span class="nulo"> | </span><a class="noaplica" href="#TT04A" style="color:#999">04A<span>Anulación de Transacción</span></a><span class="nulo"> |</span><span class="nulo"> </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">NroItem <span>Nivel 3</span></a></td>
      <td>Número de orden dentro de la colección de prestaciones</td>
      <td><a class="noaplica" href="#TT01A" style="color:#999">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltipsReq" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02E" style="color:#999">02E<span>Egreso de Internación</span></a> <span class="nulo">| </span><a class="noaplica" href="#TT02I" style="color:#999">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02P" style="color:#999">02P<span>Envío de Documentación (Protocolo o Informe)</span></a><span class="nulo"> | </span> <a class="tooltipsReq" href="#TT02Q">02Q<span>Registración de Cirugía</span></a><span class="nulo"> | <a class="tooltipsReq" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> | </span><a class="noaplica" href="#TT03A" style="color:#999">03A<span>Consulta de Resolución</span></a><span class="nulo"> | </span><a class="noaplica" href="#TT04A" style="color:#999">04A<span>Anulación de Transacción</span></a><span class="nulo"> |</span><span class="nulo"> </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">CodPreautorizacion <span>Nivel 3</span></a></td>
      <td>Código de pre-autorización</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">CodPrestacion <span>Nivel 3</span></a></td>
      <td>Código de la práctica (hasta 11 dígitos)</td>
      <td><a class="noaplica" href="#TT01A" style="color:#999">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltipsReq" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02E" style="color:#999">02E<span>Egreso de Internación</span></a> <span class="nulo">| </span><a class="noaplica" href="#TT02I" style="color:#999">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02P" style="color:#999">02P<span>Envío de Documentación (Protocolo o Informe)</span></a><span class="nulo"> | </span> <a class="tooltipsReq" href="#TT02Q">02Q<span>Registración de Cirugía</span></a><span class="nulo"> | <a class="tooltipsReq" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a> | </span><a class="noaplica" href="#TT03A" style="color:#999">03A<span>Consulta de Resolución</span></a><span class="nulo"> | </span><a class="noaplica" href="#TT04A" style="color:#999">04A<span>Anulación de Transacción</span></a><span class="nulo"> |</span><span class="nulo"> </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">CodAlternativo <span>Nivel 3</span></a></td>
      <td>Código de Prestación Alternativo</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">PiezaDental <span>Nivel 3</span></a></td>
      <td>Pieza o sector dental</td>
      <td><a class="noaplica" href="#TT01A" style="color:#999">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="noaplica" href="#TT01B" style="color:#999">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT01C" style="color:#999">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">| </span><a class="tooltipsOpc" href="#TT02A">02A<span>Registración de Prestación</span></a><span class="nulo"> |</span> <a class="noaplica" href="#TT02B" style="color:#999">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02C" style="color:#999">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02D" style="color:#999">02D<span>Registración Diferida</span></a><span class="nulo"> |</span> <a class="noaplica" href="#TT02E" style="color:#999">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02I" style="color:#999">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02L" style="color:#999">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02P" style="color:#999">02P<span>Envío de Documentación (Protocolo o Informe)</span></a><span class="nulo"> | </span><a class="noaplica" href="#TT02Q" style="color:#999">02Q<span>Registración de Cirugía</span></a><span class="nulo"> | </span><span class="nulo"><a class="noaplica" href="#TT02Z" style="color:#999">02Z<span>Envío de Diagnóstico</span></a></span> <span class="nulo">|</span> <a class="noaplica" href="#TT03A" style="color:#999">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT04A" style="color:#999">04A<span>Anulación de Transacción</span></a><span class="nulo"> | </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">CaraDental <span>Nivel 3</span></a></td>
      <td>Cara dental / Código de diagnóstico en caso de 02Z</td>
      <td><a class="noaplica" href="#TT01A" style="color:#999">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="noaplica" href="#TT01B" style="color:#999">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT01C" style="color:#999">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">| </span><a class="tooltipsOpc" href="#TT02A">02A<span>Registración de Prestación</span></a><span class="nulo"> |</span> <a class="noaplica" href="#TT02B" style="color:#999">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02C" style="color:#999">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02D" style="color:#999">02D<span>Registración Diferida</span></a><span class="nulo"> |</span> <a class="noaplica" href="#TT02E" style="color:#999">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02I" style="color:#999">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02L" style="color:#999">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02P" style="color:#999">02P<span>Envío de Documentación (Protocolo o Informe)</span></a><span class="nulo"> | </span><a class="noaplica" href="#TT02Q" style="color:#999">02Q<span>Registración de Cirugía</span></a><span class="nulo"> | </span><span class="nulo"><a class="tooltipsReq" href="#TT02Z">02Z<span>Envío de Diagnóstico</span></a></span> <span class="nulo">|</span> <a class="noaplica" href="#TT03A" style="color:#999">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT04A" style="color:#999">04A<span>Anulación de Transacción</span></a><span class="nulo"> | </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:32">TipoTrabajo</td>
      <td>Para odontología: <strong>00</strong> = Preexistencia, <strong>01 </strong>= Trabajo realizado, <strong>02</strong> = Trabajo a realizar</td>
      <td><a class="noaplica" href="#TT01A" style="color:#999">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="noaplica" href="#TT01B" style="color:#999">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT01C" style="color:#999">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">| </span><a class="tooltipsOpc" href="#TT02A">02A<span>Registración de Prestación</span></a><span class="nulo"> |</span> <a class="noaplica" href="#TT02B" style="color:#999">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02C" style="color:#999">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02D" style="color:#999">02D<span>Registración Diferida</span></a><span class="nulo"> |</span> <a class="noaplica" href="#TT02E" style="color:#999">02E<span>Egreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02I" style="color:#999">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02L" style="color:#999">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02P" style="color:#999">02P<span>Envío de Documentación (Protocolo o Informe)</span></a><span class="nulo"> | </span><a class="noaplica" href="#TT02Q" style="color:#999">02Q<span>Registración de Cirugía</span></a><span class="nulo"> | </span><span class="nulo"><a class="noaplica" href="#TT02Z" style="color:#999">02Z<span>Envío de Diagnóstico</span></a></span> <span class="nulo">|</span> <a class="noaplica" href="#TT03A" style="color:#999">03A<span>Consulta de Resolución</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT04A" style="color:#999">04A<span>Anulación de Transacción</span></a><span class="nulo"> | </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">TipoPrestacion <span>Nivel 3</span></a></td>
      <td>Ámbito de la prestación: <strong>1</strong> = Ambulatoria, <strong>2 </strong>= Clínica, <strong>3</strong> = Quirúrgica, <strong>4 </strong>= Domiciliaria</td>
      <td><a class="noaplica" href="#TT01A" style="color:#999">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltipsReq" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02E" style="color:#999">02E<span>Egreso de Internación</span></a> <span class="nulo">| </span><a class="noaplica" href="#TT02I" style="color:#999">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02P" style="color:#999">02P<span>Envío de Documentación (Protocolo o Informe)</span></a><span class="nulo"> | </span> <a class="tooltipsReq" href="#TT02Q">02Q<span>Registración de Cirugía</span></a><span class="nulo"> | <a class="noaplica" href="#TT02Z" style="color:#999">02Z<span>Envío de Diagnóstico</span></a> | </span><a class="noaplica" href="#TT03A" style="color:#999">03A<span>Consulta de Resolución</span></a><span class="nulo"> | </span><a class="noaplica" href="#TT04A" style="color:#999">04A<span>Anulación de Transacción</span></a><span class="nulo"> |</span><span class="nulo"> </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">ArancelPrestacion <span>Nivel 3</span></a></td>
      <td><p>Define qué parte de la prestacion se factura: <strong>1 </strong>= Honorarios Especialista, <strong>2 </strong>= Honorarios Ayudante, <strong>3 </strong>= Honorarios Anestesista, <strong>4</strong> = Gastos, <strong>0 </strong>= Todos los honorarios que correspondan a la prestación</p></td>
      <td><a class="noaplica" href="#TT01A" style="color:#999">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltipsOpc" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsOpc" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltipsOpc" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsOpc" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltipsOpc" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltipsOpc" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02E" style="color:#999">02E<span>Egreso de Internación</span></a> <span class="nulo">| </span><a class="noaplica" href="#TT02I" style="color:#999">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsOpc" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02P" style="color:#999">02P<span>Envío de Documentación (Protocolo o Informe)</span></a><span class="nulo"> | </span> <a class="tooltipsOpc" href="#TT02Q">02Q<span>Registración de Cirugía</span></a><span class="nulo"> | <a class="noaplica" href="#TT02Z" style="color:#999">02Z<span>Envío de Diagnóstico</span></a> | </span><a class="noaplica" href="#TT03A" style="color:#999">03A<span>Consulta de Resolución</span></a><span class="nulo"> | </span><a class="noaplica" href="#TT04A" style="color:#999">04A<span>Anulación de Transacción</span></a><span class="nulo"> |</span><span class="nulo"> </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">CantidadSolicitada <span>Nivel 3</span></a></td>
      <td>Cantidad o Frecuencia solicitada por el Prestador</td>
      <td><a class="noaplica" href="#TT01A" style="color:#999">01A <span>Verificación de Afiliado</span></a><span class="nulo">|</span> <a class="tooltipsReq" href="#TT01B">01B<span>Verificación de Afiliado + Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT01C">01C<span>Verificación de Afiliado + Prestación + Prestador</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02A">02A<span>Registración de Prestación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02B">02B<span>Prescripción</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02C">02C<span>Solicitud de Autorización</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02D">02D<span>Registración Diferida</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02E" style="color:#999">02E<span>Egreso de Internación</span></a> <span class="nulo">| </span><a class="noaplica" href="#TT02I" style="color:#999">02I<span>Ingreso de Internación</span></a> <span class="nulo">|</span> <a class="tooltipsReq" href="#TT02L">02L<span>Registración Pre-autorizada</span></a> <span class="nulo">|</span> <a class="noaplica" href="#TT02P" style="color:#999">02P<span>Envío de Documentación (Protocolo o Informe)</span></a><span class="nulo"> | </span> <a class="tooltipsReq" href="#TT02Q">02Q<span>Registración de Cirugía</span></a><span class="nulo"> | <a class="noaplica" href="#TT02Z" style="color:#999">02Z<span>Envío de Diagnóstico</span></a> | </span><a class="noaplica" href="#TT03A" style="color:#999">03A<span>Consulta de Resolución</span></a><span class="nulo"> | </span><a class="noaplica" href="#TT04A" style="color:#999">04A<span>Anulación de Transacción</span></a><span class="nulo"> |</span><span class="nulo"> </span><span class="ida">Ida</span><span class="tbold"> / </span><span class="vuelta">Vuelta</span></td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">CantidadAprobada <span>Nivel 3</span></a></td>
      <td>Cantidad o Frecuencia aprobada por el Financiador</td>
      <td><span class="nulo">Sujeto a la política de respuesta de cada Financiador |</span><span class="tbold"><span class="nulo"> <strong class="noaplica">Ida</strong> /</span> <span class="vuelta">Vuelta</span></span></td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">SaldoPrestaciones <span>Nivel 3</span></a></td>
      <td>Cantidad de prestaciones o sesiones remantes para el paciente</td>
      <td><span class="nulo">Sujeto a la política de respuesta de cada Financiador |</span><span class="tbold"><span class="nulo"> <strong class="noaplica">Ida</strong> /</span> <span class="vuelta">Vuelta</span></span></td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">DescripcionPrestacion <span>Nivel 3</span></a></td>
      <td>Descripción de la práctica según nomenclador del Financiador</td>
      <td><span class="nulo">Sujeto a la política de respuesta de cada Financiador |</span><span class="tbold"><span class="nulo"> <strong class="noaplica">Ida</strong> /</span> <span class="vuelta">Vuelta</span></span></td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">Facturacion <span>Nivel 3</span></a></td>
      <td>Define si el código de prestación es facturable (normal) o solo registrable (utilizado en la modulación, donde el financiador precisa del detalle pero solo se factura el código de un módulo): <strong>0</strong> = Facturable, <strong>1</strong> = Registrable</td>
      <td><span class="nulo">Sujeto a la política de respuesta de cada Financiador |</span><span class="tbold"><span class="nulo"> <strong class="noaplica">Ida</strong> /</span> <span class="vuelta">Vuelta</span></span></td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">ImporteACargoAfiliado <span>Nivel 3</span></a></td>
      <td>Monto o coseguro UNITARIO a cargo del afiliado (SIN IVA)</td>
      <td><span class="nulo">Sujeto a la política de respuesta de cada Financiador |</span><span class="tbold"><span class="nulo"> <strong class="noaplica">Ida</strong> /</span> <span class="vuelta">Vuelta</span></span></td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">ImporteCobertura <span>Nivel 3</span></a></td>
      <td>Monto UNITARIO a pagar por la obra social o financiador (SIN IVA)</td>
      <td><span class="nulo">Sujeto a la política de respuesta de cada Financiador |</span><span class="tbold"><span class="nulo"> <strong class="noaplica">Ida</strong> /</span> <span class="vuelta">Vuelta</span></span></td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">CodRta <span>Nivel 3</span></a></td>
      <td>Código de respuesta o error</td>
      <td><span class="nulo">Sujeto a la política de respuesta de cada Financiador |</span><span class="tbold"><span class="nulo"> <strong class="noaplica">Ida</strong> /</span> <span class="vuelta">Vuelta</span></span></td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">MensajeRta <span>Nivel 3</span></a></td>
      <td>Mensaje de respuesta para cada procedimiento</td>
      <td><span class="nulo">Sujeto a la política de respuesta de cada Financiador |</span><span class="tbold"><span class="nulo"> <strong class="noaplica">Ida</strong> /</span> <span class="vuelta">Vuelta</span></span></td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">CodAutorizacion <span>Nivel 3</span></a></td>
      <td>Código de autorización</td>
      <td>(opcional) <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">CodDiagnosticoPrestacion <span>Nivel 3</span></a></td>
      <td>Diagnostico asociado con la prestación</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
    <tr>
      <td style="padding-left:32"><a class="tooltips" href="#">IVA <span>Nivel 3</span></a></td>
      <td>Indicación de IVA excento o gravado de la prestación (en caso de que en un futuro ciertos tipos de prestaciones fueran IVA exento o gravados)</td>
      <td>(opcional)  <span class="nulo">| <a class="tooltips" href="#CIF">CIF<span>(Campo de implementación futura)</span></a></span></td>
    </tr>
  </tbody>
</table>

<p>&nbsp;</p>
<p><strong><a name="TiposTx" id="Aclaraciones6"></a></strong></p>
<p>&nbsp;</p>
<table width="100%" border="0" align="center" cellpadding="8" cellspacing="0">
  <thead>
    <tr>
      <td colspan="6" align="left" valign="middle" bgcolor="#000000"><span style="color:#FC0; font-weight:bold">Tipos de transacción</span></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="10" align="center" bgcolor="#999">Código</td>
      <td width="3" align="center" bgcolor="#999">&nbsp;</td>
      <td width="3" align="center" bgcolor="#999">&nbsp;</td>
      <td width="513" bgcolor="#999">Descripción</td>
      <td bgcolor="#999">&nbsp;</td>
      <td bgcolor="#999">Campos obligatorios</td>
    </tr>
    <tr>
      <td align="center" valign="top"><strong>Todos</strong></td>
      <td align="center" valign="top">&nbsp;</td>
      <td align="center" valign="top">&nbsp;</td>
      <td valign="top">Todos los tipos de transacción tienen datos obligatorios que se detallan en la columna siguiente.</td>
      <td valign="top">&nbsp;</td>
      <td valign="top">Mensaje | EncabezadoMensaje | <strong>TipoMsj<br>
      </strong>Mensaje | EncabezadoMensaje | <strong><strong>TipoTransaccion<br>
      <br>
      </strong></strong>Mensaje | EncabezadoMensaje | InicioTrx | <strong><strong>FechaTrx<br>
      </strong></strong>Mensaje | EncabezadoMensaje | InicioTrx | <strong><strong>HoraTrx<br>
      <br>
      </strong></strong>Mensaje | EncabezadoMensaje | Terminal | <strong><strong>NumeroTerminal</strong></strong><br>
      <br>
Mensaje | EncabezadoMensaje | Software | <strong><strong>CodigoSoft</strong></strong><br>
Mensaje | EncabezadoMensaje | Software | <strong><strong>NombreSoftware</strong></strong><br>
Mensaje | EncabezadoMensaje | Software | <strong><strong>VersionSoftware</strong></strong><br>
<br>
Mensaje | EncabezadoMensaje | Financiador | <strong><strong>CodigoFinanciador</strong></strong><br>
<br>
Mensaje | EncabezadoMensaje | Prestador | <strong><strong>CuitPrestador</strong></strong></td>
    </tr>
    <tr>
      <td width="10" align="center" valign="top" bgcolor="#e9e9e9"><strong><a name="TT01A" id="Aclaraciones8"></a>01A</strong></td>
      <td width="3" align="center" valign="top" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="3" align="center" valign="top" bgcolor="#e9e9e9">&nbsp;</td>
      <td valign="top" bgcolor="#e9e9e9"><strong>Verificación de afiliado:</strong><br>
      <br>
      Permite verificar la aptitud o elegibilidad del afiliado, y obtener su plan prestacional.<br>
      Como toda verificación, no implica registración alguna, y no habilita al prestador médico a facturar prestaciones en base a esta transacción.</td>
      <td valign="top" bgcolor="#e9e9e9">&nbsp;</td>
      <td valign="top" bgcolor="#e9e9e9"><p><em>Los campos obligatorios para todos los tipos de transacción, y además:</em><br>
        <br>
        Mensaje | EncabezadoAtencion | Credencial | <strong><strong>NumeroCredencial</strong></strong><br>
        Mensaje | EncabezadoAtencion | Credencial | <strong><strong>CodigoSeguridad</strong></strong></p></td>
    </tr>
    <tr>
      <td width="10" align="center" valign="top"><strong><a name="TT01B" id="Aclaraciones9"></a>01B</strong></td>
      <td width="3" align="center" valign="top">&nbsp;</td>
      <td width="3" align="center" valign="top">&nbsp;</td>
      <td valign="top"><strong>Verificación de Afiliado + Prestación:</strong><br>
      <br>
      Permite verificar si el afiliado puede recibir una o varias prestaciones médicas en función de su plan.<br>
Como toda verificación, no implica registración alguna, y no habilita al prestador médico a facturar prestaciones en base a esta transacción.</td>
      <td valign="top">&nbsp;</td>
      <td valign="top"><p><em>Los campos obligatorios para todos los tipos de transacción, y además:</em><br>
        <br>
        Mensaje | EncabezadoAtencion | Credencial | <strong><strong>NumeroCredencial</strong></strong><br>
      <br>
      Mensaje | DetalleProcedimientos  | <strong><strong>NroItem</strong></strong><br>
      Mensaje | DetalleProcedimientos  | <strong><strong>CodPrestacion</strong></strong><br>
      Mensaje | DetalleProcedimientos  | <strong><strong>TipoPrestacion</strong></strong><br>
      Mensaje | DetalleProcedimientos  | <strong><strong>CantidadSolicitada</strong></strong></p></td>
    </tr>
    <tr>
      <td width="10" align="center" valign="top" bgcolor="#e9e9e9"><strong><a name="TT01C" id="Aclaraciones10"></a>01C</strong></td>
      <td align="center" valign="top" bgcolor="#e9e9e9">&nbsp;</td>
      <td align="center" valign="top" bgcolor="#e9e9e9">&nbsp;</td>
      <td valign="top" bgcolor="#e9e9e9"><strong>Verificación de Afiliado + Prestación + Prestador</strong><br>
      <br>
      Permite verificar si el afiliado puede recibir una o varias prestaciones médicas en función de su plan, y del convenio entre el prestador y la obra social.<br>
Como toda verificación, no implica registración alguna, y no habilita al prestador médico a facturar prestaciones en base a esta transacción.</td>
      <td valign="top" bgcolor="#e9e9e9">&nbsp;</td>
      <td valign="top" bgcolor="#e9e9e9"><em>Los campos obligatorios para todos los tipos de transacción, y además:</em><br>
        <br>
        Mensaje | EncabezadoAtencion | Credencial | <strong><strong>NumeroCredencial</strong></strong><br>
        <br>
Mensaje | DetalleProcedimientos  | <strong><strong>NroItem</strong></strong><br>
Mensaje | DetalleProcedimientos  | <strong><strong>CodPrestacion</strong></strong><br>
Mensaje | DetalleProcedimientos  | <strong><strong>TipoPrestacion</strong></strong><br>
Mensaje | DetalleProcedimientos  | <strong><strong>CantidadSolicitada</strong></strong></td>
    </tr>
    <tr>
      <td width="10" align="center" valign="top"><strong><a name="TT02A" id="Aclaraciones11"></a>02A</strong></td>
      <td align="center" valign="top">&nbsp;</td>
      <td align="center" valign="top">&nbsp;</td>
      <td valign="top" class="t8"><p><strong>Registración de Prestación</strong><br>
        <br>
        Permite registrar una o más prestaciones médicas para un afiliado.<br>
        Como toda registración, una vez aceptada por la obra social, faculta al prestador a facturar las prestaciones a la obra social, sin perjuicio de que la misma  pueda debitar dicha práctica por otros motivos.<br>
        <br>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAALCAYAAACksgdhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTlFMTAxM0Y0MEEyMTFFN0JGMjA5MzNGMEI5OEYxNkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTlFMTAxNDA0MEEyMTFFN0JGMjA5MzNGMEI5OEYxNkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxOUUxMDEzRDQwQTIxMUU3QkYyMDkzM0YwQjk4RjE2QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxOUUxMDEzRTQwQTIxMUU3QkYyMDkzM0YwQjk4RjE2QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PraG+MgAAADjSURBVHjaYvz//z8DCpjFKA4kT0B5Zgxp/18zoAEmBkzQBMQKUNyMRZ6BEcWmWYw6DIzMlxn+/4XKMjMA2bpA267gs6kHrMFlFQOD4yIGqOYe3M6bxegBJN0hNgCFGVlgMu5QOTRNs8AqECa+OgnEJ1BdMAthCsymFCDWhit5c46B4e0FZE0guVREQMxk4APSd4BYFK6ESwronz8MDN9fIWsEBb0qMFA+gmyqQtEAAvZzGBjsZqP7XxSqFmzTNyDNiSLNpwwkgFHx6R66xi9Am3hBNh3GiL1Pd7FpAIHjIAIgwAACDUDV67Cd4QAAAABJRU5ErkJggg==" width="13" height="11"> IMPORTANTE: observar en cada caso si la obra social maneja <em>aprobación total</em> o <em>aprobación parcial</em>.</p></td>
      <td valign="top">&nbsp;</td>
      <td valign="top"><em>Los campos obligatorios para todos los tipos de transacción, y además:</em><br>
        <br>
        Mensaje | EncabezadoAtencion | Credencial | <strong><strong>NumeroCredencial</strong></strong><br>
        Mensaje | EncabezadoAtencion | Credencial | <strong><strong>ModoIngreso<br>
        </strong></strong>Mensaje | EncabezadoAtencion | Credencial | <strong><strong><strong><strong>Track</strong></strong></strong></strong> (sólo si ModoIngreso = A)<strong><strong><br>
        </strong></strong>
        Mensaje | EncabezadoAtencion | Credencial | <strong><strong>CodigoSeguridad</strong></strong><br>
        <br>
Mensaje | DetalleProcedimientos  | <strong><strong>NroItem</strong></strong><br>
Mensaje | DetalleProcedimientos  | <strong><strong>CodPrestacion</strong></strong><br>
Mensaje | DetalleProcedimientos  | <strong><strong>TipoPrestacion</strong></strong><br>
Mensaje | DetalleProcedimientos  | <strong><strong>CantidadSolicitada</strong></strong></td>
    </tr>
    <tr>
      <td width="10" align="center" valign="top" bgcolor="#e9e9e9"><strong><a name="TT02B" id="Aclaraciones12"></a>02B</strong></td>
      <td align="center" valign="top" bgcolor="#e9e9e9">&nbsp;</td>
      <td align="center" valign="top" bgcolor="#e9e9e9">&nbsp;</td>
      <td valign="top" bgcolor="#e9e9e9" class="t8"><strong>Prescripción</strong><br>
      <br>
      Permite a los prestadores informar la derivación del afiliado a un prestador determinado, con referencia a una
      prestación específica por una cantidad informada por el profesional admisor. Se informará el número del
      prestador al cual se deriva y filial a la que pertenece.<br>
      Aprobada la derivación se obtiene un número que el prestador deberá informar al momento de realizar la
      prestación, para que dicha solicitud sea autorizada.</td>
      <td valign="top" bgcolor="#e9e9e9">&nbsp;</td>
      <td valign="top" bgcolor="#e9e9e9"><em>Los campos obligatorios para todos los tipos de transacción, y además:</em><br>
        <br>
Mensaje | EncabezadoAtencion | Credencial | <strong><strong>NumeroCredencial</strong></strong><br>
Mensaje | EncabezadoAtencion | Credencial | <strong><strong>ModoIngreso</strong></strong><br>
<br>
Mensaje | DetalleProcedimientos  | <strong><strong>NroItem</strong></strong><br>
Mensaje | DetalleProcedimientos  | <strong><strong>CodPrestacion</strong></strong><br>
Mensaje | DetalleProcedimientos  | <strong><strong>TipoPrestacion</strong></strong><br>
Mensaje | DetalleProcedimientos  | <strong><strong>CantidadSolicitada</strong></strong></td>
    </tr>
    <tr>
      <td width="10" align="center" valign="top"><strong><a name="TT02C" id="Aclaraciones13"></a>02C</strong></td>
      <td align="center" valign="top">&nbsp;</td>
      <td align="center" valign="top">&nbsp;</td>
      <td valign="top" class="t8"><strong>Solicitud de Autorización</strong><br>
      <br>
      Para aquellas prestaciones que requieran una orden de autorización o auditoría médica antes de ser
      prestadas por el profesional, se deberá realizar la transacción 02.C que responderá un número de orden de
      autorización cuando así corresponda.<br>
      <br>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAALCAYAAACksgdhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTlFMTAxM0Y0MEEyMTFFN0JGMjA5MzNGMEI5OEYxNkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTlFMTAxNDA0MEEyMTFFN0JGMjA5MzNGMEI5OEYxNkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxOUUxMDEzRDQwQTIxMUU3QkYyMDkzM0YwQjk4RjE2QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxOUUxMDEzRTQwQTIxMUU3QkYyMDkzM0YwQjk4RjE2QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PraG+MgAAADjSURBVHjaYvz//z8DCpjFKA4kT0B5Zgxp/18zoAEmBkzQBMQKUNyMRZ6BEcWmWYw6DIzMlxn+/4XKMjMA2bpA267gs6kHrMFlFQOD4yIGqOYe3M6bxegBJN0hNgCFGVlgMu5QOTRNs8AqECa+OgnEJ1BdMAthCsymFCDWhit5c46B4e0FZE0guVREQMxk4APSd4BYFK6ESwronz8MDN9fIWsEBb0qMFA+gmyqQtEAAvZzGBjsZqP7XxSqFmzTNyDNiSLNpwwkgFHx6R66xi9Am3hBNh3GiL1Pd7FpAIHjIAIgwAACDUDV67Cd4QAAAABJRU5ErkJggg==" alt="" width="13" height="11"> IMPORTANTE: Solicitar una autorización al Centro de Autorizaciones de la obra social, no significa que se hayan
      registrado las prestaciones informadas en la solicitud.</td>
      <td valign="top">&nbsp;</td>
      <td valign="top"><em>Los campos obligatorios para todos los tipos de transacción, y además:</em><br>
        <br>
Mensaje | EncabezadoAtencion | Credencial | <strong><strong>NumeroCredencial</strong></strong><br>
Mensaje | EncabezadoAtencion | Credencial | <strong><strong>ModoIngreso</strong></strong><br>
<br>
Mensaje | DetalleProcedimientos  | <strong><strong>NroItem</strong></strong><br>
Mensaje | DetalleProcedimientos  | <strong><strong>CodPrestacion</strong></strong><br>
Mensaje | DetalleProcedimientos  | <strong><strong>TipoPrestacion</strong></strong><br>
Mensaje | DetalleProcedimientos  | <strong><strong>CantidadSolicitada</strong></strong></td>
    </tr>
    <tr>
      <td width="10" align="center" valign="top" bgcolor="#e9e9e9"><strong><a name="TT02D" id="Aclaraciones14"></a>02D</strong></td>
      <td align="center" valign="top" bgcolor="#e9e9e9">&nbsp;</td>
      <td align="center" valign="top" bgcolor="#e9e9e9">&nbsp;</td>
      <td valign="top" bgcolor="#e9e9e9" class="t8"><strong>Registración Diferida</strong><br>
      <br>
      Cuando existan razones de fuerza mayor por las cuales sea imposible registrar las prácticas en el momento en que se efectúan (como por ejemplo, corte en el suministro eléctrico o en el acceso a internet, caída del validador de la obra social, etc), se deberán registrar lo antes posible, mediante este tipo de transacción. Además de los datos que se informan en la 02A, deberá informarse la fecha efectiva de la prestación.<br>
Como toda registración, una vez aceptada por la obra social, faculta al prestador a facturar las prestaciones a la obra social, sin perjuicio de que la misma  pueda debitar dicha práctica por otros motivos.<br>
<br>
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAALCAYAAACksgdhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTlFMTAxM0Y0MEEyMTFFN0JGMjA5MzNGMEI5OEYxNkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTlFMTAxNDA0MEEyMTFFN0JGMjA5MzNGMEI5OEYxNkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxOUUxMDEzRDQwQTIxMUU3QkYyMDkzM0YwQjk4RjE2QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxOUUxMDEzRTQwQTIxMUU3QkYyMDkzM0YwQjk4RjE2QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PraG+MgAAADjSURBVHjaYvz//z8DCpjFKA4kT0B5Zgxp/18zoAEmBkzQBMQKUNyMRZ6BEcWmWYw6DIzMlxn+/4XKMjMA2bpA267gs6kHrMFlFQOD4yIGqOYe3M6bxegBJN0hNgCFGVlgMu5QOTRNs8AqECa+OgnEJ1BdMAthCsymFCDWhit5c46B4e0FZE0guVREQMxk4APSd4BYFK6ESwronz8MDN9fIWsEBb0qMFA+gmyqQtEAAvZzGBjsZqP7XxSqFmzTNyDNiSLNpwwkgFHx6R66xi9Am3hBNh3GiL1Pd7FpAIHjIAIgwAACDUDV67Cd4QAAAABJRU5ErkJggg==" alt="" width="13" height="11"> IMPORTANTE: Consultar con la obra social los plazos máximos contemplados para diferir la registración.<br>
Observar en cada caso si la obra social maneja <em>aprobación total</em> o <em>aprobación parcial</em>.</td>
      <td valign="top" bgcolor="#e9e9e9">&nbsp;</td>
      <td valign="top" bgcolor="#e9e9e9"><em>Los campos obligatorios para todos los tipos de transacción, y además:</em><br>
        <br>
Mensaje | EncabezadoAtencion | Credencial | <strong><strong>NumeroCredencial</strong></strong><br>
Mensaje | EncabezadoAtencion | Credencial | <strong><strong>ModoIngreso</strong></strong><br>
<br>
Mensaje | EncabezadoAtencion | Atencion | <strong><strong>FechaAtencion</strong></strong> <br>
<br>
Mensaje | DetalleProcedimientos  | <strong><strong>NroItem</strong></strong><br>
Mensaje | DetalleProcedimientos  | <strong><strong>CodPrestacion</strong></strong><br>
Mensaje | DetalleProcedimientos  | <strong><strong>TipoPrestacion</strong></strong><br>
Mensaje | DetalleProcedimientos  | <strong><strong>CantidadSolicitada</strong></strong></td>
    </tr>
    <tr>
      <td width="10" align="center" valign="top"><strong><a name="TT02E" id="Aclaraciones15"></a>02E</strong></td>
      <td align="center" valign="top">&nbsp;</td>
      <td align="center" valign="top">&nbsp;</td>
      <td valign="top" class="t8"><strong>Egreso de Internación</strong><br>
      <br>
      Permite registrar en tiempo real el egreso de un paciente previamente informado como internado.</td>
      <td valign="top">&nbsp;</td>
      <td valign="top"><em>Los campos obligatorios para todos los tipos de transacción, y además:</em><br>
        <br>
Mensaje | EncabezadoAtencion | Credencial | <strong><strong>NumeroCredencial</strong></strong><br>
Mensaje | EncabezadoAtencion | Credencial | <strong><strong>ModoIngreso</strong></strong></td>
    </tr>
    <tr>
      <td width="10" align="center" valign="top" bgcolor="#e9e9e9"><strong><a name="TT02I" id="Aclaraciones16"></a>02I</strong></td>
      <td align="center" valign="top" bgcolor="#e9e9e9">&nbsp;</td>
      <td align="center" valign="top" bgcolor="#e9e9e9">&nbsp;</td>
      <td valign="top" bgcolor="#e9e9e9" class="t8"><strong>Ingreso de Internación</strong><br>
      <br>
      Permite registrar en tiempo real la internación del afiliado.</td>
      <td valign="top" bgcolor="#e9e9e9">&nbsp;</td>
      <td valign="top" bgcolor="#e9e9e9"><em>Los campos obligatorios para todos los tipos de transacción, y además:</em><br>
        <br>
Mensaje | EncabezadoAtencion | Credencial | <strong><strong>NumeroCredencial</strong></strong><br>
Mensaje | EncabezadoAtencion | Credencial | <strong><strong>ModoIngreso</strong></strong></td>
    </tr>
    <tr>
      <td width="10" align="center" valign="top"><strong><a name="TT02L" id="Aclaraciones17"></a>02L</strong></td>
      <td align="center" valign="top">&nbsp;</td>
      <td align="center" valign="top">&nbsp;</td>
      <td valign="top" class="t8"><strong>Registración Pre-autorizada</strong><br>
      <br>
      Esta transacción es idéntica a la 02A pero permite a los laboratorios realizar la registración hasta 5 días<br>
      después de atendido el afiliado. Esta facilidad exige que se haya realizado una transacción de Verificación<br>
      del afiliado (01A) cuando éste concurre a realizar los estudios.<br>
      <br>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAALCAYAAACksgdhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTlFMTAxM0Y0MEEyMTFFN0JGMjA5MzNGMEI5OEYxNkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTlFMTAxNDA0MEEyMTFFN0JGMjA5MzNGMEI5OEYxNkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxOUUxMDEzRDQwQTIxMUU3QkYyMDkzM0YwQjk4RjE2QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxOUUxMDEzRTQwQTIxMUU3QkYyMDkzM0YwQjk4RjE2QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PraG+MgAAADjSURBVHjaYvz//z8DCpjFKA4kT0B5Zgxp/18zoAEmBkzQBMQKUNyMRZ6BEcWmWYw6DIzMlxn+/4XKMjMA2bpA267gs6kHrMFlFQOD4yIGqOYe3M6bxegBJN0hNgCFGVlgMu5QOTRNs8AqECa+OgnEJ1BdMAthCsymFCDWhit5c46B4e0FZE0guVREQMxk4APSd4BYFK6ESwronz8MDN9fIWsEBb0qMFA+gmyqQtEAAvZzGBjsZqP7XxSqFmzTNyDNiSLNpwwkgFHx6R66xi9Am3hBNh3GiL1Pd7FpAIHjIAIgwAACDUDV67Cd4QAAAABJRU5ErkJggg==" alt="" width="13" height="11"> IMPORTANTE: Actualmente sólo OSDE soporta este tipo de transacción. Tanto en las transacciones 02A como en las 02L, la obra social podrá      requerir documentación complementaria según las prácticas registradas.</td>
      <td valign="top">&nbsp;</td>
      <td valign="top"><em>Los campos obligatorios para todos los tipos de transacción, y además:</em><br>
        <br>
Mensaje | EncabezadoAtencion | Credencial | <strong><strong>NumeroCredencial</strong></strong><br>
Mensaje | EncabezadoAtencion | Credencial | <strong><strong>ModoIngreso</strong></strong><br>
<br>
Mensaje | EncabezadoAtencion | Preautorizacion | <strong><strong>CodigoPreautorizacion<br>
</strong></strong><br>
Mensaje | DetalleProcedimientos  | <strong><strong>NroItem</strong></strong><br>
Mensaje | DetalleProcedimientos  | <strong><strong>CodPrestacion</strong></strong><br>
Mensaje | DetalleProcedimientos  | <strong><strong>TipoPrestacion</strong></strong><br>
Mensaje | DetalleProcedimientos  | <strong><strong>CantidadSolicitada</strong></strong></td>
    </tr>
    <tr>
      <td width="10" align="center" valign="top" bgcolor="#e9e9e9"><strong><a name="TT02P" id="Aclaraciones18"></a>02P</strong></td>
      <td align="center" valign="top" bgcolor="#e9e9e9">&nbsp;</td>
      <td align="center" valign="top" bgcolor="#e9e9e9">&nbsp;</td>
      <td valign="top" bgcolor="#e9e9e9" class="t8"><strong>Envío de Documentación</strong> (Protocolo o Informe)<br>
      <br>
      Es la transacción por la cual el prestador tiene la posibilidad de enviar al Centro de Autorizaciones de la<br>
      Obra Social, cualquier información respaldatoria requerida.<br>
      <br>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAALCAYAAACksgdhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTlFMTAxM0Y0MEEyMTFFN0JGMjA5MzNGMEI5OEYxNkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTlFMTAxNDA0MEEyMTFFN0JGMjA5MzNGMEI5OEYxNkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxOUUxMDEzRDQwQTIxMUU3QkYyMDkzM0YwQjk4RjE2QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxOUUxMDEzRTQwQTIxMUU3QkYyMDkzM0YwQjk4RjE2QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PraG+MgAAADjSURBVHjaYvz//z8DCpjFKA4kT0B5Zgxp/18zoAEmBkzQBMQKUNyMRZ6BEcWmWYw6DIzMlxn+/4XKMjMA2bpA267gs6kHrMFlFQOD4yIGqOYe3M6bxegBJN0hNgCFGVlgMu5QOTRNs8AqECa+OgnEJ1BdMAthCsymFCDWhit5c46B4e0FZE0guVREQMxk4APSd4BYFK6ESwronz8MDN9fIWsEBb0qMFA+gmyqQtEAAvZzGBjsZqP7XxSqFmzTNyDNiSLNpwwkgFHx6R66xi9Am3hBNh3GiL1Pd7FpAIHjIAIgwAACDUDV67Cd4QAAAABJRU5ErkJggg==" alt="" width="13" height="11"> IMPORTANTE: el archivo a enviar no debe pesar mas de 1.5 Mb, y debe ser codificado en base 64. Los formatos de archivo soportados en la actualidad
      son PDF , TIF y JPG.</td>
      <td valign="top" bgcolor="#e9e9e9">&nbsp;</td>
      <td valign="top" bgcolor="#e9e9e9"><em>Los campos obligatorios para todos los tipos de transacción, y además:</em><br>
        <br>
Mensaje | EncabezadoAtencion | Credencial | <strong><strong>NumeroCredencial</strong></strong><br>
Mensaje | EncabezadoAtencion | Credencial | <strong><strong>ModoIngreso</strong></strong><br>
<br>
Mensaje | EncabezadoAtencion | Preautorizacion | <strong><strong>CodigoPreautorizacion<br>
<br>
</strong></strong>Mensaje | EncabezadoAtencion | Documentacion | <strong><strong><strong><strong>Archivo</strong></strong><br>
</strong></strong>Mensaje | EncabezadoAtencion | Documentacion | <strong><strong><strong><strong><strong><strong>NombreArchivo</strong></strong></strong></strong><br>
</strong></strong>Mensaje | EncabezadoAtencion | Documentacion | <strong><strong><strong><strong><strong><strong>TipoArchivo</strong></strong></strong></strong></strong></strong></td>
    </tr>
    <tr>
      <td width="10" align="center" valign="top"><strong><a name="TT02Q" id="Aclaraciones19"></a>02Q</strong></td>
      <td align="center" valign="top">&nbsp;</td>
      <td align="center" valign="top">&nbsp;</td>
      <td valign="top" class="t8"><strong>Registración de Cirugía</strong><br>
      <br>
      Permite informar a la obra social, toda cirugía que se realizará en ese momento, en caso de haber sido aprobada, o de las realizadas
      al finalizar la consulta o tratamiento.<br>
      En el caso de que la prestación deba ser realizada en sesiones, éstas previamente deberán ser autorizadas
      por la obra social. Dentro de la respuesta recibida, se informará el saldo de
      sesiones pendientes de realizar.<br>
      Como toda registración, una vez aceptada por la obra social, faculta al prestador a facturar las prestaciones a la obra social, sin perjuicio de que la misma  pueda debitar dicha práctica por otros motivos.</td>
      <td valign="top">&nbsp;</td>
      <td valign="top"><em>Los campos obligatorios para todos los tipos de transacción, y además:</em><br>
        <br>
Mensaje | EncabezadoAtencion | Credencial | <strong><strong>NumeroCredencial</strong></strong><br>
Mensaje | EncabezadoAtencion | Credencial | <strong><strong>ModoIngreso</strong></strong><br>
<br>
Mensaje | EncabezadoAtencion | Preautorizacion | <strong><strong>CodigoPreautorizacion<br>
</strong></strong><br>
Mensaje | DetalleProcedimientos  | <strong><strong>NroItem</strong></strong><br>
Mensaje | DetalleProcedimientos  | <strong><strong>CodPrestacion</strong></strong><br>
Mensaje | DetalleProcedimientos  | <strong><strong>TipoPrestacion</strong></strong><br>
Mensaje | DetalleProcedimientos  | <strong><strong>CantidadSolicitada</strong></strong></td>
    </tr>
    <tr>
      <td width="10" align="center" valign="top" bgcolor="#e9e9e9"><strong><a name="TT02Z" id="Aclaraciones20"></a>02Z</strong></td>
      <td align="center" valign="top" bgcolor="#e9e9e9">&nbsp;</td>
      <td align="center" valign="top" bgcolor="#e9e9e9">&nbsp;</td>
      <td valign="top" bgcolor="#e9e9e9" class="t8"><strong>Informe de Diagnóstico</strong><br>
      <br>
      Permite informar a la obra social el diagóstico surgido de las prestaciones previamente realizadas y registradas.</td>
      <td valign="top" bgcolor="#e9e9e9">&nbsp;</td>
      <td valign="top" bgcolor="#e9e9e9"><em>Los campos obligatorios para todos los tipos de transacción, y además:</em><br>
        <br>
        Mensaje | EncabezadoAtencion | Credencial | <strong><strong>NumeroCredencial</strong></strong><br>
Mensaje | EncabezadoAtencion | Credencial | <strong><strong>ModoIngreso<br>
<br>
</strong></strong>Mensaje | DetalleProcedimientos  | <strong><strong><strong><strong>NroItem</strong></strong><br>
</strong></strong>Mensaje | DetalleProcedimientos  | <strong><strong><strong><strong>CodPrestacion</strong></strong><br>
</strong></strong>
Mensaje | DetalleProcedimientos  | <strong><strong><strong><strong><strong><strong>CaraDental</strong></strong></strong></strong></strong></strong></td>
    </tr>
    <tr>
      <td width="10" align="center" valign="top"><strong><a name="TT03A" id="Aclaraciones21"></a>03A</strong></td>
      <td align="center" valign="top">&nbsp;</td>
      <td align="center" valign="top">&nbsp;</td>
      <td valign="top" class="t8"><strong>Consulta de Resolución / Rescate de órdenes</strong><br>
      <br>
      Permite obtener un listado de hasta tres órdenes vigentes para el afiliado, o bien los detalles de una órden en especial si se especifica su id.</td>
      <td valign="top">&nbsp;</td>
      <td valign="top"><em>Los campos obligatorios para todos los tipos de transacción, y además:</em><br>
        <br>
      Mensaje | EncabezadoAtencion | Credencial | <strong><strong>NumeroCredencial</strong></strong><br>
Mensaje | EncabezadoAtencion | Credencial | <strong><strong>ModoIngreso<br>
<br>
</strong></strong> Mensaje | EncabezadoAtencion | Preautorizacion |<strong><strong>CodigoPreautorizacion</strong></strong></td>
    </tr>
    <tr>
      <td width="10" align="center" valign="top" bgcolor="#e9e9e9"><strong><a name="TT04A" id="Aclaraciones22"></a>04A</strong></td>
      <td align="center" valign="top" bgcolor="#e9e9e9">&nbsp;</td>
      <td align="center" valign="top" bgcolor="#e9e9e9">&nbsp;</td>
      <td valign="top" bgcolor="#e9e9e9" class="t8"><strong>Anulación de Transacción</strong><br>
      <br>
      Permite anular el registro de una transacción ya aprobada (transacciones tipo 02A,
      02B, 02C, 02D, 02I, 02E, 02Q, 02P, 02Z). Este mecanismo permite anular transacciones que fueron
      incorrectamente registradas.</td>
      <td valign="top" bgcolor="#e9e9e9">&nbsp;</td>
      <td valign="top" bgcolor="#e9e9e9"><em>Los campos obligatorios para todos los tipos de transacción, y además:</em><br>
      <br>
      Mensaje | EncabezadoMensaje | <strong>NroReferenciaCancel</strong><br>
      <br>
      Mensaje | EncabezadoAtencion | Atencion | <strong><strong>FechaAtencion</strong></strong></td>
    </tr>
  </tbody>
</table>
<p><strong><br>
  <br>
  <br>
<a name="Aclaraciones" id="Aclaraciones"></a></strong></p>
<p>&nbsp;</p>
<table width="100%" border="0" cellpadding="6" cellspacing="0" class="t8">
  <tbody><tr>
    <td bgcolor="#000000"><span style="color:#FC0; font-weight:bold">Aclaraciones</span></td>
  </tr>
  <tr>
    <td style="padding:0" bgcolor="#e9e9e9"><table width="100%" border="0" cellpadding="6" cellspacing="0" class="t8">
      <tbody><tr>
        <td><strong>VersionMsj: </strong>Indica la versión del mensaje. Valor actual = ACT20</td>
      </tr>
      <tr>
        <td><strong>CodigoSoft: </strong>Identifica el software que genera el mensaje. Solicitar a Activia el código de soft.</td>
      </tr>
      <tr>
        <td><strong>CodigoFinanciador: </strong>Ver tabla financiadoras. Si no dispone de ella, solicítela a Activia.</td>
      </tr>
      <tr>
        <td><strong>Track: </strong>Obligatorio si el campo ModoIngreso = A</td>
      </tr>
      <tr>
        <td><strong>ModoIngreso: </strong>Indica el modo en que se obtuvo el número de afiliado: <strong>A - Automática </strong>(cuando se usó lectora de banda magnética) / <strong>M - Manual</strong> (cuando el ingreso se hizo en forma manual).</td>
      </tr>
      <tr>
        <td><strong>TipoArchivo: </strong>Define el tipo de documento que se está enviando: P - Protocolo / I - Informe médico.</td>
      </tr>
    </tbody></table></td>
  </tr>
</tbody></table>
<p>&nbsp;</p>
<p><strong><a name="AprobacionParcial" id="Aclaraciones23"></a></strong></p>
<p>&nbsp;</p>
<table width="100%" border="0" cellpadding="6" cellspacing="0" class="t8">
  <tbody><tr>
    <td bgcolor="#000000"><span style="color:#FC0; font-weight:bold">Acerca del concepto de Aprobación Parcial:</span></td>
  </tr>
  <tr>
    <td style="padding:0" bgcolor="#e9e9e9"><table width="100%" border="0" cellpadding="6" cellspacing="0" class="t8">
      <tbody><tr>
        <td bgcolor="#e9e9e9"><p>          Algunas obras sociales (por ej. OSDE) tienen como política de validación <strong>aprobar o desaprobar todas las prácticas en una transacción</strong>. Esto significa que si en una transacción se validan por ejemplo tres prestaciones, y una de ellas no puede ser aprobada, entonces las otras dos tampoco son aprobadas. Es lo que entendemos como <strong>aprobación total</strong>, e implica que si una transacción está aprobada, todas las prácticas solicitadas están aprobadas. De igual manera, si una transacción está rechazada, todas las prácticas solicitadas están rechazadas. En estos casos, en el tag <strong>Mensaje/EncabezadoMensaje/Financiador/AprobacionParcial</strong> el web service devolverá el valor <strong>"0"</strong>, lo que nos indica que con sólo verificar el valor devuelto en el tag <strong>Mensaje/EncabezadoMensaje/Rta/CodRtaGeneral</strong> sabremos si las prácticas fueron aprobadas o no.<br>
          <br>
          Otras obras sociales (por ej. Swiss Medical) <strong>pueden, en una misma transacción, dar por aprobadas algunas prácticas y rechazar otras</strong>. Es lo que entendemos como <strong>aprobación parcial</strong>. En estos casos,  en el tag <strong>Mensaje/EncabezadoMensaje/Financiador/AprobacionParcial</strong> el web service devolverá el valor <strong>"1"</strong>, y para evaluar el resultado de la transacción tenemos dos caminos: A) Verificar primero el valor devuelto en <strong>Mensaje/EncabezadoMensaje/Rta/CodRtaGeneral</strong>. Si devuelve <strong>"01"</strong> se trata de un rechazo, con lo cual se entiende que todas las prácticas solicitadas están rechazadas, y no hará falta analizar mucho más. Pero si devuelve <strong>"00"</strong>, como el financiador puede aprobar y rechazar algunas prácticas simultáneamente, será necesario recorrer todos los nodos <strong>DetalleProcedimientos</strong>, verificando el código devuelto en el tag <strong>CodRta</strong>, para así saber qué prestaciones fueron aprobadas y cuáles resultaron rechazadas (y conocer el motivo). B) Otra opción es omitir la verificación del tag <strong>Mensaje/EncabezadoMensaje/Rta/CodRtaGeneral</strong> y directamente ir al segundo paso, revisando  el resultado de cada práctica. Esta segunda opción, si bien resulta tentadora a nivel programación, resulta menos eficiente en términos de performance.</p></td>
      </tr>
    </tbody></table></td>
  </tr>
</tbody></table>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong><a name="CIF" id="Aclaraciones7"></a></strong></p>
<p>&nbsp;</p>
<table width="100%" border="0" cellpadding="6" cellspacing="0" class="t8">
  <tbody><tr>
    <td bgcolor="#000000"><span style="color:#FC0; font-weight:bold">Campos de implementación futura</span></td>
  </tr>
  <tr>
    <td style="padding:0" bgcolor="#e9e9e9"><table width="100%" border="0" cellpadding="6" cellspacing="0" class="t8">
      <tbody><tr>
        <td bgcolor="#e9e9e9"><p>Los campos identificados con la sigla <strong>CIF </strong>son aquelos que está previsto utilizarse en el mediano plazo, pero que al día de hoy no son procesados a efectos de la validación.</p>
          <p>Si bien hoy por hoy no tienen una aplicación práctica, <strong>se recomienda implementarlos</strong>, y evitar de esta manera tener que volver sobre la programación en el futuro.</p></td>
      </tr>
    </tbody></table></td>
  </tr>
</tbody></table>
<p><br>
  <br>
  <br>
<strong><a name="Inconsistencias" id="Aclaraciones5"></a></strong></p>
<table width="100%" border="0" align="center" cellpadding="5" cellspacing="0">
  <thead>
    <tr>
      <td colspan="4" align="left" valign="middle" bgcolor="#000000"><span style="color:#FC0; font-weight:bold">Código</span><span style="color:#FC0; font-weight:bold">s de error</span></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center" bgcolor="#999">Código</td>
      <td width="0" align="center" bgcolor="#999">&nbsp;</td>
      <td width="0" align="center" bgcolor="#999">&nbsp;</td>
      <td bgcolor="#999">Descripción</td>
    </tr>
    <tr>
      <td width="50" align="center" bgcolor="#e9e9e9">00</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">OK</td>
    </tr>
    <tr>
      <td align="center">01</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>AFILIADO INEXISTENTE</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">02</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">AFILIADO DE BAJA O CON ALTA A FUTURO</td>
    </tr>
    <tr>
      <td align="center">03</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>AFILIADO NO HABILITADO</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">04</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">PRESTACIÓN INEXISTENTE</td>
    </tr>
    <tr>
      <td align="center">05</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>CARENCIAS</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">06</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">PREEXISTENCIA</td>
    </tr>
    <tr>
      <td align="center">07</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>EXCEPCIÓN</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">08</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">SUPERA TOPE</td>
    </tr>
    <tr>
      <td align="center">10</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>ERROR, PRESTADOR INVALIDO O NO HABILITADO.</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">11</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">ERROR, PRESTADOR NO AUTORIZADO PARA EL CANAL</td>
    </tr>
    <tr>
      <td align="center">12</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>ERROR, PRESTACIÓN NO CONTRATADA</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">13</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">CÓDIGO DE AUTORIZACIÓN ERRÓNEO</td>
    </tr>
    <tr>
      <td align="center">14</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>SOLICITUD ANULADA/RECHAZADA/SIN SALDO</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">15</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">NO EXISTEN SOLIC.PEND.PARA EL AFILIADO</td>
    </tr>
    <tr>
      <td align="center">16</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>POS DE PRUEBA</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">17</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">EL PRESTADOR NO PUEDE PRESCRIBIR</td>
    </tr>
    <tr>
      <td align="center">18</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>EL PRESTADOR NO PUEDE EMITIR ÓRDENES</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">19</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">TRANSACCIÓN ERRÓNEA/INEXISTENTE</td>
    </tr>
    <tr>
      <td align="center">20</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>EFECTOR INVÁLIDO</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">21</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">NO REQUIERE PRESCRIPCIÓN</td>
    </tr>
    <tr>
      <td align="center">22</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>COD.FIN DE TERAPIA INCOMPATIBLE</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">23</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">LA PRESTACIÓN NO REQUIERE AUTORIZACIÓN PREVIA</td>
    </tr>
    <tr>
      <td align="center">24</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>SOLICITUD INEXISTENTE</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">25</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">FECHA DE PRESTACIÓN INVÁLIDA</td>
    </tr>
    <tr>
      <td align="center">26</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>CREDENCIAL VENCIDA/NO VIGENTE</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">27</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">CÓDIGO DE FINALIZACIÓN DE TERAPIA NO VÁLIDO</td>
    </tr>
    <tr>
      <td align="center">28</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td> FECHA FUERA DE RANGO PARA LA PRESTACIÓN</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">29</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">TRANSACCIÓN DIFERIDA NO PUEDE SER AUTOMÁTICA</td>
    </tr>
    <tr>
      <td align="center">30</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>FIN DE TERAPIA INCORRECTO (S/Nº ORDEN)</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">31</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">REQUIERE AUDITORIA U ORDEN DE INTERNACION</td>
    </tr>
    <tr>
      <td align="center">33</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>DEUDA INFERIOR AL TOPE DE CONTROL</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">36</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">PENDIENTE DE RESOLUCIÓN</td>
    </tr>
    <tr>
      <td align="center">37</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>SOLICITUD RECHAZADA</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">38</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">SOLICITUD NRO XXX ANULADA</td>
    </tr>
    <tr>
      <td align="center">39</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>SOLICITUD NO EXISTENTE</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">40</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">SOLICITUD NO ANULABLE (YA FUE CONSUMIDA TOTAL O EN PARCIALMENTE O  FUE SOLICITADA DESDE OTRO POS)</td>
    </tr>
    <tr>
      <td align="center">41</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>SOLICITUD NO EXISTENTE</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">42</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">TIPO Y/O ATRIBUTO DE TRANSACCIÓN INVÁLIDO</td>
    </tr>
    <tr>
      <td align="center">43</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>LA TRANSACCION NO REQUIERE COD.PRESTAC.</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">44</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">PROTOCOLO YA ENVIADO</td>
    </tr>
    <tr>
      <td align="center">45</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>SOLICITUD INEXISTENTE</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">46</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">DEBE REGISTRAR CIRUGIA</td>
    </tr>
    <tr>
      <td align="center">47</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>SOLICITUD ERRONEA</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">48</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">IMAGEN REPETIDA</td>
    </tr>
    <tr>
      <td align="center">49</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>DEBE INFORMAR ORDEN/AUTORIZACIÓN</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">50</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">TRANSACCION DIFERIDA NO HABILITADA</td>
    </tr>
    <tr>
      <td align="center">51</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>DEBE REGISTRAR POR CIRUGIA</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">55</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">PRESTACION NO CUBIERTA PARA EL PLAN</td>
    </tr>
    <tr>
      <td align="center">61</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>TRANSACCIÓN YA TRANSFERIDA A LA OBRA SOCIAL</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">62</td>
      <td align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">TRANSACCIÓN YA ANULADA</td>
    </tr>
    <tr>
      <td align="center">70</td>
      <td align="center">&nbsp;</td>
      <td align="center">&nbsp;</td>
      <td>EDAD NO VALIDA PARA PRACTICA</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">71</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">SEXO NO VALIDO PARA PRACTICA</td>
    </tr>
    <tr>
      <td align="center">73</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>PLAN NO CONTRATADO</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">75</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">CANTIDAD ERRONEA</td>
    </tr>
    <tr>
      <td align="center">76</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>TRANSACCION YA ANULADA</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">78</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">LA ORDEN NO PERTENECE AL AFILIADO</td>
    </tr>
    <tr>
      <td align="center">80</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td> TIPO DE TRANSACCIÓN NO HABILITADA</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">88</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">NO HAY PRACTICA DE CIRUGIA</td>
    </tr>
    <tr>
      <td align="center">90</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>RECHAZADA POR EL OPERADOR</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">91</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">LA PRACTICA REQUIERE AUDITORIA U ORDEN INTERNACION</td>
    </tr>
    <tr>
      <td align="center">93</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>CODIGO DE SEGURIDAD ERRONEO</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">95</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">AUTORIZACION PROVISORIA NO VIGENTE</td>
    </tr>
    <tr>
      <td align="center">96</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>AUTORIZACION PROVISORIA ERRÓNEA</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">97</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">INGRESE CREDENCIAL POR LECTOR DE BANDA</td>
    </tr>
    <tr>
      <td align="center">98</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>DEBE INGRESAR AUTORIZACION PROVISORIA</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">99</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">CREDENCIAL NO VIGENTE. DEBE INGRESAR AUTORIZACION PROVISORIA</td>
    </tr>
    <tr>
      <td align="center">A0</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>PROBLEMAS DE COMUNICACIÓN</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">A1</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">TERMINAL O POS INEXISTENTE</td>
    </tr>
    <tr>
      <td align="center">A2</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>TERMINAL O POS DADO DE BAJA</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">A3</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">TERMINAL O POS INEXISTENTE</td>
    </tr>
    <tr>
      <td align="center">A4</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>AFILIADO SUSPENDIDO</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">A5</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">TIPO TRANSACCION NO HABILITADA</td>
    </tr>
    <tr>
      <td align="center">A6</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>PRESTACION Y/O PLAN NO HABILITADOS</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">A7</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">PRESTACION REPETIDA</td>
    </tr>
    <tr>
      <td align="center">A8</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>TRANSACCION NO ANULABLE</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">A9</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">ERROR NO CODIFICADO</td>
    </tr>
    <tr>
      <td align="center">AT</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>REQUIERE AUTORIZACIÓN PREVIA</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">AU</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">REQUIERE AUDITORÍA</td>
    </tr>
    <tr>
      <td align="center">B0</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>COBERTURA DADA DE BAJA</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">B1</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">A CARGO DEL SOCIO</td>
    </tr>
    <tr>
      <td align="center">B2</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>PLAN NO CUBRE MAT.COMPLEMENTARIO</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">B3</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">EL PRESTADOR NO PERTENECE A LA CARTILLA DEL PLAN</td>
    </tr>
    <tr>
      <td align="center">B4</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>TOPE DIARIO - REQ.HC</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">B5</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">TOPE MENSUAL- REQ.HC</td>
    </tr>
    <tr>
      <td align="center">B6</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>TOPE ANUAL- REQ.HC</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">B7</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">REGISTRO EN SUPERVISIÓN O LIQUIDADO</td>
    </tr>
    <tr>
      <td align="center">B8</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>DIAGNOSTICO INEXISTENTE</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">B9</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">DIAGNOSTICO YA INGRESADO</td>
    </tr>
    <tr>
      <td align="center">C0</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>APROBACION PARCIAL</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">C1</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">RECHAZO TOTAL</td>
    </tr>
    <tr>
      <td align="center">C2</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>NO CUMPLE LAS REGLAS DEL NOMENCLADOR</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">C3</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">PRESENTE POR PLANILLA</td>
    </tr>
    <tr>
      <td align="center">C4</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>PIEZA O SECTOR NO VALIDO</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">C5</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">PIEZA NO INFORMADA O SE INFORMO UN SECTOR</td>
    </tr>
    <tr>
      <td align="center">C6</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>SE INGRESO SECTOR, SE ESPERABA PIEZA</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">C7</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">SE ESPERABA PIEZA Y CARA</td>
    </tr>
    <tr>
      <td align="center">C8</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>DEBE INGRESAR EL DEMANDANTE</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">C9</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">APLICA A PIEZA, SE INGRESO CARA</td>
    </tr>
    <tr>
      <td align="center">D0</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>LA PRESTACIÓN NO REQUIERE PIEZA NI CARA</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">D1</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">FICHA RETENIDA POR AUDITORÍA PARA EVALUACIÓN</td>
    </tr>
    <tr>
      <td align="center">D2</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>MATRICULA INEXISTENTE</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">D3</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">EL DEMANDANTE NO PERTENECE A LA CARTILLA DEL PLAN</td>
    </tr>
    <tr>
      <td align="center">ER</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>PRESTACIÓN ERRÓNEA</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">NC</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">NO CONTRATADA</td>
    </tr>
    <tr>
      <td align="center">NH</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>PRESTACIÓN NO HABILITADA</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">OI</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">REQUIERE ORDEN DE INTERNACIÓN</td>
    </tr>
    <tr>
      <td align="center">PE</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>SOLICITUD DE CONSULTA ACEPTADA</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">PR</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td width="0" align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">REQUIERE PRESCRIPCIÓN</td>
    </tr>
    <tr>
      <td align="center">RC</td>
      <td width="0" align="center">&nbsp;</td>
      <td width="0" align="center">&nbsp;</td>
      <td>SOLICITUD DE CONSULTA RECHAZADA</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">ID</td>
      <td align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">PROBLEMA DE INTEGRIDAD DE DATOS / CONSULTE A LA O.S.</td>
    </tr>
    <tr>
      <td align="center">AD</td>
      <td align="center">&nbsp;</td>
      <td align="center">&nbsp;</td>
      <td>EL ORIGEN INFORMADO NO PERMITE AUTORIZACION DIGITAL</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">PB</td>
      <td align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">PRESTACION DADA DE BAJA</td>
    </tr>
    <tr>
      <td align="center">S0</td>
      <td align="center">&nbsp;</td>
      <td align="center">&nbsp;</td>
      <td>08003333764 El socio debe llamar a Swiss Medical para gestionar la autorizacion</td>
    </tr>
    <tr>
      <td align="center" bgcolor="#e9e9e9">S1</td>
      <td align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td align="center" bgcolor="#e9e9e9">&nbsp;</td>
      <td bgcolor="#e9e9e9">Prestación Y incluída en Prestacion X</td>
    </tr>
    <tr>
      <td align="center">S2</td>
      <td align="center">&nbsp;</td>
      <td align="center">&nbsp;</td>
      <td>Efector no informado en padron</td>
    </tr>
  </tbody>
</table>
<p><strong><br>
  <br>
  <br>
<a name="Provincias" id="Aclaraciones3"></a></strong></p>
<p>&nbsp;</p>
<br>
<div class="t8" style="background-color:#000; color:#FC0; display:table; width:100%">
  <div style="display: table-row;color:#FC0; background-color:#000; width:100%">
    <div style="display: table-cell; padding:6"><span style="color:#FC0; font-weight:bold">Códigos de provincia</span> <span class="nulo">(vieja nomenclatura de chapas patentes)</span></div>
  </div>
</div>
<div class="t8" style="background-color:#999; display:table; width:100%">
  <div style="display: table-row;color:#000; background-color:#e9e9e9">
    <div style="display: table-cell; padding:6"><strong>B</strong> = Buenos Aires</div>
    <div style="display: table-cell; padding:6"><strong>P</strong> = Formosa</div>
    <div style="display: table-cell; padding:6"><strong>A</strong> = Salta</div>
  </div>
  <div style="display: table-row;color:#000; background-color:#fff">
    <div style="display: table-cell; padding:6"><strong>C</strong> = Capital Federal</div>
    <div style="display: table-cell; padding:6"><strong>Y</strong> = Jujuy</div>
    <div style="display: table-cell; padding:6"><strong>J</strong> = San Juan</div>
  </div>
  <div style="display: table-row;color:#000; background-color:#e9e9e9">
    <div style="display: table-cell; padding:6"><strong>K</strong> = Catamarca</div>
    <div style="display: table-cell; padding:6"><strong>L</strong> = La Pampa</div>
    <div style="display: table-cell; padding:6"><strong>D</strong> = San Luis</div>
  </div>
  <div style="display: table-row;color:#000; background-color:#fff">
    <div style="display: table-cell; padding:6"><strong>H</strong> = Chaco</div>
    <div style="display: table-cell; padding:6"><strong>F</strong> = La Rioja</div>
    <div style="display: table-cell; padding:6"><strong>Z</strong> = Santa Cruz</div>
  </div>
  <div style="display: table-row;color:#000; background-color:#e9e9e9">
    <div style="display: table-cell; padding:6"><strong>U</strong> = Chubut</div>
    <div style="display: table-cell; padding:6"><strong>M</strong> = Mendoza</div>
    <div style="display: table-cell; padding:6"><strong>S</strong> = Santa Fe</div>
  </div>
  <div style="display: table-row;color:#000; background-color:#fff">
    <div style="display: table-cell; padding:6"><strong>X</strong> = Córdoba</div>
    <div style="display: table-cell; padding:6"><strong>N</strong> = Misiones</div>
    <div style="display: table-cell; padding:6"><strong>G</strong> = Santiago del Estero</div>
  </div>
  <div style="display: table-row;color:#000; background-color:#e9e9e9">
    <div style="display: table-cell; padding:6"><strong>W</strong> = Corrientes</div>
    <div style="display: table-cell; padding:6"><strong>Q</strong> = Neuquén</div>
    <div style="display: table-cell; padding:6"><strong>V</strong> = Tierra del Fuego</div>
  </div>
  <div style="display: table-row;color:#000; background-color:#fff">
    <div style="display: table-cell; padding:6"><strong>E</strong> = Entre Rios</div>
    <div style="display: table-cell; padding:6"><strong>R</strong> = Rio Negro</div>
    <div style="display: table-cell; padding:6"><strong>T</strong> = Tucumán</div>
  </div>
</div>
<p><strong><br>
  <br>
  <br>
<a name="TipoDocs" id="Aclaraciones4"></a></strong></p>
<p>&nbsp;</p>
<table width="100%" border="0" cellpadding="6" cellspacing="0" class="t8">
  <tbody><tr>
    <td bgcolor="#000000"><span style="color:#FC0; font-weight:bold">Tipo de Documento</span></td>
  </tr>
  <tr>
    <td style="padding:0" bgcolor="#e9e9e9"><table width="100%" border="0" cellpadding="6" cellspacing="0" class="t8">
      <tbody><tr>
        <td><strong>DNI</strong> = Documento Nacional de Identidad</td>
      </tr>
      <tr>
        <td><strong>CI</strong> = Cédula de Identidad (Policía Federal)</td>
      </tr>
      <tr>
        <td><strong>LE</strong> = Libreta de Enrrolamiento</td>
      </tr>
      <tr>
        <td><strong>LC</strong> = Libreta Cívica</td>
      </tr>
      <tr>
        <td><strong>PAS</strong> = Pasaporte</td>
      </tr>
      <tr>
        <td><strong>DNE</strong> = Documento Nacional de Extranjería</td>
      </tr>
      <tr>
        <td><strong>CE</strong> = Cédula de Extranjería</td>
      </tr>
      <tr>
        <td><strong>SD</strong> = Sin Documento</td>
      </tr>
    </tbody></table></td>
  </tr>
</tbody></table>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><strong><a name="BuenasPracticas" id="Aclaraciones24"></a></strong></p>
<table width="100%" border="0" cellpadding="6" cellspacing="0" class="t8">
  <tbody><tr>
    <td bgcolor="#000000"><span style="color:#FC0; font-weight:bold">Guía de buenas prácticas</span></td>
  </tr>
  <tr>
    <td valign="top" bgcolor="#e9e9e9" style="padding:0"><table width="100%" border="0" cellpadding="10" cellspacing="0" class="t8">
      <tbody><tr>
        <td bgcolor="#e9e9e9"><p>A continuación se enumeran algunos lineamientos para el <b>uso razonable</b> del servicio. Cualquier tipo de abuso contrario a esta guía puede ocasionar la <b>inhabilitación  para el uso del servicio</b> del prestador y/o software involucrado.</p>
          <p><b>• Evitá el uso de datos hardcodeados</b><br>
            Nuestra experiencia nos dice que este tipo de práctica puede suponer un ahorro de tiempo de desarrollo en un principio, pero a mediano plazo suele ocasionar problemas en la validación. Creá una aplicación inteligente, que pueda construir dinámicamente los mensajes de validación de acuerdo al tipo de transacción y a los datos que provee el usuario. Un mensaje basado en parámetros que puedas configurar te va a ahorrar dolores de cabeza y tiempo de desarrollo cuando haya que hacer algún ajuste.</p>
          <p><b>• Menos es más</b><br>
            Quitá todos los tags que no contengan información, vas a obtener una mejor performance del web service.</p>
          <p><b>• No automatices más de la cuenta</b><br>
          Para todos los programadores es una tentación automatizar lo máximo posible, minimizando el nivel de control que pueda tener el usuario para evitar errores. Eso está bien, pero tené en cuenta que detrás de la validación en línea hay personas requiriendo atención médica. Encontrá el balance entre el control de errores y la usabilidad frente a situaciones reales, ya que un control de más por parte del software puede impedir u obstaculizar la atención del paciente. Si  un dato es obligatorio y el usuario no lo carga, advertíselo, pero dejalo decidir si continuar o no sin ese dato. Si un dato no se ajusta a una máscara, advertíselo, pero no bloquees el proceso si el usuario decide seguir adelante. Pueden existir razones para tales comportamientos, y está bueno que tu aplicación sea un aliado y no un obstáculo.</p>
          <p><b>• No interpretes, no traduzcas, no pienses por el usuario</b><br> 
            Toda transacción ofrece en la respuesta muchos datos, desde las leyendas en lenguaje natural a nivel de cabecera, hasta los códigos de error a nivel de cada práctica. <b>Es importante que tu sistema ofrezca al usuario toda la información que la financiadora u obra social devuelve.</b> Cuando muestres una respuesta, evitá mostrar un "OK" o "ERROR" sin más infromación. Cuando una transacción es rechazada, tanto el usuario como el afiliado querrán conocer los motivos, para poder hacer las correcciones necesarias en caso de que sean posibles. No es lo mismo rechazar una atención porque el afiliado excede un tope, que rechazarla porque el operador del sistema cometió un error en el ingreso de un dato. Y aún en las transacciones aceptadas, muchas veces se devuelven datos valiosos sólo en las leyendas, como por ejemplo saldos disponibles para el afiliado.</p>
          <p>Como regla general,<b> siempre mostrá las leyendas de 'DescripcionRtaGeneral', 'MensajePrinter', y 'MensajeDisplay' tal como las recibís.</b> Esos son los únicos espacios en los que la obra social puede devolver un mensaje en lenguaje natural. Es importante que muestres esos mensajes completos.</p>
          <p>Y en los casos de transacciones en que se involucren prácticas médicas, es importante que muestres cuáles fueron aprobadas y cuáles generan un rechazo, y por qué. Esa información se encuentra en el tag <b>CodRta</b> de cada prestación.</p>
          <p><b>• Timeouts</b><br> 
            Para evitarle problemas al usuario, es importante que definas un tiempo de espera para la respuesta adecuado. Tu sistema debería esperar por la respuesta, como mínimo, unos 15 segundos. Normalmente el tiempo de respuesta es mucho menor, pero en algunos casos puede extenderse más. No todos los validadores son igual de rápidos, no todos manejan las trasacciones complejas de la misma manera, por lo que tu sistema no debería bajar de los 15 segundos de espera. Un timeout menor podría hacer que tu sistema dé por terminada una transacción que sigue en curso, y que el validador de la financiadora podría aprobar. Si el usuario reintenta la validación, podría encontrarse con un rechazo por topes, ocasionado por los consumos de la transacción original.</p>
          <p>Es muy importante que desde que tu sistema dispara la transacción, y mientras no se cumpla el tiempo de timeout, el usuario no pueda cancelar el proceso ni "reenviar" el mensaje. Esto sólo ocasionaría el escenario descripto en el párrafo anterior.</p>
          <p>Para evitar problemas,<b> esperá un tiempo prudencial por la respuesta, y no le des la posibilidad al usuario de cancelar la transacción en curso.</b> Nunca olvides que en cada transacción se pone en juego la atención médica de personas que pagan por ella.</p>
          <p><b>• Código de seguridad / Token</b><br> 
            Cada vez más financiadoras incorporan el uso de la credencial digital, y con ella, la validación de tokens de seguridad. Dado que la vigencia de esos tokens se limita a algunos pocos minutos, es importante que este dato se cargue en el último instante, justo antes de disparar la transacción. Esta simple decisión limitará la posibilidad de rechazos por tokens vencidos.</p>
          <p><b>• Uso razonable del servicio</b><br>
            El servicio de validación en línea es un conjunto de recursos humanos, técnicos y de infraestructura que las financiadoras y obras sociales ponen a disposición de sus prestadores sin cargo. Para que este conjunto de recursos funcione sin costo para el prestador, las financiadoras asumen esos costos. Por tal razón, se espera de parte del prestador y de sus sistemas un uso razonable.</p>
          <p>Entendemos por "razonable" todo uso que se derive directamente y esté orientado a la atención médica de los afiliados, esto no implica que existran límites taxativos, pero sí entendemos que hay límites que el sentido común establece.</p>
          <p>¿Qué sería un uso "no razonable" del servicio? Prácticas tales como el envío compulsivo y repetitivo de transacciones, el uso del sistema de validación con fines que no sean de validación, la automatización de transacciones que deberían manejarse de manera manual a petición de una persona humana, etc. ¿Esto significa que no puedo llevar a cabo ningún tipo de automatización? No, podés automatizar, siempre y cuando el consumo del servicio tenga un sentido lógico. Por ejemplo, si tu sistema maneja una agenda de turnos, podrías disparar una verificación de afiliado para que en caso de obtener un rechazo evitar que el turno sea ocupado y que el afiliado pierda tiempo asistiendo a una cita para la que no tendría cobertura. Ese sería un ejemplo de uso razonable, aún cuando el afiliado no se está atendiendo. Por el contrario, el envío sistemático de transacciones sin supervisión humana se considera uso no razonable.</p>
          <p>La detección de este tipo de prácticas puede dar lugar a la <b>suspensión del servicio de validación</b> hasta tanto el prestador y/o su sistema de gestión dejen de llevarlas a cabo. Tené en cuenta especialmente este punto de la guía de buenas prácticas, porque ya hubo antecedentes de suspensión del servicio por estos motivos, y no es una experiencia deseable para ninguna de las partes.</p></td>
      </tr>
    </tbody></table></td>
  </tr>
</tbody></table>
<p>&nbsp;</p>
<p><strong><br>
  <br>
  <br>
<a name="Financiadoras" id="Aclaraciones2"></a></strong></p>
<p><br>
</p>
<div class="t8" style="background-color:#000; color:#FC0; display:table; width:100%">
    <div style="display: table-row;color:#FC0; background-color:#000; width:100%">
      <div style="display: table-cell; padding:6; font-weight:bold">Obras Sociales que trabajan con nosotros</div>
    </div>
</div>
<div class="t8" style="background-color:#999; display:table; width:100%">
  <div style="display: table-row;color:#FFF">
        <div style="display: table-cell; padding:6">Obra Social</div>
        <div style="display: table-cell; padding:6">Código de obra social</div>
        <div style="display: table-cell; padding:6">Afiliado prueba</div>
        <div style="display: table-cell; padding:6">Estado actual</div>
  </div>
    <div style="display: table-row;color:#000; background-color:#e9e9e9">
        <div style="display: table-cell; padding:6">ACA Salud</div>
        <div style="display: table-cell; padding:6">ACASAL</div>
        <div style="display: table-cell; padding:6">599989/00</div>
        <div style="display: table-cell; padding:6">Validación Online <span style="font-weight:bold; color:#090">habilitada</span></div>
    </div>
    <div style="display: table-row;color:#000; background-color:#fff">
        <div style="display: table-cell; padding:6">AMMFA</div>
      <div style="display: table-cell; padding:6">AMMFA </div>
        <div style="display: table-cell; padding:6">1564600</div>
        <div style="display: table-cell; padding:6">Validación Online <span style="font-weight:bold; color:#090">habilitada</span></div>
    </div>
    <div style="display: table-row;color:#000; background-color:#e9e9e9">
        <div style="display: table-cell; padding:6">APM - Obra Social Agentes de Propaganda Médica</div>
      <div style="display: table-cell; padding:6">OSAPM</div>
        <div style="display: table-cell; padding:6">09999999900</div>
        <div style="display: table-cell; padding:6">Validación Online <span style="font-weight:bold; color:#090">habilitada</span></div>
    </div>
    <div style="display: table-row;color:#000; background-color:#fff">
      <div style="display: table-cell; padding:6">Caja Notarial de la Ciudad de Buenos Aires</div>
      <div style="display: table-cell; padding:6">CESCBA</div>
        <div style="display: table-cell; padding:6">13999000</div>
        <div style="display: table-cell; padding:6">Validación Online <span style="font-weight:bold; color:#090">habilitada</span></div>
    </div>
  <div style="display: table-row;color:#000; background-color:#e9e9e9">
      <div style="display: table-cell; padding:6">CASA Salud - Caja de Abogados Pcia. Bs.As.</div>
      <div style="display: table-cell; padding:6">CASABA</div>
      <div style="display: table-cell; padding:6">9999999900</div>
      <div style="display: table-cell; padding:6">Validación Online <span style="font-weight:bold; color:#090">habilitada</span></div>
    </div>
  <div style="display: table-row;color:#000; background-color:#fff">
      <div style="display: table-cell; padding:6">CEMIC</div>
      <div style="display: table-cell; padding:6">CEMIC</div>
      <div style="display: table-cell; padding:6">---</div>
      <div style="display: table-cell; padding:6">Validación Online <span style="font-weight:bold; color:#090">habilitada</span></div>
    </div>
    <div style="display: table-row;color:#000; background-color:#e9e9e9">
      <div style="display: table-cell; padding:6">Colegio de Escribanos de la Provincia de Buenos Aires</div>
      <div style="display: table-cell; padding:6">COESBA</div>
      <div style="display: table-cell; padding:6">00701020004</div>
      <div style="display: table-cell; padding:6">Validación Online <span style="font-weight:bold; color:#090">habilitada</span></div>
    </div>
  <div style="display: table-row;color:#000; background-color:#fff">
    <div style="display: table-cell; padding:6">Galeno Argentina</div>
      <div style="display: table-cell; padding:6">GALENO</div>
      <div style="display: table-cell; padding:6">---</div>
      <div style="display: table-cell; padding:6">Actividad transaccional de <span style="font-weight:bold">algunas especialidades o servicios</span></div>
    </div>
  <div style="display: table-row;color:#000; background-color:#e9e9e9">
    <div style="display: table-cell; padding:6">Luis Pasteur - OS del Personal de Dirección de Sanidad Luis Pasteur</div>
      <div style="display: table-cell; padding:6">PASTEU</div>
      <div style="display: table-cell; padding:6">03658300005</div>
      <div style="display: table-cell; padding:6">Validación Online <span style="font-weight:bold; color:#090">habilitada</span></div>
  </div>
    <div style="display: table-row;color:#000; background-color:#fff">
      <div style="display: table-cell; padding:6">William Hope</div>
      <div style="display: table-cell; padding:6">HOPE</div>
        <div style="display: table-cell; padding:6">129503899</div>
        <div style="display: table-cell; padding:6">Validación Online <span style="font-weight:bold; color:#090">habilitada</span></div>
    </div>
    <div style="display: table-row;color:#000; background-color:#e9e9e9">
        <div style="display: table-cell; padding:6">OSADEF - Obra Social de la Asoc. de Empleados de Farmacia</div>
      <div style="display: table-cell; padding:6">OSADEF</div>
        <div style="display: table-cell; padding:6">---</div>
        <div style="display: table-cell; padding:6">Validación Online <span style="font-weight:bold; color:#090">habilitada</span></div>
    </div>
  <div style="display: table-row;color:#000; background-color:#fff">
    <div style="display: table-cell; padding:6">OSARPYH</div>
      <div style="display: table-cell; padding:6">OSARPY</div>
      <div style="display: table-cell; padding:6">---</div>
      <div style="display: table-cell; padding:6">Validación Online <span style="font-weight:bold; color:#090">habilitada</span></div>
    </div>
    <div style="display: table-row;color:#000; background-color:#e9e9e9">
      <div style="display: table-cell; padding:6">OSDE</div>
      <div style="display: table-cell; padding:6">OSDE</div>
        <div style="display: table-cell; padding:6">60671956201</div>
        <div style="display: table-cell; padding:6">Validación Online <span style="font-weight:bold; color:#090">habilitada</span></div>
    </div>
  <div style="display: table-row;color:#000; background-color:#fff">
      <div style="display: table-cell; padding:6">OSDIPP - Obra Social del Personal Directivo de la Industria Privada del Petróleo</div>
      <div style="display: table-cell; padding:6">OSDIPP</div>
      <div style="display: table-cell; padding:6">99999800405</div>
      <div style="display: table-cell; padding:6">Validación Online <span style="font-weight:bold; color:#090">habilitada</span></div>
    </div>
    <div style="display: table-row;color:#000; background-color:#e9e9e9">
      <div style="display: table-cell; padding:6">OSJERA - Obra Social de la Asociación del Personal del Agua y la Energía</div>
      <div style="display: table-cell; padding:6">OSJERA</div>
      <div style="display: table-cell; padding:6">3778801</div>
      <div style="display: table-cell; padding:6">Validación Online <span style="font-weight:bold; color:#090">habilitada</span></div>
    </div>
    <div style="display: table-row;color:#000; background-color:#FFF">
      <div style="display: table-cell; padding:6">Osmecon Lomas de Zamora</div>
      <div style="display: table-cell; padding:6">OSMELZ</div>
      <div style="display: table-cell; padding:6">900099999100</div>
      <div style="display: table-cell; padding:6">Validación Online <span style="font-weight:bold; color:#090">habilitada</span></div>
    </div>
  <div style="display: table-row;color:#000; background-color:#e9e9e9">
      <div style="display: table-cell; padding:6">OSPE (Obra Social de Petroleros)</div>
      <div style="display: table-cell; padding:6">OSPE</div>
      <div style="display: table-cell; padding:6">2722222000000<br>
2722222001000<br>
2722222002000<br>
2722222003000<br>
2026255641800</div>
      <div style="display: table-cell; padding:6">Validación Online <span style="font-weight:bold; color:#090">habilitada</span></div>
  </div>
  <div style="display: table-row;color:#000; background-color:#fff">
      <div style="display: table-cell; padding:6">OSPIC - Obra Social del Personal de la Industria Cinematográfica</div>
      <div style="display: table-cell; padding:6">OSPIC</div>
      <div style="display: table-cell; padding:6">---</div>
      <div style="display: table-cell; padding:6">Validación Online <span style="font-weight:bold; color:#090">habilitada</span></div>
    </div>
    <div style="display: table-row;color:#000; background-color:#e9e9e9">
      <div style="display: table-cell; padding:6">OSPatrones (Obra Social Patrones de Cabotaje)</div>
      <div style="display: table-cell; padding:6">PATCAB</div>
      <div style="display: table-cell; padding:6">0100002200   PRUEBA - PB- PMO, Basico<br>
0100002201   prueba 2 - ESPECIAL - P2, Especial<br>
0100002202   PRUEBA 3 - SUPERIOR - P3, Superior<br>
0100002203   PRUEBA 4 - P4, Superior Genuino<br>
0100002204   PRUEBA - PREN, Prensa<br>
0100002205   PRUEBA 5 - G1, Unico</div>
      <div style="display: table-cell; padding:6">Validación Online <span style="font-weight:bold; color:#090">habilitada</span></div>
    </div>
  <div style="display: table-row;color:#000; background-color:#fff">
    <div style="display: table-cell; padding:6">Plan Salud Hospital Británico</div>
    <div style="display: table-cell; padding:6">PSHB</div>
    <div style="display: table-cell; padding:6">101</div>
    <div style="display: table-cell; padding:6">Validación Online <span style="font-weight:bold; color:#090">habilitada</span></div>
  </div>
  <div style="display: table-row;color:#000; background-color:#e9e9e9">
    <div style="display: table-cell; padding:6">Premedic</div>
    <div style="display: table-cell; padding:6">PREMED</div>
    <div style="display: table-cell; padding:6">0011726582011</div>
    <div style="display: table-cell; padding:6">Validación Online <span style="font-weight:bold; color:#090">habilitada</span></div>
  </div>
  <div style="display: table-row;color:#000; background-color:#fff">
    <div style="display: table-cell; padding:6">Programas Médicos</div>
    <div style="display: table-cell; padding:6">PROMED</div>
    <div style="display: table-cell; padding:6">90000100101</div>
    <div style="display: table-cell; padding:6">Validación Online <span style="font-weight:bold; color:#090">habilitada</span></div>
  </div>
  <div style="display: table-row;color:#000; background-color:#e9e9e9">
    <div style="display: table-cell; padding:6">OSPM (Obra Social del Personal Marítimo)</div>
    <div style="display: table-cell; padding:6">OSPM</div>
    <div style="display: table-cell; padding:6">---</div>
    <div style="display: table-cell; padding:6">Validación Online <span style="font-weight:bold; color:#090">habilitada</span></div>
  </div>
  <div style="display: table-row;color:#000; background-color:#fff">
    <div style="display: table-cell; padding:6">SCIS - Medicina Privada</div>
      <div style="display: table-cell; padding:6">SCIS</div>
        <div style="display: table-cell; padding:6">0014462900</div>
        <div style="display: table-cell; padding:6">Validación Online <span style="font-weight:bold; color:#090">habilitada</span></div>
    </div>
  <div style="display: table-row;color:#000; background-color:#e9e9e9">
    <div style="display: table-cell; padding:6">Swiss Medical</div>
      <div style="display: table-cell; padding:6">SWISS</div>
      <div style="display: table-cell; padding:6">7180171001110</div>
      <div style="display: table-cell; padding:6">Validación Online <span style="font-weight:bold; color:#090">habilitada</span></div>
    </div>
    <div style="display: table-row;color:#000; background-color:#fff">
      <div style="display: table-cell; padding:6">TV Salud</div>
      <div style="display: table-cell; padding:6">OSPTV</div>
      <div style="display: table-cell; padding:6">---</div>
      <div style="display: table-cell; padding:6">Validación Online <span style="font-weight:bold; color:#090">habilitada</span></div>
    </div>
</div>
<hr size="1">
<p style="text-align:center"><br>
©2015 Activia S.A - Activia es una <a href="https://www.certipedia.com/quality_marks/9108650157?locale=es&amp;certificate_number=01+10006+062581%BA" target="_blank">empresa certificada</a> por normas de calidad<strong> ISO 9001:2015</strong></p>
 
</body></html>`

const EsquemaAWS = () => {
    return(

        <div>
            <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
        </div>
    )
}

export default EsquemaAWS;