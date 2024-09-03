const cuentas = [
  { nombre: "Maui", saldo: 67, password: "contraseña" },
  { nombre: "Gera", saldo: 290, password: "123456" },
  { nombre: "Mali", saldo: 200, password: "qwerty" },
];

function login() {
  const nombre = document.getElementById("nombre").value;
  const password = document.getElementById("password").value;

  if (nombre === "Mali" && password === "qwerty") {
    window.location.replace("Atm_Mali.html");
  } else if (nombre === "Gera" && password === "123456") {
    window.location.replace("Atm_Gera.html");
  } else if (nombre === "Maui" && password === "contraseña") {
    window.location.replace("Atm_Maui.html");
  } else {
    alert("Usuario o contraseña incorrectos, favor de verificar");
  }
}

function Retirar() {
  const CantidadT = parseInt(document.getElementById("Cant").value, 10);
  const Cantidad1 = parseInt(document.getElementById("C1").value, 10);

  if (Cantidad1 - CantidadT >= 10) {
    document.getElementById("C1").value = Cantidad1 - CantidadT;
  } else {
    alert(
      "Movimiento inválido: La cuenta no puede tener un saldo menor a $10.00. Ingresa otra cantidad."
    );
  }
}

function Depositar() {
  const CantidadT = parseInt(document.getElementById("Cant").value, 10);
  const Cantidad1 = parseInt(document.getElementById("C1").value, 10);

  if (Cantidad1 + CantidadT <= 990) {
    document.getElementById("C1").value = Cantidad1 + CantidadT;
  } else {
    alert(
      "Movimiento inválido: Sobrepasa el límite permitido en la cuenta de $990.00. Por favor ingresa otra cantidad."
    );
  }
}
