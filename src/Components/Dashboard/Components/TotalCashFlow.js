import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Box, Divider, Toolbar, Typography } from "@mui/material";

const TotalCashFlow = () => {
  const svgRef = useRef(null);

  const data = [
    { label: "August", in: 20, out: 10 },

    { label: "September", in: 40, out: 30 },
    { label: "October", in: 60, out: 40 },
    { label: "November", in: 45, out: 25 },
    { label: "December", in: 50, out: 30 },
    { label: "January", in: 40, out: 25 },
  ];

  useEffect(() => {
    const width = 750;
    const height = 200;

    const margin = { top: 20, right: 0, bottom: 35, left: 10 };

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => Math.max(d.in, d.out))])
      .nice()
      .range([height - margin.bottom, margin.top]);

    // Define specific colors for "in" and "out" bars
    const inColor = "#02bb7d";
    const outColor = "#47b747";

    // Calculate the width of each bar including spacing
    const barWidth = 15;

    // Display x-axis labels
    svg
      .selectAll(".x-axis-label")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "x-axis-label")
      .attr("x", (d) => xScale(d.label) + xScale.bandwidth() / 2)
      .attr("y", height - 10)
      .style("text-anchor", "middle")
      .text((d) => d.label)
      .style("font-size", "12px")
      .style("font-weight", "600")
      .style("fill", "#d3d4d5");

    // Draw "in" bars with the inColor
    svg
      .selectAll(".in-bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "in-bar")
      .attr("x", (d) => xScale(d.label) + (xScale.bandwidth() - barWidth) / 2)
      .attr("y", (d) => yScale(d.in))
      .attr("width", barWidth)
      .attr("height", (d) => height - margin.bottom - yScale(d.in))
      .attr("fill", inColor)
      .attr("rx", 5) // Adjust border radius (rx and ry values)
      .attr("ry", 5);

    // Draw "out" bars with the outColor
    svg
      .selectAll(".out-bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "out-bar")
      .attr("x", (d) => xScale(d.label) + (xScale.bandwidth() - barWidth) / 2)
      .attr("y", (d) => yScale(d.out))
      .attr("width", barWidth)
      .attr("height", (d) => height - margin.bottom - yScale(d.out))
      .attr("fill", outColor)
      .attr("rx", 5)
      .attr("ry", 5);
  }, [data]);

  const CustomSquareIcon = ({ color }) => (
    <svg width="15" height="15" viewBox="0 0 15 15">
      <rect x="0" y="0" width="15" height="15" rx="4" ry="4" fill={color} />
    </svg>
  );

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "16px" }}>
          Total cash flow{" "}
        </Typography>
        <Box sx={{ display: "flex", gap: 2, marginLeft: "auto" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CustomSquareIcon color="#02bb7d" />

            <Typography variant="body2" sx={{ fontSize: 12 }}>
              In
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CustomSquareIcon color="#47b747" />

            <Typography variant="body2" sx={{ fontSize: 12 }}>
              Out
            </Typography>
          </Box>
        </Box>
      </Toolbar>
      <Divider />

      <Box
        sx={{
          flex: 1,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <svg ref={svgRef} style={{ width: "100%" }}></svg>
      </Box>
    </Box>
  );
};

export default TotalCashFlow;
