import React, { Component } from "react";

export default class InputFullSalary extends Component {
  handleInputChange = (event) => {
    const newSal = event.target.value;

    this.props.onChangeFullSalary(newSal);
  };

  render() {
    const { label, fullSalary } = this.props;

    return (
      <div>
        <span>{label}</span>
        <input
          type="number"
          min="1000"
          step="100"
          value={fullSalary}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}
