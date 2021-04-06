import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  icon: {
    marginRight: '20px',
    color: 'white'
  },
  buttons: {
    marginTop: '40px'
  },
  cardGrid: {
    padding: '20px 0'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%'
  },
  cardContent: {
    flexGrow: 1
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  table: {
    minWidth: 450
  },
  tableContainer: {
    margin: '20px 0 30px'
  },
  divider: {
    marginBottom: '20px'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  gridContainer: {
    marginBottom: '30px'
  },
  modalTitle: {
    margin: '30px'
  },
  alignItemsAndJustifyContent: {
    width: 500,
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}))

export default useStyles
