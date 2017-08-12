class Form extends React.Component {
  submit(e) {
    e.preventDefault()
   this.props.addMessage(this.input.value)
   this.input.value = '';
  }
  render() {
    return (
      <form onSubmit={this.submit.bind(this)}>
        <input ref={(input) => this._height = input} placeholder="height" required />
        <input ref={(input) => this._color = input} placeholder="color" required />
        <input ref={(input) => this._name = input} placeholder="name" required />
        <button>ADD</button>
      </form>
    )
  }
}


// window.Form = Form;
// related to babel
// dont use front end routing for this exercise
// work on get request first
// have the data render on the front end
// pass down data to child components

// jquery ajax or fetch
