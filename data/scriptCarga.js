function cargarProductos() {
	const productos = [
		{
			rut: "021455669821",
			razonSocial: "Empresa de Telecomunicaciones del Uruguay",
			nombreContacto: "Juan Pérez",
			telefono: "+56912345678",
			email: "juan.perez@antel.com.uy",
			direccion: "Av. Italia 6201, Montevideo",
		},
		{
			rut: "98.765.432-1",
			razonSocial: "Banco República",
			nombreContacto: "María González",
			telefono: "+56987654321",
			email: "maria.gonzalez@banrepcorp.com.uy",
			direccion: "18 de Julio 1317, Montevideo",
		},
		{
			rut: "67.890.123-4",
			razonSocial: "Petrobras Uruguay",
			nombreContacto: "Pedro Hernández",
			telefono: "+56923456789",
			email: "pedro.hernandez@petrobras.com.uy",
			direccion: "Pocitos 11300, Montevideo",
		},
		{
			rut: "23.456.789-0",
			razonSocial: "MVD Seguros",
			nombreContacto: "Carolina Sánchez",
			telefono: "+56934567890",
			email: "carolina.sanchez@mvdseguros.com.uy",
			direccion: "Sarandí 620, Montevideo",
		},
		{
			rut: "01.234.567-8",
			razonSocial: "La Pasiva",
			nombreContacto: "Andrés Gómez",
			telefono: "+56945678901",
			email: "andres.gomez@lapasiva.com.uy",
			direccion: "18 de Julio 1291, Montevideo",
		},
		{
			rut: "89.012.345-6",
			razonSocial: "Aeropuerto Internacional de Carrasco",
			nombreContacto: "Sofía Castro",
			telefono: "+56956789012",
			email: "sofia.castro@mvdairport.com.uy",
			direccion: "Ruta Interbalnearia Km 19,500, Montevideo",
		},
		{
			rut: "45.678.901-2",
			razonSocial: "Bodega Bouza",
			nombreContacto: "Diego Rojas",
			telefono: "+56967890123",
			email: "diego.rojas@bodegabouza.com.uy",
			direccion: "Camino La Redención 7658, Montevideo",
		},
		{
			rut: "23.890.123-4",
			razonSocial: "Televisión Nacional Uruguay",
			nombreContacto: "Cristina Muñoz",
			telefono: "+56978901234",
			email: "cristina.munoz@tveo.com.uy",
			direccion: "Durazno 1351, Montevideo",
		},
		{
			rut: "150496530014",
			razonSocial: "Nautilus Developers",
			nombreContacto: "Víctor Porras",
			telefono: "+598 98 171 657",
			email: "nautilus.uy@gmail.com",
			direccion: "Treinta y Tres 1000 apto 209",
		},
		{
			rut: "115226543200",
			razonSocial: "Satanis S.A.",
			nombreContacto: "Lucía Fernández",
			telefono: "+56901234567",
			email: "lucifer@satanis.com",
			direccion: "Calle San Antonio 123, Canelones",
		},
	];

	const listaProductos = document.querySelector(".listaProductos .container .row");
	const tablaProductos = document.querySelector("#tablaProductos tbody");
	if (tablaProductos) {
		productos.forEach((cliente) => {
			if (tablaProductos) {
				const fila = document.createElement("tr");
				fila.innerHTML = `
        <td>${cliente.rut}</td>
        <td class="text-left">${cliente.razonSocial}</td>
        <td class="text-left">${cliente.nombreContacto}</td>
        <td class="text-left">${cliente.telefono}</td>
        <td class="text-left">${cliente.email}</td>
        <td class="text-left">${cliente.direccion}</td>
        `;
				tablaProductos.appendChild(fila);
			}
			if (listaProductos) {
				const card = document.createElement("div");
				card.className = "card card-reporte col-sm-12 col-md-5 col-lg-3";
				card.innerHTML = `<h2 class="razon-social">${cliente.razonSocial}</h2>
							<div class="datos">
								<p><strong>RUT:</strong>${cliente.rut}</p>
								<p><strong>Contacto:</strong>${cliente.nombreContacto}</p>
								<p><strong>Teléfono:</strong>${cliente.telefono}</p>
								<p><strong>Email:</strong>${cliente.email}</p>
								<p><strong>Dirección:</strong>${cliente.direccion}</p>
							</div> `;
				listaProductos.appendChild(card);
			}
		});
	} else {
		console.error("Error al cargar la tabla: no se encontró el elemento tbody");
	}
}

