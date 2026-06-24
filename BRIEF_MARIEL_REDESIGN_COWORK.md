# BRIEF: REDESÑO LANDING PAGE DRA. MARIEL GARCÍA
## Plan de acción realista - Cowork

**Fecha**: Mayo 2026  
**Especialista**: Dra. Ana Mariel García Limón - Pie y Tobillo  
**Objetivo**: Mejorar conversión y diferenciación vs. competencia local  
**Timeline**: 4 semanas  

---

## 1. SITUACIÓN ACTUAL

### Landing pages existentes:
- `/mariel-pie-tobillo` (especialidad principal)
- `/mariel-ortopedia` (general)
- Diseño actual: azul teal genérico, monotonía visual
- **Falta**: GA4, diferenciadores claros, bot 24/7 destacado, contenido educativo

### Competencia local:
- 3 especialistas pie/tobillo en Monterrey (todos 5.0★)
- **VENTAJA MARIEL**: Ninguno tiene sitio web profesional (solo GMB)
- **AMENAZA**: traumatologiatobilloypie.com gasta en Google Ads (~$200-300/día)

### Assets disponibles:
- ✅ Fotos nuevas de Mariel (recién tomadas)
- ✅ Bot WhatsApp 24/7 (Jessy via E-Smart360)
- ✅ Bot voz 24/7 (teléfono con IVR)
- ✅ Pacientes para antes/después (consentimiento pendiente)
- ✅ Testimonios (mínimo 2-3 disponibles)

---

## 2. PROBLEMA A RESOLVER

### Análisis:
1. **Conversión débil**: Solo WhatsApp/teléfono genéricos en CTAs (sin mencionar 24/7)
2. **Visual aburridora**: Paleta teal + blanco = sin energía (vs. TOP 10 con verde/aqua)
3. **Sin diferenciadores**: Bot 24/7 es BRUTAL pero casi invisible en sitio
4. **Falta medición**: Sin GA4 → no sabes qué funciona
5. **Dos landings confunden**: ¿Especialista pie o general?

### Impacto estimado:
- Conversión actual: ~5-10 consultas/mes (asumido)
- Potencial: +25-30% con cambios (7-13 consultas/mes)
- Valor: +2,400-4,800 MXN/mes en ingresos directos

---

## 3. PLAN DE ACCIÓN: 4 SEMANAS

### **SEMANA 1: INSTALACIÓN + ANÁLISIS**

#### Tarea 1.1: Instalar GA4 + Eventos de conversión
**Responsable**: Dev/JC  
**Tiempo**: 1-2 hrs  
**Qué hacer**:
- Crear propiedad GA4 en Google Analytics
- Instalar código de tracking en ambas landings
- Crear eventos:
  - `cta_whatsapp_hero` (botón WhatsApp en hero)
  - `cta_phone_hero` (botón teléfono en hero)
  - `cta_whatsapp_mid` (otros CTAs en página)
  - `scroll_section` (qué secciones ven)
  - `form_submit` (si hay formulario)

**Resultado**: Dashboard GA4 mostrando comportamiento real

**Nota**: Sin esto, todo cambio es adivinar. CRÍTICO.

---

#### Tarea 1.2: Auditoría competidor
**Responsable**: JC  
**Tiempo**: 1-2 hrs  
**Qué hacer**:
- Visitar traumatologiatobilloypie.com
- Documentar: estructura, CTA, fotos, video, testimonios, blog, FAQ, precio visible
- Búsquedas en Google: qué keywords rankea
- Herramientas gratuitas: SEMrush trial (7 días), Google Ads Keyword Planner
- Guardar en documento: "fortalezas observadas" vs. "oportunidades"

**Resultado**: Entendimiento de qué está haciendo competidor

---

#### Tarea 1.3: Definir diferenciadores clave
**Responsable**: JC + Mariel  
**Tiempo**: 1 hr  
**Qué hacer**:
- Revisar análisis TOP 10 (documento descargado)
- Elegir 3 diferenciadores prioritarios:
  1. Bot WhatsApp 24/7 (MANDATORIO)
  2. Video educativo (SÍ/NO)
  3. Antes/después visual (SÍ/NO)
  4. Paleta verde moderna (SÍ/NO)
  
**Recomendado**: 1, 2, 3, 4 (todos)

**Resultado**: Documento "Posicionamiento Mariel vs. Competencia"

---

### **SEMANA 2: DISEÑO + CONTENIDO SIMPLE**

