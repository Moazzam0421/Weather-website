import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
// ];


export const InfoBox = ({info}) => {
    let rainImg = "https://images.unsplash.com/photo-1468476396571-4d6f2a427ee7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D"
    let winterImg = "https://media.istockphoto.com/id/471375585/photo/homeless-men-in-new-delhi-india.jpg?s=612x612&w=0&k=20&c=WRulLbOPBozkoHFdN_QC9JdQxscHl62UO-8XBb0mBxg=";
    let summerImg ="https://plus.unsplash.com/premium_photo-1661962564466-2fc5a2b5fba8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3w1fHx8ZW58MHx8fHx8";
    return (
        <div>
            <div>
                <Card sx={{ maxWidth: 745 }}>
                    <CardMedia
                        sx={{ height: 340 }}
                        image={
                            info.humidity >60? winterImg 
                            : (info.temp >25 ?
                                summerImg: rainImg)}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Weather - {info.city}{info.humidity >60
                            ? <ThunderstormIcon/>
                            : info.temp > 25 
                            ?  <WbSunnyIcon/>
                            : <AcUnitIcon/>}
                        </Typography>
                    </CardContent>


                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Feels_Like</TableCell>
                                <TableCell align="right">Haze</TableCell>
                                <TableCell align="right">Humidity</TableCell>
                                <TableCell align="right">Temp</TableCell>
                                <TableCell align="right">Temp_Min</TableCell>
                                <TableCell align="right">Temp_Max</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">{info.feelsLike}</TableCell>
                                <TableCell align="right">{info.haze}</TableCell>
                                <TableCell align="right">{info.humidity}</TableCell>
                                <TableCell align="right">{info.temp}&deg;C</TableCell>
                                <TableCell align="right">{info.tempMin}&deg;C</TableCell>
                                <TableCell align="right">{info.tempMax}&deg;C</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                </Card>
            </div>
        </div>
    )
}
