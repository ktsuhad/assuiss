import * as React from "react";
import { Box, Divider, Toolbar, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const AccountWatchlist = () => {
  const accountData = [
    { name: "Sales", thisMonth: "1,194.58", YTD: "11,418.29" },
    { name: "Advertising", thisMonth: "6,879.02", YTD: "9,271.36" },
    { name: "Inventory", thisMonth: "4,692.26", YTD: "9,768.09" },
    { name: "Entertainment", thisMonth: "0.00", YTD: "0.00" },
    { name: "Product", thisMonth: "4,652.10", YTD: "2,529.90" },
  ];

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "16px" }}>
          Account watchlist
        </Typography>
      </Toolbar>
      <Divider />
      <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  border: "none",
                  color: "#d3d4d5",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                Account
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  border: "none",
                  color: "#d3d4d5",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                This Month
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  border: "none",
                  color: "#d3d4d5",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              >
                YTD
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {accountData.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: "none" } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    border: "none",
                    padding: "8px 14px",
                    color: "#4f5256",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  {row.name}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    border: "none",
                    padding: "8px 14px",
                    color: "#4f5256",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  {row.thisMonth}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    border: "none",
                    padding: "8px 14px",
                    color: "#4f5256",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  {row.YTD}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AccountWatchlist;
