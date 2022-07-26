import React from 'react'

class ConferenceForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      starts: '',
      ends: '',
      description: '',
      maxPresentations: '',
      maxAttendees: '',
      locations: []
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleStartsChange = this.handleStartsChange.bind(this)
    this.handleEndsChange = this.handleEndsChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleMaxPresentationsChange = this.handleMaxPresentationsChange.bind(this)
    this.handleMaxAttendeesChange = this.handleMaxAttendeesChange.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(event) {
    event.preventDefault()
    const data = { ...this.state }
    data.max_presentations = data.maxPresentations
    data.max_attendees = data.maxAttendees
    delete data.maxPresentations
    delete data.maxAttendees
    delete data.locations
    console.log(data)

    const conferenceUrl = 'http://localhost:8000/api/conferences/'
    const fetchConfig = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const response = await fetch(conferenceUrl, fetchConfig)
    if (response.ok) {
      const newConference = await response.json()
      console.log(newConference)

      const cleared = {
        name: '',
        starts: '',
        ends: '',
        description: '',
        maxPresentations: '',
        maxAttendees: '',
        location: ''
      }
      this.setState(cleared)
    }
  }

  handleNameChange(event) {
    const value = event.target.value
    this.setState({ name: value })
  }

  handleStartsChange(event) {
    const value = event.target.value
    this.setState({ starts: value })
  }

  handleEndsChange(event) {
    const value = event.target.value
    this.setState({ ends: value })
  }

  handleDescriptionChange(event) {
    const value = event.target.value
    this.setState({ description: value })
  }

  handleMaxPresentationsChange(event) {
    const value = event.target.value
    this.setState({ maxPresentations: value })
  }

  handleMaxAttendeesChange(event) {
    const value = event.target.value
    this.setState({ maxAttendees: value })
  }

  handleLocationChange(event) {
    const value = event.target.value
    this.setState({ location: value })
  }

  async componentDidMount() {
    const url = 'http://localhost:8000/api/locations/'

    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      this.setState({ locations: data.locations })
    }
  }

  render() {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new conference</h1>
            <form onSubmit={this.handleSubmit} id="create-conference-form">
              <div className="form-floating mb-3">
                <input value={this.state.name} onChange={this.handleNameChange} placeholder="Name" required type="text" id="name" name="name" className="form-control" />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input value={this.state.starts} onChange={this.handleStartsChange} placeholder="Start Date" required type="date" id="starts" name="starts" className="form-control" />
                <label htmlFor="starts">Start Date</label>
              </div>
              <div value={this.state.ends} onChange={this.handleEndsChange} className="form-floating mb-3">
                <input placeholder="End Date" required type="date" id="ends" name="ends" className="form-control" />
                <label htmlFor="ends">End Date</label>
              </div>
              <div className="mb-3">
                <textarea value={this.state.description} onChange={this.handleDescriptionChange} placeholder="Description" required id="description" name="description" className="form-control"></textarea>
              </div>
              <div className="form-floating mb-3">
                <input value={this.state.maxPresentations} onChange={this.handleMaxPresentationsChange} placeholder="Max Presentations" required type="number" id="max_presentations" name="max_presentations" className="form-control" />
                <label htmlFor="max_presentations">Max Presentations</label>
              </div>
              <div className="form-floating mb-3">
                <input value={this.state.maxAttendees} onChange={this.handleMaxAttendeesChange} placeholder="Max Attendeess" required type="number" id="max_attendees" name="max_attendees" className="form-control" />
                <label htmlFor="max_attendees">Max Attendees</label>
              </div>
              <div className="mb-3">
                <select value={this.state.location} onChange={this.handleLocationChange} required id="location" name="location" className="form-select">
                  <option value="">Choose a location</option>
                  {this.state.locations.map(location => {
                    return (
                      <option key={location.id} value={location.id}>
                        {location.name}
                      </option>
                    )
                  })}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default ConferenceForm

