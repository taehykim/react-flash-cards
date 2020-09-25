import React from "react";
import ViewCards from "./view-cards";
import CreateCard from "./create-card";
import ReviewCards from "./review-cards";
import Nav from "./nav";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: null };
    this.setView = this.setView.bind(this);
  }

  setView(page) {
    this.setState({ view: page });
  }

  getView() {
    switch (this.state.view) {
      case "create-card":
        return <CreateCard />;
      case "review-cards":
        return <ReviewCards />;
      case "view-cards":
        return <ViewCards />;
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <Nav setView={this.setView} />
        {this.getView()}
      </div>
    );
  }
}

export default App;
