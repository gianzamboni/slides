---
# try also 'default' to start simple
theme: ./theme
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# some information about your slides (markdown enabled)
title: Atomic Design by Brad Frost
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply UnoCSS classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# use A4 portrait ratio (210mm x 297mm)
aspectRatio: 210/297
# duration of the presentation
duration: 35min
fonts:
  provider: google
  sans: Oswald
  serif: Merriweather
  weights: [ 400, 700 ]
---

# Atomic Design
### by Brad Frost

#### Resúmen

<p class="text-left"><span class="text-blue-900 font-bold font-size-2xl">TODO:</span> <a href="https://atomicdesign.bradfrost.com/" target="_blank">Atomic Design</a> es un libro que presenta el concepto del diseño atómico y detalla lo necesario para empezar a crear un sistemas de diseño tanto en proyectos nuevos como en proyectos existentes.</p>

---
layout: content
title: Index
---
# Index 

<ol>
<li>
<a href="#/3">Diseñando sistemas</a>
<p>Diseño de sitios web tradicional vs diseño de sistemas. Ventajas y challenges de los sistemas de diseño.</p>
</li>
<li>
<a href="#/6">Metódologia del diseño atómico</a>
<p>Las partes del diseño atómico: Átomos, moléculas, organismos, templates y páginas.</p>
</li>
<li>
<a href="#/9">Herramientas del oficio</a>
<p>Una introducción a Pattern Lab. Recomendado de leer del libro directamente.</p>
</li>
<li>
<a href="#/10">Workflow atómico</a>
<p>Personas, procesos y creación de sistemas. Técnicas para crear sistemas de diseño y workflow recomendados para los equipos.</p>
</li>
</ol>

---
src: ./pages/designing-systems.md
---

---
src: ./pages/atomic-design-methodology.md
---

---
src: ./pages/tools-of-the-trade.md
---

---
src: ./pages/workflow.md
---