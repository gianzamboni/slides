---
layout: content
title: Workflow atómico
---

<DesignHeader 
  chapter="Capitulo 4" 
  title="Workflow atómico" 
  subtitle="Personas, procesos y creación de sistemas" 
/>

### Las personas

Se pueden tener todas las tecnologías correctas implementadas, usar las herramientas más nuevas y avanzadas, e incluso contar con individuos extraordinariamente talentosos en el equipo, pero si todos los involucrados no están realmente cooperando y comunicándose entre ellos, no van a poder crear un gran trabajo.

### Cuando crear un sistema de diseño

Los sistemas de diseño y sus bibliotecas de patrones asociadas suelen crearse junto con un nuevo proyecto de diseño o rediseño, un esfuerzo de migración de plataforma u otra iniciativa. Aprovechar otro proyecto como base es una excelente manera de introducir discretamente una biblioteca de patrones en tu organización.

### Inventario de interfaces

Un inventario de interfaz es similar a un inventario de contenido, solo que en lugar de revisar y categorizar contenido, se trata de registrar y clasificar todos los componentes que conforman tu interfaz de usuario. Un inventario de interfaz es una colección completa de los elementos que componen tu interfaz de usuario. A continuación el proceso para crear uno.

<ol>
<li>Juntar los representantes de todas las disciplinas responsables del éxito del sitio deberían estar juntos en la misma sala durante el ejercicio.</li>
<li>Cada uno de los presentes navegar por los sitios de la empresa, screenshoteando y categorizando la mayor cantidad de componentes distintos que pueda identificar: Headers, Footers, Colores, Botones, Imagenes, Iconos, Formularios, Listas, etc.</li>

<li>Cada uno, hace una presentación de los distintos componentes que identificó, mientras esto sucede, la idea es ir discutiendo y estandarizando los nombres y formas para calificarlos.</li>

<li>El host de la reunión, debe juntar toda la información  y armar el inventario final con todos los compenentes identificados.</li>

<li>Uno de los beneficios más poderosos de los inventarios de interfaz es que podés mostrárselos a cualquiera, incluidos quienes no son diseñadores ni desarrolladores, y van a entender por qué las UIs inconsistentes son un problema. No necesitás ser diseñador para darte cuenta de que tener 37 estilos de botón distintos probablemente no sea una buena idea.</li>
</ol>
---
layout: content
---

<ol start="6">
<li>El grupo de trabajo puede tener conversaciones importantes sobre los próximos pasos del proyecto de sistema de diseño. Algunas preguntas clave que este grupo debería abordar incluyen:
<ul>
<li>¿Qué patrones deberían mantenerse, cuáles deberían eliminarse y cuáles pueden unificarse?</li>
<li>¿Qué nombres de patrones deberíamos adoptar?</li>
<li>¿Cuáles son los próximos pasos para transformar el inventario de interfaz en una biblioteca de patrones viva?</li>
</ul>
</li>
</ol>

Al tomarse el tiempo para organizar las partes, se puede crear el todo de una manera más realista, deliberada y eficiente. Crear una biblioteca de los materiales disponibles permite abordar el proyecto de forma más metódica y ahorrar enormes cantidades de tiempo en el proceso. En lugar de revolver una pila desordenada de bloques y perder tiempo reinventando patrones, se puede crear un sistema organizado de componentes que ayude a producir un mejor trabajo en menos tiempo.

### Redifiniendo el diseño

Debemos crear experiencias para personas que usan una diversidad de dispositivos, tamaños de pantalla, velocidades de red, capacidades del dispositivo, características del navegador, tipos de entrada, formatos, contextos y preferencias:

<ul>
<li> Crear sistemas de diseño accesibles y resilientes. Reconocé que una gran variedad de personas, con un amplio espectro de capacidades, va a acceder a nuestras experiencias, así que construí sistemas de diseño lo más inclusivos posible.</li>
<li>Crear layouts y componentes flexibles para que nuestras interfaces se vean y funcionen bien sin importar las dimensiones o tamaños de pantalla de un dispositivo.</li>
<li>Tratar el rendimiento como un principio esencial de diseño y generar experiencias que carguen rápido y respeten a los usuarios y su tiempo.</li>
<li>Mejorar progresivamente las interfaces estableciendo experiencias básicas y luego agregando mejoras que aprovechen las capacidades únicas de los dispositivos y navegadores modernos.</li>
<li>Crear sistemas de diseño preparados para el futuro, capaces de resistir el paso del tiempo y anticipar los cambios inevitables en el panorama de dispositivos y de la web.</li>
</ul>

Casi todo este trabajo puede ocurrir en paralelo. Por supuesto, la mayor parte de la investigación, la arquitectura de la información y otros aspectos fundamentales del diseño UX tienden a ocurrir más temprano, pero ese trabajo no debería retrasar que las demás disciplinas comiencen sus tareas.

---
layout: content
---

### El desarrollo es diseño 

Cuando los stakeholders ven solo imágenes estáticas de sitios web, naturalmente solo pueden comentar y aprobar imágenes de sitios web. Eso genera expectativas equivocadas. Se debe lelvar el diseño al navegador lo antes posible y mostrar las realidades del medio final mucho más temprano en el proceso.

Trabajar en HTML, CSS y JavaScript de presentación permite a los equipos no solo crear diseños estéticamente atractivos, sino también demostrar esas consideraciones de diseño exclusivamente digitales, como:

<ul>  
<li>flexibilidad</li>
<li>impacto de la red</li>
<li>interacción</li>
<li>movimiento</li>
<li>ergonomía</li>
<li>renderizado de color y texto</li>
<li>densidad de píxeles</li>
<li>rendimiento del scroll</li>
<li>peculiaridades de dispositivos y navegadores</li>
<li>preferencias del usuario</li>
</ul>

### Estableciendo una dirección

Es fundamental ponerse de acuerdo en una dirección general de diseño y delinear primero las ideas principales antes de pasar al diseño y desarrollo de alta fidelidad. Esto requiere moderación y manejo de expectativas, pero da como resultado una toma de decisiones más enfocada y un trabajo más realista.

Es mejor comenzar con bocetos de baja fidelidad (lo-fi) que definan qué aparece en una pantalla en particular y en qué orden general. Establecer la arquitectura de información básica de la experiencia se puede lograr con una simple lista con viñetas y una conversación.

<div class="justify-items-center">
<img src="/images/food-bank-wireframe.png" alt="Food Bank Wireframe" width="75%" />
</div>

---
layout: content
---
Estos wireframes en escala de grises y de formas simples ayudan a establecer los patrones de contenido necesarios para la pantalla, pero los diseñadores de UX también pueden definir algunos patrones de UI a nivel del sitio que anticipan usar para finalmente mostrar esos patrones de contenido.

#### La prueba de los 20 segundos de la intuición

Se realiza como parte de la reunión de inicio del proyecto y consiste en mostrar a los stakeholders un puñado de sitios web relevantes (alrededor de veinte a treinta) durante veinte segundos cada uno. Los sitios elegidos deben ser una mezcla equilibrada de sitios específicos de la industria y otros sitios visualmente interesantes de distintas industrias.

Para cada sitio presentado, cada persona vota en una escala del 1 al 10, donde un 1 significa “Si este fuera nuestro sitio, renunciaría a mi trabajo y largaría a llorar desconsoladamente en forma de bolita”, mientras que un 10 significa “¡Si este fuera nuestro sitio, estaría absolutamente eufórico!”. Los participantes, además, deben anotar las propiedades visuales que les resulten interesantes, como la tipografía, el color, la densidad, la disposición, el estilo de ilustración y la vibra general.

Cuando el ejercicio haya finalizado, se suman las puntuaciones y se conversa sobre los cinco sitios con las puntuaciones más bajas, los cinco con las más altas y los más polémicos (sitios que algunas personas calificaron muy alto y otras muy bajo). Los participantes deben explicar por qué se sintieron atraídos o repelidos por un sitio en particular y resolver las diferencias de opinión junto con el grupo.

El diseñador visual puede entonces aprovechar los conocimientos adquiridos y comenzar a traducir esos valores estéticos en una dirección visual para el proyecto.

#### Style Tiles

<p>Los <a href="https://styletil.es/" target="_blank">style tiles</a> (junto con sus equivalentes en el navegador, los prototipos de estilo) permiten a los diseñadores explorar color, tipografía, textura, íconos y otros aspectos de la atmósfera del diseño sin hacer suposiciones sobre la disposición ni preocuparse por el acabado. Pueden diseñarse mucho más rápido porque no están limitados por las expectativas de los comps de alta fidelidad, lo que permite recibir retroalimentación y generar discusiones más pronto.</p>

#### Collague de elementos

Entre los style tiles y los comps de alta fidelidad, están los collages de elementos, que son colecciones para explorar los componentes de UI. Las collages de elementos proporcionan un espacio para diseñadores para aplicar la atmósfera del diseño a los elementos de la interfaz real, pero aún así estar libres de la disposición y la presentación altamente pulida.

---
layout: content
---

<figure class="justify-items-center">
<figcaption>Collague de elementos</figcaption>
<img src="/images/ew-element-collage.jpg" alt="PNC Forms" width="75%" />
</figure>

### Iterando en el proceso

Al principio, los diseños en el navegador tienden a verse toscos en el mejor de los casos, y eso está completamente bien. La intención es esbozar la arquitectura de información básica de la plantilla en el navegador, definir patrones, conectar esos patrones usando includes y comenzar el marcado general de los patrones. Con ese trabajo en marcha, el equipo puede comenzar colectivamente a estilizar patrones específicos y refinar la estructura general.

Ver estos prototipos parcialmente diseñados puede parecer extraño para quienes están acostumbrados a entregables de diseño pixel-perfect. Pero es mucho más importante comunicar el progreso que generar una falsa sensación de perfección, por lo que las actualizaciones continuas son preferibles a grandes revelaciones.

Una vez que los diseños están en el navegador, deben permanecer allí. En esta etapa del proceso, el enfoque de producción se desplaza hacia los miembros del equipo expertos en HTML, CSS y JavaScript de presentación. Los patrones deben crearse, estilizarse e integrarse donde se necesiten. Los diseñadores pueden reaccionar ante estas implementaciones en el navegador y crear spot comps en herramientas estáticas para ayudar a corregir detalles de responsividad a nivel de organismo. Este ir y venir entre herramientas estáticas y en el navegador establece un ciclo saludable entre diseño y desarrollo, donde el código de front-end se vuelve más sólido y estable con cada iteración.