#### Tarea 2.1: Cambiar paleta de colores (CSS)
**Responsable**: Dev  
**Tiempo**: 2-3 hrs  
**Qué hacer**:
```css
De:
--primary: #4B8FA3 (azul teal)

A:
--primary: #1B5E3F (verde oscuro)
--secondary: #00C9A7 (aqua)
--accent: #FF8C42 (naranja - opcional)
```
Cambiar: headers, botones, líneas, acentos.
NO cambiar: estructura HTML, solo CSS.

**Resultado**: Sitio con paleta moderna sin rediseño completo

---

#### Tarea 2.2: Mejorar hero con nuevas fotos
**Responsable**: Dev + Fotos  
**Tiempo**: 2-3 hrs  
**Qué hacer**:
- Estructura ACTUAL:
  ```
  [Foto Mariel centrada]
  "Recupera tu movilidad..."
  [CTA genérico]
  ```

- Estructura NUEVA (split layout):
  ```
  [50% izq: Foto Mariel grande, profesional]
  [50% der: 
    - Headline: "Recupera tu movilidad..."
    - Subheadline: "Consulta desde $1,200 MXN"
    - Botón verde: "📱 WhatsApp (24/7, respuesta 5 min)"
    - Botón gris: "☎️ Llamar ahora"
  ]
  ```

- Integrar nuevas fotos (ya tienes)
- Responsive: En mobile, stack verticalmente

**Resultado**: Hero visual + diferenciador 24/7 destacado

---

#### Tarea 2.3: Consolidar a 1 landing
**Responsable**: Dev  
**Tiempo**: 1 hr  
**Qué hacer**:
- Mantener: `/mariel-pie-tobillo` (especialidad principal)
- Eliminar o relegar: `/mariel-ortopedia` → redirect a pie-tobillo
  
**Razón**: Mariel es especialista PIE/TOBILLO. Competencia no existe en eso. Enfoca.

**Resultado**: 1 landing = claridad + SEO mejor

---

#### Tarea 2.4: Destacar bot 24/7 en copy
**Responsable**: JC + Copy  
**Tiempo**: 30 min  
**Qué hacer**:
- Hero: Cambiar "Agendar por WhatsApp" → "📱 WhatsApp (24/7, respuesta 5 min)"
- Agregar badge verde pequeño en botón: "Bot disponible"
- Secciones CTA: "Chatea con nuestro asistente (respuesta inmediata)"
- Botón flotante WhatsApp: Mantener, agregar badge "24/7"

**Resultado**: Diferenciador único es VISIBLE

**Nota**: Este cambio solito podría +20% CTR sin cambiar nada más.

---

#### Tarea 2.5: Crear contenido educativo corto
**Responsable**: JC  
**Tiempo**: 2 hrs  
**Qué hacer**:
- Reescribir sección "¿Cuándo acudir?" → "¿Qué es un juanete?"
  ```
  [Diagrama simple: pie normal vs. pie con juanete]
  "Un juanete es cuando el hueso del dedo gordo se desvía..."
  [3-4 líneas simples, sin jerga]
  [Síntomas checklist]
  ```

- Agregar sección "Opciones": Conservador vs. Quirúrgico (tabla simple)
  ```
  | Aspecto | Conservador | Quirúrgico |
  | Tiempo | 4-6 semanas | 4-6 semanas |
  | Costo | ~$1,500 | $4,000-6,000 |
  | Permanente | No | Sí |
  ```

**Resultado**: Educación = confianza, sin mucho trabajo

---

### **SEMANA 3: VISUAL + CONVERSIÓN**

#### Tarea 3.1: Antes/después visual (si tienes fotos)
**Responsable**: Dev + Fotos  
**Tiempo**: 3-4 hrs  
**Qué hacer**:
- Recopilar 3-5 pares antes/después (pies solamente, sin caras)
- Obtener consentimiento de pacientes (por escrito)
- Diseñar gallery simple:
  ```
  [ANTES] → [DESPUÉS]
  "Paciente XX, 45 años | 6 semanas post-op"
  ```
- Implementar: Grid de 3 columnas, responsive

**Si NO tienes fotos**: SKIP esta tarea. Usar placeholder por ahora.

**Resultado**: Prueba visual de resultados (si posible)

---

#### Tarea 3.2: Sección "¿Por qué Mariel?" con iconografía
**Responsable**: Dev  
**Tiempo**: 2 hrs  
**Qué hacer**:
```
ANTES:
- Especialización en pie y tobillo
- Trato cercano y profesional
- Tecnología actualizada
- etc.

DESPUÉS (con iconografía + hover):
┌─────────────────────┐
│ 🏥 Especialista     │
│ pie y tobillo       │
└─────────────────────┘

┌─────────────────────┐
│ ⏰ Disponible 24/7   │
│ Bot WhatsApp        │
└─────────────────────┘

[4-5 cards más]
```

