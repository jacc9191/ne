<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

  <title>Moda & Estilo</title>
  <style>
     #login, #adminPanel {
      max-width: 300px;
      margin: 50px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    input, button {
      width: 100%;
      padding: 10px;
      margin: 5px 0;
    }
    button {
      background: #3498db;
      color: white;
      border: none;
    }
    button:hover {
      background: #2980b9;
    }
    #login {
      display: none; /* Oculto inicialmente */
    }
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #f9f9f9;
      margin: 0;
      padding: 0;
    }

    header {
      background: #2c3e50;
      color: white;
      padding: 1rem;
      text-align: center;
    }

    .fila-carrito {
      position: sticky;
      top: 0;
      z-index: 100;
      display: flex;
      justify-content: flex-end;
      background-color: #f9f9f9;
      padding: 0.5rem 1rem;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    }

   #verCarrito {
  width: 20vw; /* 25% del ancho de la ventana */
  background-color: #e67e22;
  color: white;
  border: none;
  padding: 8px 0; /* más alto, centrado */
  font-size: 14px;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: background-color 0.2s ease;
  text-align: center;
}

    #verCarrito:hover {
      background-color: #cf711a;
    }

    #login, #formularioCliente, #formNuevoProducto {
      background: white;
      max-width: 400px;
      margin: 2rem auto;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    input, select, button {
      width: 100%;
      padding: 0.5rem;
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-sizing: border-box;
    }

    button {
      background-color: #2c3e50;
      color: white;
      font-weight: bold;
      cursor: pointer;
    }

    button:hover {
      background-color: #34495e;
    }

    #contenedor-productos {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
      padding: 1rem;
    }

    .card {
      background: white;
      padding: 1rem;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      text-align: center;
    }

    .card img {
      width: 100%;
      height: auto;
      border-radius: 6px;
      margin-bottom: 0.5rem;
    }

    .info p, .info h3 {
      margin: 0.3rem 0;
    }

    #carrito {
      position: fixed;
      top: 80px;
      right: 10px;
      background: white;
      border: 1px solid #ccc;
      padding: 1rem;
      width: 300px;
      max-height: 80vh;
      overflow-y: auto;
      z-index: 1000;
      border-radius: 8px;
    }

    #notificacion {
      display: none;
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: #28a745;
      color: white;
      padding: 1rem;
      border-radius: 8px;
      z-index: 9999;
      font-weight: bold;
    }

    .oculto {
      display: none !important;
    }

     .btn-whatsapp {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #25D366;
    color: white;
    font-size: 28px;
    padding: 14px;
    border-radius: 50%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    z-index: 10000;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }

  .btn-whatsapp:hover {
    background-color: #1ebe5d;
  }

  </style>
</head>
<body>

  <header>
    <h1>Moda & Estilo</h1>
  </header>

  <div class="fila-carrito">
    <button id="verCarrito" onclick="mostrarCarrito()">🛒 Ver carrito</button>
  </div>

  <div id="contenedor-productos"></div>
  <div id="carrito" class="oculto"></div>


  <div id="login">
  <h2>Acceso administrador</h2>
  <input id="usuario" placeholder="Usuario" /><br>
  <input id="clave" type="password" placeholder="Contraseña" /><br>
  <button onclick="login()">Ingresar</button>
</div>

<div id="adminPanel" style="display:none; max-width:400px; margin:2rem auto; background:white; padding:1rem; border-radius:10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
  <h2>Bienvenido, administrador</h2>
  <p>Ahora puedes gestionar tus productos.</p>
