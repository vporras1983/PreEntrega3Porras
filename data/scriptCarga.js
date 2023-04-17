function cargarProductos() {
	const productos = [
		{
			id: "0000001",
			nombre: "Silla plegable",
			cantidad: 80,
			ubicacion: "WA03",
			precio: 25.99,
		},
		{
			id: "0000002",
			nombre: "Mesa portátil",
			cantidad: 20,
			ubicacion: "RE05",
			precio: 39.99,
		},
		{
			id: "0000003",
			nombre: "Linterna LED",
			cantidad: 15,
			ubicacion: "LI02",
			precio: 12.99,
		},
		{
			id: "0000004",
			nombre: "Generador 5000W",
			cantidad: 1,
			ubicacion: "PO10",
			precio: 299.99,
		},
		{
			id: "0000005",
			nombre: "Luces de teatro",
			cantidad: 7,
			ubicacion: "LU15",
			precio: 199.99,
		},
		{
			id: "0000006",
			nombre: "Vestido de noche",
			cantidad: 2,
			ubicacion: "RO03",
			precio: 299.99,
		},
		{
			id: "0000007",
			nombre: "Cámara de cine",
			cantidad: 3,
			ubicacion: "CA05",
			precio: 799.99,
		},
		{
			id: "0000008",
			nombre: "Trípode de cámara",
			cantidad: 5,
			ubicacion: "TR06",
			precio: 89.99,
		},
		{
			id: "0000009",
			nombre: "Mochila para cámara",
			cantidad: 5,
			ubicacion: "MO08",
			precio: 59.99,
		},
		{
			id: "0000010",
			nombre: "Micrófono de solapa",
			cantidad: 4,
			ubicacion: "MI02",
			precio: 39.99,
		},
		{
			id: "0000011",
			nombre: "Rode NTG-3",
			cantidad: 6,
			ubicacion: "RO02",
			precio: 499.99,
		},
		{
			id: "0000012",
			nombre: "Grip para cámara",
			cantidad: 7,
			ubicacion: "GR10",
			precio: 129.99,
		},
		{
			id: "0000013",
			nombre: "Batería para cámara",
			cantidad: 5,
			ubicacion: "BA12",
			precio: 79.99,
		},
		{
			id: "0000014",
			nombre: "Fondo de tela",
			cantidad: 2,
			ubicacion: "FO02",
			precio: 49.99,
		},
		{
			id: "0000015",
			nombre: "Silla de director",
			cantidad: 10,
			ubicacion: "KF23",
			precio: 35.5,
		},
		{
			id: "0000016",
			nombre: "Mesa plegable",
			cantidad: 5,
			ubicacion: "WQ47",
			precio: 85.0,
		},
		{
			id: "0000017",
			nombre: "Lámpara de set",
			cantidad: 20,
			ubicacion: "DR92",
			precio: 45.75,
		},
		{
			id: "0000018",
			nombre: "Generador eléctrico",
			cantidad: 2,
			ubicacion: "HG56",
			precio: 1420.0,
		},
		{
			id: "0000019",
			nombre: "Kit de iluminación",
			cantidad: 8,
			ubicacion: "YU34",
			precio: 1200.0,
		},
		{
			id: "0000020",
			nombre: "Vestuario de época",
			cantidad: 15,
			ubicacion: "XC76",
			precio: 500.0,
		},
		{
			id: "0000021",
			nombre: "Mesa de maquillaje",
			cantidad: 10,
			ubicacion: "AS43",
			precio: 350.0,
		},
		{
			id: "0000022",
			nombre: "Silla de director",
			cantidad: 6,
			ubicacion: "GF21",
			precio: 250.0,
		},
		{
			id: "0000023",
			nombre: "Pantalla de proyección",
			cantidad: 2,
			ubicacion: "LK87",
			precio: 1200.0,
		},
		{
			id: "0000024",
			nombre: "Grua de cámara",
			cantidad: 1,
			ubicacion: "RT09",
			precio: 5000.0,
		},
		{
			id: "0000025",
			nombre: "Foco led",
			cantidad: 20,
			ubicacion: "BH66",
			precio: 150.0,
		},
		{
			id: "0000026",
			nombre: "Micrófono boom",
			cantidad: 8,
			ubicacion: "KJ32",
			precio: 800.0,
		},
		{
			id: "0000027",
			nombre: "Silla de ruedas",
			cantidad: 4,
			ubicacion: "MN75",
			precio: 400.0,
		},
		{
			id: "0000028",
			nombre: "Parlante JBL con trípode",
			cantidad: 3,
			ubicacion: "OP14",
			precio: 1200.0,
		},
		{
			id: "0000029",
			nombre: "Pistola de atrezzo",
			cantidad: 12,
			ubicacion: "UY83",
			precio: 300.0,
		},
		{
			id: "0000030",
			nombre: "Cable de audio XLR",
			cantidad: 50,
			ubicacion: "EC02",
			precio: 25.0,
		},
		{
			id: "0000031",
			nombre: "Juego de maletas",
			cantidad: 3,
			ubicacion: "GF45",
			precio: 500.0,
		},
		{
			id: "0000032",
			nombre: "Amplificador de sonido",
			cantidad: 15,
			ubicacion: "QS23",
			precio: 200.0,
		},
		{
			id: "0000033",
			nombre: "Estabilizador de cámara",
			cantidad: 5,
			ubicacion: "TY78",
			precio: 1000.0,
		},
		{
			id: "0000034",
			nombre: "Foco Fresnel",
			cantidad: 12,
			ubicacion: "WO12",
			precio: 350.0,
		},
	];

	const listaProductos = document.querySelector(".listaProductos .container .row");
	const tablaProductos = document.querySelector("#tablaProductos tbody");
	if (tablaProductos) {
		productos.forEach((producto) => {
			if (tablaProductos) {
				const fila = document.createElement("tr");
				fila.innerHTML = `
        <td>${producto.id}</td>
        <td class="text-left">${producto.nombre}</td>
        <td class="text-right">${producto.cantidad}</td>
        <td class="text-center">${producto.ubicacion}</td>
        <td class="text-right">${producto.precio}</td>
        `;
				tablaProductos.appendChild(fila);
			}
			if (listaProductos) {
				const card = document.createElement("div");
				card.className = "card card-reporte col-sm-12 col-md-5 col-lg-3";
				card.innerHTML = `<h2 class="razon-social">${producto.id}</h2>
							<div class="datos">
								<p><strong>Nombre:</strong>${producto.nombre}</p>
								<p><strong>Cantidad:</strong>${producto.cantidad}</p>
								<p><strong>Ubicación:</strong>${producto.ubicacion}</p>
								<p><strong>Precio:</strong>$ ${producto.precio}</p>
							</div> `;
				listaProductos.appendChild(card);
			}
		});
	} else {
		console.error("Error al cargar la tabla: no se encontró el elemento tbody");
	}
}

