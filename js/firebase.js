    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
    import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyD6OJiibt1H7db0GoTH7em3CcC_qb7rZ28",
      authDomain: "pagos-e4592.firebaseapp.com",
      projectId: "pagos-e4592",
      storageBucket: "pagos-e4592.appspot.com",
      messagingSenderId: "246023860637",
      appId: "1:246023860637:web:cf875c017c3afb5bdfff74",
      measurementId: "G-Z2WHSCHL5R"
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
      