</div>
<div id="formNuevoProducto" style="display:none; padding: 1rem; max-width: 400px; margin: 2rem auto; background: white; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
  <h3>Agregar nuevo producto</h3>
  <input id="nuevoNombre" placeholder="Nombre del producto" /><br>
  <input id="nuevoPrecio" type="number" placeholder="Precio" /><br>
  <input id="nuevoPromo" type="number" placeholder="Precio promocional (opcional)" /><br>
  <input id="inputImagenURL" placeholder="URL de imagen (Postimages, Imgur...)" /><br>
  <input id="nuevasTallas" placeholder="Tallas (ej: 38,39,40)" /><br>
  <input id="nuevosColores" placeholder="Colores (ej: Negro,Blanco)" /><br>
  <button onclick="agregarNuevoProducto()">✅ Guardar producto</button>
</div>



  
  <div id="formularioCliente" class="oculto" style="position:fixed; top:10%; left:50%; transform:translateX(-50%);
    background:white; padding:1rem; border:1px solid #ccc; border-radius:10px; z-index:10000; width:300px;">
    <h3>Datos del cliente</h3>
    <input id="nombreCliente" placeholder="Nombre completo" /><br>
    <input id="departamentoCliente" placeholder="Departamento" /><br>
    <input id="ciudadCliente" placeholder="Ciudad" /><br>
    <input id="direccionCliente" placeholder="Dirección" /><br>
    <input id="celularCliente" placeholder="Celular" /><br>
    <select id="metodoPagoCliente">
      <option value="">Selecciona método de pago</option>
      <option value="Efectivo">💵 Contraentrega</option>
      <option value="Transferencia">💳 Transferencia</option>
    </select>
    <button id="btnEnviarPedido" onclick="confirmarEnvioWhatsApp()">📲 Enviar pedido</button>
    <button onclick="document.getElementById('formularioCliente').classList.add('oculto')">Cancelar</button>
  </div>

  <div id="notificacion">✅ Pedido enviado correctamente.</div>

<a href="https://wa.me/573001234567" target="_blank" class="btn-whatsapp" aria-label="Chatea con nosotros por WhatsApp">
  <i class="fab fa-whatsapp"></i>
</a>


<footer style="text-align: center; padding: 1rem; background: #2d3b49; color: white;">
  <div style="font-size: 1.8rem;">
    <a href="https://facebook.com/tu-pagina" target="_blank" style="margin: 0 10px; color: #0e54eb;"><i class="fab fa-facebook"></i></a>
    <a href="https://instagram.com/tu-pagina" target="_blank" style="margin: 0 10px; color: #e1306c;"><i class="fab fa-instagram"></i></a>
    <a href="https://www.tiktok.com/@tu-cuenta" target="_blank" style="margin: 0 10px; color: #000000;"><i class="fab fa-tiktok"></i></a>
  </div>
  <div style="font-size: 0.9rem; color: #ccc;">
    &copy; 2025 Moda & Estilo. Todos los derechos reservados.
  </div>
</footer>

  <script>
    let esAdmin = false;
    let carrito = [];
let productos = [];
let productosFiltrados = [];

