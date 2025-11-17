---
layout: content
title: Manteniendo sistemas de diseño
routeAlias: mantainingDesignSystems
---

<DesignHeader 
  chapter="Capitulo 5" 
  title="Manteniendo sistemas de diseño" 
  subtitle="Cosas a tener en cuenta para mantener y actualizar un sistema de diseño."
/>

Parece natural enfocarse en las implementaciones finales en lugar del
sistema subyacente. Los productos en producción siguen siendo el foco
principal de atención para todos, mientras que cualquier biblioteca de
patrones existe como un derivado que simplemente brinda documentación
útil.

Cuando la biblioteca de patrones deja de reflejar el estado actual de
los productos que sirve, se vuelve obsoleta. Y cuando la biblioteca de
patrones que gestiona el sistema de diseño ya no es precisa, el proceso
de mantenimiento del sitio web se convierte en un conjunto de parches
rápidos y cambios improvisados, arruinando toda la dedicación que se
puso en crear el sistema de diseño original.

Debemos reconocer que el sistema de diseño es lo que sustenta nuestros
productos finales y bibliotecas de patrones.
El enfoque "Design System First" nos obliga a dar un paso atrás y considerar cómo cualquier mejora, solicitud del cliente, nueva funcionalidad o iteración afecta al sistema completo en lugar de solo a una pequeña parte del ecosistema.


Los clientes, colegas y partes interesadas deberían aceptar la
naturaleza flexible del mundo digital para crear sistemas de diseño
vivos que se adapten al constante cambio del medio, las necesidades de
los usuarios y las necesidades del negocio.

Los clientes, colegas y partes interesadas deberían aceptar la
naturaleza flexible del mundo digital para crear sistemas de diseño
vivos que se adapten al constante cambio del medio, las necesidades de
los usuarios y las necesidades del negocio.

Las personas que trabajan en servicios para clientes suelen estar
acostumbradas a entregar un proyecto en un paquete prolijo y luego
desaparecer. Los equipos internos no lo hacen mucho mejor, ya que suelen
saltar de una iniciativa a otra.

Un sistema de diseño no debería ser un proyecto con un alcance finito,
sino un producto destinado a crecer y evolucionar con el tiempo. La web nunca está terminada, y la creación de un sistema de diseño es solo el primer paso en un largo (y esperablemente fructífero) camino.

Un sistema de diseño debería ser un compromiso a largo plazo con el
objetivo ambicioso de revolucionar cómo tu organización crea productos
digitales.

---
layout: content
---
### Cosas necesarias para lograr un sistema de diseño exitoso

#### Tiene que ser oficial

Los comienzos orgánicos están bien, pero para establecer un sistema de
diseño realmente impactante que genere éxito a largo plazo, el sistema
debe evolucionar hacia un esfuerzo oficialmente respaldado. Esto
significa tratarlo como un producto real en lugar de un proyecto
secundario, y asignarle tiempo, presupuesto y personal reales.

#### Armar un equipo de mantenimiento

Inevitablemente habrá personas en la organización que creen y mantengan
el sistema, y personas que lo utilicen. Puede haber superposición entre
estos grupos, pero establecer los roles de creadores y usuarios es
igualmente importante.

Los creadores del sistema de diseño son quienes lo construyen, mantienen
y gobiernan, y deben trabajar estrechamente juntos para asegurar que el
sistema sea inteligente, flexible, escalable y que atienda las
necesidades de los usuarios y del negocio. 

Los usuarios del sistema de diseño son los equipos de la organización que toman el sistema y aplican sus patrones de interfaz a sus aplicaciones específicas.

Los creadores y los usuarios deben mantener una relación cercana para
asegurar que los patrones definidos en el sistema sirvan a las
necesidades de las aplicaciones y que toda documentación sea clara.

#### Debe ser adaptable

El cambio es la única constante. La parte "viva" del sistema de diseño
vivo significa que debe adaptarse, iterarse y evolucionar junto con los
productos que sirve.

Una parte crítica del mantenimiento del sistema de diseño es asegurar
que los patrones de UI se mantengan actualizados, adopten buenas
prácticas de diseño y desarrollo, y continúen atendiendo las necesidades
reales de la organización.

##### Agregar nuevos patrones

Por más inteligente que sea tu equipo, es muy posible que no piensen en
todos los patrones necesarios desde el principio. A medida que el
sistema se aplica a más productos, inevitablemente aparecerán vacíos que
no puedan resolverse con los patrones existentes. 

Al mismo tiempo se debe tener cuidado de no agregar patrones que no sean necesarios o que no sean útiles o el sistema de diseño se convertirá en un caos inmanejable. Al momento de hacer un cambior, vale la pena preguntarse si esto es una situación aislada o algo que puede ser reutilizable en otras aplicaciones.

##### Eliminar patrones obsoletos

Los patrones pueden quedar obsoletos por muchas razones. Tener un plan para deprecar patrones es una gran idea. ¿Pero cómo eliminarlos 
removerlos sin dejar sin soporte a quienes dependen de ellos? Salesforce
creó una herramienta llamada [Sass Deprecate](https://salesforce-ux.github.io/sass-deprecate/) que marca patrones que serán
eliminados próximamente.

---
layout: content
---

##### Hacer actualizaciones

Hacer actualizaciones en patrones, documentación y aplicaciones debería
ser lo más fluido posible, así que reducir esa fricción debe ser una
prioridad del equipo de sistemas de diseño. Esto implica considerar
tanto el aspecto tecnológico como el de flujo de trabajo.

El santo grial del sistema de diseño consiste en crear un entorno donde
la biblioteca de patrones y las aplicaciones vivas estén perfectamente
sincronizadas. La idea es poder hacer un cambio en un patrón y verlo
reflejado automáticamente en la biblioteca y en producción. Aunque este enfoque no es fácil: requiere una arquitectura técnica sofisticada,
gente capacitada para configurarla y una cultura organizacional
relativamente centralizada.

##### Visibilidad

La visibilidad es crucial para la salud continua del sistema. Un
esfuerzo tan importante no debería esconderse en un rincón oscuro del
intranet. Evangelizar el sistema de diseño puede y debería empezar incluso antes
de que esté funcionando. Desde el inicio se pueden documentar avances
para generar conciencia y entusiasmo.

Una vez en marcha y utilizado en aplicaciones reales, es imprescindible
comunicar cambios, actualizaciones y la visión continua a toda la
organización.

Las tácticas pueden variar desde herramientas técnicas hasta esfuerzos
de comunicación más amplios.

Los cambios, actualizaciones y solicitudes del sistema deberían
comunicarse donde el equipo ya se comunica: Slack, Basecamp, GitHub,
wikis, Yammer, emails, blogs internos, intranet, etc.

La documentación en forma de guía de estilo es útil, pero no suficiente.
Es esencial brindar capacitación y soporte continuo a los usuarios del
sistema para asegurar que puedan usarlo correctamente y crear buen
trabajo con él.

##### Hacer publico el sistema de diseño

Publicar tu guía de estilo para que el mundo la vea aumenta su
visibilidad, incrementa la responsabilidad y sirve como una herramienta
increíble de reclutamiento. 

Poner la guía detrás de un login reduce su visibilidad, agrega fricción
innecesaria y limita su potencial. El miedo a "revelar secretos" es
infundado: son patrones de UI, no códigos nucleares.