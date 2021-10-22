import React, { useState } from 'react'
import { Button, CircularProgress } from '@material-ui/core'

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
    const [verify_data, setverify_data] = useState([])
    const [loading, setloading] = useState(false)

    const getdata = () => {
        fetch('https://insta-like-data.herokuapp.com/getdata')
            .then(response => {
                response.json().then((resp) => {
                    // console.log(resp)
                    setdata(resp)
                })
            })
    }

    const verify = () => {

        fetch('https://insta-like-data.herokuapp.com/verify')
            .then(response => {
                response.json().then((resp) => {
                    console.log("verify data ===>", resp)
                    setverify_data(resp)
                })
            })

        setloading(true)  //if loading is true => means we got data
        // console.log("loading state==>",loading)

    }


    console.log("data =>", data)
    console.log("verify data=>", verify_data)
    console.log("LOADING STATE==>", loading)

    return (
        <div className="container" >
            <h2 className={`my-5 text-center ${data.length === 0 ? 'd-none' : ''}`}>All the Data</h2>
            <TableContainer component={Paper} className={`${data.length === 0 ? 'd-none' : ''}`} >

                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow style={{ backgroundColor: '#2e2e2e' }} >
                            <TableCell align="right" style={{ color: 'white' }}><b>Name</b></TableCell>
                            <TableCell align="right" style={{ color: 'white' }}><b>Email Id</b></TableCell>
                            <TableCell align="right" style={{ color: 'white' }}><b>Insta ID</b></TableCell>
                            <TableCell align="right" style={{ color: 'white' }}><b>Link</b></TableCell>
                            <TableCell align="right" style={{ color: 'white' }}><b>Mobile</b></TableCell>
                            <TableCell align="right" style={{ color: 'white' }}><b>UPI ID</b></TableCell>
                            <TableCell align="right" style={{ color: 'white' }}><b>Visit</b></TableCell>
                            <TableCell align="right" style={{ color: 'white' }}><b>Insta Handle</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
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
                                <TableCell align="right">{row.insta_handle}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Verify People Data */}

            <h2 className={`my-5 text-center ${verify_data.length === 0 ? 'd-none' : ''} `}>Verified People Data</h2>

            <TableContainer component={Paper} className={`${verify_data.length === 0 ? 'd-none' : ''}`}>

                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow style={{ backgroundColor: '#2e2e2e' }} >
                            <TableCell align="right" style={{ color: 'white' }}><b>Name</b></TableCell>
                            <TableCell align="right" style={{ color: 'white' }}><b>Email Id</b></TableCell>
                            <TableCell align="right" style={{ color: 'white' }}><b>Insta ID</b></TableCell>
                            <TableCell align="right" style={{ color: 'white' }}><b>Link</b></TableCell>
                            <TableCell align="right" style={{ color: 'white' }}><b>Mobile</b></TableCell>
                            <TableCell align="right" style={{ color: 'white' }}><b>UPI ID</b></TableCell>
                            <TableCell align="right" style={{ color: 'white' }}><b>Visit</b></TableCell>
                            <TableCell align="right" style={{ color: 'white' }}><b>Insta Handle</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {verify_data.map((row, index) => (
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
                                <TableCell align="right">{row.insta_handle}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <div className="container text-center my-5">
                <Button variant="contained" className="mx-3" style={{ backgroundColor: '#2e2e2e', color: 'white' }} onClick={getdata}>Get Data</Button>

                <Button variant="contained" style={{ backgroundColor: '#2e2e2e', color: 'white' }} onClick={verify} disabled>Verify</Button>

                <div><CircularProgress className={`my-5 ${verify_data.length > 0 ? 'd-none' : ''} ${loading ? '' : 'd-none'} `}/></div>
                
            </div>
        </div>
    )
}
