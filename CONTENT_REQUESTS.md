# Pedidos de contenido — DUN Arquitectura

Este documento lista todo lo que falta para completar el sitio web. Para cada ítem se indica **qué se necesita**, **para qué** y **el formato esperado**.

> El sitio ya está publicado con el contenido mínimo disponible. Los pedidos de acá son para enriquecerlo: descripciones, datos técnicos, mejores fotos de portada, etc.

---

## 0) Catálogo de obras (cómo está organizado el material)

Todo el material fotográfico vive en una carpeta de catálogo (`raw_content/OBRAS`, la misma que se sube a Drive), con **una carpeta por obra, todas al mismo nivel**, y un `INDICE.xlsx` en la raíz con una fila por obra (año, tipo, barrio, portada, ficha del sitio, cantidad de fotos, subcarpetas que faltan y notas).

**Nombre de carpeta de obra:** `<año>.<tipo>.<barrio>.<otras>`, todo en MAYÚSCULAS, puntos como separador y espacios dentro de cada campo (por ejemplo `2026.COCINA.VILLA DEVOTO`). Si la obra abarca varios años va un rango (`2022-2023`). *Otras* es opcional y guarda lo que no entra en los otros campos (calle, edificio, nombre propio).

**Subcarpetas de cada obra** (solo existen las que tienen contenido): `ANTES Y DESPUES` (pares `01. ANTES.jpg` / `01. DESPUES.jpg`), `PROCESO`, `FINALES` y `PROYECTO` (renders, planos, gráficos). En Cocina Palermo la carpeta se llama `DISEÑO DE MOBILIARIO`. Cada obra tiene además `00. PORTADA.jpg` (2000 px, copia reducida de una foto de la obra).

Pendientes del catálogo:

- [ ] Recuperar el gráfico `-02` de **PH Saavedra** (la numeración de los gráficos quedó corrida a 01–03 porque el original se perdió).
- [ ] Decidir si la foto `E.jpg` de **Ezeiza** (selfie con casco) puede quedar en material público.
- [ ] Confirmar los datos que se **dedujeron** y no vinieron del estudio: barrios de Aeroparque (Palermo), Manzana de las Luces (Monserrat) y Gimnasios Fitter (Caballito, por el cartel del local); año 2025 del baño de Palermo; año 2025 del placard de Villa Pueyrredon (el de Villa Urquiza lo indicó el estudio).
- [ ] Confirmar la portada de las 5 obras en las que se eligió una nueva: los baños de PH Saavedra, Palermo, Olivos y Barracas, y el placard de Villa Urquiza.
- [ ] Resolver el duplicado `20250910_144847.jpg` en **Cocina Palermo** (aparece en `PROCESO` y en `PROYECTO`).

---

## 1) Datos generales del estudio

- ✅ **Mail de contacto** — cargado en el sitio (hola.dun.arquitectura@gmail.com)
- ✅ **WhatsApp** — cargado en el botón flotante, contacto y footer
- ✅ **Instagram** — @dun.arquitectura cargado
- [ ] **Logo en alta resolución** (los actuales `logo1/2/3/4.jpeg` están en `public/`; si hay versiones en SVG o PNG con fondo transparente mejor)
- [ ] **Confirmación del nombre de marca** — en distintos lugares aparece como *DUN · estudio de arquitectura* y *DUN Arquitectura*. ¿Cuál usamos?

---

## 2) Foto de perfil (Sobre mí)

Actualmente se usa `src/assets/images/dani.jpeg`. La carpeta `raw_content/about_me/fotos-daniela/` tiene varias opciones. Necesitamos:

- [ ] **Una foto definitiva** para la página *Sobre mí* (orientación cuadrada o vertical, fondo limpio)

---

## 3) Proyectos — información faltante

### Datos comunes que ayudan en todos los proyectos
Si están disponibles, podemos sumarlos a cada ficha:

- [ ] **Una frase corta** (1–2 líneas) para mostrar bajo el título
- [ ] **Texto largo** dividido en: *El desafío* + *La solución* (3–4 oraciones cada uno)
- [ ] **Datos técnicos**: superficie intervenida (m²), duración de obra, materiales clave
- [ ] **Foto de portada elegida** — cada obra del catálogo ya tiene `00. PORTADA.jpg` (en 15 obras es la misma que usa hoy el sitio; en 5 se eligió una nueva, ver sección 0). Falta confirmarlas y alinear las portadas del sitio.
- [ ] **Testimonio del cliente** (cuando lo haya) — texto + autor (puede ser anónimo: "Cliente, barrio")

### Por proyecto

> **Texto del sitio simplificado.** Las descripciones de proyectos, los datos como "85 m²", la sección de testimonios, "Cómo trabajamos", la zona de trabajo y los demás textos comerciales no tenían respaldo y se eliminaron. Hoy cada ficha muestra solo título, barrio, año, categoría y fotos. Las descripciones de abajo quedan como pendientes: se agregan solo con texto que aporte el estudio.

