

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: [] }
    this.addMessage = this.addMessage.bind(this)
  }

  componentDidMount() {
    $.get('/api/get/comicbooks', (response) => {
      console.log('response', response)
      var myarr = response.slice();
      console.log(Array.isArray(response))
      this.setState({ message: myarr })
    })
  }

  addMessage(query) {
    // this.setState({message: query})
  }
  render() {
    return (
      <div className="app">
        <Form addMessage={this.addMessage} />
        {  }
      </div>
    )
  }
}

// window.App = App;
