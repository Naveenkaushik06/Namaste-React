import React from "react";
import ReactDOM from "react-dom/client";

//   React.createElement => object => HTML element render
const Title = function () {
  return <h1>Namaste React from JSX...</h1>;
};

const HeadingComponent = () => {
  return (
    <div>
    <Title />
      <h1 className="header">Hello from functional component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
