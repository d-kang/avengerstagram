

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: [] }
    this.addMessage = this.addMessage.bind(this)
  }

  componentDidMount() {
    $.get('/api/get/treeData', (response) => {
      response = JSON.parse(response)
      console.log('response', response)
      this.setState({ message: response })
    })
  }

  addMessage(query) {
    // this.setState({message: query})
    var { height, name, color } = query;
    if (typeof height === 'string') {
      height = 0;
    }
    console.log(query)
    $.post('/api/post/treeData', {height, name, color});
    $.get('/api/get/treeData', (response) => {
      response = JSON.parse(response)
      this.setState({ message: response })
    });
  }
  render() {
    return (
      <div className="app">
        <Form addMessage={this.addMessage} />
        { JSON.stringify(this.state.message) }
      </div>
    )
  }
}

// window.App = App;
