const firebaseConfig = {
  apiKey: "AIzaSyCozJXTEJct407_E6CpjLSK6EOZgk-W8fc",
  authDomain: "modaestil0.firebaseapp.com",
  projectId: "modaestil0",
  storageBucket: "modaestil0.appspot.com",
  messagingSenderId: "277454254263",
  appId: "1:277454254263:web:8de217a8c39e25ad1d1d32"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function cargarProductosDesdeFirebase() {
  const contenedor = document.getElementById("contenedor-productos");
  contenedor.innerHTML = "Cargando productos...";

  db.collection("productos").onSnapshot(snapshot => {
    contenedor.innerHTML = "";
    snapshot.forEach(doc => {
      const p = doc.data();
      const div = document.createElement("div");
      div.className = "producto";
      div.innerHTML = \`
        <img src="\${Object.values(p.imagenes || {})[0]}" alt="\${p.nombre}">
        <h3>\${p.nombre}</h3>
        <p>Precio: $ \${p.precio?.toLocaleString() || "N/A"}</p>
      \`;
      contenedor.appendChild(div);
    });
  });
}

window.addEventListener("DOMContentLoaded", cargarProductosDesdeFirebase);