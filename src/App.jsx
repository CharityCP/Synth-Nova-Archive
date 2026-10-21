import useFetchData from './useFetchData.js'
import RecordCard from './RecordCard.jsx'

function App() {
  const { records, loading, error } = useFetchData (
    "https://student-data-api.perkinscharity78.workers.dev/api/v1/datasets/chronicles-events/records?limit=50"
  )

  if (loading) {
    return <p>Loading....</p>
  }
  function checkSystemStatus () {
    alert("Unity Nexus Archive: System Online")
  }
   function activateChronolink () {
    alert("Chronolink Activated")
   }
  return (
    <main> 
      <h1> Synth Nova Archive</h1>
      <button  onClick = {activateChronolink} > Archive Entry
      </button>
      <button onClick={checkSystemStatus}>
        Check System Status
      </button>
      <p>{error}</p>
      {records.map ((record) => (
        <RecordCard key={record.event_id} record={record}/>
      ))
      }
    </main>
  )
}

export default App