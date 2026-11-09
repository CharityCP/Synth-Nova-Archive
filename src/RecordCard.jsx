import { useState } from 'react'
function RecordCard({ record, onChoose  }) {
    const [showIntel, setShowIntel] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    function toggleIntel() {
    setShowIntel(!showIntel)
}
    const choose = () => {
        onChoose(record.event_id)
    }
return (
<article 
    className={`record-card ${isHovered ? "record-card-active" : ""}` }
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
    <div className="record-identifier">
        <span className="record-signal">◉</span>
        <span>ARCHIVE RECORD</span>
        
    </div>
    <h2>{record.event_name}</h2>
    <p>Character: {record.character_name}</p>
    <p>Event Type: {record.event_type}</p>
    <button onClick = {choose}> View Details </button>
    <button onClick={toggleIntel}>{showIntel ? "Conceal Classified Intel" : "Reveal Classified Intel"}</button>
    {showIntel && (
        <p className="classified-intel">
            CLASSIFIED: Intelligence file unlocked.</p>
    )}
</article>
)
}

export default RecordCard