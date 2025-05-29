async function generarUsuario() {
    try {
      const res = await fetch('/api/user');
      const data = await res.json();
  
      if (!data || !data.nombre) {
        throw new Error('Datos incompletos');
      }
  
      const perfil = document.getElementById('perfil');
      perfil.innerHTML = `
        <img src="${data.foto}" alt="Foto de usuario" width="100" height="100">
        <p><strong>Nombre:</strong> ${data.nombre}</p>
        <p><strong>Género:</strong> ${data.genero}</p>
        <p><strong>Ubicación:</strong> ${data.ubicacion}</p>
        <p><strong>Correo:</strong> ${data.correo}</p>
        <p><strong>Fecha de Nacimiento:</strong> ${new Date(data.nacimiento).toLocaleDateString()}</p>
      `;
    } catch (error) {
      console.error('Error al mostrar usuario:', error);
      document.getElementById('perfil').innerHTML = `<p>Error al cargar el perfil.</p>`;
    }
  }
  