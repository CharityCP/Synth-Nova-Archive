function RecordCard({ record, onChoose  }) {
    const choose = () => {
        onChoose(record.event_id)
    }
return (
<article className="record-card">
    <div className="record-identifier">
        <span className="record-signal">◉</span>
        <span>ARCHIVE RECORD</span>
        
    </div>
    <h2>{record.event_name}</h2>
    <p>Character: {record.character_name}</p>
    <p>Event Type: {record.event_type}</p>
    <button onClick = {choose}> View Details </button>
</article>
)
}

export default RecordCard