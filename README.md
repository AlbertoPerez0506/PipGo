# 🌿 PipGO — Plataforma de Comercio Local

**PipGO** es una aplicación móvil enfocada en el comercio y consumo local que conecta a consumidores con productores, vendedores y pequeños establecimientos de su comunidad.

La plataforma permite descubrir productos disponibles cerca del usuario, consultar información como fotografías, precios y descripciones, conocer la ubicación aproximada del vendedor y, posteriormente, localizar los productos mediante un mapa.

El proyecto busca facilitar la conexión entre consumidores y vendedores locales, con especial atención a productos agrícolas, alimentos y productos representativos de la región.

---

## 🎯 Objetivo del proyecto

El objetivo principal de PipGO es crear una plataforma móvil sencilla y accesible que permita:

* 🔎 Descubrir productos disponibles cerca del usuario.
* 🧑‍🌾 Dar visibilidad a productores y vendedores locales.
* 📸 Publicar productos mediante fotografías e información básica.
* 💰 Mostrar precios y disponibilidad.
* 📍 Conocer la ubicación aproximada de los productos.
* 🗺️ Localizar vendedores y productos mediante un mapa.
* ❤️ Guardar productos de interés.
* 🌱 Promover el consumo de productos locales.
* 📚 Incorporar posteriormente contenido educativo relacionado con la producción regional y la soberanía alimentaria.

---

# 📱 Funcionalidades principales — V1

La primera versión de PipGO estará enfocada en construir la experiencia principal de descubrimiento y comercio local.

## 🏠 Feed de productos

La pantalla principal mostrará publicaciones de productos disponibles cerca del usuario.

Cada publicación podrá mostrar:

* Fotografía del producto.
* Nombre.
* Precio.
* Unidad de venta.
* Categoría.
* Distancia aproximada.
* Nombre del productor o vendedor.
* Estado de disponibilidad.
* Opción para guardar en favoritos.

El objetivo es que el usuario pueda descubrir rápidamente qué productos se encuentran disponibles en su zona.

---

## 🔍 Búsqueda

Los usuarios podrán buscar productos mediante una barra de búsqueda.

La búsqueda podrá realizarse por:

* Nombre del producto.
* Categoría.
* Productor o vendedor.

Ejemplos:

```text
Tomate
Cacao
Maíz
Frijol
Miel
Queso
```

Posteriormente podrán incorporarse filtros más avanzados.

---

## 🗂️ Categorías

Los productos estarán organizados mediante categorías para facilitar su exploración.

Algunas categorías iniciales pueden incluir:

* 🌽 Granos y semillas
* 🥬 Verduras
* 🍎 Frutas
* 🍯 Miel y derivados
* 🥛 Lácteos
* 🥚 Huevos
* 🍫 Cacao
* 🧺 Productos artesanales
* 🍞 Alimentos preparados

Las categorías podrán crecer conforme evolucione el proyecto.

---

## 🗺️ Mapa

PipGO contará con una sección de exploración mediante mapa.

El mapa permitirá visualizar:

* 📍 Productos disponibles.
* 🧑‍🌾 Productores cercanos.
* 🏪 Comercios participantes.
* 📌 Ubicaciones aproximadas.

Al seleccionar un marcador se mostrará una tarjeta contextual con información básica del producto o productor.

Ejemplo:

```text
┌──────────────────────────┐
│ 🍅 Tomate criollo        │
│                          │
│ $35 / kg                 │
│ 📍 0.8 km                │
│                          │
│ Rancho El Paraíso        │
└──────────────────────────┘
```

> La integración definitiva del sistema de mapas será implementada posteriormente.

---

## ❤️ Favoritos

Los usuarios podrán guardar productos que sean de su interés.

Los favoritos permitirán posteriormente:

* Consultar productos guardados.
* Acceder rápidamente a publicaciones.
* Comparar opciones de interés.
* Mantener productos disponibles para futuras consultas.

---

## 👤 Perfil del productor

Cada productor o vendedor podrá contar con un perfil.

El perfil podrá incluir:

* Fotografía o avatar.
* Nombre del productor o negocio.
* Descripción.
* Ubicación aproximada.
* Calificación, si posteriormente se implementa.
* Catálogo de productos.
* Productos actualmente disponibles.

Ejemplo:

