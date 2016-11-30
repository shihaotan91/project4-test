import React from 'react';

import ProgrammerForm from './ProgrammerForm'

class Programmer extends React.Component {
  constructor() {
    super()

    this.state = {
      resumes: {},
      random: "there"
    }
    this.addResume = this.addResume.bind(this)
    this.updateResume = this.updateResume.bind(this)
  }

  addResume(resume) {
    const resumes = {...this.state.resumes}
    const timestamp = Date.now()
    resumes[`resume=${timestamp}`] = resume
    this.setState({resumes})
  }

  updateResume(key, updatedResume) {
    const resumes = {...this.state.resumes}
    resumes[key] = updatedResume
    this.setState({resumes})
  }

  render() {
    return (
      <div>
      <ProgrammerForm
      addResume={this.addResume} updateResume={this.updateResume} resumes={this.state.resumes}/>
      </div>
    )
  }
}

export default Programmer
