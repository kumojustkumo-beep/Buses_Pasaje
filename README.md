# Pasajes de Bus — Proyecto Final Programación Web
 
## Requisitos completados:

### Generales (GEN)
- **GEN-01**: Estructura del repositorio y README ejecutable
- **GEN-02**: Variables de entorno y `.env.example`
- **GEN-03**: Conexión a BD y migraciones Sequelize iniciales

### Dominio (rq)
- **rq-01**: Modelar entidad principal (Viaje)
- **rq-02**: Modelar entidad secundaria (Pasaje) + relación con Usuario

### Entidades principales
- **Viaje**: origen, destino, fecha, precio, asientosTotal.
- **Pasaje**: asiento, estado, relación con Viaje y Usuario.
- **Usuario**: auth con JWT.

...

Sequelize se usa de forma limpia y estándar: modelos en src/models/, migraciones versionadas en migrations/, y asociaciones simples (Viaje 1:N Pasaje, Usuario 1:N Pasaje). Todo se carga en models/index.js y se sincroniza vía sequelize.sync() o migraciones.
