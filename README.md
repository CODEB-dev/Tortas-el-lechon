
# Tortas-el-lechon

Sitio web sencillo para el negocio "Tortas el Lechón" — landing page creada con React + Vite y estilizada con Tailwind CSS. Incluye un hero llamativo, secciones de menú, testimonios y contacto.

## Contenido

- Descripción
- Requisitos
- Instalación y ejecución
- Scripts útiles
- Estructura del proyecto
- Despliegue

## Requisitos

- Node.js (versión 18+ recomendada)
- pnpm o npm (el repositorio incluye `pnpm-lock.yaml`, se recomienda usar `pnpm` si está disponible)

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/CODEB-dev/Tortas-el-lechon.git
```

1. Entra en la carpeta del proyecto:

```bash
cd Tortas-el-lechon
```

1. Instala dependencias (usa pnpm o npm):

```bash
pnpm install
# o
npm install
```

## Ejecutar en desarrollo

Arranca el servidor de desarrollo (recarga en caliente):

```powershell
pnpm dev
```

ó con npm:

```powershell
npm run dev
```

Abre `http://localhost:5173` (o la URL que indique Vite) en tu navegador.

## Previsualización


Previsualizar el build:

```powershell
pnpm run dev
```

## Scripts disponibles

- `dev` — inicia Vite en modo desarrollo
- `build` — crea el build de producción
- `preview` — sirve el build para pruebas locales
- `lint` — ejecuta ESLint

## Estructura del proyecto (resumen)

- `src/` — código fuente React
  - `main.jsx` — entrada de la app
  - `App.jsx` — enrutamiento y layout
  - `layouts/` — componentes compartidos (Navbar, Footer)
  - `views/` — páginas (Home, Menu, Contacto)
- `public/` — imágenes estáticas usadas en la landing
- `package.json` — dependencias y scripts

