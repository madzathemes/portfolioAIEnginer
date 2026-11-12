import { useEffect, useRef, useState } from 'react'
import { projects } from './projects'
import type { ImageItem, Project } from './projects'

function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const path = `${import.meta.env.BASE_URL}video/record-1.webm`

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePlayback = () => {
      const video = videoRef.current
      if (!video) return
      if (motionPreference.matches) video.pause()
      else void video.play().catch(() => {})
    }

    updatePlayback()
    motionPreference.addEventListener('change', updatePlayback)
    return () => motionPreference.removeEventListener('change', updatePlayback)
  }, [])

  return (
    <figure className="hero-video">
      <div className="hero-video-frame">
        <video ref={videoRef} controls muted loop playsInline preload="metadata" poster={`${import.meta.env.BASE_URL}images/madaiprint/studio-home.jpg`} aria-label="Product preview video">
          <source src={path} type="video/webm" />
          Your browser does not support embedded video. <a href={path}>Download the video</a>.
        </video>
      </div>
      <figcaption className="hero-video-caption"><span className="figure-label">Featured work</span><span>madAIprint / Product in motion</span></figcaption>
    </figure>
  )
}

function ProjectImage({ image, projectId, featured = false }: { image: ImageItem; projectId: string; featured?: boolean }) {
  const [failed, setFailed] = useState(false)
  const path = `${import.meta.env.BASE_URL}images/${projectId}/${image.file}`

  return (
    <figure className={featured ? 'figure figure--featured' : 'figure'}>
      <div className="image-frame">
        {!failed ? (
          <img src={path} alt={image.alt} loading="lazy" onError={() => setFailed(true)} />
        ) : (
          <div className="image-placeholder" role="img" aria-label={`${image.title}: screenshot not yet available`}>
            <span className="placeholder-icon" aria-hidden="true">✳</span>
            <span className="placeholder-name">{image.title}</span>
            <span className="placeholder-caption">Screenshot coming soon</span>
          </div>
        )}
      </div>
      <figcaption>
        {image.label && <span className="figure-label">{image.label}</span>}
        <strong>{image.title}</strong><span>{image.description}</span>
      </figcaption>
    </figure>
  )
}

function SectionHeading({ number, label, title, children }: { number: string; label: string; title: string; children: string }) {
  return (
    <div className="section-heading">
      <div className="section-index"><span>{number}</span><span>{label}</span></div>
      <div><h3>{title}</h3><p>{children}</p></div>
    </div>
  )
}

function CaseStudy({ project }: { project: Project }) {
  return (
    <article className="project" id={project.id}>
      <div className="project-intro">
        <div className="project-kicker"><span className="status-dot" /> Featured project <span className="kicker-divider">/</span> {project.number}</div>
        <div className="project-title-row"><div><p className="eyebrow">{project.name} / {project.category}</p><h2>{project.headline}</h2></div><span className="project-mark" aria-hidden="true">↗</span></div>
        <p className="project-description">{project.description}</p>
        <dl className="overview">
          <div><dt>Role</dt><dd>{project.role}</dd></div>
          <div><dt>My contribution</dt><dd>{project.contribution}</dd></div>
          <div><dt>Stack</dt><dd>{project.stack}</dd></div>
        </dl>
      </div>

      <section className="chapter" id={`${project.id}-studio`}>
        <SectionHeading number="01" label={project.studioHeading.label} title={project.studioHeading.title}>{project.studioHeading.description}</SectionHeading>
        <div className="image-grid">{project.studio.map((image) => <ProjectImage key={image.file} image={image} projectId={project.id} />)}</div>
      </section>

      <section className="chapter" id={`${project.id}-collections`}>
        <SectionHeading number="02" label={project.collectionsHeading.label} title={project.collectionsHeading.title}>{project.collectionsHeading.description}</SectionHeading>
        <div className="image-grid sequence">{project.collections.map((image, index) => <ProjectImage key={image.file} image={image} projectId={project.id} featured={index === 0} />)}</div>
        <details className="detail"><summary>More about {project.collectionsHeading.label.toLowerCase()} <span aria-hidden="true">+</span></summary><p>{project.collectionModel}</p></details>
      </section>

      <section className="chapter" id={`${project.id}-workflow`}>
        <SectionHeading number="03" label={project.workflowHeading.label} title={project.workflowHeading.title}>{project.workflowHeading.description}</SectionHeading>
        <ProjectImage image={project.assets} projectId={project.id} featured />
        <div className="subsection-heading"><h4>{project.contextHeading.title}</h4><p>{project.contextHeading.description}</p></div>
        <div className="image-grid">{project.context.map((image) => <ProjectImage key={image.file} image={image} projectId={project.id} />)}</div>
        <div className="subsection-heading"><h4>{project.archiveHeading.title}</h4><p>{project.archiveHeading.description}</p></div>
        <ProjectImage image={project.archive} projectId={project.id} featured />
      </section>

      <section className="chapter engineering" id={`${project.id}-engineering`}>
        <SectionHeading number="04" label={project.engineeringHeading.label} title={project.engineeringHeading.title}>{project.engineeringHeading.description}</SectionHeading>
        <div className="decisions">{project.decisions.map((decision, index) => <div className="decision" key={decision.title}><span>0{index + 1} /</span><h4>{decision.title}</h4><p>{decision.description}</p></div>)}</div>
      </section>
    </article>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#work">Skip to work</a>
      <header className="site-header" id="top"><div className="header-inner"><a className="brand" href="#top">madars<span>.</span></a><span className="header-descriptor">Software product engineering</span><nav aria-label="Main navigation"><a href="#work">Work <span>↗</span></a><a href="#about">About <span>↗</span></a></nav></div></header>
      <main>
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Software product engineer</p>
            <h1 id="hero-title">Thoughtful products,<br /><span>built to work.</span></h1>
            <div className="hero-bottom"><p>I’m Madars. I build useful digital tools that bring complex workflows and considered design together.</p><a className="text-link" href="#work">Explore selected work <span>↓</span></a></div>
          </div>
          <HeroVideo />
        </section>
        <div className="work-bar" id="work"><div className="wrap work-bar-inner"><span>Selected work</span><span>Product thinking meets engineering <span className="work-count">({String(projects.length).padStart(2, '0')})</span></span></div></div>
        <div className="wrap projects">{projects.map((project) => <CaseStudy key={project.id} project={project} />)}</div>
        <section className="about" id="about"><div className="wrap about-inner"><div><p className="eyebrow">A little about me</p><h2>Built with purpose.<br /><span>Made to be useful.</span></h2></div><div className="about-copy"><p>I’m a software product engineer interested in the details that make a product work: clear workflows, resilient data, and tools that help people create.</p><a className="text-link" href="#top">Back to top <span>↑</span></a></div></div></section>
      </main>
      <footer className="site-footer"><div className="wrap footer-inner"><span className="footer-brand">madars<span>.</span></span><span>Selected work · Software product engineering</span><a href="#top">Back to top ↑</a></div></footer>
    </>
  )
}