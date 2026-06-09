import { useEffect, useMemo, useState } from 'react'
import '../style.css'

const imagePath = (name) => `/assets/images/${name}`

const projects = [
  {
    id: 'terraced-grid-living',
    number: '01',
    title: 'Terraced Grid Living',
    category: 'Residential compound',
    subtitle: 'A modular mixed-use residential compound',
    location: 'Al-Thuhair',
    area: '11,624 m^2',
    type: 'Residential compound',
    description: 'This project is a residential compound with commercial and social green spaces.',
    cardDescription: 'Mixed-use residential compound with green social spaces.',
    features: [
      'Green roofs, planters, and internal courtyards',
      'Deep balconies for shading and privacy',
      'Vertical wooden louvers for climate control and aesthetics',
      'Commercial ground floor for active street life',
      'Modular shifting and stacking concept',
    ],
    theme: '',
    images: ['cover_project 1.jpeg', 'project 1.jpeg', 'project1 second pic.jpeg', 'project 1 third.jpeg'],
  },
  {
    id: 'eco-wadi-project',
    number: '02',
    title: 'Eco-Wadi Project',
    category: 'Greenhouses',
    subtitle: 'An Eco-Wadi Hub as a sustainable tourism destination',
    location: 'Um Juzah, Balqa',
    description:
      'This project reimagines the traditional greenhouse by integrating plant life throughout spatial experiences, forming an ecological retreat rooted in environmental harmony.',
    cardDescription: 'Ecological greenhouse retreat shaped by plant life and light.',
    features: [
      'Grid-based rhythmic spatial sequence',
      'Triangular geometric facade',
      'Solar-integrated roof for energy and daylight control',
      'Transparent structure with strategic shading panels',
      'Curated green pathway and interactive landscapes',
      'Two buildings with restaurant, greenhouses, exhibition, lobby, shop, and meeting rooms',
    ],
    extra:
      'Building one includes restaurant, greenhouse, lobby, and souvenir shop. Building two includes greenhouse, exhibition space, and meeting rooms. The original parametric workflow was developed independently, with approximately 80% of the logic created without relying on pre-made tutorials.',
    theme: 'project--parametric',
    images: [
      'project 2 cover.jpeg',
      'project 2 interior.jpeg',
      'Floor plan for project 2.jpeg',
      'Scripts used for project 2.jpeg',
      'Scripts used for project 2 (1).jpeg',
    ],
  },
  {
    id: 'green-spine-landscape',
    number: '03',
    title: 'Green Spine Landscape',
    category: 'Street Islands',
    subtitle: 'A Walk Through Serendipity',
    location: 'Business Park',
    description:
      'A linear urban path shaped by moments of interaction, pause, and movement. The design follows natural human flow and spontaneity, creating an inviting, intuitive, and playful public space.',
    cardDescription: 'Linear urban landscape for movement, pause, and gathering.',
    features: [
      'Random square distribution for organic spatial rhythm',
      'Mixed functions: seating, vending, biking, and planting',
      'Native and ornamental species for seasonal character',
      'Open yet structured layout encouraging movement and gathering',
    ],
    extra:
      'Randomly arranged squares create a non-linear experience that mirrors how people naturally move, rest, and explore, blurring the boundary between order and spontaneity.',
    theme: 'project--green',
    images: [
      'project 3 cover .jpeg',
      'project 3 render.jpeg',
      'project 3 render .jpeg',
      'project 3 render 2.jpeg',
      'project 3 top view.jpeg',
      'Section for project 3.jpeg',
    ],
  },
  {
    id: 'special-topics',
    number: '04',
    title: 'Special Topics',
    category: 'Revit Course',
    subtitle: 'Revit Course',
    location: 'Technical documentation',
    description:
      'A technical Revit course package covering floor plans, sections, wet area planning, stairs details, roof detail callout, and foundation sections.',
    cardDescription: 'Revit documentation package for plans, sections, and details.',
    features: [
      'Ground floor area plan',
      'Building sections with level markers',
      'Wet area plan and WC section',
      'Stairs details',
      'Roof detail callout',
      'Foundation section and foundation top view detail',
    ],
    theme: 'project--technical',
    images: [
      'pptx-project-media-37.png',
      'pptx-project-media-39.png',
      'pptx-project-media-41.png',
      'pptx-project-media-43.png',
      'pptx-project-media-45.png',
      'pptx-project-media-47.png',
      'pptx-project-media-49.png',
      'pptx-project-media-51.png',
      'pptx-project-media-53.png',
    ],
  },
  {
    id: 'vr-research-lab',
    number: '05',
    title: 'VR Research Lab',
    category: 'Unreal',
    subtitle: 'Interactive space redesign at Al-Hussein Technical University',
    location: 'HTU',
    description:
      'This project was developed using Unreal Engine as part of an interactive space redesign at Al-Hussein Technical University. The room was first modeled in SketchUp, then exported to Unreal Engine, where interactive stations were created through scripting to enhance user engagement and spatial experience.',
    cardDescription: 'Interactive Unreal Engine lab experience modeled from SketchUp.',
    features: [
      'Unreal Engine environment',
      'SketchUp modeling workflow',
      'Interactive stations',
      'Talking character',
      'Scripting preview',
    ],
    theme: 'project--dark',
    images: [
      'pptx-project-media-55.png',
      'pptx-project-media-56.png',
      'pptx-project-media-57.png',
      'pptx-project-media-58.png',
      'pptx-project-media-59.png',
      'pptx-project-media-60.png',
      'pptx-project-media-61.png',
      'pptx-project-media-62.png',
      'pptx-project-media-63.png',
    ],
  },
]

