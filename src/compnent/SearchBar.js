import React from "react";

class SearchBar extends React.Component {
  state = { input: "" };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.whenFormSubmit(this.state.input);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <input
              value={this.state.input}
              type="text"
              placeholder="Search for a video..."
              onChange={(e) => this.setState({ input: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
