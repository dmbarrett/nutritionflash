import React, { Component } from "react"
import "../styles/bootstrap.min.css"

export default class flashcard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAnswerShown: false,
      currentText: this.props.cards.q,
    }
    this.flipCard = this.flipCard.bind(this)
  }

  flipCard() {
    if (this.state.isAnswerShown) {
      this.setState({
        isAnswerShown: !this.state.isAnswerShown,
        currentText: this.props.cards.q,
      })
    } else {
      this.setState({
        isAnswerShown: !this.state.isAnswerShown,
        currentText: this.props.cards.a,
      })
    }
  }

  render() {
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <p className="card-text">{this.state.currentText}</p>
            <div className="btn btn-primary" onClick={this.flipCard}>
              Flip Card
            </div>
          </div>
        </div>
        <br />
      </div>
    )
  }
}