```text
┌────────────────────────────┐
│        👤                  │
│                            │
│ Rancho El Paraíso          │
│ 📍 Emiliano Zapata         │
│                            │
│ Productor local            │
│                            │
│ ─────────────────────────  │
│ Productos                  │
│                            │
│ 🍅 Tomate                  │
│ 🌽 Maíz                    │
│ 🥭 Mango                   │
└────────────────────────────┘
```

---

## 📍 Ubicación

La aplicación podrá utilizar la ubicación del dispositivo para ayudar al usuario a descubrir productos cercanos.

La distancia podrá mostrarse de manera aproximada:

```text
📍 800 m
📍 1.2 km
📍 3.5 km
```

La ubicación exacta del vendedor no necesariamente tendrá que mostrarse públicamente.

El sistema deberá priorizar la privacidad y seguridad de los usuarios y vendedores.

---

# 🧭 Navegación

PipGO utilizará un sistema de navegación basado principalmente en un **menú lateral (drawer)**.

No se utilizará una barra de navegación inferior permanente.

El menú podrá contener:

```text
PipGO

🏠 Inicio

🔎 Explorar

🗂️ Categorías

🗺️ Mapa

❤️ Favoritos

📦 Mis publicaciones

👤 Mi perfil

────────────────

🌱 Conoce nuestra tierra

⚙️ Configuración
```

Este sistema permite mantener la interfaz principal limpia y aprovechar mejor el espacio disponible en dispositivos móviles.

---

# 🌱 Enfoque regional y educativo

Además de facilitar el comercio local, PipGO contempla incorporar contenido educativo relacionado con la producción agrícola y la soberanía alimentaria.

Esta sección permitirá conocer la importancia de productos y cultivos representativos como:

* 🌽 Maíz
* 🍫 Cacao
* 🫘 Frijol

El contenido podrá abordar temas como:

* Historia.
* Producción.
* Cultivo.
* Importancia alimentaria.
* Importancia cultural.
* Importancia económica.
* Relación con la producción regional.

Esta funcionalidad tendrá un carácter complementario dentro de la plataforma.

El objetivo principal de PipGO continúa siendo conectar a consumidores con productos y productores locales.

---

# 🧑‍🌾 Flujo del productor

Un productor o vendedor podrá utilizar PipGO para publicar sus productos.

Flujo conceptual:

```text
Crear cuenta
     ↓
Crear perfil
     ↓
Crear publicación
     ↓
Agregar fotografías
     ↓
Agregar nombre
     ↓
Agregar precio
     ↓
Agregar descripción
     ↓
Seleccionar categoría
     ↓
Agregar ubicación
     ↓
Publicar
```

La publicación aparecerá posteriormente dentro del feed y podrá ser encontrada mediante búsqueda, categorías o mapa.

---

# 👤 Flujo del consumidor

El usuario podrá realizar un flujo sencillo:

```text
Abrir PipGO
     ↓
Permitir ubicación
     ↓
Ver productos cercanos
     ↓
Buscar o explorar
     ↓
Seleccionar producto
     ↓
Consultar información
     ↓
Consultar productor
     ↓
Ver ubicación
     ↓
Contactar / continuar interacción
```

La experiencia debe ser rápida, visual y sencilla.

---

# 🎨 Diseño de interfaz

PipGO utilizará un diseño **mobile-first**, enfocado exclusivamente en dispositivos móviles.

La interfaz buscará combinar:

* Minimalismo.
* Diseño editorial.
* Fotografía de producto.
* Espacios amplios.
* Componentes redondeados.
* Jerarquía visual clara.
* Identidad relacionada con naturaleza y productos locales.

## Principios visuales

La interfaz debe transmitir:

> 🌱 Cercanía
> 🤝 Confianza
> 🌾 Producción local
> 📍 Descubrimiento
> ✨ Modernidad

La aplicación debe sentirse como un producto digital profesional y no como una plantilla genérica de comercio electrónico.

---

# 🎨 Paleta de colores propuesta

| Uso              | Color     |
| ---------------- | --------- |
| Principal        | `#1F6B4F` |
| Secundario       | `#4F9D69` |
| Fondo            | `#F8FAF7` |
| Superficie       | `#FFFFFF` |
| Texto principal  | `#17201B` |
| Texto secundario | `#69736C` |
| Acento           | `#E9A83B` |

