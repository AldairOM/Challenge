function encriptarTexto(texto) {
    const reglas = {
        e: "enter",
        i: "imes",
        a: "ai",
        o: "ober",
        u: "ufat"
    };
    return texto.split('').map(char => reglas[char] || char).join('');
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    const reglas = {
        enter: "e",
        imes: "i",
        ai: "a",
        ober: "o",
        ufat: "u"
    };
    let resultado = texto;
    for (const [clave, valor] of Object.entries(reglas)) {
        resultado = resultado.replaceAll(clave, valor);
    }
    return resultado;
}

// Función para copiar texto al portapapeles
function copiarTexto() {
    const outputTexto = document.getElementById('outputTexto');
    outputTexto.select();
    document.execCommand('copy');
}

// Conectar funciones a botones
document.getElementById('encriptarBtn').addEventListener('click', () => {
    const inputTexto = document.getElementById('inputTexto').value;
    const textoEncriptado = encriptarTexto(inputTexto);
    document.getElementById('outputTexto').value = textoEncriptado;
});

document.getElementById('desencriptarBtn').addEventListener('click', () => {
    const inputTexto = document.getElementById('inputTexto').value;
    const textoDesencriptado = desencriptarTexto(inputTexto);
    document.getElementById('outputTexto').value = textoDesencriptado;
});

document.getElementById('copiarBtn').addEventListener('click', copiarTexto);