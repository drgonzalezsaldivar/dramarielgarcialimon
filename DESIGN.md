# Design System: Dra. Mariel García — Especialista Pie y Tobillo

## 1. Visual Theme & Atmosphere

A restrained medical-premium interface where clinical authority meets warm human trust. The atmosphere evokes a well-lit private consultation room — precise, unhurried, and credible without being sterile. Dark navy anchors the hero and structural surfaces; warm stone and cream carry the content sections. Every conversion element (WhatsApp CTAs) is isolated in WhatsApp green as the only saturated accent in the palette.

- **Density:** 4 — Art Gallery to Daily App balance. Content breathes, sections are generous, medical content is never rushed
- **Variance:** 6 — Asymmetric hero (image left / content right), offset card grids, occasional diagonal dividers. Never centered-hero layouts
- **Motion:** 6 — Fluid CSS spring physics, scroll-reveal cascades, perpetual micro-loops on live badges and WA buttons. No cinematic overreach

The brand tone: *"Especialista que escucha antes de operar."* Design reflects this — no aggressive urgency, no surgical coldness. Premium calm with clear conversion intent.

---

## 2. Color Palette & Roles

- **Off-White Canvas** (`#FAFAF8`) — Primary background surface. Warm white, never pure white
- **Pure Surface** (`#FFFFFF`) — Card fills, modal surfaces, form backgrounds
- **Stone Cream** (`#F4F1ED`) — Alternate section backgrounds; warm neutral for content sections
- **Ink Navy** (`#0F1923`) — Primary text, hero background, footer. Off-black depth, never pure black
- **Ink Charcoal** (`#2E3D4A`) — Body text, paragraph content
- **Ink Muted** (`#4A5C6B`) — Secondary text, captions, microcopy, labels
- **Slate** (`#4E6C84`) — Navigation, tag text, icon strokes, dividers, secondary buttons
- **Slate Dark** (`#3A5268`) — Hover states on slate elements, CTA button fills
- **Slate Darker** (`#263849`) — Stats strip background, dark cards
- **Teal Accent** (`#5AACBF`) — Active borders, icon highlights, section divider bars, eyebrow accents, data points. The single non-conversion accent
- **Teal Light** (`#7ECFDF`) — Counter numerals on dark backgrounds, light teal highlights
- **Warm Beige** (`#C4A882`) — Decorative accents, subtle warm highlights, brand marks
- **Beige Light** (`#EAE0D5`) — Warm tonal card backgrounds
- **WhatsApp Green** (`#25D366`) — **Conversion-only accent.** Used exclusively on WhatsApp CTA buttons, the floating action button, and the live pulse badge. Never used for decorative or non-conversion purposes
- **Danger Red** (`#FF3B30`) — Notification badge on WA float only

**Banned colors:** Pure black (`#000000`), pure white backgrounds on hero, neon purple/blue gradients, oversaturated greens outside of WA conversion elements.

---

## 3. Typography Rules

- **Display / Headlines:** `Cormorant Garamond` — serif, weights 300/600, italic variants for emphasis words. Track tight (`letter-spacing: -0.01em`). Scale: `clamp(2.2rem, 4vw, 3.5rem)` for section titles, `clamp(2.6rem, 4.8vw, 4.2rem)` for H1. Hierarchy through weight contrast (300 body / 600 bold) and italic color (`color: var(--slate)`)
- **UI / Body:** `Montserrat` — sans-serif, weights 400/500/600/700. Body text: `0.84–0.98rem`, line-height `1.68–1.78`. Max line length 65ch. Navigation, labels, tags, buttons all in Montserrat
- **Eyebrows / Tags / Badges:** Montserrat 700, `font-size: 0.6–0.65rem`, `letter-spacing: 0.14–0.2em`, `text-transform: uppercase`. Used for section identifiers, credential tags
- **Monospace:** Not used — this is a medical landing site, not a dashboard. Avoid monospace except in numerical stat displays
- **Banned:** Inter (too generic), system-ui fallbacks for headings, Times New Roman, Georgia, Palatino. Garamond is allowed only as Cormorant Garamond (the premium variable). Never use plain Garamond

---

## 4. Component Stylings

### Buttons

**Primary WhatsApp CTA (`.btn-wa`):**
- Background: `#25D366` (WhatsApp green). No gradient, flat fill
- Text: white, Montserrat 700, `0.78rem`, uppercase tracking
- Sub-label below: Montserrat 400, `0.58rem`, opacity 0.8
- Shape: `border-radius: 6px`, `padding: 1.2em 2em`
- Hover: `-3px translateY` lift + `box-shadow: 0 10px 32px rgba(37,211,102,0.45)`. No outer neon glow
- Active: `-1px translateY`, shadow compress
- Icon: WhatsApp SVG at 18px, left of label text
- Shine sweep: `::before` pseudo-element sweeps transparent-to-white-to-transparent on hover

