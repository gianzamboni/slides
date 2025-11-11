---
layout: content
title: Metódologia del diseño atómico
---

<DesignHeader 
  chapter="Capitulo 2" 
  title="Metódologias de diseño atómico" 
  subtitle="Átomos, moléculas, organismos, templates y páginas" 
/>

### Las partes del diseño atómico

El diseño atómico es una metodología compuesta por cinco partes distintas que trabajan juntas para crear sistemas de diseño de interfaces de forma más deliberada y jerárquica:

- Átomos
- Moléculas
- Organismos
- Templates
- Páginas

<div class="flex gap-10 mt-10">
<div>
<h3>Átomos</h3>
<p>
  Son los bloques fundamentales que componen las interfaces de usuario. Incluyen elementos básicos de HTML como etiquetas de formulario, campos de entrada, botones y otros que no pueden descomponerse más sin dejar de ser funcionales.
</p>

</div>
<img src="/images/atoms-form-elements.png" alt="Átomos" width="50%" />
</div>




<div class="flex gap-10 mt-10">
<div>
<h3>Moléculas</h3>
<p> 
  Son grupos relativamente simples de elementos de UI que funcionan juntos como una unidad. Por ejemplo, una etiqueta de formulario, un campo de búsqueda y un botón pueden unirse para formar una molécula de formulario de búsqueda.
</p>
</div>
<img src="/images/molecule-search-form.png" alt="Moléculas" width="50%" class="float-right"/>
</div>
---
layout: content
level: 2
title: Components
--- 

<div class="flex gap-10">
<div>
<h3>Organismos</h3>
<p>
  Son componentes de UI relativamente complejos, compuestos por grupos de moléculas y/o átomos y/o otros organismos. Forman secciones diferenciadas de una interfaz y pueden estar compuestos por tipos de moléculas similares o diferentes. Por ejemplo, un organismo de encabezado puede incluir elementos distintos como un logotipo, una lista de navegación principal y un formulario de búsqueda.
</p>
</div>
  <img src="/images/organism-header.png" alt="Organismos" width="50%" />
</div>


<div class="flex gap-10 mt-10">
<div>
<h3>Templates</h3>  
<p>
  Son objetos a nivel de página que ubican componentes dentro de un diseño y expresan la estructura subyacente del contenido del diseño. Proporcionan contexto para las moléculas y organismos relativamente abstractos. Se enfocan en la estructura de contenido subyacente de la página, más que en el contenido final.
</p>
<p>
  Esto es con lo que los usuarios verán e interactuarán cuando visiten tu experiencia. 
</p>
</div>
<img src="/images/template.png" alt="Templates" width="50%" />
</div>

<div class="flex gap-10 mt-10">
<div>
<h3>Pages</h3>
<p>
Esto es lo que tus interesados aprobarán. Y aquí es donde todos esos componentes se unen para formar una interfaz de usuario hermosa y funcional.</p>
<p>
Las páginas son esenciales para probar la efectividad del sistema de diseño subyacente. Es en la etapa de página donde podemos ver cómo se comportan todos esos patrones cuando se aplica contenido real al sistema de diseño.
</p>
</div>
<img src="/images/page.png" alt="Pages" width="50%" />
</div>

---
layout: content
title: Metódologia del diseño atómico
level: 2
---

### Ventajas del diseño atómico

Una de las mayores ventajas que ofrece el diseño atómico es la capacidad de cambiar rápidamente entre lo abstracto y lo concreto. Podemos ver simultáneamente nuestras interfaces descompuestas en sus elementos atómicos y también observar cómo esos elementos se combinan para formar nuestras experiencias finales.

Es crucial entender que el diseño atómico no es un proceso lineal. Sería un error pensar que podemos diseñar botones y otros elementos de forma aislada y luego cruzar los dedos esperando que todo encaje en un conjunto coherente.

El diseño atómico nos da un lenguaje para hablar tanto de la estructura de nuestros patrones de interfaz como del contenido que va dentro de ellos. Aunque hay una separación clara entre el esqueleto de la estructura de contenido (templates) y el contenido final (páginas), el diseño atómico reconoce que ambos se influyen mutuamente.
