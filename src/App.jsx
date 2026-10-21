import {useState} from 'react'
import useFetchData from './useFetchData.js'
import RecordCard from './RecordCard.jsx'
import Details from './Details.jsx'

function App() {
  const { records, loading, error } = useFetchData (
    "https://student-data-api.perkinscharity78.workers.dev/api/v1/datasets/chronicles-events/records?limit=50"
  )
  const [query, setQuery] = useState("")
  const [eventType, setEventType] = useState("All")
  const [selectedEventId, setSelectedEventId] = useState (null)
  const [visibleCount, setVisibleCount] = useState(6)

  const search = () => {
    setQuery(document.querySelector("#query").value) 
    setVisibleCount (6)
  } 
    const filteredRecords = records.filter((record) =>
    record.event_name.toLowerCase().includes(query.toLowerCase()) &&
    (eventType === "All" || record.event_type === eventType)
  )
  const visibleRecords = filteredRecords.slice(0, visibleCount)
  const selectedEvent = records.find(
    (record) => record.event_id === selectedEventId
  )

  const eventTypes = [
    "All",
    ...new Set(records.map((record) => record.event_type))
  ]
  
  if (loading) {
    return <p>Loading....</p>
  }
  if (error) {
    return <p>Archive connection error: </p>
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

    <input 
    id="query"
    type="text"
    placeholder="Search Archive Events..."
      />

      <button onClick={search}>Search Archive</button>

      <select
         value={eventType}
         onChange={(e) => {
          setEventType(e.target.value)
          setVisibleCount (6)
          }}>

          {eventTypes.map((type) => (
            <option key={type} value={type}>
            {type}
            </option>
          ))}
          </select>

      {filteredRecords.length === 0 && (
        <p>No Archive records match your search or selected event type.</p>
      )}

      {visibleRecords.map ((record) => (
        <RecordCard 
        key={record.event_id} 
        record={record}
        onChoose={setSelectedEventId}
          />
      ))
      }
      {visibleCount < filteredRecords.length && (
        <button onClick={() => setVisibleCount (visibleCount + 6)}>Load More</button>
      )}
      
      <Details
      record={selectedEvent}/>
    </main>
  )
}

export default App