import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {
    categoryId,
    title,
    courseTitle,
    description,
    duration,
    tagsList,
  } = courseDetails

  const renderTagsList = () => (
    <>
      <ul className="list-container">
        {tagsList.map(each => (
          <li key={each.id} className="list-item">
            <p>{each.name}</p>
          </li>
        ))}
      </ul>
    </>
  )

  return (
    <div>
      <div className="title-container">
        <h1>{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle className="clock" />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      {renderTagsList()}
    </div>
  )
}
export default CourseTimelineCard
