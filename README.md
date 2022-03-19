## Desafio - Chat de multas

Se crea backend para un chat que ayuda al usuario a consultar si tiene multas o no.
Tiene 2 endpoints principales:
- /contextoInicial - POST
  
  Provee información sobre el bot. Nombre, ID y creador.
  
- /obtenerInfracciones/$userDNI - POST
  
  Busca mediante un numero de DNI, provisto por el usuario, si tiene o no infracciones. También devuelve si no esta en la base de datos.

Se agrego un pequeño front para simular la experiencia.
