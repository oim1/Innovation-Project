import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "../styles/pages/Transactions.css";

const Transactions = () => {                {/*Dummy data creation function*/}
  function createData(orderID, orderItem, orderDate, orderPrice, orderStatus) {
    return { orderID, orderItem, orderDate, orderPrice, orderStatus };
  }

   {/*Creating dummy data*/}
  const rows = [                       
    createData("101", "Monitor", "02/09/2022`", "400$", "Completed"),
    createData("102", "Game Pass", "01/09/2022", "360$", "Pending"),
    createData("103", "Mouse", "31/08/2022", "1230$", "Pending"),
    createData("104", "Bitcoin", "30/08/2022", "32$", "Completed"),
    createData("105", "Ethereum", "29/08/2022", "40$", "Dispatched"),
    createData("106", "The Weeknd's Album", "28/08/2022", "100$", "Completed"),
    createData("107", "Gaming Keyboard", "27/08/2022", "140$", "Completed"),
    createData("108", "Key chain", "26/08/2022", "900$", "Completed"),
  ];
  return (
    <div className="TransactionsPage">
      <h1>Past transactions</h1>

      <TableContainer component={Paper} className="table-container"> 
        <Table
          sx={{ minWidth: 650 }}
          aria-label="simple table"
          className="table-content"
        >
          <TableHead className="table-header">   {/*Table Header*/}
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell className="header-item" align="right">
                Products
              </TableCell>
              <TableCell className="header-item" align="right">
                Order Date
              </TableCell>
              <TableCell className="header-item" align="right">
                Total Price
              </TableCell>
              <TableCell className="header-item" align="right">
                Order Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>                {/*Table data*/}
            {rows.map((row) => (
              <TableRow
                key={row.orderID}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.orderID}
                </TableCell>
                <TableCell className="table-item" align="right">
                  {row.orderItem}
                </TableCell>
                <TableCell className="table-item" align="right">
                  {row.orderDate}
                </TableCell>
                <TableCell className="table-item" align="right">
                  {row.orderPrice}
                </TableCell>
                <TableCell className="table-item" align="right">
                  {row.orderStatus}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Transactions;
