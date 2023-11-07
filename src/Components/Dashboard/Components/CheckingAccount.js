import React, { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import {
  Box,
  Divider,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";

const CheckingAccountChart = () => {
  const [manage, setManage] = useState("manage");
  const [month, setMonth] = useState("february");
  const svgRef = useRef();

  // Use useMemo to memoize the xLabels array
  const xLabels = useMemo(
    () => ["09", "10", "11", "12", "13", "14", "15", "16", "17", "18"],
    []
  );

  const [memoizedData, setMemoizedData] = useState(
    xLabels.map(() => Math.floor(Math.random() * 100))
  );

  useEffect(() => {
    setMemoizedData(xLabels.map(() => Math.floor(Math.random() * 100)));
  }, [month, xLabels]);

  useEffect(() => {
    const width = 750;
    const height = 200;
    const margin = { top: 20, right: 10, bottom: 35, left: 40 };
    const svg = d3.select(svgRef.current).attr("width", width).attr("height", height);

    const xScale = d3
      .scalePoint()
      .domain(xLabels)
      .range([margin.left, width - margin.right]);
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(memoizedData)])
      .range([height - margin.bottom, margin.top]);

    const generateScaleLine = d3
      .line()
      .x((d, i) => xScale(xLabels[i]))
      .y((d) => yScale(d))
      .curve(d3.curveCardinal);

    svg
      .selectAll("path")
      .data([memoizedData])
      .join("path")
      .attr("d", (d) => generateScaleLine(d))
      .attr("fill", "none")
      .attr("stroke", "#58af7e")
      .attr("stroke-width", 2);

    svg
      .selectAll(".x-axis-label")
      .data(xLabels)
      .enter()
      .append("text")
      .attr("class", "x-axis-label")
      .attr("x", (d) => xScale(d))
      .attr("y", height - 10)
      .style("text-anchor", "middle")
      .style("font-size", "12px")
      .style("font-weight", "600")
      .style("fill", "#d3d4d5")
      .text((d) => d);
  }, [memoizedData, xLabels]);

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "16px" }}>
          Checking Account
        </Typography>
        <Select
          variant="outlined"
          value={manage}
          onChange={(event) => setManage(event.target.value)}
          style={{ marginLeft: "auto", fontSize: 12 }}
          size="small"
        >
          <MenuItem value="manage" style={{ fontSize: 12 }}>
            Manage
          </MenuItem>
          <MenuItem value="view" style={{ fontSize: 12 }}>
            View
          </MenuItem>
          <MenuItem value="edit" style={{ fontSize: 12 }}>
            Edit
          </MenuItem>
        </Select>
        <Select
          variant="outlined"
          value={month}
          onChange={(event) => setMonth(event.target.value)}
          size="small"
          sx={{ marginLeft: 1, fontSize: 12 }}
        >
          <MenuItem value="january" style={{ fontSize: 12 }}>
            January
          </MenuItem>
          <MenuItem value="february" style={{ fontSize: 12 }}>
            February
          </MenuItem>
          <MenuItem value="march" style={{ fontSize: 12 }}>
            March
          </MenuItem>
        </Select>
      </Toolbar>
      <Divider />
      <Box
        sx={{
          flex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <svg ref={svgRef}></svg>
      </Box>
    </Box>
  );
};

export default CheckingAccountChart;