async function login() {
  const u = document.getElementById("usuario").value;
  const c = document.getElementById("clave").value;
  if (u === "admin" && c === "1234") {
    esAdmin = true;
    document.getElementById("login").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";
    document.getElementById("formNuevoProducto").style.display = "block";
    await cargarProductosDesdeFirestore(); // ✅ solo si es admin
  } else {
    alert("Acceso denegado");
  }
}


    document.addEventListener("keydown", e => {
      if (e.ctrlKey && e.shiftKey && e.key === "A") {
        document.getElementById("login").style.display = "block";
      }
    });

    function renderProductos(lista) {
      const contenedor = document.getElementById("contenedor-productos");
      contenedor.innerHTML = "";
      lista.forEach(p => {
        const imagen = p.imagenes[0] || "https://via.placeholder.com/200";
        contenedor.innerHTML += esAdmin
          ? `<div class="card">
              <img src="${imagen}" />
              <div class="info">
                <h3>${p.nombre}</h3>
                <p>Tallas: ${p.tallas.join(", ")}</p>
                <p>Colores: ${p.colores.join(", ")}</p>
                <p>$${p.precio.toLocaleString()}</p>
                <button onclick="editarProducto(${p.id})">✏️ Editar</button>
                <button onclick="eliminarProducto(${p.id})">🗑 Eliminar</button>
              </div>
            </div>`
          : `<div class="card">
              <img src="${imagen}" />
              <div class="info">
                <h3>${p.nombre}</h3>
                <label>Talla:
                  <select id="talla-${p.id}">
                    ${p.tallas.map(t => `<option value="${t}">${t}</option>`).join("")}
                  </select>
                </label>
                <label>Color:
                  <select id="color-${p.id}">
                    ${p.colores.map(c => `<option value="${c}">${c}</option>`).join("")}
                  </select>
                </label>
                <p>
      ${p.precioPromocion && p.precioPromocion > 0
        ? `<span style="text-decoration:line-through;">$${p.precio.toLocaleString()}</span><br>
           <strong style="color:red;">$${p.precioPromocion.toLocaleString()}</strong>`
        : `<strong>$${p.precio.toLocaleString()}</strong>`}
    </p>
                <button onclick="agregarCarrito(${p.id})">Agregar al carrito</button>
              </div>
            </div>`;
      });
    }

    function editarProducto(id) {
      const p = productos.find(prod => prod.id === id);

      const nuevoNombre = prompt("Nuevo nombre:", p.nombre);
      const nuevoPrecio = prompt("Nuevo precio:", p.precio);
      const nuevoPromo = prompt("Precio promocional (0 si no aplica):", p.precioPromocion || 0);
      const nuevaImagen = prompt("Nueva URL de imagen:", p.imagenes[0] || "");
      const nuevasTallas = prompt("Nuevas tallas separadas por coma:", p.tallas.join(","));
      const nuevosColores = prompt("Nuevos colores separados por coma:", p.colores.join(","));

      if (
        nuevoNombre &&
        !isNaN(nuevoPrecio) &&
        !isNaN(nuevoPromo) &&
        nuevaImagen &&
        nuevasTallas &&
        nuevosColores
      ) {
        p.nombre = nuevoNombre;
        p.precio = parseFloat(nuevoPrecio);
        p.precioPromocion = parseFloat(nuevoPromo);
        p.imagenes[0] = nuevaImagen;
        p.tallas = nuevasTallas.split(",").map(t => t.trim());
        p.colores = nuevosColores.split(",").map(c => c.trim());
        
      } else {
        alert("Uno o más valores no son válidos.");
      }
    }

    function eliminarProducto(id) {
      if (confirm("¿Estás seguro de eliminar este producto?")) {
        const index = productos.findIndex(p => p.id === id);
        productos.splice(index, 1);
        productosFiltrados = [...productos];
        
      }
    }

    function agregarCarrito(id) {
      const prod = productos.find(p => p.id === id);
      const tallaSel = document.getElementById(`talla-${id}`).value;
      const colorSel = document.getElementById(`color-${id}`).value;
      carrito.push({ ...prod, talla: tallaSel, color: colorSel, precio: prod.precioPromocion > 0 ? prod.precioPromocion : prod.precio });
      guardarCarrito();
      alert(`Agregado: ${prod.nombre} - Talla ${tallaSel} - Color ${colorSel}`);
    }

   function mostrarCarrito() {
  const panel = document.getElementById("carrito");

  // Toggle oculto
  if (!panel.classList.contains("oculto")) {
    panel.classList.add("oculto");
    return;
  }

  // Encabezado del carrito con botón de cierre
  let contenido = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
      <h3 style="margin:0; font-size:1rem;">🛒 Carrito</h3>
      <button style="background:none; border:none; font-size:1.2rem; color:#666; cursor:pointer;" 
              onclick="document.getElementById('carrito').classList.add('oculto')">❌</button>
    </div>
    <hr style="margin: 0.3rem 0;">
  `;

  if (carrito.length === 0) {
    contenido += `<p style="text-align:center; color:#666;">Tu carrito está vacío.</p>`;
  } else {
    let total = 0;
    carrito.forEach((p, i) => {
      contenido += `
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom: 0.5rem;">
          <div style="flex:1;">
            <strong style="font-size:0.9rem;">${p.nombre}</strong><br>
            <span style="font-size:0.8rem; color:#555;">Talla: ${p.talla} | Color: ${p.color}</span><br>
            <span style="font-size:0.85rem; color:#000;">$${p.precio.toLocaleString()}</span>
          </div>
          <button onclick="quitarDelCarrito(${i})" 
                  style="background:none; border:none; color:red; font-size:1.1rem; cursor:pointer;">❌</button>
        </div>
      `;
      total += p.precio;
    });

    contenido += `
      <hr>
      <div style="text-align:right; font-weight:bold;">Total: $${total.toLocaleString()}</div>
      <button onclick="document.getElementById('formularioCliente').classList.remove('oculto')" 
              style="margin-top:0.8rem;">📝 Finalizar pedido</button>
    `;
  }

  panel.innerHTML = contenido;
  panel.classList.remove("oculto");
}


    function quitarDelCarrito(indice) {
      carrito.splice(indice, 1);
      guardarCarrito();
      mostrarCarrito();
    }

    function guardarCarrito() {
      localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    function cargarCarrito() {
      const data = localStorage.getItem("carrito");
      if (data) carrito = JSON.parse(data);
    }

    function confirmarEnvioWhatsApp() {
      const nombre = document.getElementById("nombreCliente").value;
      const departamento = document.getElementById("departamentoCliente").value;
      const ciudad = document.getElementById("ciudadCliente").value;
      const direccion = document.getElementById("direccionCliente").value;
      const celular = document.getElementById("celularCliente").value;
      const metodoPago = document.getElementById("metodoPagoCliente").value;

      if (!nombre || !departamento || !ciudad || !direccion || !celular || !metodoPago) {
        alert("Por favor, completa todos los campos.");
        return;
      }

      const datos = { nombre, departamento, ciudad, direccion, celular, metodoPago };
      localStorage.setItem("datosCliente", JSON.stringify(datos));

      const ahora = new Date();
      let mensaje = `🛍 *Pedido - Moda & Estilo*\n🗓️ *Fecha:* ${ahora.toLocaleDateString()} ⏰ *Hora:* ${ahora.toLocaleTimeString()}\n\n`;

      let total = 0;
      carrito.forEach((p, i) => {
        mensaje += `📦 *${i + 1}.* ${p.nombre}\n👟 Talla: ${p.talla} | 🎨 Color: ${p.color}\n💵 Precio: $${p.precio.toLocaleString()}\n\n`;
        total += p.precio;
      });

      mensaje += `🧾 *Total a pagar:* $${total.toLocaleString()}\n\n`;
      mensaje += `📍 *Datos del cliente:*\n👤 *Nombre:* ${nombre}\n🏙️ *Ciudad:* ${ciudad}, ${departamento}\n🏠 *Dirección:* ${direccion}\n📱 *Celular:* ${celular}\n💳 *Método de pago:* ${metodoPago}\n\n`;
      mensaje += "🙏 *Gracias por tu compra! Te contactaremos pronto para confirmar el envío.*";

      const enlace = `https://wa.me/573185634316?text=${encodeURIComponent(mensaje)}`;

      document.getElementById("btnEnviarPedido").disabled = true;
      document.getElementById("btnEnviarPedido").innerText = "Enviando...";

      window.open(enlace, "_blank");

      carrito = [];
      guardarCarrito();
      document.getElementById("formularioCliente").classList.add("oculto");
      mostrarCarrito();
      document.getElementById("notificacion").style.display = "block";
    document.getElementById("formularioCliente").reset();

      setTimeout(() => {
        document.getElementById("notificacion").style.display = "none";
        document.getElementById("btnEnviarPedido").disabled = false;
        document.getElementById("btnEnviarPedido").innerText = "📲 Enviar pedido";
      }, 3000);
    }

    cargarCarrito();

