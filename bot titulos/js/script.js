// Función para mostrar respuestas según la opción seleccionada
function showResponse(option) {
    let responseText = "";

    if (option === 'titulos') {
        responseText = `
            <b>Tipos de Títulos en Texas:</b><br>
            📜 <b>Clean Title:</b> Sin daños graves.<br>
            📜 <b>Salvage Title:</b> Daños severos, declarado pérdida total.<br>
            📜 <b>Rebuilt Title:</b> Reparado después de ser Salvage.<br>
            📜 <b>Flood Title:</b> Daños por inundación.<br>
            📜 <b>Bonded Title:</b> Cuando falta el título original.<br>
            📜 <b>Lemon Title:</b> Auto devuelto al fabricante por fallas.
        `;
    } else if (option === 'comprar') {
        responseText = `
            <b>Requisitos para Comprar un Auto en Texas:</b><br>
            ✅ Inspección del vehículo.<br>
            ✅ Seguro de responsabilidad civil.<br>
            ✅ Título firmado y Formulario 130-U.<br>
            ✅ Pago de impuestos y tarifas.
        `;
    } else if (option === 'vender') {
        responseText = `
            <b>Requisitos para Vender un Auto en Texas:</b><br>
            ✅ Transferencia del título.<br>
            ✅ Formulario 130-U.<br>
            ✅ Notificación de transferencia.<br>
            ✅ Retiro de placas (opcional).
        `;
    } else if (option === 'faq') {
        responseText = `
            <b>Preguntas Frecuentes:</b><br>
            ❓ <b>¿Cuánto tiempo tengo para registrar un auto después de comprarlo?</b> - 30 días.<br>
            ❓ <b>¿Puedo comprar un auto sin licencia en Texas?</b> - Sí, pero se necesita una identificación válida.<br>
            ❓ <b>¿Cómo verificar si un título es válido?</b> - Consultando el DMV de Texas.
        `;
    }

    document.getElementById("response").innerHTML = responseText;
    document.getElementById("response").style.display = "block";
}
