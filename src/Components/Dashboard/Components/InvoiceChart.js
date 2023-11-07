import React, { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import {
  Box,
  Button,
  Divider,
  Modal,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const InvoiceChart = () => {
  const svgRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState(null); 

  const data = useMemo(() => [

    { label: 'Older', value: 20 },
    { label: 'Jan 01 - 08', value: 40 },
    { label: 'Jan 09 - 16', value: 60 },
    { label: 'Jan 17 - 24', value: 45 },
    { label: 'Jan 25 - 31', value: 50 },
    { label: 'future', value: 40 },
  ], []);

  useEffect(() => {
    const width = 750;
    const height = 200;

    const margin = { top: 20, right: 0, bottom: 35, left: 10 };

    const svg = d3.select(svgRef.current).attr('width', width).attr('height', height);

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([margin.left, width - margin.right])

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([height - margin.bottom, margin.top]);

    // Define a specific color for all bars
    const barColor = "#47b747";

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
      .attr("y", height - 10) // Adjust the vertical position of labels
      .style("text-anchor", "middle")
      .text((d) => d.label)
      .style("font-size", "12px")
      .style("font-weight", "600")
      .style("fill", "#d3d4d5")

    // Draw bars with a specific color and spacing
    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d) => xScale(d.label) + (xScale.bandwidth() - barWidth) / 2)
      .attr('y', (d) => yScale(d.value))
      .attr('width', barWidth) // Adjust the bar width
      .attr('height', (d) => height - margin.bottom - yScale(d.value))
      .attr('fill', barColor)
      .attr('rx', 5) // Adjust border radius (rx and ry values)
      .attr('ry', 5);

  }, [data]);

  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  
  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  const handleUpload = () => {
    // Handle the file upload here, e.g., send it to the server
    // Note: This is a placeholder; you should implement the actual file upload logic.
    console.log("File uploaded:", file);

    // Close the modal after handling the file upload
    setIsModalOpen(false);
  };
  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "16px" }}>
          Invoices owed to you
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#e8eefd",
            color: "#8ac3ac",
            marginLeft: "auto",
            fontWeight: "bold",
            fontSize: "px",
            boxShadow: "none",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "rgba(232, 238, 253,0.4)",
              color: "rgba(138, 195, 172,0.4)",
              boxShadow: "none",
            },
          }}
          size="small"
          onClick={openModal}
        >
 New Sales Invoice</Button>
      </Toolbar>
      <Divider />
      <Box sx={{ flex: 1, width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <svg ref={svgRef} style={{ width: "100%" }}></svg>
      </Box>
       {/* Modal for file upload */}
       <Modal open={isModalOpen} onClose={closeModal}>
        <Paper sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 400, p: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "14px",mb:1 }}>
            Upload Sales Invoice
          </Typography>
          <Divider sx={{mb:2}}/>
          <input
            type="file"
            accept=".pdf" // Specify the accepted file types
            onChange={handleFileChange}
            style={{ display: "none" }}
            id="file-upload-input"

          />
          <label htmlFor="file-upload-input">
            <Button variant="contained" component="span" size="small" startIcon={<CloudUploadIcon />}>
              Upload File
            </Button>
          </label>
          {file && <Typography>Selected File: {file.name}</Typography>}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              onClick={handleUpload}
              disabled={!file}
              sx={{ fontSize: "12px" }}
            >
              Submit
            </Button>
          </Box>
        </Paper>
      </Modal>
    </Box>
  );
};

export default InvoiceChart;
