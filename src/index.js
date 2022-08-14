import "./styles.css";

// variables
const dataSource =
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";

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
  .select("title")
  .append("svg")
  .attr("width", w)
  .attr("height", h)
  .attr("width", 25)
  .attr("height", 100);

// rectangles
svg
  .selectAll("rect")
  .data(dataSource)
  .enter()
  .append("rect")
  .attr("x", 0)
  .attr("y", 0);