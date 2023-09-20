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
  console.log(tagsList)
  return (
    <div>
      <div>
        <h1>{courseTitle}</h1>
        <p>{duration}</p>
      </div>
      <p>{description}</p>
      <ul>
        {tagsList.map(each => (
          <li key={each.id}>
            <p>{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
