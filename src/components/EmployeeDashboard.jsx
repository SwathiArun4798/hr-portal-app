import React from "react";
export default class EmployeeDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: this.props.userName,
      quotes: [
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "The way to get started is to quit talking and begin doing.",
        "Your time is limited, so don't waste it living someone else's life.",
        "If life were predictable it would cease to be life, and be without flavor.",
        "If you look at what you have in life you'll always have more. If you look at what you don't have in life you'll never have enough.",
      ]
    };
  }
  render() {
    return (
      <div className="container employee-container gx-0">
        <header>
          <h2 className="title">HR Portal /<span className="subtitle"> Employee Dashboard</span></h2>
          <h3>Welcome <span className="userName">{this.props.userName}</span>!</h3>
          <h4 className=""><i className="bi bi-box-arrow-right"></i> LOG OUT</h4>
        </header>
        <main>
          <div className="quotes">
            <h2>Daily Quotes</h2>
            <p>{this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)]}</p>
          </div>
        </main>
        <footer></footer>
      </div>
    );
  }
}

EmployeeDashboard.defaultProps = {
  userName: "Guest",
}
