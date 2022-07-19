import React from "react";

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { text: "" };
  }

  handleChange(event) {
    const newQuery = Object.freeze({ text: event.target.value });
    this.setState(newQuery);
  }

  search() {
    const newQuery = Object.freeze({ text: this.state.text });
    if (this.props.onSearch) this.props.onSearch(newQuery);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.text}
        />
        <button onClick={this.search} type="button">
          بحث
        </button>
        <select>
        <option value="All">الكل</option>
        <option value="All1">اي شي</option>
        <option value="All2">اي شي</option>
      </select>
      </form>
    );
  }
}
