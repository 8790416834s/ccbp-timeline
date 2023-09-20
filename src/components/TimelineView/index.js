import {Component} from 'react'
import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

class TimelineView extends Component {
  visitBtn = projectUrl => {
    console.log(`id ${projectUrl}`)
  }

  render() {
    const {timelineItemsList} = this.props
    const projectFilter = timelineItemsList.map(each =>
      each.categoryId === 'PROJECT' ? each : '',
    )

    const courseFilter = timelineItemsList.map(each =>
      each.categoryId === 'COURSE' ? each : '',
    )
    console.log(courseFilter)
    return (
      <div className="main-container">
        <h1>MY JOURNEY OF</h1>
        <p>CCBP 4.0</p>
        <div className="chrono-container">
          <Chrono
            mode="VERTICAL"
            items={projectFilter}
            theme={{
              primary: 'red',
              secondary: 'blue',
              cardBgColor: 'white',
              cardForeColor: 'violet',
              titleColor: 'black',
            }}
          />
          <ul>
            {projectFilter.map(each => (
              <ProjectTimelineCard
                projectDetails={each}
                key={each.categoryId}
                visitBtn={this.visitBtn}
              />
            ))}
          </ul>
          <ul>
            {courseFilter.map(each => (
              <CourseTimelineCard courseDetails={each} key={each.categoryId} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default TimelineView
