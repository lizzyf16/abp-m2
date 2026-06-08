# Alky-Wallet — Demo de Wallet Digital
Pequeña aplicación web estática que simula una wallet digital con páginas para inicio, login, envío de dinero, depósito y visualización de transacciones.

Características:

Login demo: autenticación simulada en assets/js/login.js con credenciales de ejemplo.
Navegación entre vistas: index.html, menu.html, deposit.html, sendmoney.html, transactions.html.
Estilo: utiliza Bootstrap (CDN) y CSS propio en assets/css/style.css.
Demo / Credenciales de prueba:

Email: usuario@gmail.com
Password: 123456
Tecnologías:

HTML5, CSS3, JavaScript (vanilla)
Bootstrap (v5 via CDN)
Cómo ejecutar

Opción rápida: abrir index.html en un navegador.
Servir localmente (recomendado para evitar restricciones de CORS al usar fetch u otras APIs):
# desde la raíz del proyecto
python -m http.server 8000
# o con Node (si tienes http-server instalado)
npx http-server -c-1 . 8000
Luego abrir http://localhost:8000 en el navegador.

Estructura del proyecto (resumen):

index.html — Página principal.
login.html — Formulario de inicio de sesión; controla la validación con assets/js/login.js.
menu.html — Menú / dashboard de la wallet.
deposit.html — Interfaz de depósito.
sendmoney.html — Interfaz para enviar dinero.
transactions.html — Lista de transacciones.
assets/css/style.css — Estilos personalizados.
assets/js/ — Lógica cliente: login.js, menu.js, deposit.js, sendmoney.js, transactions.js, transactions2.js.
Notas de implementación

La autenticación es simulada (credenciales en assets/js/login.js) y redirige a menu.html al iniciar sesión correctamente.
No hay backend ni persistencia real; toda la lógica está en el cliente.
Bootstrap se carga vía CDN (ver referencias en las cabeceras HTML).
Cómo contribuir

Abrir un issue describiendo la mejora o bug.
Proponer PRs con cambios pequeños y documentados.
Licencia y contacto

Proyecto de ejemplo — sin licencia explícita. Añadir una licencia si se planea publicar.
Autor: (añadir nombre y contacto si lo deseas).