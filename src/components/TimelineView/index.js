import {Component} from 'react'
import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

class TimelineView extends Component {
  getProjectFilter = () => {
    const {timelineItemsList} = this.props
    const projectFilter = timelineItemsList.filter(each =>
      each.categoryId === 'PROJECT' ? each : '',
    )
    return projectFilter
  }

  getCourseFilter = () => {
    const {timelineItemsList} = this.props
    const courseFilter = timelineItemsList.filter(each =>
      each.categoryId === 'COURSE' ? each : '',
    )
    return courseFilter
  }

  visitBtn = projectUrl => {
    console.log(`id ${projectUrl}`)
  }

  courseData = data => ({
    title: data.title,
    cardTitle: data.courseTitle,
    cardSubtitle: data.duration,
    cardDetailedText: data.description,
  })

  projectData = data => ({
    title: data.title,
    cardTitle: data.projectTitle,
    cardSubtitle: data.duration,
    cardDetailedText: data.description,
    media: data.imageUrl,
    url: data.projectUrl,
  })

  render() {
    const courseFilter = this.getCourseFilter()
    const projectFilter = this.getProjectFilter()
    console.log(projectFilter)
    const course = courseFilter.map(each => this.courseData(each))
    const project = projectFilter.map(each => this.projectData(each))
    return (
      <div className="main-container">
        <h1>MY JOURNEY OF</h1>
        <p>CCBP 4.0</p>
        <div className="chrono-container">
          <Chrono
            mode="VERTICAL_ALTERNATING"
            items={project}
            theme={{
              primary: 'red',
              secondary: 'blue',
              cardBgColor: 'white',
              cardForeColor: 'violet',
              titleColor: 'black',
            }}
          />
        </div>
      </div>
    )
  }
}
export default TimelineView
