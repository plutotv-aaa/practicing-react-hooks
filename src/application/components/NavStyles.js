export const styles = theme => ({
  nav: {
    display: 'flex',
    backgroundColor: 'rgb(53, 59, 69)',
    overflow: 'hidden',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    '& a': {
      padding: '14px 16px',
      listStyle: 'none',
      color: '#f2f2f2',
      textAlign: 'center',
      textDecoration: 'none',
      fontSize: '17px',
      alignItems: 'center',
      '&:hover': {
        backgroundColor: '#ddd',
        color: 'black',
      },
      '&.active': {
        backgroundColor: '#ddd',
        color: 'black',
      },
    },
  },
});