Cada ítem indica la carpeta del catálogo (sección 0).

#### Cocina Devoto · 2026 — `2026.COCINA.VILLA DEVOTO`
- ✅ Breve descripción
- ✅ Renders de proyecto sumados
- ✅ Fotos finales y antes/después integrados
- [ ] Datos técnicos (m², duración, materiales)

#### Cocina Depto Saavedra · 2025 — `2025.COCINA.SAAVEDRA.DEPTO`
- ✅ Fotos finales y antes/después integrados
- [ ] Descripción corta + larga
- [ ] Datos técnicos

#### Cocina Palermo · Costa Rica · 2025 — `2025.COCINA.PALERMO.COSTA RICA`
- ✅ Fotos antes/después y fotos de diseño de mobiliario integradas
- [ ] Descripción corta + larga
- [ ] Datos técnicos

#### Cocina Villa Urquiza · 2025 — `2025.COCINA.VILLA URQUIZA`
- ✅ Fotos finales (10 en el catálogo, tras eliminar un duplicado), antes/después y proceso sumados
- [ ] Descripción corta + larga
- [ ] Datos técnicos

#### PH Saavedra · 2025 — `2025.REFORMA.SAAVEDRA.PH`
- ✅ 7 fotos finales de alta resolución integradas (portada y galería)
- [ ] Datos técnicos
- [ ] Gráfico `-02` faltante (ver sección 0)

#### Departamento Av. Corrientes · Centro · 2025 — `2025.REFORMA.CENTRO.AV CORRIENTES`
- ✅ Foto final de obra sumada
- [ ] Datos técnicos
- [ ] ¿Plano disponible?

#### Local Palermo · 2021 — `2021.LOCAL.PALERMO`
- ✅ Antes y después formal integrado
- ✅ Fotos finales de local terminado integradas (incluye dos fotos que antes tenían nombre de WhatsApp 2025 y quedaron como `FINAL-01` y `FINAL-02`, confirmadas como de esta obra)
- ✅ Plano (`_ARMENIA1810-REV10.pdf`) guardado en `PROYECTO`
- [ ] Datos técnicos

#### Reforma Villa Ortúzar · 2026 — `2026.REFORMA.VILLA ORTUZAR`
- ✅ Proyecto incorporado con antes, después y proceso completo

#### Baños · cinco obras (una ficha por baño en el sitio)
- `2025.BAÑO.SAAVEDRA.PH` · `2025.BAÑO.PALERMO` · `2025.BAÑO.OLIVOS` · `2026.BAÑO.BARRACAS` · `2026.BAÑO.CABALLITO`
- ✅ Cada baño tiene su ficha con portada, antes/después (salvo PH Saavedra) y proceso
- [ ] Descripción y datos técnicos propios de cada baño (hoy cada ficha tiene una sola frase)
- [ ] Fotos finales: casi ningún baño tiene `FINALES` (solo PH Saavedra); la mayoría solo tiene antes/después y proceso

#### Placares · dos obras (una ficha por placard en el sitio)
- `2025.PLACARD.VILLA URQUIZA` (3 fotos) · `2025.PLACARD.VILLA PUEYRREDON` (4 fotos; `PLACARD-A` muestra el mueble sin terminar)
- ✅ Cada placard tiene su ficha con portada y galería
- [ ] Descripción propia de cada placard (hoy ambas comparten el mismo texto general)

#### Pendientes de actualización del sitio
- [ ] **Sobre mí**: el listado de obras de gran escala dice "Instituto Sanmartiniano" (como `SOBRE MI.docx`) y el resto del sitio y el catálogo dicen "Museo Sanmartiniano"; unificar. No incluye Gimnasios Fitter.
- [ ] **Slogan del footer** ("encontramos la forma de hacer hogar") y **titular del home**: confirmar o reemplazar.

---

## 4) Obras anteriores (Trayectoria)

Las cinco obras realizadas junto a constructoras / estudios viven en una única página `/obras-anteriores`, como galería. En el catálogo cada una es una obra al mismo nivel que las demás. Ya se cargaron los años; para enriquecer la página nos vendría bien:

- ✅ **Año / período** de cada una:
  - Aeroparque Jorge Newbery — 2024 (`2024.AEROPUERTO.PALERMO.AEROPARQUE JORGE NEWBERY`)
  - Aeropuerto Ezeiza — 2020 (`2020.AEROPUERTO.EZEIZA.MINISTRO PISTARINI`)
  - Gimnasios Fitter — 2018 (`2018.GIMNASIO.CABALLITO.FITTER`)
  - Museo Sanmartiniano — 2024, Recoleta (`2024.RESTAURACION.RECOLETA.MUSEO SANMARTINIANO`)
  - Manzana de las Luces — 2022-2023 (`2022-2023.RESTAURACION.MONSERRAT.MANZANA DE LAS LUCES`)
