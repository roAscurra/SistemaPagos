    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
    import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyDOlkR26ROtL9isCuvIgqOrCbo4ifhNeJA",
      authDomain: "crud-543f2.firebaseapp.com",
      projectId: "crud-543f2",
      storageBucket: "crud-543f2.appspot.com",
      messagingSenderId: "31213581685",
      appId: "1:31213581685:web:6cd86650cb0d90381e0f3c"
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
    const db = getDatabase();

    export const InsertData = (nombre, transaccion,caja,cantidad,usd) => {
        push(ref(db,"Pagos/"),{
          Nombre: nombre,
          transaccion: transaccion,
          Caja: caja,
          Monto: cantidad,
          USDT: usd,
        })
        .then(()=> {
          console.log("Datos guardados")
        })
        .catch((error)=>{
          console.log(error)
        });
      }
      