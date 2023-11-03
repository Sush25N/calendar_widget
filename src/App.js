import './App.css';
import Calendar from './components/Calendar';
import DateRangeSelector from './components/DateRangeSelector';

function App() {
  return (
    <div className="App">
      <h1>Calendar Widget</h1>
      <Calendar />

      <h1>Date Range</h1>
      <DateRangeSelector />
    </div>
  );
}

export default App;