**Resultado**: Visual atractiva sin cambiar estructura

---

#### Tarea 3.3: Grabar video Mariel (30-60 seg)
**Responsable**: JC + Mariel  
**Tiempo**: 2 hrs (grabación + edición mínima)  
**Qué hacer**:
```
GUIÓN (45 seg):
[Mariel en consultorio, sonriendo]

"Hola, soy la Dra. Mariel García.

Si cada paso duele por un juanete o 
hallux rigidus... no lo ignores.

Tenemos solución en 4-6 semanas.

Disponible por WhatsApp 24/7.

Vuelve a caminar sin dolor."

[CTA: botón WhatsApp aparece]
```

**Especificaciones**:
- Duración: 45 seg max
- Locación: Consultorio (luz natural)
- Outfit: Bata blanca
- Tono: Empático, no vendedor
- Formato: MP4, optimizado web

**Si no puedes grabar**: SKIP (no crítico)

**Resultado**: Humanización (video > texto)

---

### **SEMANA 4: TESTING + LANZAMIENTO**

#### Tarea 4.1: Crear FAQ expandible (8-10 preguntas)
**Responsable**: JC  
**Tiempo**: 2-3 hrs  
**Qué hacer**:
- Top 10 preguntas (que te hacen pacientes):
  1. ¿Duele la consulta?
  2. ¿Cuánto tiempo sin caminar post-op?
  3. ¿Es permanente?
  4. ¿Cubre mi seguro?
  5. ¿Necesito cirugía o conservador?
  6. ¿Diferencia juanete vs. hallux?
  7. ¿A qué edad se opera?
  8. ¿Hay cicatriz?
  9. ¿Cuándo puedo volver a actividad normal?
  10. ¿Qué pasa si no me opero?

- Formato: Acordeón expandible (click abre/cierra)
- Respuestas: 2-3 líneas cortas (no novelas)

**Resultado**: FAQ = SEO local + reduce fricción

---

#### Tarea 4.2: Revisar y testear
**Responsable**: JC + Dev  
**Tiempo**: 1-2 hrs  
**Qué hacer**:
- Revisar en desktop: colores, botones, fotos
- Revisar en mobile: texto legible, botones clickeables
- Test clicks: ¿Funcionan todos los CTAs?
- GA4: ¿Está registrando eventos?
- Velocidad: ¿Carga rápido?

**Resultado**: Sitio funcional y listo para medir

---

#### Tarea 4.3: Lanzamiento + GA4 baseline
**Responsible**: JC  
**Tiempo**: 30 min  
**Qué hacer**:
- Hacer deploy de cambios
- Anunciar en redes/WhatsApp: "Sitio rediseñado"
- Documentar baseline en GA4:
  - Visitas/día actual
  - CTR botones actual
  - Conversiones actual (si hay)

**Resultado**: Versión 2 en vivo, medición iniciada

---

#### Tarea 4.4: Plan post-lanzamiento (FUTURO)
**Responsable**: JC  
**Tiempo**: Después de semana 4  
**Qué hacer**:
- **Semana 5-6**: Esperar datos GA4 (mínimo 1-2 semanas)
  - Analizar: ¿Qué CTA funciona mejor?
  - ¿Qué sección la gente ve más?
  - ¿Dónde se van sin convertir?

- **Semana 7**: Optimizar según datos
  - Cambiar copy/posición de CTA ganador
  - Agregar más contenido en secciones vistas

- **Semana 8+**: Considerar
  - Blog post 1: "¿Qué es un juanete?" (SEO)
  - Google Ads ($100/día testing)
  - Testimonios video (si pacientes disponibles)

---

## 4. RECURSOS NECESARIOS

### Assets ya disponibles:
- ✅ Fotos nuevas de Mariel
- ✅ Bot WhatsApp 24/7
- ✅ Acceso a sitio (Git/hosting)

### Assets a conseguir (si es posible):
- Fotos antes/después (3-5 pares, pies solamente)
- Consentimientos de pacientes
- Video Mariel (opcional)

### Herramientas necesarias:
- Git / control de versiones
- GA4 account
- Google Search Console (tuyo)

---

## 5. CAMBIOS ESPECÍFICOS A HACER

### NO TOCAR:
- Estructura HTML general
- Contenido de credenciales
- Información de contacto (números correctos)
- Precios ($1,200 consulta, $1,000 seguimiento)

