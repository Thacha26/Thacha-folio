import projects from '../data/projects'
import './Projects.css'

function ProjectCard({ project }) {
 const { name, description, image, repoUrl, tech, isWeb } = project

  return (
    <article className="project-card">
      <header className="project-card-header">
        <h3 className="project-card-title">{name}</h3>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-repo-link"
        >
          {isWeb ? 'Web ↗' : 'GitHub ↗'}
        </a>
      </header>

      <div className="project-card-body">
        <p className="project-card-description">{description}</p>
        <div className="project-card-image">
          <img src={image} alt={`Vista previa del repositorio ${name}`} loading="lazy" />
        </div>
      </div>

      <footer className="project-card-footer">
        <ul className="project-card-tech">
          {tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </footer>
    </article>
  )
}

function Projects() {
  return (
    <section id="proyects" className="projects-section">
      <h2 className="projects-heading">Proyectos</h2>
      <p className="projects-subheading">
        Algunos de mis trabajos, directo desde{' '}
        <a href="https://github.com/Thacha26" target="_blank" rel="noopener noreferrer">
          mi GitHub
        </a>
        .
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.repoUrl} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
