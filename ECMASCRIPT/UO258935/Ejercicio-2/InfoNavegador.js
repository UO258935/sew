var info = {
    nombre_navegador: navigator.appName,
    version_navegador: navigator.appVersion,
    idioma_navegador: navigator.language,
    plataforma_navegador: navigator.platform,
    vendedor_navegador: navigator.vendor,
    agente_navegador: navigator.userAgente
}

var ObjInfoNavegador = Object.create(info);