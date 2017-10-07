import React from "react";
import ReactDOM from "react-dom";

export default class RootComponent {
  render(container) {
    this.container = container;
    return (this.renderComponent());
  }

  renderComponent() {
    ReactDOM.render(
      <div styles={{ color: "red" }}>
        This is the react.
      </div>,
      this.container,
    );
  }
}