const software = ['AutoCAD', 'SketchUp', 'Revit', 'Rhinoceros', 'Grasshopper', 'Lumion', 'Adobe Photoshop', 'Unreal Engine']

function App() {
  const allImages = useMemo(
    () =>
      projects.flatMap((project) =>
        project.images.map((file, index) => ({
          file,
          project: project.title,
          id: project.id,
          description: project.cardDescription,
          index,
        })),
      ),
    [],
  )
  const [lightboxImages, setLightboxImages] = useState(allImages)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  useEffect(() => {
    const loaderTimer = window.setTimeout(() => document.querySelector('.loader')?.classList.add('is-hidden'), 200)
    const header = document.querySelector('[data-header]')
    const setHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 40)
    setHeader()
    window.addEventListener('scroll', setHeader, { passive: true })

    const typeTarget = document.querySelector('[data-type]')
    let typeTimer
    if (typeTarget) {
      const text = typeTarget.dataset.type
      let index = 0
      const type = () => {
        typeTarget.textContent = text.slice(0, index)
        index = index < text.length ? index + 1 : 0
        typeTimer = window.setTimeout(type, index === 0 ? 1200 : 45)
      }
      type()
    }

    const parallax = document.querySelector('[data-parallax]')
    const moveParallax = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 34
      const y = (event.clientY / window.innerHeight - 0.5) * 34
      event.currentTarget.style.setProperty('--mx', `${x}px`)
      event.currentTarget.style.setProperty('--my', `${y}px`)
    }
    parallax?.addEventListener('mousemove', moveParallax)

    const tiltCards = [...document.querySelectorAll('.tilt-card')]
    const tilt = (event) => {
      tiltCards.forEach((card) => {
        const rect = card.getBoundingClientRect()
        const isInside =
          event.clientX >= rect.left &&
          event.clientX <= rect.right &&
          event.clientY >= rect.top &&
          event.clientY <= rect.bottom
        if (!isInside) {
          card.style.transform = ''
          return
        }
        const x = (event.clientX - rect.left) / rect.width - 0.5
        const y = (event.clientY - rect.top) / rect.height - 0.5
        card.style.transform = `perspective(1000px) rotateY(${x * 9}deg) rotateX(${-y * 9}deg) translateY(-8px) translateZ(0)`
      })
    }
    document.addEventListener('mousemove', tilt)

    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.14 },
    )
    document.querySelectorAll('.reveal').forEach((item) => revealObserver.observe(item))

    const navLinks = [...document.querySelectorAll('nav a')]
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          navLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`))
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    document.querySelectorAll('main section[id]').forEach((section) => sectionObserver.observe(section))

    return () => {
      window.clearTimeout(loaderTimer)
      window.clearTimeout(typeTimer)
      window.removeEventListener('scroll', setHeader)
      parallax?.removeEventListener('mousemove', moveParallax)
      document.removeEventListener('mousemove', tilt)
      revealObserver.disconnect()
      sectionObserver.disconnect()
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (!isLightboxOpen) return
      if (event.key === 'Escape') setIsLightboxOpen(false)
      if (event.key === 'ArrowLeft') setLightboxIndex((index) => (index - 1 + lightboxImages.length) % lightboxImages.length)
      if (event.key === 'ArrowRight') setLightboxIndex((index) => (index + 1) % lightboxImages.length)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isLightboxOpen, lightboxImages.length])

  const openProjectImage = (project, file) => {
    const images = project.images.map((imageFile, index) => ({
      file: imageFile,
      project: project.title,
      id: project.id,
      description: project.cardDescription,
      index,
    }))
    setLightboxImages(images)
    setLightboxIndex(Math.max(0, images.findIndex((item) => item.file === file)))
    setIsLightboxOpen(true)
  }

  const activeLightbox = lightboxImages[lightboxIndex] || allImages[0]

  return (
    <>
      <div className="loader" aria-hidden="true">
        <div className="loader__mark">Yasmeen Samara Portfolio</div>
        <div className="loader__lines">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <header className="site-header" data-header>
        <a className="brand" href="#home">YS</a>
        <nav aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home" data-parallax>
          <img className="hero__image" src={imagePath('project 3 render.jpeg')} alt="Green Spine Landscape render" />
          <div className="hero__grid"></div>
          <div className="hero__plane hero__plane--one"></div>
          <div className="hero__plane hero__plane--two"></div>
          <div className="hero__visual reveal" aria-hidden="true">
            <div className="hero__visual-frame">
              <img src={imagePath('project 3 render.jpeg')} alt="" />
            </div>
            <div className="hero__mini-card hero__mini-card--top">
              <span>Portfolio</span>
              <b>Architecture + Visualization</b>
            </div>
            <div className="hero__mini-card hero__mini-card--bottom">
              <span>Focus</span>
              <b>Design systems, space, and detail</b>
            </div>
          </div>
          <div className="hero__content glass reveal">
            <p className="eyebrow">Architectural Portfolio</p>
            <h1>Yasmeen Samara</h1>
            <p className="hero__selected">Selected Works</p>
            <p className="type-line" data-type="Architecture | Parametric Design | Landscape | Visualization"></p>
            <div className="hero__actions" aria-label="Portfolio shortcuts">
              <a href="#projects">View Projects</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="hero__stats" aria-label="Portfolio summary">
              <div><span>05</span><b>Projects</b></div>
              <div><span>08</span><b>Software Tools</b></div>
              <div><span>2027</span><b>Expected Graduation</b></div>
            </div>
          </div>
        </section>

        <section className="section intro" id="about">
          <div className="section__label intro__label">Profile</div>
          <div className="intro__copy reveal">
            <p className="intro__kicker">Architecture student based in Amman, Jordan</p>
            <h2>I design practical, creative spaces through architectural thinking, digital tools, and continuous learning.</h2>
            <p>
              Throughout my studies, I have been eager to explore architectural software and develop my technical skills.
              While I am still in the process of learning many tools, I am a fast learner who is highly motivated to expand
              my knowledge and continuously improve.
            </p>
            <div className="intro__focus" aria-label="Profile focus areas">
              <span>Architectural Design</span>
              <span>Parametric Thinking</span>
              <span>Technical Documentation</span>
              <span>Visualization</span>
            </div>
          </div>
          <ProfileBoard />
        </section>

        <section className="section software">
          <div className="section__label">Software</div>
          <div className="section__heading reveal">
            <h2>Tools used across modeling, parametric thinking, visualization, and technical documentation.</h2>
          </div>
          <div className="software-grid">
            {software.map((item, index) => (
              <article className="software-card reveal tilt-card" key={item}>
                <span>0{index + 1}</span>
                <b>{item}</b>
              </article>
            ))}
          </div>
        </section>

        <section className="section project-index" id="projects">
          <div className="section__label">Table Of Content</div>
          <div className="project-index__head reveal">
            <h2>Selected works organized from the portfolio deck.</h2>
            <p>The project names are kept exactly from the PowerPoint portfolio.</p>
          </div>
          <div className="toc-list">
            {projects.map((project) => (
              <a
                className="toc-item reveal"
                href={`#${project.id}`}
                key={project.id}
                style={{ '--hover-img': `url('${imagePath(project.images[0])}')` }}
              >
                <span className="toc-item__number">{project.number}</span>
                <span className="toc-item__title">{project.title}</span>
                <span className="toc-item__category">{project.category}</span>
                <span className="toc-item__arrow">+</span>
              </a>
            ))}
          </div>
        </section>

        {projects.map((project) => (
          <ProjectSection project={project} key={project.id} onOpen={openProjectImage} />
        ))}

        <Contact />
      </main>

      <footer className="site-footer">
        <div>
          <a className="footer-brand" href="#home">YS</a>
          <p>Architectural Portfolio</p>
        </div>
        <div className="footer-links" aria-label="Footer links">
          <a href="#projects">Projects</a>
          <a href="mailto:yasmeenfadisamara@gmail.com">Email</a>
        </div>
      </footer>

      <div
        className={`lightbox${isLightboxOpen ? ' is-open' : ''}`}
        aria-hidden={!isLightboxOpen}
        role="dialog"
        aria-label="Image preview"
        onClick={(event) => event.target === event.currentTarget && setIsLightboxOpen(false)}
      >
        <button className="lightbox__close" type="button" aria-label="Close preview" onClick={() => setIsLightboxOpen(false)}>
          &times;
        </button>
        <button
          className="lightbox__nav lightbox__nav--prev"
          type="button"
          aria-label="Previous image"
          onClick={() => setLightboxIndex((index) => (index - 1 + lightboxImages.length) % lightboxImages.length)}
        >
          &lsaquo;
        </button>
        <figure>
          <img src={imagePath(activeLightbox.file)} alt={activeLightbox.project} />
          <figcaption>{activeLightbox.project}</figcaption>
        </figure>
        <button
          className="lightbox__nav lightbox__nav--next"
          type="button"
          aria-label="Next image"
          onClick={() => setLightboxIndex((index) => (index + 1) % lightboxImages.length)}
        >
          &rsaquo;
        </button>
      </div>
    </>
  )
}

