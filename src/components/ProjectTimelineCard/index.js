import {AiFillCalender} from 'react-icons/ai'
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

  const onClickVisit = () => {
    visitBtn(projectUrl)
  }

  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="title-container">
        <h1>{projectTitle}</h1>
        <div className="duration-container">
          <p>{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <button type="button" onClick={onClickVisit} className="visit-btn">
        Visit
      </button>
    </div>
  )
}
export default ProjectTimelineCard
