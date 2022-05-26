import "./styles.css";

const ComponentB = () => {
  //here's a component that is being used as a prop
  return <h3 style={{ border: "solid 2px pink" }}>passed component as prop</h3>;
};

const ComponentA = ({ componentAsProp }) => {
  return (
    <div style={{ border: "solid 1px" }}>
      <h1>outer component</h1>
      {componentAsProp}
    </div>
  );
};

const ComponentC = ({ componentAsProp, children }) => {
  return <div style={{ border: "solid 5px purple" }}>{children}</div>;
};

export default function App() {
  return (
    <div className="App">
      <ComponentA componentAsProp={<ComponentB />} />
      <ComponentC
        componentAsProp={<ComponentA componentAsProp={<ComponentB />} />}
      >
        <h3> child </h3>
        <ComponentA />
      </ComponentC>
    </div>
  );
}
