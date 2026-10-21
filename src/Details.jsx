function Details ({record}) {
    if (!record) {
        return <p>Select an Archive event to view it's details.</p>
    }

    return (
  <section>
    <h2>{record.event_name}</h2>
    <p>Character: {record.character_name}</p>
    <p>Event Type: {record.event_type}</p>
    <p>Impact: {record.event_impact}</p>
    <p>Character Growth: {record.experience_growth}</p>
    <p>Mission Connection: {record.mission_connection}</p>
  </section>
)
    }



export default Details