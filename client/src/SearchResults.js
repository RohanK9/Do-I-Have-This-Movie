import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function SearchResults({ movies }) {
    return (
        <>
            <TableContainer style={styles.table} component={Paper}>
                <Table aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={styles.header} align="left">Movie name 🍿🎬</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            (movies || []).map((movie, index) => (
                                <TableRow key={index}>
                                    <TableCell style={styles.row} align="left">{movie}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <div style={styles.spacing}></div>
        </>
    );
}

const styles = {
    table: {
        // paddingTop: '10px',
        width: '65%',
    },
    header: {
        backgroundColor: "#B5BAB8",
        fontSize: '18px',
        position: 'sticky',
        // color: "white",
    },
    row: {
        fontSize: '15px',
    },
    spacing: {
        paddingBottom: '15px',
    },
}

export default SearchResults;