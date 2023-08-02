import Profile from './components/Profile/Profile'
import Statistics from './components/Statistics/Statistics'
import user from './user.json'
import data from './data.json'

function App() {
  return (
    <>
      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics 
        title='UPLOAD STATS'
        stats={data}
      />
      <Statistics 
        stats={data}
      />
    </>
  );
}

export default App;
