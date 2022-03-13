import "./styles.css";
import { useControls } from "leva";
import Plot from "react-plotly.js";

export default function App() {
  const data = useControls(() => ({
    Color: "#000"
  }));

  return (
    <div className="App">
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: "scatter",
            mode: "lines+markers",
            marker: { color: data[0].Color }
          },
          { type: "bar", x: [1, 2, 3], y: [2, 5, 3] }
        ]}
        layout={{ width: 600, height: 600, title: "A Fancy Plot" }}
      />
    </div>
  );
}
