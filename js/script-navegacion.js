<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Página Pareja 15: Diseño de Navegación</title>
<style>
  /* Estructura de dos columnas (Texto a la izquierda, Imagen a la derecha) */
  .section-grid {
    display: grid;
    grid-template-columns: 1.8fr 1fr; /* Divide el espacio adecuadamente */
    gap: 30px;
    align-items: start;
    margin-bottom: 40px;
  }

  /* Control de tamaño estricto para las imágenes */
  .media-box {
    width: 100%;
    max-width: 320px; /* Evita que la imagen crezca demasiado */
    height: 260px;    /* Altura proporcional fija */
    object-fit: cover; /* Recorta la imagen para llenar el recuadro sin deformarse */
    border: 2px solid #a3e635; /* Borde verde neón original */
    border-radius: 20px;
    display: block;
    margin: 0 auto;
  }

  /* Contenedor de doble imagen para el subtema */
  .grid-two-media {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
  }

  .grid-two-media .media-box {
    height: 180px; /* Altura más pequeña cuando hay dos imágenes seguidas */
  }

  .text-card li {
    margin-bottom: 6px;
    line-height: 1.5;
  }

  .text-card strong {
    color: #111827; /* Texto en negrita resaltado en oscuro */
  }
  }

  body {
    background-color: #0b1021;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  /* --- HEADER / NAVBAR --- */
  header {
    background-color: #231b42;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 40px;
    border-bottom: 2px solid #362963;
  }

  .logo {
    font-size: 26px;
    font-weight: bold;
    color: #8b72de;
  }

  .logo span {
    color: #a3e635;
  }

  nav a {
    color: #8b72de;
    text-decoration: none;
    margin: 0 20px;
    font-weight: bold;
    font-size: 15px;
    text-transform: uppercase;
  }

  nav a:hover, nav a.active {
    color: #a3e635;
  }

  .search-box {
    position: relative;
    display: flex;
    align-items: center;
  }

  .search-box input {
    background-color: transparent;
    border: 2px solid #8b72de;
    border-radius: 20px;
    padding: 6px 15px 6px 35px;
    color: #fff;
    outline: none;
    width: 220px;
  }

  .search-box::before {
    content: "🔍";
    position: absolute;
    left: 10px;
    font-size: 14px;
    color: #8b72de;
  }

  /* --- LAYOUT PRINCIPAL --- */
  .container {
    display: flex;
    flex: 1;
  }

  /* --- SIDEBAR LATERAL --- */
  aside {
    width: 260px;
    background-color: #4f4d8c;
    padding: 25px 20px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }

  .sidebar-section {
    margin-bottom: 30px;
  }

  .sidebar-title {
    color: #a3e635;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .sidebar-menu {
    list-style: none;
  }

  .sidebar-menu li {
    margin-bottom: 12px;
  }

  .sidebar-menu a {
    color: #d1d5db;
    text-decoration: none;
    font-size: 12px;
    display: block;
    text-transform: uppercase;
    transition: 0.2s;
  }

  .sidebar-menu a:hover, .sidebar-menu a.active-link {
    color: #a3e635;
    font-weight: bold;
  }

  <!-- ÁREA DE CONTENIDO PRINCIPAL -->
    <main>
      <!-- TÍTULO PRINCIPAL SOLICITADO -->
      <h1 class="main-title">¿Por qué es tan importante el Diseño de Navegación?</h1>

      <!-- SECCIÓN PRINCIPAL: EXPLICACIÓN Y OBJETIVOS -->
      <div class="section-grid">
        <div class="text-card">
          <p><strong>Su objetivo principal:</strong> Es asegurar que el usuario siempre sepa dónde está, de dónde viene y a dónde puede ir. Una buena navegación responde adecuadamente tres preguntas en todo momento:</p>
          <ul>
            <li><strong>¿Dónde estoy?</strong> El menú marca la sección actual, o existen "migajas de pan" (breadcrumbs) que muestran la ruta.</li>
            <li><strong>¿De dónde vengo?</strong> El botón "atrás" o los breadcrumbs te indican cómo llegaste hasta aquí.</li>
            <li><strong>¿A dónde puedo ir?</strong> El menú y los enlaces contextuales te muestran todas las opciones disponibles.</li>
          </ul>
          <br>
          <p><strong>Reduce la carga cognitiva:</strong> Significa ahorrarle esfuerzo mental al usuario. No tiene que pensar "¿dónde estaba eso?" porque todo está ubicado donde se espera. Menos decisiones equivalen a menos cansancio y a una mejor experiencia.</p>
          <p><strong>Mejora el flujo de usuario:</strong> Permite que el usuario se mueva con fluidez por tu sitio web, evitando callejones sin salida o páginas perdidas.</p>
        </div>
        
        <!-- ILUSTRACIÓN PRINCIPAL -->
        <img src="Imagenes/busqueda/12982578_5116514.webp" class="media-box" alt="Diseño de Navegación">
      </div>

      <!-- SECCIÓN 2: GUÍA PASO A PASO -->
      <h2 class="sub-title">"DE LA CIUDAD AL PLANO" - GUÍA PARA DISEÑAR LA NAVEGACIÓN DE UNA WEB</h2>

      <div class="section-grid">
        <div class="text-card">
          <p><strong>Paso 1. Definir el contenido antes que la estructura:</strong> Antes de dibujar menús, realiza un inventario de contenido listando todas las páginas/secciones necesarias (Inicio, Productos, Contacto, etc.). Sin este listado, la navegación se diseña a ciegas.</p>
          
          <p><strong>Paso 2. Agrupar y jerarquizar (Arquitectura de la información):</strong> Utiliza notas o diagramas para agrupar las páginas por temas afines y decidir qué va primero, qué va dentro de qué y qué es secundario.</p>
          
          <p><strong>Paso 3. Elegir el patrón adecuado según el caso:</strong> Justifica tu elección considerando tres factores principales:
            <ul>
              <li>Volumen de contenido (¿pocas o muchas secciones?)</li>
              <li>Tipo de usuario (¿novato o experto?)</li>
              <li>Dispositivo (¿escritorio, móvil o ambos?)</li>
            </ul>
          </p>

          <p><strong>Paso 4. Diseñar el menú y sus etiquetas:</strong>
            <ul>
              <li><strong>Ubicación:</strong> Arriba (header) o en la barra lateral.</li>
              <li><strong>Etiquetas claras:</strong> Usa términos entendibles ("Servicios" en vez de "Soluciones integrales 360").</li>
              <li><strong>Número de opciones:</strong> Entre 5 y 7 opciones principales para no saturar.</li>
              <li><strong>Orden lógico:</strong> Coloca lo más importante primero.</li>
            </ul>
          </p>

          <p><strong>Paso 5. Añadir señales de orientación:</strong> Implementa migajas de pan (breadcrumbs) tipo <i>(Inicio > Blog > Diseño)</i>, resalta la sección activa con color/subrayado y usa enlaces claramente distinguibles.</p>

          <p><strong>Paso 6. Diseñar para móvil (Responsividad):</strong> Utiliza el menú hamburguesa (ícono de tres líneas), asegura puntos táctiles grandes y prueba los breakpoints en distintos dispositivos.</p>

          <p><strong>Paso 7. Probar la navegación (Test de usuario):</strong> Pide a otra persona que realice tareas específicas en la web para observar si se pierde y corregir los puntos donde falle la navegación.</p>
        </div>

        <!-- GRIDS DE IMÁGENES COMPLEMENTARIAS -->
        <div class="grid-two-media">
          <img src="Imagenes/opt/01.webp" alt="Paso a paso 1" class="media-box">
          <img src="Imagenes/busqueda/12982578_5116514.webp" alt="Paso a paso 2" class="media-box">
        </div>
      </div>
    </main>

  .section-grid {
    display: grid;
    grid-template-columns: 1.8fr 1fr;
    gap: 30px;
    margin-bottom: 40px;
  }

  .text-card {
    background-color: #d1d5db;
    color: #111827;
    padding: 25px;
    border-radius: 25px;
    font-size: 14px;
    line-height: 1.6;
  }

  .text-card p {
    margin-bottom: 15px;
  }

  .text-card p:last-child {
    margin-bottom: 0;
  }

  .media-box {
    border: 2px solid #a3e635;
    min-height: 200px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .media-box::before, .media-box::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #a3e635;
  }

  .media-box {
    width: 100%;
    height: 100%;
    min-height: 180px;
    max-height: 250px;
    object-fit: cover; /* Mantiene la proporción y recorta para llenar la casilla */
    border: 2px solid #a3e635; /* Borde verde neón */
    border-radius: 12px;
    display: block;
  }

  .sub-title {
    color: #a3e635;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  .grid-two-media {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  /* --- FOOTER --- */
  footer {
    background-color: #1e1b4b;
    padding: 25px;
    text-align: center;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    margin-top: auto;
  }

  .footer-logo {
    font-size: 22px;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 10px;
  }

  .footer-text {
    color: #9ca3af;
    font-size: 11px;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.4;
  }
</style>
</head>

<body>

  <!-- ENCABEZADO -->
  <header>
    <div class="logo">Wiki<span>Design</span></div>
    <nav>
      <a href="#">INICIO</a>
      <a href="#">COLABORA</a>
      <a href="#">ACERCA DE NOSOTROS</a>
    </nav>
    <div class="search-box">
      <input type="text" placeholder="">
    </div>
  </header>

  <!-- CONTENEDOR PRINCIPAL -->
  <div class="container">
    
    <!-- BARRA LATERAL (SIDEBAR) -->
    <aside>
      <div class="sidebar-section">
        <div class="sidebar-title">
          <span>TEMAS</span>
          <span>⬆</span>
        </div>
        <ul class="sidebar-menu">
          <li><a href="#">Experiencia de Usuario - P1</a></li>
          <li><a href="#">Diseño Web</a></li>
          <li><a href="#">Design Thinking</a></li>
          <li><a href="#">Diseño Centrado en el Usuario</a></li>
          <li><a href="#">Diseño de Interacción</a></li>
          <li><a href="#">Arquitectura de la Información</a></li>
          <li><a href="#" class="active-link">Diseño de Navegación</a></li>
          <li><a href="#">Diseño Visual</a></li>
        </ul>
      </div>

      <div class="sidebar-section">
        <div class="sidebar-title">
          <span>SUMARIO</span>
          <span>⬆</span>
        </div>
        <ul class="sidebar-menu">
          <li><a href="#">. Menús y Mareas de Navegación</a></li>
          <li><a href="#">. Migas de Pan (Breadcrumbs)</a></li>
          <li><a href="#">. Patrones de Navegación Mobile</a></li>
          <li><a href="#">. Modelos Jerárquicos</a></li>
          <li><a href="#">. Usabilidad y Orientación</a></li>
        </ul>
      </div>
    </aside>

    <!-- ÁREA DE CONTENIDO -->
    <main>
      <!-- TÍTULO PRINCIPAL SOLICITADO -->
      <h1 class="main-title">¿Por qué es tan importante el Diseño de Navegación?&nbsp;</h1>

      <!-- SECCIÓN 1 -->
      <div class="section-grid">
        <div class="text-card">
          <p>El diseño de navegación es la estructura interactiva que permite a los usuarios desplazarse de manera intuitiva y eficiente a través de un sitio web o aplicación. Su objetivo principal es asegurar que el usuario siempre sepa dónde está, de dónde viene y a dónde puede ir a continuación.</p>
          <p>Una navegación bien construida reduce la carga cognitiva, mejora el flujo de usuario y facilita la localización de contenidos. Para lograrlo, utiliza estructuras lógicas como menús principales, barras laterales, mapas de sitio y enlaces contextuales estandarizados.</p>
          <p>&nbsp;Paso 1. Definir el contenido antes que la estructura<br>
          </p>
          <p>Paso 2. Agrupar y jerarquizar (arquitectura de la información)</p>
          <p>Paso 3. Elegir el patrón adecuado según el caso&nbsp;</p>
          <p>&nbsp;Paso 4. Diseñar el menú y sus etiquetas </p>
          <p>Paso 5. Añadir señales de orientación</p>
          <p>Paso 6. Diseñar para móvil (responsividad)&nbsp;</p>
          <p>Paso 7. Probar la navegación (test de usuario)&nbsp;</p>
<p>&nbsp;</p>
        </div>
        <img src="Imagenes/opt/02.svg" alt=""/>
        <img src="Imagenes/opt/12982578_5116512.webp" alt=""/>
        <div class="media-box">
          <p> &nbsp;¿Dónde estoy? → El menú marca la sección actual, o hay "migajas de pan" (breadcrumbs) que muestran la ruta.</p>
          <p>&nbsp;¿De dónde vengo? → El botón "atrás" o los breadcrumbs te dicen cómo llegaste aquí.</p>
          <p>&nbsp;¿A dónde puedo ir? → El menú y los enlaces te muestran las opciones disponibles.</p>
          <p>&nbsp; </p>
        </div>
      </div>

      <!-- SECCIÓN 2: SUBTEMA -->
      <h2 class="sub-title">SUB TEMA 1: PATRONES Y COMPONENTES DE NAVEGACIÓN</h2>

      <div class="section-grid">
        <div class="text-card">
          <p>Los componentes clave del diseño de navegación incluyen las barras de menú (superiores o laterales), las "migas de pan" (breadcrumbs), los pies de página estructurados y los sistemas de búsqueda rápida. Seleccionar el patrón correcto depende de la profundidad de la información y los objetivos del usuario.</p>
        </div>
        <div class="grid-two-media">
          <img src="Imagenes/opt/FigureItOutWhatGIFbyCBC-ezgif.com-webp-to-webm-converter.webp" alt=""/>
          
         
        </div>
      </div>
    </main>

  </div>

  <!-- PIE DE PÁGINA -->
  <footer>
    <div class="footer-logo">Wiki Design</div>
    <p class="footer-text">
      © 2026 Wiki Design. Todos los derechos reservados.<br>
      El contenido de este sitio ha sido desarrollado con fines educativos y académicos. Los textos, imágenes y recursos utilizados pertenecen a sus respectivos autores y se emplean únicamente como material de consulta y aprendizaje.
    </p>
  </footer>

</body>
</html>
