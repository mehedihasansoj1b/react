

function custonRender(reactElement, container) {
  /*
    const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.childer;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.href);
  container.appendChhild(domElement);
  */

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.childer;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  childer: "Click me to visit google",
};

const mainContainer = document.getElementById("root");

custonRender(reactElement, mainContainer);
