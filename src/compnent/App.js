import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../Api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], videoSelected: null };

  componentDidMount = () => {
    this.onInput("football");
  };

  onInput = async (input) => {
    const response = await youtube.get("/search", {
      params: {
        q: input,
      },
    });
    this.setState({
      videos: response.data.items,
      videoSelected: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ videoSelected: video });
  };

  render() {
    return (
      <div className="ui container mt-3">
        <SearchBar whenFormSubmit={this.onInput} />
        <div className="row">
          <div className="col-12 col-lg-8">
            <VideoDetail video={this.state.videoSelected} />
          </div>
          <div className="col-12 col-lg-4">
            <VideoList select={this.onVideoSelect} videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
