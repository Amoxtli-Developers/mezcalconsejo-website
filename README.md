# Mezcal Consejo - Sitio Web

Un sitio web moderno y minimalista para Mezcal Consejo, diseñado con un enfoque tipo Notion para una experiencia de usuario limpia y elegante.

## 🚀 Características

### Diseño
- ✨ **Estilo minimalista tipo Notion** con colores neutros y espaciado amplio
- 🎨 **Modo oscuro/claro** con transiciones suaves
- 📱 **Completamente responsivo** con diseño mobile-first
- 🎭 **Animaciones sutiles** usando Framer Motion
- 🎯 **Enfoque en contenido** con tipografía clara y legible

### Funcionalidades
- 🔒 **Verificación de edad** con persistencia en localStorage
- 🛒 **Sistema de tienda** con validación de código postal
- 🌍 **Multidioma** (Español/Inglés) con i18next
- 📮 **Formulario de contacto** funcional
- 🖼️ **Galería de imágenes** con lightbox
- 📝 **Gestión de contenido** fácil de actualizar

## 🛠️ Tecnologías

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Carousel**: Swiper.js
- **Iconos**: Lucide React
- **Internacionalización**: i18next
- **Fuentes**: Inter (system fonts)

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css      # Estilos globales minimalistas
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Página principal
│   └── providers.tsx    # Proveedores (Theme, i18n)
├── components/          # Componentes reutilizables
├── data/               # Datos estáticos (productos, códigos postales)
├── libs/               # Configuración (i18n)
└── assets/locales/     # Traducciones
```

## 🎨 Guía de Diseño

### Colores
- **Primario**: Grises (900, 800, 700) para elementos principales
- **Secundario**: Grises (500, 400, 300) para elementos secundarios
- **Fondo**: Blanco/Gris 50 (modo claro) y Negro/Gris 950 (modo oscuro)
- **Acentos**: Sutiles gradientes y sombras minimalistas

### Espaciado
- Padding generoso entre secciones (16-24)
- Espaciado consistente entre elementos
- Uso extensivo de flexbox y grid para layouts limpios

### Componentes
- Bordes redondeados (rounded-2xl, rounded-3xl)
- Sombras sutiles (shadow-notion, shadow-notion-lg)
- Estados hover con transformaciones mínimas
- Botones con forms pills (rounded-full)

## 🚀 Instalación y Uso

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo**:
   ```bash
   npm run dev
   ```

3. **Construir para producción**:
   ```bash
   npm run build
   npm start
   ```

## 📄 Contenido

### Secciones Principales
1. **Hero**: Imagen full-screen con texto superpuesto minimalista
2. **Sobre Nosotros**: Grid layout con imagen y valores
3. **Cita**: Texto centrado con tipografía grande
4. **Tienda**: Carousel de productos con modal de compra
5. **Galería**: Grid de imágenes con lightbox
6. **CTA**: Llamada a la acción con estadísticas
7. **Contacto**: Formulario y información de contacto
8. **Footer**: Enlaces y redes sociales

### Contenido Dummy
- Textos descriptivos sobre mezcal y tradición
- 6 productos con descripciones detalladas
- 9 imágenes de galería categorizadas
- Información de contacto realista
- Códigos postales de ciudades mexicanas

## 🎯 Enfoque UX/UI

### Principios de Diseño
- **Simplicidad**: Cada elemento tiene un propósito claro
- **Consistencia**: Patrones de diseño repetibles
- **Accesibilidad**: Contrastes adecuados y navegación clara
- **Performance**: Componentes optimizados y carga rápida

### Inspiración
- Notion app (espaciado, tipografía, colores neutros)
- Modern e-commerce sites (product displays)
- Premium liquor brands (elegancia, minimalismo)

## 🔧 Customización

Para personalizar el sitio:

1. **Colores**: Editar `tailwind.config.js`
2. **Contenido**: Modificar archivos en `/src/assets/locales/`
3. **Productos**: Actualizar `/src/data/data.ts`
4. **Estilos**: Ajustar clases en `globals.css`

## 📱 Responsive Design

- Mobile: Single column, navegación hamburger
- Tablet: 2 columnas para cards, navbar expandida
- Desktop: 3-4 columnas, todas las features visibles

## 🌟 Próximas Mejoras

- [ ] Integración con CMS headless
- [ ] Optimización de imágenes (Next.js Image)
- [ ] PWA capabilities
- [ ] Analytics integration
- [ ] SEO mejorado
- [ ] Tests automatizados

---

Creado con ❤️ para Mezcal Consejo
# mezcalconsejo-website
