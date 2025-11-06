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
layout: image-right
image: ./images/devices.jpg
---

### Capitulo 1
# Diseñando sistemas
### Crea y diseña sistemas, no páginas

---
layout: two-cols
title: La metafora de la página
---
:: left ::
#### La metafora de la página
<div class="text-left flex flex-col">
  <p>Desde sus inicios, la metáfora de la página proporcionó a los usuarios un lenguaje familiar con el que navegar por el internet. 
  </p>
  <p>Conceptos como los marcadores y la paginación ayudaron a los nuevos usuarios a explorar y, finalmente, dominar un medio completamente nuevo utilizando convenciones con las que ya estaban familiarizados.</p>
  <p><s>Medio millón de</s> 42 años después, esta figura retórica, antaño necesaria, ha perdido vigencia.</p>
  <p>La web se convirtió en un medio fluido, interactivo e interdependiente. En cuanto aceptamos este hecho, la noción de página pierde rápidamente su utilidad para definir y crear experiencias web.</p>
</div>
:: right ::
#### Concepto de
