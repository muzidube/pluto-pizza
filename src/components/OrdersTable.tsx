import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useMemo } from "react";
import { Orders } from "../services/interfaces";

function createData(
    id: number,
    type: string,
    size: string,
    toppings: number,
    price: number,
) {
    return {
        id,
        type,
        size,
        toppings,
        price,
    }
}

export default function BasicTable( objectNeeded: Orders ) {
    let rows: any[] = useMemo(() => [], []);

    for (const [ index, value ] of objectNeeded.order.entries()) {
        rows.push(createData(index, value.type, value.size.size, value.toppings.length, value.price))
    }
    return (
        <TableContainer component={Paper} className="mb-4 w-1/2">
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Type</TableCell>
                        <TableCell align="right">Size</TableCell>
                        <TableCell align="right">Toppings</TableCell>
                        <TableCell align="right">Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(( row ) => (
                        <TableRow
                            key={row.type}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {row.type}
                            </TableCell>
                            <TableCell className="capitalize font-semibold" align="right">{row.size}</TableCell>
                            <TableCell align="right">{row.toppings}</TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">{row.order}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}