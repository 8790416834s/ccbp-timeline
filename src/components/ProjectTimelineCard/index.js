import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails, visitBtn} = props
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

  const onClickBtn = () => {
    visitBtn(projectUrl)
  }
  console.log(projectUrl)
  return (
    <div className="project-container">
      <img src={imageUrl} alt={projectTitle} className="project-img" />
      <div className="title-container">
        <h1>{projectTitle}</h1>
        <p>{duration}</p>
      </div>
      <p className="description">{description}</p>
      <button type="button" onClick={onClickBtn} className="visit-btn">
        Visit
      </button>
    </div>
  )
}
export default ProjectTimelineCard
