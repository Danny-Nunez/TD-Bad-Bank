import useUserContext from "../hooks/useUserContext";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const AllData = () => {
  const { user } = useUserContext();

  const usersList = user.map((user, i) => {
    return (
      <TableRow
        key={i}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {user.name}
        </TableCell>
        <TableCell align="left">{user.email}</TableCell>
        <TableCell align="left">{user.password}</TableCell>
        <TableCell align="left">${user.balance}</TableCell>
      </TableRow>
    );
  });

  return (
    <>
    <div className="card2">
      <h1>AllData</h1>
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Password</TableCell>
              <TableCell align="left">Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{usersList}</TableBody>
        </Table>
      </TableContainer>
      </div>
    </>
  );
};

export default AllData;
