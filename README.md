# 🚀 EcoExchange AI — Guía de Trabajo del Equipo
## Hackathon Build With AI 2026 · Santa Cruz, Bolivia

---

## 💡 1. LA IDEA PRINCIPAL (El "Tinder" de Residuos Industriales)

**EcoExchange AI** es una plataforma inteligente diseñada para resolver un problema crítico en el polo industrial de Santa Cruz de la Sierra: las empresas generan toneladas de residuos reutilizables (subproductos, plástico, bagazo, aceites, chatarra) y pagan para deshacerse de ellos, mientras que otras empresas gastan fortunas buscando esa misma materia prima.

**¿Qué hace la aplicación para la demo?**
Conecta de forma visual y ágil a empresas **Generadoras** con empresas **Receptoras**. La "magia" tecnológica es que integra Inteligencia Artificial (**Gemini**) para que, con solo subir una foto o descripción del residuo, el sistema lo clasifique automáticamente, determine su nivel de riesgo y calcule el impacto ambiental (Ahorro de CO₂) y económico en tiempo real.

---

## 👥 2. DIVISIÓN ESTRATÉGICA DE ROLES (Equipo de 3)

Para sobrevivir y ganar la hackathon en las horas que quedan, vamos a dividir el trabajo de forma pragmática según las fortalezas del equipo. **No necesitamos un sistema perfecto, necesitamos una demo visual que funcione.**

### 🧠 Rol 1: Juan Pablo Vidal Yavi — Líder de Arquitectura, IA y Backend Core
* **Responsabilidad:** Mantener el control del servidor en FastAPI y la base de datos PostgreSQL. Su foco principal es hacer que el endpoint de Inteligencia Artificial (**Gemini**) se conecte con las API Keys de Google AI Studio y devuelva las clasificaciones de los residuos.
* **Entregable técnico clave:** Una API que reciba los datos del residuo y devuelva un JSON con la categoría, riesgo y CO₂ estimado.

### 🎨 Rol 2: Compañero(a) 2 — Desarrollador de Frontend UI (Experiencia de Usuario)
* **Responsabilidad:** Darle vida visual a la aplicación usando **React + Vite y Tailwind CSS**. No te preocupes si la conexión con el servidor se pone difícil; tu objetivo es que las pantallas principales (`Home`, `Dashboard`, `Catálogo de Residuos`) se vean profesionales, limpias y atractivas para los jueces.
* **Estrategia de Hackathon:** Si un formulario no conecta a la base de datos a tiempo, simula la respuesta usando datos estáticos (*mockeados*) directamente en el código para que la interfaz avance fluidamente durante la presentación.

### 💼 Rol 3: Compañero(a) 3 — Hustler de Negocios, Estrategia y Pitch Profesional
* **Responsabilidad:** El software solo es el 50% de la nota. Tu misión es liderar la estrategia comercial. Crearás la presentación de 10 diapositivas basada en el documento estratégico (FODA, Lean Canvas, impacto en industrias de Santa Cruz) y estructurarás el guion del video de 2 minutos.
* **Segunda responsabilidad esencial (Control de Calidad):** Actuarás como el "usuario real". Probarás constantemente lo que tus compañeros programen y diseñarás el "Happy Path" (la ruta exacta de clics que se mostrará en la demo en vivo para evitar que algo falle frente al jurado).

---

## 🛠️ 3. INSTRUCCIONES PARA CONTRIBUIR Y TRABAJAR EN CONJUNTO

Para evitar pisarse el código y trabajar en perfecta sincronía desde Visual Studio Code, seguiremos estas reglas de oro:

### A. Control de Versiones Simple (Git & GitHub)
1.  **Repositorio Central:** Trabajaremos sobre una rama principal (`main`) o una rama de desarrollo limpia (`dev`).
2.  **Antes de empezar a programar:** Ejecuta siempre en tu terminal:
    ```bash
    git pull origin main
    ```
    *Justificación:* Esto descarga los cambios que tus compañeros hayan subido y evita los temidos conflictos de código (*merge conflicts*).
3.  **Al terminar una funcionalidad que funciona:** Sube tus cambios inmediatamente:
    ```bash
    git add .
    git commit -m "feat: pantalla de inicio terminada"
    git push origin main
    ```

### B. El Protocolo de Sincronización de las 4 Horas
Cada 4 horas exactas, los tres detendremos lo que estemos haciendo para una reunión de 10 minutos:
* **Juan Pablo** mostrará si los endpoints de la IA responden.
* **Frontend Developer** mostrará cómo se ven las pantallas en el navegador.
* **Hustler de Negocios** revisará que el diseño se alinee con los mensajes clave de las diapositivas del Pitch.

### C. Estrategia de Simplificación Salvavidas
Si a la hora de integrar el Frontend con el Backend algo falla o salen errores de CORS/Redes:
1.  **Mantener la calma:** No perderemos 3 horas depurando configuraciones locales de red.
2.  **Solución táctica:** El Frontend usará los datos guardados en variables locales de React. Durante la demo, simularemos la carga con un spinner visual de carga de Tailwind. El jurado evaluará la propuesta de valor y el funcionamiento integrado de la interfaz, no el tráfico de red de la pestaña Network.

---

## 📈 4. REQUISITOS MÍNIMOS PARA LA ENTREGA FINAL

Al finalizar el tiempo, nuestro repositorio debe contener:
1.  La carpeta `backend/` con el servidor base funcional.
2.  La carpeta `frontend/` con la interfaz web visualmente atractiva en verde y azul.
3.  La carpeta `database/init.sql` con el script de tablas que ya creamos en PostgreSQL.
4.  La carpeta `pitch/` con las diapositivas finales listas para la defensa del proyecto.