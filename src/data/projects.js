import nexolealImg from '../assets/NEXOLEAL.png'
import raytracerImg from '../assets/ray-tracer.png'
const projects = [
  {
    name: 'Gatitos Felices',
    description:
      'Asistente inteligente de bienestar felino: hace triaje preventivo y orienta sobre cuándo acudir al veterinario, sin sustituirlo nunca.',
    repoUrl: 'https://github.com/Thacha26/Gatitos_felices',
    image: 'https://opengraph.githubassets.com/1/Thacha26/Gatitos_felices',
    tech: ['PL/pgSQL', 'PostgreSQL'],
  },
  {
    name: 'Proyecto Final de Linux',
    description:
      'Proyecto final de la materia de Linux de PROTECSA, automatizado con scripts de shell.',
    repoUrl: 'https://github.com/Thacha26/Proyecto-final-Linux',
    image: 'https://opengraph.githubassets.com/1/Thacha26/Proyecto-final-Linux',
    tech: ['Shell'],
  },
  {
    name: 'NEXOLEAL',
    description: 'Motor de lealtad y retención para PYMES latinoamericanas. Monedero digital para clientes, escáner seguro para staff, dashboard con asistente IA para dueños — todo sobre Cloudflare Workers + Supabase.',
    repoUrl: 'https://tanstack-start-app.nexoleal.workers.dev',
    image: nexolealImg,
    tech: ["TypeScript", "PL/pgAQL", "CSS"],
    isWeb: true
  },
  {
    name: 'Proyecto Final de C',
    description:
      'Simulación del funcionamiento de una tiendita usando listas doblemente enlazadas, punteros y manejo manual de memoria.',
    repoUrl: 'https://github.com/Thacha26/Proyecto-Final-de-C',
    image: 'https://opengraph.githubassets.com/1/Thacha26/Proyecto-Final-de-C',
    tech: ['C'],
  },
  {
  name: 'Proyecto final: Ray tracer',
   description: 'Motor de renderizado 3D mediante simulación de rayos de luz. Procesa escenas, materiales e iluminación para generar imágenes fotorrealistas — al estilo de RenderMan, Cycles y motores 3D modernos.',
   repoUrl: 'https://github.com/Thacha26/ray-tracer-los-mezcalitos',
    image: raytracerImg,
    tech: ['Java', 'Shell'],
  },

]

export default projects