El verde será utilizado como color principal debido a su relación visual con naturaleza, agricultura y producción local.

El color cálido se utilizará como acento para elementos específicos como calificaciones, estados destacados y pequeños elementos de atención.

---

# 🔤 Tipografía

La interfaz utilizará una tipografía moderna, limpia y legible.

Fuente principal propuesta:

**Manrope**

Alternativas:

* Inter.
* Plus Jakarta Sans.

La tipografía deberá mantener una jerarquía clara entre:

* Títulos.
* Subtítulos.
* Información secundaria.
* Precios.
* Botones.
* Etiquetas.

---

# 📐 Sistema de espaciado

Se utilizará una escala consistente:

```text
4px
8px
12px
16px
20px
24px
32px
40px
48px
```

Esto permitirá mantener una interfaz visualmente consistente entre las diferentes pantallas.

---

# 🧰 Tecnologías

| Capa                 | Tecnología              |
| -------------------- | ----------------------- |
| Frontend             | HTML5                   |
| Estilos              | CSS3                    |
| Lenguaje             | JavaScript Vanilla      |
| Framework móvil      | Apache Cordova          |
| Base de datos        | Firebase Firestore      |
| Autenticación        | Firebase Authentication |
| Almacenamiento       | Estrategia por definir  |
| Mapas                | Google Maps / Mapbox    |
| Control de versiones | Git + GitHub            |
| Plataforma objetivo  | Android                 |

La V1 buscará mantener una arquitectura sencilla y ligera.

No se utilizarán frameworks frontend pesados mientras no sean necesarios.

---

# 🏗️ Arquitectura conceptual

La aplicación seguirá una arquitectura basada en:

```text
PipGO
│
├── Interfaz móvil
│   ├── HTML
│   ├── CSS
│   └── JavaScript
│
├── Apache Cordova
│   └── Android
│
└── Servicios
    ├── Firebase Authentication
    ├── Firebase Firestore
    ├── Firebase Storage / estrategia de imágenes
    └── API de mapas
```

---

# 🗂️ Estructura inicial del proyecto

Una estructura propuesta:

```text
AppV1/
│
├── config.xml
├── package.json
│
├── www/
│   │
│   ├── index.html
│   │
│   ├── css/
│   │   ├── style.css
│   │   ├── components.css
│   │   └── responsive.css
│   │
│   ├── js/
│   │   ├── app.js
│   │   ├── navigation.js
│   │   ├── firebase.js
│   │   ├── auth.js
│   │   ├── products.js
│   │   ├── search.js
│   │   ├── favorites.js
│   │   ├── location.js
│   │   └── map.js
│   │
│   ├── img/
│   │   ├── logo/
│   │   ├── icons/
│   │   └── products/
│   │
│   └── pages/
│       ├── home.html
│       ├── search.html
│       ├── product.html
│       ├── producer.html
│       ├── map.html
│       ├── favorites.html
│       └── profile.html
│
└── platforms/
```

La estructura podrá modificarse conforme avance el desarrollo.

---

# 🔥 Funcionalidades planificadas

## V1 — Núcleo

* [x] Maquetado inicial de la aplicación.
* [ ] Home.
* [ ] Feed de productos.
* [ ] Búsqueda.
* [ ] Categorías.
* [ ] Detalle de producto.
* [ ] Perfil de productor.
* [ ] Favoritos.
* [ ] Navegación mediante drawer.
* [ ] Integración con Firebase.
* [ ] Registro e inicio de sesión.
* [ ] Publicación de productos.
* [ ] Ubicación.
* [ ] Mapa.

## Futuras versiones

* [ ] Chat entre comprador y vendedor.
* [ ] Sistema de calificaciones.
* [ ] Notificaciones.
* [ ] Disponibilidad en tiempo real.
* [ ] Filtros avanzados.
* [ ] Compartir productos.
* [ ] Contenido educativo ampliado.
* [ ] Estadísticas para productores.
* [ ] Mejoras de geolocalización.
* [ ] Sistema de recomendaciones.

---

# 🔐 Privacidad y seguridad

La aplicación deberá evitar exponer información innecesaria de los vendedores.

La ubicación de los establecimientos y productores podrá manejarse de manera aproximada cuando sea necesario.

