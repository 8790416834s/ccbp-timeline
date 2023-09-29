import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    id,
    categoryId,
    title,
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  console.log(projectDetails)
  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="title-container">
        <h1>{projectTitle}</h1>
        <p>{duration}</p>
      </div>
      <p className="description">{description}</p>
      <button type="button" className="visit-btn">
        Visit
      </button>
    </div>
  )
}
export default ProjectTimelineCard
