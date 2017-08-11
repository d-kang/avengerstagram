

console.log('hi')

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: '' }
    this.addMessage = this.addMessage.bind(this)
  }
  addMessage(query) {
    this.setState({message: query})
  }
  render() {
    return (
      <div className="app">
        <Form addMessage={this.addMessage} />
        { this.state.message }
      </div>
    )
  }
}

// window.App = App;