- ✅ **Años visibles** en la página `/obras-anteriores`
- [ ] **Constructora / estudio** con quien se trabajó (si se puede mencionar)
- [ ] **Rol cumplido** (supervisión, dirección técnica, inspección, etc.)
- [ ] **Una descripción de 2–3 líneas por proyecto**, más concreta que la actual
- [ ] **¿Falta alguna obra?** Hoy figuran las cinco del catálogo. El documento `OBRAS ANTERIORES.DE QUE SE TRATA.docx` (raíz del catálogo) resume de qué trató cada una.

### Específicas
- **Manzana de las Luces**: 41 fotos en el catálogo (antes y después, proceso y detalles/terminaciones como `FINALES`); el sitio usa 6.
- **Sanmartiniano**: 11 fotos en el catálogo; el sitio usa 5. ¿Querés cambiar alguna?
- **Aeroparque Newbery**: 7 fotos; el sitio usa 4.
- **Ezeiza**: 5 fotos (todas de obra en curso); el sitio usa 4. Incluye una selfie con casco (`E.jpg`) a decidir.
- **Gimnasios Fitter**: 12 fotos; el sitio usa 4.

---

## 5) Categorías de proyectos

El sitio tiene tres categorías: **Reforma · Patrimonio · Interiorismo**. Hoy las asignaciones son:

| Proyecto | Categoría |
|---|---|
| PH Saavedra | Reforma |
| Cocina Depto Saavedra | Reforma |
| Cocina Devoto | Reforma |
| Cocina Villa Urquiza | Reforma |
| Cocina Palermo (Costa Rica) | Reforma |
| Departamento Av. Corrientes | Reforma |
| Reforma Villa Ortúzar | Reforma |
| Baños (cinco fichas) | Reforma |
| Local Palermo | Interiorismo |
| Placares (dos fichas) | Interiorismo |

Las obras anteriores no tienen categoría propia: la página `/obras-anteriores` las agrupa como Patrimonio, Gran escala y Comercial.

En el catálogo, el campo *tipo* del nombre de carpeta (COCINA, BAÑO, REFORMA, PLACARD, LOCAL, AEROPUERTO, GIMNASIO, RESTAURACION) es una clasificación más fina, independiente de estas tres categorías del sitio.

¿Coinciden? ¿Querés sumar una nueva categoría (por ejemplo "Cocinas", "Comercial", "Obra nueva")?

---

## 6) Textos generales del sitio

- [ ] **Hero del home** — hoy dice *"Diseñando espacios, preservando historias."* + bajada. ¿Está OK o querés cambiarlo?
- [ ] **Slogan** — hoy aparece "encontramos la forma de hacer **hogar**". ¿Lo dejamos?
- [ ] **Footer** — actualmente dice *"Reformas integrales & Restauración de Patrimonio — Buenos Aires, Argentina"*. ¿OK?
- ✅ **Página de contacto** — ya existe (`/contacto`).

---

## 7) SEO / dominio

- ✅ **Dominio** — el sitio ya está configurado con `dunarquitectura.com.ar` (`astro.config.mjs` y `public/CNAME`). Los comentarios de `astro.config.mjs` y el README todavía mencionan `dunarquitectura.ar`: confirmar cuál es el definitivo y limpiar el comentario.
- [ ] **Descripción meta** para Google — hoy dice *"DUN Arquitectura — Reformas integrales y restauración de patrimonio histórico en Buenos Aires."* ¿OK?
- ✅ **Imagen de previsualización** (Open Graph) — ya existe `public/og-image.jpg`. Falta confirmar que sea la definitiva.

---

## 8) Otros pedidos / dudas abiertas

- [ ] **Testimonios**: la sección "Lo que dicen quienes ya reformaron" de la home se eliminó (los textos no eran de clientes reales). Si hay clientes dispuestos, sumar 2–3 con su autorización; la ficha de proyecto ya admite `testimonial` y `testimonialAuthor`.
- [ ] **CV / portfolio descargable**: ¿lo ofrecemos como descarga en *Sobre mí*?
- [ ] **Mapa de zona de cobertura**: hoy se menciona "Ciudad de Buenos Aires y Gran Buenos Aires" como texto. ¿Sumamos un mapa?

---

## Cómo entregar el contenido

1. Para **textos**: respondé este documento con los datos faltantes o mandá un Google Doc / .docx editado.
2. Para **fotos**: dejarlas en una carpeta de obra nueva del catálogo siguiendo el formato `<año>.<tipo>.<barrio>.<otras>` (ver sección 0), con sus subcarpetas `ANTES Y DESPUES`, `PROCESO`, `FINALES` y `PROYECTO`, o linkear a Drive. Aceptamos JPG / JPEG / PNG (no PDF para fotos finales). Al subir a Drive, subir la carpeta directamente y no un zip (el zip rompe la Ñ de los nombres).
3. Para **planos**: preferentemente JPG/PNG exportados (no PDF). Si sólo hay PDF, lo convertimos.