### SÍ CAMBIAR:
1. **Colores**: Azul teal → Verde oscuro + Aqua (CSS)
2. **Hero layout**: Centrado → Split 50/50 izq/derecha
3. **Botones CTA**: Genéricos → Destaca "24/7"
4. **Secciones**: Agregar "¿Qué es?", "Opciones", "¿Por qué Mariel?", "FAQ"
5. **Paleta**: Verde/aqua/blanco en lugar de teal/gris
6. **Antes/después**: Si tienes fotos, agregar gallery
7. **Video**: Si grabas, embeber en hero

### ORDEN DE PRIORIDAD:
1. **CRÍTICA**: GA4 + Paleta color + Hero mejorado + Bot 24/7 destacado
2. **IMPORTANTE**: Contenido educativo + FAQ + Sección "¿Por qué?"
3. **BONUS**: Video + Antes/después + Blog (futuro)

---

## 6. MÉTRICAS DE ÉXITO

### Baseline (hoy):
- GA4 instalado: ✗
- Conversiones/mes: ? (desconocido)
- Tiempo promedio sitio: ? (desconocido)

### Meta (30 días después de lanzamiento):
- GA4 instalado: ✅
- +20-30% CTR en botones WhatsApp
- +15-25% tiempo promedio en sitio
- Mínimo 5-10 eventos de clic por día

### No esperar resultados en:
- Nuevas consultas (+2-3 en primer mes es realista, normal SEO lento)
- Google ranking (+4-8 semanas mínimo)
- ROI ads (si haces ads, 2-3 semanas para datos)

---

## 7. TIMELINE REALISTA

```
SEMANA 1 (Análisis):
└─ GA4 instalado
└─ Auditoría competidor
└─ Diferenciadores definidos

SEMANA 2 (Cambios CSS + Contenido):
└─ Paleta color cambiada
└─ Hero rediseñado
└─ Landing consolidada (1 vs. 2)
└─ Bot 24/7 destacado
└─ Contenido educativo básico

SEMANA 3 (Visual):
└─ Antes/después (si fotos disponibles)
└─ Iconografía "¿Por qué Mariel?"
└─ Video Mariel (si grabas)

SEMANA 4 (Testing + Lanzamiento):
└─ FAQ creada
└─ Testing desktop/mobile
└─ Deploy en vivo
└─ GA4 baseline documentado

POST-SEMANA 4:
└─ Esperar 1-2 semanas de datos
└─ Optimizar según GA4
└─ Considerar blog/ads (futuro)
```

---

## 8. CONSIDERACIONES REALISTAS

### Qué SÍ va a pasar:
- ✅ Sitio se ve más moderno (visual)
- ✅ Diferenciador 24/7 será visible
- ✅ GA4 te dirá qué funciona (poder)
- ✅ Educación mejorará confianza

### Qué NO va a pasar (aún):
- ❌ No habrá +50 consultas en mes 1 (SEO tarda 2-3 meses)
- ❌ No sustituye Google Ads (ambos necesarios)
- ❌ No aparecerás en Google orgánico sin blog
- ❌ No vencerás competidor solo con diseño

### Lo que sí vencerá competidor:
1. Diseño moderno ✓
2. Diferenciador 24/7 visible ✓
3. Educación (blog en mes 2+)
4. Mejor conversión (video + FAQ)
5. Presupuesto ads + SEO (mes 2+)

---

## 9. NEXT STEPS INMEDIATOS

**Hoy/Mañana**:
- [ ] Confirmar disponibilidad de fotos antes/después
- [ ] Confirmar si grabarás video Mariel
- [ ] Acceso a Git/hosting compartido
- [ ] Crear Google Analytics 4 (si no existe)

**Semana 1 - EMPEZAR**:
- [ ] Tarea 1.1: GA4 instalado
- [ ] Tarea 1.2: Auditoría competidor completada
- [ ] Tarea 1.3: Diferenciadores documentados

---

## 10. CONTACTOS / RESPONSABLES

- **Dev/Cowork**: Cambios CSS, GA4, layout, FAQ acordeón
- **JC**: Contenido educativo, video, diferenciadores, auditoría
- **Mariel**: Video (si), consentimientos pacientes, aprobación cambios
- **Fotos**: Recopilación antes/después, calidad

---

**RESUMEN**: 4 semanas, cambios realistas (sin rediseño completo), diferenciador claro (24/7), medición real (GA4), futuro para blog/ads.

¿Listo para empezar Semana 1?
