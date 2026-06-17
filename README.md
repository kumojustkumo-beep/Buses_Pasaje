# Pasajes de Bus — Proyecto Final Programación Web

## Requisitos completados

### Generales (GEN)
- **GEN-01**: Estructura del repositorio y README ejecutable
- **GEN-02**: Variables de entorno y `.env.example`
- **GEN-03**: Conexión a BD y migraciones Sequelize iniciales
- **GEN-04**: Registro de usuario (sign up)
- **GEN-05**: Login y emisión JWT
- **GEN-06**: Middleware de autenticación en rutas protegidas
- **GEN-08**: Manejo centralizado de errores y respuestas JSON
- **GEN-10**: Validaciones de entrada y reglas HTTP
- **GEN-11**: Colección Postman con auth y casos de error
- **GEN-12**: Evolución de esquema (sin cambios)
- **GEN-13**: Despliegue: API+BD Railway y front público (pendiente)

### Dominio (rq)
- **rq-01**: Modelar entidad principal (Viaje)
- **rq-02**: Modelar entidad secundaria (Pasaje) + relación con Usuario
- **rq-03**: CRUD del recurso principal de gestión (Viajes)
- **rq-04**: CRUD del recurso secundario (Pasajes)
- **rq-05**: Regla de negocio principal — “No vender mismo asiento en mismo viaje”
- **rq-06**: Regla de negocio complementaria — Cancelación según política temporal
- **rq-07**: Consultas con filtros y búsqueda (GET /viajes)
- **rq-08**: Panel o listado principal del dominio (GET /viajes)
- **rq-09**: Flujo transaccional clave del dominio — Compra de pasaje con asiento (POST /pasajes)
- **rq-10**: Funcionalidad avanzada del dominio (paradas/equipaje — implementado)

## Entidades principales
- **Viaje**: origen, destino, fecha, precio, asientosTotal
- **Pasaje**: asiento, estado, relación con Viaje y Usuario
- **Usuario**: auth con JWT + bcrypt


## Estructura del proyecto
- `client/` — Frontend
- `src/` — Backend (Express + Sequelize)
- `src/migrations/` — Base de datos
- `.env.example` — Variables de entorno

¡Listo para revisión!
