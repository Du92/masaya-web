# Masaya – Refugio de Bienestar

Landing page estática, moderna, responsiva y preparada para GitHub Pages para **Masaya – Refugio de Bienestar**.

La estética está inspirada en el logo: fondo oscuro premium, dorado champán, bronce cálido y tonos marfil.

## Tecnologías

- HTML
- CSS
- JavaScript básico

No usa frameworks ni dependencias externas.

## Estructura

```text
masaya-web/
├── index.html
├── styles.css
├── script.js
├── README.md
├── img/
│   ├── logo-masaya.jpeg
│   ├── masaya-1.jpg
│   ├── masaya-2.jpg
│   ├── masaya-3.jpg
│   └── masaya-4.jpg
└── video/
    └── masaya.mp4
```

## Imágenes

Coloca las imágenes reales en la carpeta `img/` con estos nombres:

```text
masaya-1.jpg
masaya-2.jpg
masaya-3.jpg
masaya-4.jpg
```

El logo ya está incluido como:

```text
img/logo-masaya.jpeg
```

## Video

Coloca el video real en:

```text
video/masaya.mp4
```

El video se reproduce automáticamente, en silencio, cuando entra en pantalla. También se pausa cuando sale de la zona visible.

## Datos editables

En `index.html` puedes cambiar fácilmente:

- teléfono
- email
- WhatsApp
- textos
- tratamientos
- precios
- mapa de Google Maps

Busca estos valores de ejemplo:

```text
+34 600 000 000
reservas@masaya.es
https://wa.me/34600000000
```

## Mapa de Google Maps

En `index.html`, busca la sección `ubicacion` y sustituye el iframe de ejemplo por el iframe real de Google Maps.

Pasos:

1. Abre Google Maps.
2. Busca la ubicación exacta de Masaya.
3. Haz clic en **Compartir**.
4. Entra en **Insertar un mapa**.
5. Copia el iframe.
6. Sustituye el iframe de ejemplo.

## Probar en local

Desde la carpeta del proyecto:

```bash
python3 -m http.server 8000
```

Abre en el navegador:

```text
http://localhost:8000
```

## Publicar con GitHub Pages

1. Crear un repositorio en GitHub llamado `masaya-web`.
2. Subir todos los archivos.
3. Ir a **Settings**.
4. Entrar en **Pages**.
5. Seleccionar **Deploy from branch**.
6. Elegir la rama `main` y la carpeta `/root`.
7. Guardar.
8. La web quedará disponible en una URL similar a:

```text
https://TU_USUARIO.github.io/masaya-web/
```
