import './App.css'
import ArchiveHero from './ArchiveHero.jsx'
import {useState} from 'react'
import useFetchData from './useFetchData.js'
import RecordCard from './RecordCard.jsx'
import Details from './Details.jsx'
import TimelineEvents from './TimelineEvents' 

const archiveCategories =[
  {id: 1, title:"Character Profiles"},
  {id: 2, title: "Faction Records"},
  {id: 3, title: "Timeline Events"},
  {id: 4, title: "Technology Vault"},
  {id: 5, title: "Mission Logs"},
  {id: 6, title: "Language Codex"},
];

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
    setSelectedEventId(null)
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
      <ArchiveHero>
    <h1> Synth Nova Archive</h1>
    <div className="hero-buttons">
      <button  onClick = {activateChronolink} > Archive Entry
      </button>
      <button onClick={checkSystemStatus}>
        Check System Status
      </button>
      </div>
      </ArchiveHero>
       
       <div className="archive-dashboard">
        <div className="archive-directory">
        <h2> Archive Directory</h2>
        <div className="archive-category-grid">
          {archiveCategories.map((category) => (
            <div className="archive-category-card" key={category.id}>
              <h3>{category.title}</h3>        
        </div>
          ))}
       </div>
       </div>

       <aside className="archive-status">
        <h2> SYSTEM STATUS</h2>

        <div className="status-item">
          <h3> ◉ Chronolink</h3>
          <p> Communication interface ready...</p>
          </div>
           <div className="status-item">
            <h3> ◉ Archive Database</h3>
            <p> Historical records available</p>
           </div>
           <div className="status-item">
            <h3> ◉ Citizen Access</h3>
            <p> Authorization integration pending...</p>
           </div>
       </aside>

       </div>
 <section className="timeline-events">
      <TimelineEvents >

        <div className="archive-search-controls">
        <input
        id="query"
        type="text"
        placeholder="Search Archive events..."
        />
        <button onClick={search}>Search Archive</button>

        <select
         value={eventType}
         onChange={(e) => {
          setEventType(e.target.value)
          setVisibleCount (6)
          setSelectedEventId(null)
          }}>

        {eventTypes.map((type) => (
            <option key={type} value={type}>
            {type}
            </option>
          ))}
          
        {filteredRecords.length === 0 && (
        <p>No Archive records match your search or selected event type.</p>
           )}
          </select>
          </div>

       <div className="timeline-record-grid">
        {visibleRecords.map ((record) => (
        <RecordCard 
        key={record.event_id} 
        record={record}
        onChoose={setSelectedEventId}
          />
      ))
      }
      </div>
      {visibleCount < filteredRecords.length && (
        <button className="load-more-button" onClick={() => setVisibleCount (visibleCount + 6)}>Load More</button>
      )}
       <Details
      record={selectedEvent}/>

         </TimelineEvents>
    </section>
    </main>
  )
}

export default App