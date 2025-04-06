document.getElementById('formSolicitudProcedimiento').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener los valores del formulario
  const nombrePaciente = document.getElementById('nombrePaciente').value;
  const fechaConsulta = document.getElementById('fechaConsulta').value;
  const nombreMedico = document.getElementById('nombreMedico').value;
  const cedulaMedico = document.getElementById('cedulaMedico').value;
  const diagnostico = document.getElementById('diagnostico').value;
  const procedimiento = document.getElementById('procedimiento').value;
  const justificacion = document.getElementById('justificacion').value;
  const fechaOpcion1 = document.getElementById('fechaOpcion1').value;
  const fechaOpcion2 = document.getElementById('fechaOpcion2').value;
  const fechaOpcion3 = document.getElementById('fechaOpcion3').value;
  const horarioPreferente = document.getElementById('horarioPreferente').value;

  // Construir el objeto con los datos de la solicitud de procedimiento
  const solicitudData = {
      nombrePaciente,
      fechaConsulta,
      nombreMedico,
      cedulaMedico,
      diagnostico,
      procedimiento,
      justificacion,
      fechasDisponibles: {
          fechaOpcion1,
          fechaOpcion2,
          fechaOpcion3
      },
      horarioPreferente
  };

  // Mostrar los datos en consola para verificar
  console.log(solicitudData);

  // Enviar la solicitud al backend (asegúrate de que la URL sea la correcta)
  fetch('https://hl7-fhir-ehr-karol-1.onrender.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(solicitudData)
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Error en la solicitud: ' + response.statusText);
      }
      return response.json();
  })
  .then(data => {
      console.log('Success:', data);
      alert('¡Solicitud enviada exitosamente! ID: ' + data._id);
  })
  .catch(error => {
      console.error('Error:', error);
      alert('Hubo un error en la solicitud: ' + error.message);
  });
});
