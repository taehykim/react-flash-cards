import React from "react";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.onViewCardsClick = this.onViewCardsClick.bind(this);
    this.onCreateCardClick = this.onCreateCardClick.bind(this);
    this.onReviewCardsClick = this.onReviewCardsClick.bind(this);
    this.onHomeClick = this.onHomeClick.bind(this);
  }

  onHomeClick() {
    this.props.setView(null);
  }

  onViewCardsClick(e) {
    this.props.setView("view-cards");
  }

  onCreateCardClick() {
    this.props.setView("create-card");
  }

  onReviewCardsClick() {
    this.props.setView("review-cards");
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="#" onClick={this.onHomeClick}>
          FLASHCARDS
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" onClick={this.onViewCardsClick}>
                View Cards
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={this.onCreateCardClick}>
                Create Cards
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={this.onReviewCardsClick}>
                Review
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
