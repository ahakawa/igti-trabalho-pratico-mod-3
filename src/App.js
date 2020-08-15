import React, { Component } from "react";
import InputFullSalary from "./components/input/InputFullSalary";
import InputReadOnly from "./components/inputReadOnly/InputReadOnly";
import ProgressBarSalary from "./components/progressBar/ProgressBarSalary";

import { calculateSalaryFrom } from "./helpers/salary";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: 1000,
    };
  }

  handleChangeFullSalary = (newSal) => {
    this.setState({
      fullSalary: newSal,
    });
  };

  render() {
    const { fullSalary } = this.state;

    const salarioLiquido = calculateSalaryFrom(fullSalary);

    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
      inssPercent,
      irpfPercent,
      salLiqPercent,
    } = salarioLiquido;
    console.log(salarioLiquido, "salario liquido");

    return (
      <div className="container">
        <div className="card" style={{ padding: "20px", marginTop: "50px" }}>
          <h1
            style={{
              textAlign: "center",
              marginTop: "20px",
              marginBottom: "10px",
            }}
          >
            React Salário
          </h1>
          <div className="row">
            <InputFullSalary
              value={fullSalary}
              label="Salário Bruto"
              onChangeFullSalary={this.handleChangeFullSalary}
              name={""}
            />
          </div>
          <div
            className="row"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div className="col">
              <InputReadOnly value={baseINSS} label="Base INSS:" />
              <InputReadOnly
                value={discountINSS}
                label="Desconto INSS:"
                percentage={inssPercent}
                color="#e67e22"
              />
            </div>

            <div className="col ">
              <InputReadOnly value={baseIRPF} label="Base IRPF:" />
              <InputReadOnly
                value={discountIRPF}
                label="Desconto IRPF:"
                percentage={irpfPercent}
                color="#c0392b"
              />
            </div>
          </div>

          <InputReadOnly
            value={netSalary}
            label="Salário Líquido:"
            percentage={salLiqPercent}
            color="#16a085"
          />
          <ProgressBarSalary
            inss={inssPercent}
            irpf={irpfPercent}
            salLiquid={salLiqPercent}
          />
        </div>
      </div>
    );
  }
}