La autenticación y los datos de usuarios deberán gestionarse mediante Firebase Authentication y Firestore aplicando reglas de seguridad apropiadas.

Las credenciales y configuraciones sensibles no deberán almacenarse directamente dentro del código fuente.

---

# ⚙️ Requisitos previos

Para ejecutar el proyecto localmente se requiere:

* **Node.js ≥ 18**
* **npm**
* **Git**
* **Apache Cordova CLI**
* **Android Studio**
* **Android SDK**
* **JDK 17**

Instalar Cordova:

```bash
npm install -g cordova
```

Comprobar instalación:

```bash
cordova -v
```

Comprobar Node.js:

```bash
node -v
```

Comprobar npm:

```bash
npm -v
```

Comprobar Java:

```bash
java -version
```

---

# 🚀 Instalación

## 1. Clonar el repositorio

```bash
git clone https://github.com/AlbertoPerez0506/PipGo.git
```

Entrar al proyecto:

```bash
cd PipGo
```

---

## 2. Instalar dependencias

```bash
npm install
```

---

## 3. Comprobar las plataformas Cordova

```bash
cordova platform list
```

Si Android todavía no está agregado:

```bash
cordova platform add android
```

---

## 4. Comprobar requisitos

```bash
cordova requirements android
```

El comando permitirá comprobar que Java, Android SDK y demás herramientas necesarias estén correctamente configuradas.

---

# 📱 Ejecutar la aplicación

Para ejecutar el proyecto en un dispositivo Android:

```bash
cordova run android
```

Para ejecutar mediante un emulador:

```bash
cordova emulate android
```

Para generar una compilación:

```bash
cordova build android
```

El APK generado podrá encontrarse dentro de la carpeta correspondiente de:

```text
platforms/android/app/build/outputs/apk/
```

---

# 🌐 Desarrollo del layout

Durante la etapa inicial del proyecto se puede trabajar principalmente sobre:

```text
www/
```

Esto permite desarrollar primero la interfaz utilizando:

* HTML.
* CSS.
* JavaScript.

La lógica más compleja de Firebase, mapas y geolocalización podrá integrarse progresivamente.

La prioridad inicial será construir correctamente:

**Diseño → navegación → componentes → interacción → backend.**

---

# 🧪 Estrategia de desarrollo

El proyecto se desarrollará de manera incremental.

### Etapa 1 — UI/UX

Construcción del layout móvil:

* Home.
* Drawer.
* Búsqueda.
* Categorías.
* Cards.
* Detalle de producto.
* Perfil de productor.
* Mapa.

### Etapa 2 — Interactividad

Implementación de:

* Navegación.
* Menús.
* Modales.
* Favoritos.
* Formularios.
* Validaciones.

### Etapa 3 — Backend

Integración de:

* Firebase Authentication.
* Firestore.
* Gestión de usuarios.
* Productos.
* Productores.
* Favoritos.

### Etapa 4 — Geolocalización

Implementación de:

* Permisos.
* Ubicación.
* Distancia.
* Mapa.
* Marcadores.

### Etapa 5 — Pruebas

Pruebas en:

* Navegador.
* Emulador Android.
* Dispositivo Android físico.

---

# 👥 Equipo

**Proyecto:** PipGO

**Tipo:** Aplicación móvil de comercio local

**Tecnologías principales:** HTML5, CSS3, JavaScript, Apache Cordova y Firebase.

**Repositorio:**

https://github.com/AlbertoPerez0506/PipGo

---

# 📄 Estado del proyecto

🚧 **En desarrollo — V1**

Actualmente el proyecto se encuentra en etapa de construcción de la interfaz y definición de la arquitectura inicial.

Las funcionalidades de Firebase, geolocalización y mapas serán incorporadas progresivamente.

---

# 🌱 Visión

PipGO busca convertirse en una herramienta que facilite el descubrimiento y consumo de productos locales, acercando a consumidores y productores mediante tecnología móvil.

La idea no es únicamente mostrar productos, sino crear un espacio digital donde las personas puedan:

> **Descubrir lo que hay cerca.
> Conocer quién lo produce.
> Saber dónde encontrarlo.
> Y valorar lo que produce su región.**

---

## 📌 Licencia

Proyecto académico en desarrollo.

La licencia definitiva será definida posteriormente.