function cargarClientes() {
	const productos = [
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
		productos.forEach((producto) => {
			if (tablaClientes) {
				const fila = document.createElement("tr");
				fila.innerHTML = `
        <td>${producto.rut}</td>
        <td class="text-left">${producto.razonSocial}</td>
        <td class="text-left">${producto.nombreContacto}</td>
        <td class="text-left">${producto.telefono}</td>
        <td class="text-left">${producto.email}</td>
        <td class="text-left">${producto.direccion}</td>
        `;
				tablaClientes.appendChild(fila);
			}
			if (listaClientes) {
				const card = document.createElement("div");
				card.className = "card card-reporte col-sm-12 col-md-5 col-lg-3";
				card.innerHTML = `<h2 class="razon-social">${producto.razonSocial}</h2>
							<div class="datos">
								<p><strong>RUT:</strong>${producto.rut}</p>
								<p><strong>Contacto:</strong>${producto.nombreContacto}</p>
								<p><strong>Teléfono:</strong>${producto.telefono}</p>
								<p><strong>Email:</strong>${producto.email}</p>
								<p><strong>Dirección:</strong>${producto.direccion}</p>
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

	const productos = [
		{
			rut: "12.345.678-9",
			razonSocial: "Cliente 1 S.A.",
			nombreContacto: "Juan Pérez",
			telefono: "+56912345678",
			email: "juan.perez@producto1.com",
			direccion: "Av. Providencia 1234, Santiago",
		},
		{
			rut: "98.765.432-1",
			razonSocial: "Cliente 2 Ltda.",
			nombreContacto: "María González",
			telefono: "+56987654321",
			email: "maria.gonzalez@producto2.com",
			direccion: "Calle Las Flores 567, Viña del Mar",
		},
		{
			rut: "67.890.123-4",
			razonSocial: "Cliente 3 S.A.",
			nombreContacto: "Pedro Hernández",
			telefono: "+56923456789",
			email: "pedro.hernandez@producto3.com",
			direccion: "Los Jardines 789, Concepción",
		},
		{
			rut: "23.456.789-0",
			razonSocial: "Cliente 4 S.A.",
			nombreContacto: "Carolina Sánchez",
			telefono: "+56934567890",
			email: "carolina.sanchez@producto4.com",
			direccion: "Av. Libertad 123, Rancagua",
		},
		{
			rut: "01.234.567-8",
			razonSocial: "Cliente 5 Ltda.",
			nombreContacto: "Andrés Gómez",
			telefono: "+56945678901",
			email: "andres.gomez@producto5.com",
			direccion: "Calle San Martín 456, Valparaíso",
		},
		{
			rut: "89.012.345-6",
			razonSocial: "Cliente 6 S.A.",
			nombreContacto: "Sofía Castro",
			telefono: "+56956789012",
			email: "sofia.castro@producto6.com",
			direccion: "La Florida 789, Santiago",
		},
		{
			rut: "45.678.901-2",
			razonSocial: "Cliente 7 S.A.",
			nombreContacto: "Diego Rojas",
			telefono: "+56967890123",
			email: "diego.rojas@producto7.com",
			direccion: "Calle Las Camelias 890, Talca",
		},
		{
			rut: "23.890.123-4",
			razonSocial: "Cliente 8 Ltda.",
			nombreContacto: "Cristina Muñoz",
			telefono: "+56978901234",
			email: "cristina.munoz@producto8.com",
			direccion: "Calle San Antonio 123, La Serena",
		},
		{
			rut: "12.345.678-0",
			razonSocial: "Cliente 9 S.A.",
			nombreContacto: "Francisco Torres",
			telefono: "+56989012345",
			email: "francisco.torres@producto9.com",
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
		productos.forEach((producto) => {
			const fila = document.createElement("tr");
			fila.innerHTML = `
          <td>${producto.rut}</td>
          <td class="text-right">${producto.razonSocial}</td>
          <td class="text-right">${producto.nombreContacto}</td>
          <td class="text-right">${producto.telefono}</td>
          <td class="text-right">${producto.email}</td>
          <td class="text-right">${producto.direccion}</td>
        `;
			tablaDevoluciones.appendChild(fila);
		});
	} else {
		console.error("Error al cargar la tabla: no se encontró el elemento tbody");
	}
}