**Secondary Slate CTA (`.btn-slate`):**
- Background: `var(--slate-d)` (#3A5268)
- Text: white, Montserrat 600, `0.78rem`
- Hover: `-2px translateY`, deeper shadow
- Used for "Agendar — $1,200 MXN" type secondary conversion

**Tel/Phone CTA (`.btn-tel`):**
- Background: transparent, border `1.5px solid rgba(78,108,132,0.5)`
- Text: `var(--ink-m)`, icon + number
- Hover: border darkens

### Cards (Especialidades)

- Background: `#FFFFFF`
- Border: `1px solid rgba(78,108,132,0.08)`
- Border-radius: `4px`
- Top accent: `2px` linear gradient `teal→slate`, scales in on hover via `scaleX`
- Hover: `translateY(-6px)` + `box-shadow: 0 16px 48px rgba(0,0,0,0.09)`
- Shine sweep `::after` on hover
- Never use cards just for decoration — only when elevation communicates hierarchy

### Badges / Tags

- Border: `1px solid rgba(78,108,132,0.35)`
- Text: Montserrat 700, `0.65rem`, uppercase, `var(--ink-m)`
- Padding: `0.4em 0.9em`, `border-radius: 2px`
- Live dot: 6px green circle with `livePulse` infinite animation (for "Asistente WhatsApp 24/7" badge)

### FAQ Accordion

- Border: `1px solid rgba(78,108,132,0.14)` separating items
- Question: Montserrat 600, question text + `+` icon
- Answer: slides down via `max-height` transition, `0.42s` spring ease
- Open state: icon rotates, answer color `var(--ink-m)`

### WA Float Button

- **Desktop:** Fixed circle `58px × 58px`, `border-radius: 50%`, green, `bottom: 28px right: 28px`
- **Mobile (< 600px):** Pill shape, `border-radius: 26px`, `height: 52px`, auto width, shows "Agendar por WhatsApp" text label alongside icon
- Ripple rings: `::before` and `::after` pulse outward at `2.4s` intervals
- Entrance: `waEntrance` animation on load with `2s` delay
- Tooltip on desktop hover: dark pill showing "Asistente disponible 24/7"
- Red notification dot: `14px` circle, top-right

---

## 5. Layout Principles

**Grid architecture:**
- Max content width: `1200px`, centered, `padding: 0 clamp(1.25rem, 5vw, 3rem)`
- Hero: CSS Grid `1fr 1fr` (image column left, content column right). Split-screen, never centered
- Especialidades: CSS Grid `repeat(3, 1fr)`, `gap: 1.5rem`
- Stats strip: CSS Grid `repeat(4, 1fr)` on dark background
- Diferenciadores: `2 × 2` feature grid
- Proceso: 4-step horizontal strip

**Section spacing:** `padding: clamp(4.5rem, 9vw, 7.5rem) 0`

**Background alternation:** `var(--off)` → `var(--stone)` → `var(--white)` → dark `var(--slate-dd)` → back to light. Never two dark or two identical sections in sequence.

**Asymmetric hero:** Image takes left column (full height cover). Content right with `clamp(5rem, 8vw, 7rem)` top padding. Left edge of content has animated scan-line pseudo-element. This layout is MANDATORY — centered hero is banned.

**No overlapping elements.** Every element in its own clean spatial zone. No absolute-positioned text over images (except the photo frame badge on About section, which uses a fixed offset corner position).

---

## 6. Motion & Interaction

**Easing function (custom spring):** `cubic-bezier(0.22, 1, 0.36, 1)` — premium deceleration. Applied to all transitions.

**Scroll reveals:** `.reveal` class + IntersectionObserver. Elements enter via `fadeUpBig` (`translateY(30px) → 0, opacity 0 → 1`). Staggered via `.d1`–`.d4` delay classes (`0.1s`, `0.2s`, `0.3s`, `0.4s` increments). Never mount all at once.

**Perpetual micro-interactions:**
- Hero background: `meshShift` 8s ease-in-out infinite (subtle gradient position drift)
- Ring decorations: `ringPulse2` scale oscillation at varying speeds (4.5s–7s)
- Floating particles: `float` translateY oscillation, staggered delays
- Hero scan-line: `scanLine` vertical sweep 4s infinite on content edge
- WA button: `waRipple` ripple rings expanding outward 2.4s infinite
- Live dot (bot badge): `livePulse` box-shadow pulse 1.8s infinite
- Hero divider: `expandWidth` grows from 0 → 52px on load
- Typewriter: Character-by-character phrase cycling, `75ms` per char, `2200ms` pause, `38ms` delete

**Counter animation:** Stats animate from 0 to target on scroll-into-view over `1800ms` with cubic ease-out.

**Performance rules:** Animate exclusively via `transform` and `opacity`. Hardware-accelerated `will-change: transform` on hero image and cursor elements. Grain overlay is a fixed pseudo-element SVG filter — zero DOM repaints.

---

## 7. Anti-Patterns (Banned)

- No `Inter` font — use `Montserrat` (UI) and `Cormorant Garamond` (display) only
- No pure black (`#000000`) — minimum depth is `#0F1923` (Ink Navy)
- No neon outer glow shadows on anything except WA buttons (which use green, not purple)
- No AI-purple/blue gradient aesthetics — teal is the only cool accent, and it's muted
- No centered hero layout — always split-screen asymmetric
- No 3-column equal feature cards — use 2×2 grid for features, 3-col only for specialties
- No emojis in UI copy (the map pin `📍` in footer location link is the only exception, and only because it's a functional icon)
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen", "Transform", "Revolutionize"
- No custom mouse cursor on mobile/touch devices — `@media (pointer: coarse)` hides cursor elements
- No overlapping text over images — hero image and content are in separate grid columns with clear spatial separation
- No generic round fake stats — counters show real values (500+ patients, 24/7, $1,200)
- No broken placeholder images — all images are local (`img/CropOs-*.jpg`)
- No "Scroll to explore" filler text or bouncing chevrons
- No excessive gradient text on large headers — italic + color change only
- No secondary "Learn more" ghost links next to primary CTAs — maximum one WA CTA per section
- No WhatsApp green (`#25D366`) used for anything other than conversion CTAs and the float button — teal handles all other accents
- No word "bot" in patient-facing copy — use "asistente de WhatsApp" or "asistente 24/7"
- No medical jargon as primary headlines — symptom-first copy, medical terms in subtitles for SEO only
