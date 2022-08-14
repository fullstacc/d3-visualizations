import "./styles.css";
import d3 from "d3";

// variables
const dataSource =
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";

// test data
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
const w = 500;
const h = 100;

// DOM modifiers (vanilla JS)
document.getElementById("app").innerHTML = `
<h1>D3 Visualizations</h1>
</div>
`;

document.getElementById("viz-1").innerHTML = `
<h1>Bar Chart</h1>
</div>
`;

// Visualization
// svg
const svg = d3
  .select("#title")
  .append("svg")
 

const data = d3.json(dataSource, (res) => {
  console.log("response here");
});

// rectangles
svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => {
    return i * 30;
  })
  .attr("y", 0)
  .attr("width", 25)
  .attr("height", 100);
