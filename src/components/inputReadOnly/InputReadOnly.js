import React, { Component } from "react";

import { salFormatter } from "../../helpers/formatters";

export default class InputReadOnly extends Component {
  render() {
    const { label, value, percentage = "", color = "" } = this.props;

    const real = salFormatter(value);
    const per = percentage + "%";

    let formatedValue = `${real} ${per}`;

    if (label === "Base INSS:" || label === "Base IRPF:") {
      formatedValue = real;
    }

    return (
      <div>
        <span>{label}</span>
        <input
          type="text"
          value={formatedValue}
          style={{ color: color, fontWeight: "600" }}
          readOnly
        />
      </div>
    );
  }
}
