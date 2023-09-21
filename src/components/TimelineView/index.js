import {Component} from 'react'
import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

class TimelineView extends Component {
  getProjectFilter = () => {
    const {timelineItemsList} = this.props
    const projectFilter = timelineItemsList.map(each =>
      each.categoryId === 'PROJECT' ? each : 'empty',
    )
    return projectFilter
  }

  getCourseFilter = () => {
    const {timelineItemsList} = this.props
    const courseFilter = timelineItemsList.map(each =>
      each.categoryId === 'COURSE' ? each : 'empty',
    )
    return courseFilter
  }

  visitBtn = projectUrl => {
    console.log(`id ${projectUrl}`)
  }

  renderCourse = () => {
    const courseFilter = this.getCourseFilter()
    return (
      <>
        <ul>
          {courseFilter.map(each => (
            <CourseTimelineCard courseDetails={each} key={each.id} />
          ))}
        </ul>
      </>
    )
  }

  renderProject = () => {
    const projectFilter = this.getProjectFilter()
    return (
      <>
        <ul>
          {projectFilter.map(each => (
            <ProjectTimelineCard
              projectDetails={each}
              key={each.id}
              visitBtn={this.visitBtn}
            />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const courseFilter = this.getCourseFilter()
    return (
      <div className="main-container">
        <h1>MY JOURNEY OF</h1>
        <p>CCBP 4.0</p>
        <div className="chrono-container">
          <Chrono
            mode="VERTICAL"
            items={courseFilter}
            theme={{
              primary: 'red',
              secondary: 'blue',
              cardBgColor: 'yellow',
              cardForeColor: 'violet',
              titleColor: 'black',
            }}
          />
          {this.renderProject()}
          {this.renderCourse()}
        </div>
      </div>
    )
  }
}
export default TimelineView
