# Pedidos de contenido — DUN Arquitectura

Este documento lista todo lo que falta para completar el sitio web. Para cada ítem se indica **qué se necesita**, **para qué** y **el formato esperado**.

> El sitio ya está publicado con el contenido mínimo disponible. Los pedidos de acá son para enriquecerlo: descripciones, datos técnicos, mejores fotos de portada, etc.

---

## 1) Datos generales del estudio

- [ ] **Mail de contacto** (hoy el botón "Contactame" apunta a `#` — necesitamos el destino real: mail o WhatsApp)
- [ ] **Teléfono / WhatsApp** (opcional, para mostrar en footer y en la página "Sobre mí")
- [ ] **Instagram / redes** (opcional, para íconos en el footer)
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
- [ ] **Foto de portada elegida** (hoy se usa por defecto la primera de "después")
- [ ] **Testimonio del cliente** (cuando lo haya) — texto + autor (puede ser anónimo: "Cliente, barrio")

### Por proyecto

#### Cocina Devoto · 2026
- ✅ Tenemos breve descripción
- [ ] Datos técnicos (m², duración, materiales)
- [ ] ¿Se confirma que sólo se ejecutó la obra y no el proyecto? Convendría ponerlo en el sitio o no.

#### Cocina Depto Saavedra · 2025
- [ ] Descripción corta + larga
- [ ] Datos técnicos

#### Cocina Palermo · Costa Rica · 2025
- [ ] Descripción corta + larga
- [ ] Datos técnicos

#### Cocina Villa Urquiza · 2025
- [ ] Descripción corta + larga
- [ ] Datos técnicos
- [ ] La carpeta sólo tiene 2 fotos de proceso — ¿hay más?

#### PH Saavedra · 2025
- [ ] Descripción corta + larga
- [ ] Datos técnicos
- [ ] Hay archivos `PROCESO-GRAFICO-01..04`: ¿son planos? Por ahora se usa el primero como plano y los demás en galería. ¿Está bien?

#### Departamento Av. Corrientes · Centro · 2025
- [ ] Descripción corta + larga
- [ ] Datos técnicos
- [ ] ¿Plano disponible?

#### Local Palermo · 2021
- [ ] Descripción corta + larga
- [ ] La carpeta `antes/` estaba vacía. Se usa una foto encontrada en `proceso/` (`localpalermo-antes-01.jpg`) como "antes". ¿Está bien o hay una mejor?
- [ ] El plano viene del PDF `_ARMENIA1810-REV10.pdf` (convertido a imagen). Si hay una versión limpia / JPG / mejor exportada, mejor.
- [ ] ¿Categoría correcta? Se asignó **Interiorismo** por ser un local comercial.

---

## 4) Obras anteriores (Trayectoria)

Las cinco obras realizadas junto a constructoras / estudios ahora viven en una única página `/obras-anteriores`, como galería. Para enriquecerla nos vendría bien:

- [ ] **Año / período** de cada una (Aeroparque, Ezeiza, Manzana de las Luces, Sanmartiniano, Gimnasios Fitter)
- [ ] **Constructora / estudio** con quien se trabajó (si se puede mencionar)
- [ ] **Rol cumplido** (supervisión, dirección técnica, inspección, etc.)
- [ ] **Una descripción de 2–3 líneas por proyecto**, más concreta que la actual
- [ ] **¿Falta alguna obra?** Hoy figuran las cinco que están en `raw_content/works/01. OBRAS-ANTERIORES/`

### Específicas
- **Manzana de las Luces**: hay carpetas *Antes / Proceso / Después* — confirmamos selección de fotos.
- **Sanmartiniano**: 15 fotos en carpeta plana, se eligieron 5. ¿Querés cambiar alguna?
- **Aeroparque Newbery**: ídem (de 10 fotos se eligieron 4).
- **Ezeiza**: 6 fotos, se usan 4.
- **Gimnasios Fitter**: de 13 fotos se eligieron 4.

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
| Local Palermo | Interiorismo |

¿Coinciden? ¿Querés sumar una nueva categoría (por ejemplo "Cocinas", "Comercial", "Obra nueva")?

---

## 6) Textos generales del sitio

- [ ] **Hero del home** — hoy dice *"Diseñando espacios, preservando historias."* + bajada. ¿Está OK o querés cambiarlo?
- [ ] **Slogan** — hoy aparece "encontramos la forma de hacer **hogar**". ¿Lo dejamos?
- [ ] **Footer** — actualmente dice *"Reformas integrales & Restauración de Patrimonio — Buenos Aires, Argentina"*. ¿OK?
- [ ] **Página de contacto** — hoy no existe; el botón "Contactame" lleva a `#`. ¿Querés una página dedicada, o que abra el cliente de mail / WhatsApp?

---

## 7) SEO / dominio

- [ ] **Dominio definitivo** — el código menciona `dunarquitectura.ar`. Cuando esté listo, se cambian dos líneas en `astro.config.mjs` y se crea `public/CNAME` (ya está documentado).
- [ ] **Descripción meta** para Google — hoy dice *"DUN Arquitectura — Reformas integrales y restauración de patrimonio histórico en Buenos Aires."* ¿OK?
- [ ] **Imagen de previsualización** para WhatsApp / redes (Open Graph) — hoy no hay; podríamos usar una de los proyectos destacados.

---

## 8) Otros pedidos / dudas abiertas

- [ ] **Testimonios**: se removieron del sitio hasta tener material real. Si hay clientes dispuestos, sumar 2–3.
- [ ] **CV / portfolio descargable**: ¿lo ofrecemos como descarga en *Sobre mí*?
- [ ] **Mapa de zona de cobertura**: hoy se menciona "Ciudad de Buenos Aires y Gran Buenos Aires" como texto. ¿Sumamos un mapa?

---

## Cómo entregar el contenido

1. Para **textos**: respondé este documento con los datos faltantes o mandá un Google Doc / .docx editado.
2. Para **fotos**: dejarlas en `raw_content/` en una carpeta con el nombre del proyecto, o linkear a Drive. Aceptamos JPG / JPEG / PNG (no PDF para fotos finales).
3. Para **planos**: preferentemente JPG/PNG exportados (no PDF). Si sólo hay PDF, lo convertimos.
