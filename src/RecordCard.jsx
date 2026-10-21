function RecordCard({ record }) {
return (
<article>
    <h2>{record.event_name}</h2>
    <p>Character: {record.character_name}</p>
    <p>Event Type: {record.event_type}</p>
</article>
)
}

export default RecordCard