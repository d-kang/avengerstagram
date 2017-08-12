class Form extends React.Component {
  submit(e) {
    e.preventDefault()
    var obj = {
      height: this._height.value,
      color: this._color.value,
      name: this._name.value
    }
    console.log(1, obj)
    this.props.addMessage(obj)
    this._height.value = '';
    this._color = '';
    this._name = '';

  }
  render() {
    return (
      <form onSubmit={this.submit.bind(this)}>
        <input ref={(height) => this._height = height} placeholder="height" required />
        <input ref={(color) => this._color = color} placeholder="color" required />
        <input ref={(name) => this._name = name} placeholder="name" required />
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