window.addEventListener("DOMContentLoaded", async () => {
  cargarCarrito();
  await cargarProductosDesdeFirestore();
});

    
    function cargarComentarios() {
  const lista = document.getElementById("listaComentarios");
  lista.innerHTML = "";
  const comentarios = JSON.parse(localStorage.getItem("comentarios") || "[]");
  comentarios.forEach(c => {
    lista.innerHTML += `
      <div class="comentario">
        <p><strong>${c.nombre}</strong></p>
        <p>${c.texto}</p>
        <p class="estrellas">${"⭐".repeat(c.estrellas)}</p>
      </div>
    `;
  });
}
async function cargarProductosDesdeFirestore() {
  const snapshot = await getDocs(collection(db, "productos"));
  productos.length = 0; // limpiamos array
  snapshot.forEach(docSnap => productos.push(docSnap.data()));
  productosFiltrados = [...productos];
  
}


    
  </script>
   <!-- Tus scripts anteriores -->

<script type="module">
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore, collection, getDocs, setDoc, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDRke4OiEc8kH53DnqnZNaN9Gh-vtbWt6c",
  authDomain: "moda-f7b0a.firebaseapp.com",
  projectId: "moda-f7b0a",
  storageBucket: "moda-f7b0a.appspot.com",
  messagingSenderId: "679385315025",
  appId: "1:679385315025:web:dbe923a6a1f77d5d0e77f0"
};

