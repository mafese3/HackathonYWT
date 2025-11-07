# YWT STEM Forum — Esqueleto Astro

Proyecto inicial generado para la Hackathon Yes We Tech. Contiene páginas estáticas y componentes para un prototipo de plataforma educativa/foro:

- `/` - Página de inicio
- `/videos` - Videos cortos (estilo TikTok, incrustados desde YouTube)
- `/courses` - Cursos y playlists (YouTube)
- `/forum` - Foro - prototipo estático con formulario demo
- `/events` - Calendario/lista de eventos

Cómo usar (PowerShell):

```powershell
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Notas:
- El proyecto usa Astro + Tailwind. Los vídeos están incrustados vía iframe de YouTube por simplicidad.
- Para producción conviene añadir un backend para el foro (por ejemplo Supabase, Firebase o un pequeño API) y una fuente dinámica de eventos.