function cargarClientes() {
	const clientes = [
		{
			rut: "215455669821",
			razonSocial: "Empresa de Telecomunicaciones del Uruguay",
			nombreContacto: "Juan Pérez",
			telefono: "+598 99 123 456",
			email: "juan.perez@antel.com.uy",
			direccion: "Av. Italia 6201, Montevideo",
		},
		{
			rut: "21876543211",
			razonSocial: "Banco República",
			nombreContacto: "María González",
			telefono: "+598 97 654 321",
			email: "maria.gonzalez@banrepcorp.com.uy",
			direccion: "18 de Julio 1317, Montevideo",
		},
		{
			rut: "21678901234",
			razonSocial: "Petrobras Uruguay",
			nombreContacto: "Pedro Hernández",
			telefono: "+598 92 345 678",
			email: "pedro.hernandez@petrobras.com.uy",
			direccion: "Pocitos 11300, Montevideo",
		},
		{
			rut: "21567890120",
			razonSocial: "MVD Seguros",
			nombreContacto: "Carolina Sánchez",
			telefono: "+598 93 456 789",
			email: "carolina.sanchez@mvdseguros.com.uy",
			direccion: "Sarandí 620, Montevideo",
		},
		{
			rut: "21501234568",
			razonSocial: "La Pasiva",
			nombreContacto: "Andrés Gómez",
			telefono: "+598 94 567 890",
			email: "andres.gomez@lapasiva.com.uy",
			direccion: "18 de Julio 1291, Montevideo",
		},
		{
			rut: "21890123456",
			razonSocial: "Aeropuerto Internacional de Carrasco",
			nombreContacto: "Sofía Castro",
			telefono: "+598 95 678 901",
			email: "sofia.castro@mvdairport.com.uy",
			direccion: "Ruta Interbalnearia Km 19,500, Montevideo",
		},
		{
			rut: "21456789012",
			razonSocial: "Bodega Bouza",
			nombreContacto: "Diego Rojas",
			telefono: "+598 96 789 012",
			email: "diego.rojas@bodegabouza.com.uy",
			direccion: "Camino La Redención 7658, Montevideo",
		},
		{
			rut: "21890230124",
			razonSocial: "Televisión Nacional Uruguay",
			nombreContacto: "Cristina Muñoz",
			telefono: "+598 97 890 123",
			email: "cristina.munoz@tveo.com.uy",
			direccion: "Durazno 1351, Montevideo",
		},
		{
			rut: "150496530014",
			razonSocial: "Nautilus Developers",
			nombreContacto: "Víctor Porras",
			telefono: "+598 98 171 657",
			email: "nautilus.uy@gmail.com",
			direccion: "Treinta y Tres 1000 apto 209",
		},
		{
			rut: "115226543200",
			razonSocial: "Satanis S.A.",
			nombreContacto: "Lucía Fernández",
			telefono: "+56901234567",
			email: "lucifer@satanis.com",
			direccion: "Calle San Antonio 666, Canelones",
		},
	];

	const listaClientes = document.querySelector(".listaClientes .container .row");
	const tablaClientes = document.querySelector("#tablaClientes tbody");
	if (tablaClientes) {
		clientes.forEach((cliente) => {
			if (tablaClientes) {
				const fila = document.createElement("tr");
				fila.innerHTML = `
        <td>${cliente.rut}</td>
        <td class="text-left">${cliente.razonSocial}</td>
        <td class="text-left">${cliente.nombreContacto}</td>
        <td class="text-left">${cliente.telefono}</td>
        <td class="text-left">${cliente.email}</td>
        <td class="text-left">${cliente.direccion}</td>
        `;
				tablaClientes.appendChild(fila);
			}
			if (listaClientes) {
				const card = document.createElement("div");
				card.className = "card card-reporte col-sm-12 col-md-5 col-lg-3";
				card.innerHTML = `<h2 class="razon-social">${cliente.razonSocial}</h2>
							<div class="datos">
								<p><strong>RUT:</strong>${cliente.rut}</p>
								<p><strong>Contacto:</strong>${cliente.nombreContacto}</p>
								<p><strong>Teléfono:</strong>${cliente.telefono}</p>
								<p><strong>Email:</strong>${cliente.email}</p>
								<p><strong>Dirección:</strong>${cliente.direccion}</p>
							</div> `;
				listaClientes.appendChild(card);
			}
		});
	} else {
		console.error("Error al cargar la tabla: no se encontró el elemento tbody");
	}
}

