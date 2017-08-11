class Form extends React.Component {
  submit(e) {
    e.preventDefault()
   this.props.addMessage(this.input.value)
   this.input.value = '';
  }
  render() {
    return (
      <form onSubmit={this.submit.bind(this)}>
        <input ref={(input) => this.input = input} />
        <button>ADD</button>
      </form>
    )
  }
}


// window.Form = Form;
// related to babel
// dont use front end routing for this exercise
