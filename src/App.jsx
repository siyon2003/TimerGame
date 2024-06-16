import Player from './components/Player.jsx';
import TimerChange from './components/TimerChange.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChange title='Premise' targetTime={1}/>
        <TimerChange title='Clever' targetTime={5}/>
        <TimerChange title='Good' targetTime={10}/>
        <TimerChange title='Yep' targetTime={15}/>
        <TimerChange title='Eat Five Star' targetTime={18}/>
      </div>
    </>
  );
}

export default App;
