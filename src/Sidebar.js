import React from "react";

export function Sidebar(props) {
  return (
    <div id="sidebar">
      <section>
        <p
          className={
            props.step === 1
              ? "step-number selected-step center-content"
              : "step-number white center-content"
          }
        >
          1
        </p>
        <p className="step white">
          STEP 1 <br></br>YOUR INFO
        </p>
      </section>
      <section>
        <p
          className={
            props.step === 2
              ? "step-number selected-step center-content"
              : "step-number white center-content"
          }
        >
          2
        </p>
        <p className="step white">
          {" "}
          STEP 2<br></br> SELECT PLAN
        </p>
      </section>
      <section>
        <p
          className={
            props.step === 3
              ? "step-number selected-step center-content"
              : "step-number white center-content"
          }
        >
          3
        </p>
        <p className="step white">
          STEP 3<br></br>ADD-ONS
        </p>
      </section>
      <section>
        <p
          className={
            props.step === 4
              ? "step-number selected-step center-content"
              : "step-number white center-content"
          }
        >
          4
        </p>
        <p className="step white">
          STEP 4<br></br>SUMMARY
        </p>
      </section>
    </div>
  );
}
