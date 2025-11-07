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

<p class="text-left"><a href="https://atomicdesign.bradfrost.com/" target="_blank">Atomic Design</a> es un libro que detalla todo lo necesario para crear y mantener sistemas de diseño robustos, permitiéndote implementar interfaces de usuario de mayor calidad y consistencia con una rapidez sin precedentes.</p>

---
layout: content
title: Index
---
# Index 

<Toc minDepth="1" maxDepth="1" columns="1" />

---
src: ./pages/designing-systems.md
---

---
src: ./pages/atomic-design-methodology.md
---