function ProfileBoard() {
  const details = [
    ['Education', 'Al-Hussein Technical University'],
    ['Degree', 'Bachelor of Architecture'],
    ['Years Attended', '2022 - present'],
    ['Expected Graduation', 'Summer 2027'],
    ['Location', 'Amman, Jordan'],
    ['Email', 'yasmeenfadisamara@gmail.com'],
    ['Phone', '+962 7 9909 0061'],
  ]

  return (
    <div className="info-board reveal">
      <div className="info-board__head">
        <span>Profile Details</span>
        <strong>Yasmeen Samara</strong>
      </div>
      <div className="info-board__stats" aria-label="Profile highlights">
        <article><b>2022</b><span>Started</span></article>
        <article><b>2027</b><span>Graduation</span></article>
        <article><b>05</b><span>Portfolio projects</span></article>
      </div>
      <div className="info-board__grid">
        {details.map(([label, value]) => (
          <article key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </article>
        ))}
      </div>
    </div>
  )
}

function ProjectSection({ project, onOpen }) {
  const isBoard = project.number === '04' || project.number === '05'
  const facts = [
    project.subtitle,
    `Location: ${project.location}`,
    project.area ? `Area: ${project.area}` : '',
    project.type ? `Type: ${project.type}` : '',
    `${project.images.length} Visuals`,
  ].filter(Boolean)

  return (
    <section className={`project ${project.theme}`} id={project.id} style={{ '--project-cover': `url('${imagePath(project.images[0])}')` }}>
      <div className="project__shell">
        <div className="project__mast reveal">
          <div className="project__title-block">
            <p className="eyebrow">Project - {project.number}</p>
            <h3>{project.title}</h3>
            <div className="project__meta">
              {facts.map((fact) => <span key={fact}>{fact}</span>)}
            </div>
          </div>
          <figure className="project__cover tilt-card" onClick={() => onOpen(project, project.images[0])}>
            <img src={imagePath(project.images[0])} alt={project.title} loading="lazy" />
            <figcaption>
              <span>{project.category}</span>
              <b>{project.cardDescription}</b>
            </figcaption>
            <button className="image-card__next project__cover-open" type="button" aria-label={`Open ${project.title} featured image`}>
              Open
            </button>
          </figure>
        </div>
        <div className="project__body reveal">
          <div className="project__copy">
            <p>{project.description}</p>
            {project.extra ? <p>{project.extra}</p> : null}
          </div>
          <ol className="feature-list">
            {project.features.map((feature, index) => (
              <li style={{ '--i': `'${String(index + 1).padStart(2, '0')}'` }} key={feature}>
                {feature}
              </li>
            ))}
          </ol>
        </div>
        <div className="project__gallery-head reveal">
          <div>
            <span>Selected visuals</span>
            <b>{project.images.length} portfolio plates</b>
          </div>
        </div>
        <div className={`${isBoard ? 'board-grid' : 'gallery-strip'} reveal`}>
          {project.images.map((file, index) => (
            <ImageCard
              board={isBoard}
              description={project.cardDescription}
              file={file}
              index={index}
              key={file}
              project={project}
              onOpen={() => onOpen(project, file)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ImageCard({ board, description, file, index, project, onOpen }) {
  const content = (
    <>
      <img src={imagePath(file)} alt={project.title} loading="lazy" />
      {board ? (
        <p>
          <span>Plate {String(index + 1).padStart(2, '0')}</span>
          {description}
        </p>
      ) : (
        <figcaption>
          <span>Plate {String(index + 1).padStart(2, '0')} / {project.title}</span>
        </figcaption>
      )}
      <button className="image-card__next" type="button" aria-label={`Open ${project.title} image`}>
        Open
      </button>
    </>
  )

  return board ? (
    <article className="board-card tilt-card" onClick={onOpen}>
      {content}
    </article>
  ) : (
    <figure className="image-card tilt-card" onClick={onOpen}>
      {content}
    </figure>
  )
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__panel glass reveal">
        <p className="eyebrow">Contact</p>
        <h2>Yasmeen Samara</h2>
        <p>Architecture Student - Amman, Jordan</p>
        <a href="mailto:yasmeenfadisamara@gmail.com">yasmeenfadisamara@gmail.com</a>
        <a href="tel:+962799090061">+962 7 9909 0061</a>
      </div>
      <form className="contact-form reveal">
        <label>Name<input type="text" name="name" autoComplete="name" /></label>
        <label>Email<input type="email" name="email" autoComplete="email" /></label>
        <label>Message<textarea name="message" rows="5"></textarea></label>
        <button type="button">Send</button>
      </form>
    </section>
  )
}

export default App
