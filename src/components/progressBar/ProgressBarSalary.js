import React, { Component } from "react";

export default class ProgressBarSalary extends Component {
  render() {
    const { inss, irpf, salLiquid } = this.props;

    return (
      <div
        className="progressBar"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          width: "100%",
          height: "25px",
          background: "#e67e22",
          padding: "0",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: `${inss}%`,
            height: "25px",
            background: "#e67e22",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: `${irpf}%`,
            height: "25px",
            background: "#c0392b",
          }}
        />
        <input
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            width: `${salLiquid}%`,
            height: "25px",
            background: "#16a085",
          }}
        />
      </div>
    );
  }
}