function cargarData() {
	const entregas = [
		{
			articulo: "Baño portátil",
			cantidad: 3,
			rfid: 6573156,
			ubicacion: "AA10",
		},
		{
			articulo: "Cuchara",
			cantidad: 6,
			rfid: 253896,
			ubicacion: "JW78",
		},
		{
			articulo: "Cuchillo",
			cantidad: 6,
			rfid: 253885,
			ubicacion: "JW77",
		},
		{
			articulo: "Mesa",
			cantidad: 1,
			rfid: 458122,
			ubicacion: "IK27",
		},
		{
			articulo: "Silla",
			cantidad: 6,
			rfid: 265442,
			ubicacion: "IK24",
		},
		{
			articulo: "Tenedor",
			cantidad: 6,
			rfid: 943856,
			ubicacion: "JW76",
		},
	];

	const devoluciones = [
		{
			articulo: "Luces",
			cantidad: "3",
			rfid: "367356",
			ubicacion: "BA20",
		},
		{
			articulo: "Alargue",
			cantidad: "6",
			rfid: "529396",
			ubicacion: "SS17",
		},
		{
			articulo: "Cámara",
			cantidad: "6",
			rfid: "925885",
			ubicacion: "AW57",
		},
		{
			articulo: "Generador",
			cantidad: "1",
			rfid: "854582",
			ubicacion: "KI72",
		},
		{
			articulo: "Vestido de novia",
			cantidad: "1",
			rfid: "546542",
			ubicacion: "KI42",
		},
		{
			articulo: "Traje negro hombre adulto",
			cantidad: "6",
			rfid: "369386",
			ubicacion: "WA42",
		},
		{
			articulo: "Generador 5000kw",
			cantidad: "10",
			rfid: "8545802",
			ubicacion: "KI720",
		},
		{
			articulo: "Vestido de novia verde",
			cantidad: "10",
			rfid: "5465420",
			ubicacion: "KI402",
		},
		{
			articulo: "Traje negro niño",
			cantidad: "6",
			rfid: "3693806",
			ubicacion: "WA420",
		},
	];

	const clientes = [
		{
			rut: "12.345.678-9",
			razonSocial: "Cliente 1 S.A.",
			nombreContacto: "Juan Pérez",
			telefono: "+56912345678",
			email: "juan.perez@cliente1.com",
			direccion: "Av. Providencia 1234, Santiago",
		},
		{
			rut: "98.765.432-1",
			razonSocial: "Cliente 2 Ltda.",
			nombreContacto: "María González",
			telefono: "+56987654321",
			email: "maria.gonzalez@cliente2.com",
			direccion: "Calle Las Flores 567, Viña del Mar",
		},
		{
			rut: "67.890.123-4",
			razonSocial: "Cliente 3 S.A.",
			nombreContacto: "Pedro Hernández",
			telefono: "+56923456789",
			email: "pedro.hernandez@cliente3.com",
			direccion: "Los Jardines 789, Concepción",
		},
		{
			rut: "23.456.789-0",
			razonSocial: "Cliente 4 S.A.",
			nombreContacto: "Carolina Sánchez",
			telefono: "+56934567890",
			email: "carolina.sanchez@cliente4.com",
			direccion: "Av. Libertad 123, Rancagua",
		},
		{
			rut: "01.234.567-8",
			razonSocial: "Cliente 5 Ltda.",
			nombreContacto: "Andrés Gómez",
			telefono: "+56945678901",
			email: "andres.gomez@cliente5.com",
			direccion: "Calle San Martín 456, Valparaíso",
		},
		{
			rut: "89.012.345-6",
			razonSocial: "Cliente 6 S.A.",
			nombreContacto: "Sofía Castro",
			telefono: "+56956789012",
			email: "sofia.castro@cliente6.com",
			direccion: "La Florida 789, Santiago",
		},
		{
			rut: "45.678.901-2",
			razonSocial: "Cliente 7 S.A.",
			nombreContacto: "Diego Rojas",
			telefono: "+56967890123",
			email: "diego.rojas@cliente7.com",
			direccion: "Calle Las Camelias 890, Talca",
		},
		{
			rut: "23.890.123-4",
			razonSocial: "Cliente 8 Ltda.",
			nombreContacto: "Cristina Muñoz",
			telefono: "+56978901234",
			email: "cristina.munoz@cliente8.com",
			direccion: "Calle San Antonio 123, La Serena",
		},
		{
			rut: "12.345.678-0",
			razonSocial: "Cliente 9 S.A.",
			nombreContacto: "Francisco Torres",
			telefono: "+56989012345",
			email: "francisco.torres@cliente9.com",
			direccion: "Av. Pedro de Valdivia 456, Santiago",
		},
		{
			rut: "98.765.432-0",
			razonSocial: "Satanis S.A.",
			nombreContacto: "Lucía Fernández",
			telefono: "+56901234567",
			email: "lucifer@satanis.com",
			direccion: "Calle San Antonio 123, La Serena",
		},
	];

	const tablaEntregas = document.querySelector("#tablaEntregas tbody");
	if (tablaEntregas) {
		entregas.forEach((entrega) => {
			const fila = document.createElement("tr");
			fila.innerHTML = `
          <td>${entrega.articulo}</td>
          <td class="text-right">${entrega.cantidad}</td>
          <td class="text-right">${entrega.rfid}</td>
          <td class="text-right">${entrega.ubicacion}</td>
        `;
			tablaEntregas.appendChild(fila);
		});
	} else {
		console.error("Error al cargar la tabla: no se encontró el elemento tbody");
	}

	const tablaDevoluciones = document.querySelector("#tablaDevoluciones tbody");
	if (tablaDevoluciones) {
		devoluciones.forEach((entrega) => {
			const fila = document.createElement("tr");
			fila.innerHTML = `
          <td>${entrega.articulo}</td>
          <td class="text-right">${entrega.cantidad}</td>
          <td class="text-right">${entrega.rfid}</td>
          <td class="text-right">${entrega.ubicacion}</td>
        `;
			tablaDevoluciones.appendChild(fila);
		});
	} else {
		console.error("Error al cargar la tabla: no se encontró el elemento tbody");
	}

	const tablaClientes = document.querySelector("#tablaClientes tbody");
	if (tablaClientes) {
		clientes.forEach((cliente) => {
			const fila = document.createElement("tr");
			fila.innerHTML = `
          <td>${cliente.rut}</td>
          <td class="text-right">${cliente.razonSocial}</td>
          <td class="text-right">${cliente.nombreContacto}</td>
          <td class="text-right">${cliente.telefono}</td>
          <td class="text-right">${cliente.email}</td>
          <td class="text-right">${cliente.direccion}</td>
        `;
			tablaDevoluciones.appendChild(fila);
		});
	} else {
		console.error("Error al cargar la tabla: no se encontró el elemento tbody");
	}
}
