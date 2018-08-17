import createHistory from 'history/createBrowserHistory';

const history = createHistory();

// history example
history.listen((location, action) => {
    console.log(
      `The current URL is ${history.location.pathname}${location.search}${location.hash}`
    )
    console.log(`The last navigation action was ${action}`)
});

export default history;