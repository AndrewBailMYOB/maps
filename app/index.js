import RootComponent from "./js/embedded";

const container = document.getElementById("app");

const component = new RootComponent();
component.render(container);
