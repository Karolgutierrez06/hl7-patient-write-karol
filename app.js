

  document.getElementById('serviceRequestForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener todos los valores
    const datosSolicitud = {
      paciente: {
        nombre: document.getElementById('nombrePaciente').value,
        fechaConsulta: document.getElementById('fechaConsulta').value
      },
      medico: {
        nombre: document.getElementById('nombreMedico').value,
        cedula: document.getElementById('cedulaMedico').value
      },
      diagnostico: document.getElementById('diagnostico').value,
      procedimiento: {
        nombre: document.getElementById('procedimiento').value,
        justificacion: document.getElementById('justificacion').value
      },
      disponibilidad: {
        fechas: [
          document.getElementById('fechaOpcion1').value,
          document.getElementById('fechaOpcion2').value,
          document.getElementById('fechaOpcion3').value
        ].filter(fecha => fecha !== ""), // Filtra fechas no seleccionadas
        horario: document.getElementById('horarioPreferente').value
      }
    };
  
    console.log("Datos de la solicitud:", datosSolicitud);
    
    // Aquí iría el código para enviar al servidor
    // Ejemplo:
    // fetch('/api/solicitudes', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(datosSolicitud)
    // });
    
    alert('Solicitud enviada correctamente');
  });