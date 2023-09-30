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
      <ul>
        {tagsList.map(each => (
          <li key={each.id}>
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
    </div>
  )
}
export default CourseTimelineCard
