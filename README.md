# DUN · estudio de arquitectura

Sitio web del estudio. Hecho con [Astro](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/), publicado en GitHub Pages.

**URL en producción:** https://pbrusco.github.io/dun

---

## Desarrollo local

```bash
npm install
npm run dev        # http://localhost:4321/dun
```

Otros comandos:
```bash
npm run build      # compila a ./dist
npm run preview    # previsualiza el build local
```

---

## Estructura del proyecto

```
src/
├── assets/images/        # imágenes optimizadas en build por Astro
│   ├── <slug-proyecto>/  # cover, antes, despues, plano, proceso-*
│   └── obras-anteriores/ # galerías de trabajos anteriores
├── components/
│   ├── BeforeAfter.astro # slider antes/después
│   └── ProjectCard.astro # tarjeta de proyecto en el home
├── content/
│   ├── config.ts         # schema de proyectos (Zod)
│   └── projects/*.md     # un archivo por proyecto
├── layouts/Layout.astro  # nav, footer, estilos globales
└── pages/
    ├── index.astro              # home (grilla de proyectos)
    ├── sobre-mi.astro           # bio
    ├── obras-anteriores.astro   # galería de trabajos previos
    └── projects/[slug].astro    # ficha de cada proyecto
```

---

## Agregar un proyecto nuevo

1. Copiar las imágenes a `src/assets/images/<nombre-slug>/`:
   - `cover.jpg` (portada — obligatorio)
   - `antes.jpg`, `despues.jpg` (opcionales, si están se muestra el slider)
   - `plano.jpg` (opcional)
   - `proceso-01.jpg`, `proceso-02.jpg`, ... (opcionales)
2. Crear `src/content/projects/<nombre-slug>.md`:

```yaml
---
title: "Nombre del proyecto"
location: "Barrio, CABA"
year: 2025
category: "Reforma"   # Reforma | Patrimonio | Interiorismo
cover: "../../assets/images/<slug>/cover.jpg"
before: "../../assets/images/<slug>/antes.jpg"
after: "../../assets/images/<slug>/despues.jpg"
plan: "../../assets/images/<slug>/plano.jpg"   # opcional
gallery:
  - "../../assets/images/<slug>/proceso-01.jpg"
  - "../../assets/images/<slug>/proceso-02.jpg"
---

### Sobre este proyecto

Texto descriptivo opcional en markdown.
```

Los campos `description`, `before`, `after`, `plan`, `gallery`, `testimonial`, `testimonialAuthor`, `location` y `year` son opcionales — si no están, esas secciones simplemente no se muestran.

---

## Contenido pendiente

Ver [`CONTENT_REQUESTS.md`](./CONTENT_REQUESTS.md) — pedidos abiertos para el content provider (descripciones, datos técnicos, fotos definitivas, etc).

Material crudo (inputs sin procesar) en [`raw_content/`](./raw_content/).

---

## Despliegue

GitHub Actions publica automáticamente a GitHub Pages al hacer push a `main` (ver `.github/workflows/`). Para mover el sitio a un dominio propio (p. ej. `dunarquitectura.ar`):

1. Crear `public/CNAME` con el contenido del dominio.
2. En `astro.config.mjs`, cambiar `site` y `base`.

---

## Stack

- **Astro 4** — generador estático
- **Tailwind CSS 3** + `@tailwindcss/typography`
- **Tipografía:** Lexend (Google Fonts)
- **Paleta:** dun-dark, dun-darker, dun-cream, dun-cream-dark, dun-muted (definida en `tailwind.config.cjs`)