const app = initializeApp(firebaseConfig); // ✅ esta línea es vital
const db = getFirestore(app);
const storage = getStorage(app);


  window.agregarNuevoProducto = async () => {
    const nombre = document.getElementById("nuevoNombre").value;
    const precio = parseFloat(document.getElementById("nuevoPrecio").value);
    const promo = parseFloat(document.getElementById("nuevoPromo").value) || 0;
    const imagenURL = document.getElementById("inputImagenURL").value.trim();
    const tallas = document.getElementById("nuevasTallas").value.split(",").map(t => t.trim());
    const colores = document.getElementById("nuevosColores").value.split(",").map(c => c.trim());

    if (!nombre || isNaN(precio) || !imagenURL || tallas.length === 0 || colores.length === 0) {
      alert("Por favor completa todos los campos correctamente.");
      return;
    }

    const nuevoId = productos.length ? Math.max(...productos.map(p => p.id)) + 1 : 1;
    const nuevoProducto = {
      id: nuevoId,
      nombre,
      precio,
      precioPromocion: promo,
      imagenes: [imagenURL],
      tallas,
      colores
    };

    productos.push(nuevoProducto);
    productosFiltrados = [...productos];
    localStorage.setItem("productos", JSON.stringify(productos));
    await setDoc(doc(db, "productos", nuevoId.toString()), nuevoProducto);
    
    alert("✅ Producto agregado y guardado en Firestore");

    // Limpiar campos
    document.getElementById("nuevoNombre").value = "";
    document.getElementById("nuevoPrecio").value = "";
    document.getElementById("nuevoPromo").value = "";
    document.getElementById("inputImagenURL").value = "";
    document.getElementById("nuevasTallas").value = "";
    document.getElementById("nuevosColores").value = "";
  };
window.eliminarTodosLosProductos = async () => {
  if (!confirm("⚠️ Esto eliminará todos los productos. ¿Estás seguro?")) return;

  const snapshot = await getDocs(collection(db, "productos"));
  for (const docSnap of snapshot.docs) {
    await deleteDoc(doc(db, "productos", docSnap.id));
  }

  productos = [];
  productosFiltrados = [];
  localStorage.removeItem("productos");
  

  alert("🗑️ Todos los productos fueron eliminados de Firestore y localStorage.");
};

</script>

</body>
</html>
