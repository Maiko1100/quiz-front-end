import { useState, FunctionComponent, useEffect } from 'react';
import { ISavedQuiz } from '../../api/quiz';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Table, TextField } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';

interface IHighscoresProps {
  savedQuizzes: ISavedQuiz[];
}
const Highscores: FunctionComponent<IHighscoresProps> = ({ savedQuizzes }) => {
  const classes = useStyles();
  const [savedQuizzesInState, setSavedQuizzes] = useState(savedQuizzes);

  const searchUser = (name: string) => {
    const filteredArray = savedQuizzes.filter((savedQuiz: ISavedQuiz) => savedQuiz.userName.toLowerCase().includes(name.toLowerCase()));
    setSavedQuizzes(filteredArray);
  };


  return (
    <>
      <TextField
        style={{ marginTop: '1rem', marginBottom: '1rem' }}
        name="Search"
        label="Search user"
        onChange={(e) => searchUser(e.target.value)}
      />

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Username</StyledTableCell>
              <StyledTableCell align="right">Score</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {savedQuizzesInState.map((savedQuiz: ISavedQuiz) => (
              <StyledTableRow key={savedQuiz._id}>
                <StyledTableCell component="th" scope="row">
                  {savedQuiz.userName}
                </StyledTableCell>
                <StyledTableCell align="right">{`${savedQuiz.correctAnswers}`}</StyledTableCell>
                <StyledTableCell align="right">{moment(savedQuiz.created_at).format('DD MMM YYYY H:mm')}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default Highscores;

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    body: {
      fontSize: 14
    }
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
      }
    }
  })
)(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});
