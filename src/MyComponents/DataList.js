import React, { useState } from 'react'
import { Button } from '@material-ui/core'

// Table imports
import { TableContainer } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import { Table } from '@material-ui/core'
import { TableHead } from '@material-ui/core'
import { TableRow } from '@material-ui/core'
import { TableCell } from '@material-ui/core'
import { TableBody } from '@material-ui/core'


export default function DataList() {
    const [data, setdata] = useState([])


    const getdata = () => {
        fetch('https://insta-like-data.herokuapp.com/getdata')
            .then(response => {
                response.json().then((resp) => {
                    // console.log(resp)
                    setdata(resp)
                })
            })

    }
    console.log("=>", data)
    return (
        <div className="container" >
            <TableContainer component={Paper} className={`${data.length === 0? 'd-none' : '' }`}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow style={{backgroundColor:'#2e2e2e'}} >
                            <TableCell align="right" style={{color:'white'}}><b>Name</b></TableCell>
                            <TableCell align="right" style={{color:'white'}}><b>Email Id</b></TableCell>
                            <TableCell align="right" style={{color:'white'}}><b>Insta ID</b></TableCell>
                            <TableCell align="right" style={{color:'white'}}><b>Link</b></TableCell>
                            <TableCell align="right" style={{color:'white'}}><b>Mobile</b></TableCell>
                            <TableCell align="right" style={{color:'white'}}><b>UPI ID</b></TableCell>
                            <TableCell align="right" style={{color:'white'}}><b>Visit</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row,index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >

                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.instaid}</TableCell>
                                <TableCell align="right">{row.link}</TableCell>
                                <TableCell align="right">{row.mobile}</TableCell>
                                <TableCell align="right">{row.upiid}</TableCell>
                                <TableCell align="right">{row.visit}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <div className="container text-center my-3">
                <Button variant="contained" style={{backgroundColor:'#2e2e2e', color:'white'}} onClick={getdata}>Get Data</Button>
            </div>
        </div>
    )
}
