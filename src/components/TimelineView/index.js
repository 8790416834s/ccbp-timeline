import {Component} from 'react'
import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

class TimelineView extends Component {
  visitBtn = projectUrl => {
    console.log(projectUrl)
  }

  render() {
    const {timelineItemsList} = this.props
    return (
      <div className="main-container">
        <h1>MY JOURNEY OF</h1>
        <p>CCBP 4.0</p>
        <div className="chrono-container">
          <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
            {timelineItemsList.map(each => {
              if (each.categoryId === 'PROJECT') {
                return (
                  <ProjectTimelineCard
                    key={each.id}
                    projectDetails={each}
                    visitBtn={this.visitBtn}
                  />
                )
              }
              return <CourseTimelineCard key={each.id} courseDetails={each} />
            })}
          </Chrono>
        </div>
      </div>
    )
  }
}
export default TimelineView
