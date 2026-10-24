# Synth Nova Chronicles — Unity Nexus Archive

## React Hackathon Project
**October 19–23, 2026**

---

## Project Overview

The Unity Nexus Archive is an interactive, searchable historical database developed with React as part of the Synth Nova Chronicles universe.

This application allows Citizens to explore important historical events, character experiences, and pivotal moments through an immersive, futuristic intelligence interface.

The project combines original science-fiction storytelling with structured datasets, reusable React components, JavaScript functionality, and responsive CSS design.

The Archive is an early prototype of a larger interactive universe where Citizens will eventually explore records, unlock information, participate in missions, and interact with fictional technologies.

---
## The Problem

Synth Nova Chronicles is an expanding science-fiction universe containing interconnected characters, historical events, factions, and technologies.

As the storyline grows, Citizens need an organized way to access important information without searching through lengthy documents.

**The question my project answers:**

How can Citizens efficiently search, filter, and explore historical events within the Synth Nova Chronicles universe?

---

## Project Goals

My goal was to develop a functional React application that transforms original storyline data into an interactive Archive experience.

The application was designed to:

- Display historical events from a structured dataset.
- Use reusable React components and props.
- Render event records dynamically using `.map()`.
- Allow Citizens to search Archive records.
- Filter records by event type.
- Display detailed information about selected events.
- Load additional records without refreshing the webpage.
- Create a responsive layout for desktop, tablet, and mobile devices.
- Establish the foundation for a larger interactive intelligence system.

**Long-Term Vision:**

The Unity Nexus Archive will eventually become part of an immersive digital universe where Citizens can research historical records, unlock classified information, and participate in interactive missions.

---
## Intended Users

The Unity Nexus Archive is designed for Citizens of the Synth Nova Chronicles universe.

**Primary Users:**

- New Citizens learning about the storyline and characters.
- Returning Citizens exploring historical events.
- Future mission participants researching intelligence records.
- Visitors interested in the relationships between characters, factions, and major events.

The Archive allows users to interact with fictional historical information through a searchable database rather than reading a traditional story document.

---

## Dataset

### Data Source

The Archive uses an original CSV dataset developed from the Synth Nova Chronicles storyline and character experiences.

The dataset contains historical events, character information, event classifications, and details about how these experiences influence the fictional universe.

**Dataset Format:** CSV (Comma-Separated Values)

**Data Ownership:** Original Synth Nova Chronicles intellectual property.

### Dataset Fields

| Field | Description |
|---|---|
| index | Original dataset index |
| event_id | Unique identifier for each historical event |
| character_id | Unique identifier for the associated character |
| character_name | Name of the character connected to the event |
| event_name | Title of the historical event |
| event_type | Classification of the event |
| event_impact | Consequences or significance of the event |
| experience_growth | Character development resulting from the event |
| unlock_level | Citizen level associated with the record |
| clearance | Access classification |
| mission_connection | Relationship to future missions |
| is_public | Indicates whether the record is public |

### Example Dataset Records

**Record 1: Creation of Synth Nova**

- Character: Synth Nova
- Event Type: Origin / Awakening
- Description: Antonella Vex combines ten years of collective intelligence and downloads it into a security protocol, resulting in the creation of Synth Nova.

**Record 2: The Invalidation Decree**

- Character: Jameel Korr
- Event Type: Betrayal / Defection
- Impact: An attempted invalidation changes Jameel's allegiance from elite society to the rebellion.

### Dataset Integration

The application uses JavaScript and React to transform structured event records into reusable interface components.

Each record is identified by its unique `event_id`, which is also used as the React key when displaying event cards.

The dataset supports searching, event-type filtering, record selection, and dynamically displaying additional records.

---


## Technologies Used

The Unity Nexus Archive was developed using modern front-end technologies and development tools.

| Technology | Purpose |
|---|---|
| React | Builds reusable components and manages the interactive interface |
| JavaScript | Handles application logic, search, filtering, and user interactions |
| JSX | Combines JavaScript expressions with HTML-like component structures |
| CSS3 | Controls colors, layouts, typography, animations, and responsive design |
| HTML5 | Provides semantic structure for the interface |
| Vite | Provides the React development environment and build tools |
| CSV | Stores the original Synth Nova Chronicles historical event records |
| Git | Tracks changes and maintains project version history |
| GitHub | Hosts the repository and supports branches, issues, and pull requests |
| VS Code | Primary code editor used during development |
| Chrome Developer Tools | Debugs CSS, inspects elements, and tests responsive layouts |
| Google Fonts | Provides Orbitron and Rajdhani typography |

### Key Development Techniques

**React Components and Props**
- Created reusable components for different sections of the Archive.
- Passed event data and callback functions between components.

**React State**
- Used `useState` to manage interactive features and track changes to the interface.

**JavaScript Array Methods**
- Used `.map()` to display multiple records.
- Used `.filter()` to narrow displayed records based on search and event classifications.

**CSS Flexbox**
- Aligned search controls horizontally.
- Organized dashboard sections and component content.

**CSS Grid**
- Created a three-column Archive Directory.
- Displayed six Timeline Event records in a matching grid.
- Adjusted layouts for smaller screens.

**Responsive Design**
- Used media queries to adapt the application to desktop, tablet, and mobile viewports.

**Version Control**
- Used Git commands to stage, commit, and push project updates to the `build` branch.

---## React Components and Functionality

The Archive uses reusable React components to organize the interface and display historical records.

| Component | Responsibility |
|---|---|
| App | Manages the application layout, state, search, and event selection |
| ArchiveHero | Displays the Archive introduction and navigation controls |
| TimelineEvents | Organizes the searchable historical event interface |
| RecordCard | Displays individual events using props |
| Details | Displays expanded information for the selected event |

### Interactive Features

- **Search Archive:** Allows Citizens to search historical records.
- **Event Filtering:** Filters records by event classification.
- **View Details:** Displays information about a selected event.
- **Load More:** Displays additional matching records in groups of six.
- **Archive Directory:** Presents six categories for future Archive exploration.
- **System Status:** Displays informational panels for ChronoLink, Archive Database, and Citizen Access.

The application uses `useState`, props, event handlers, conditional rendering, `.map()`, and `.filter()` to support these interactions.

The Timeline Events section is the primary functioning dataset-driven feature. Other Archive categories and live system integrations are planned for future development.

---

## Development Process and Challenges

I developed this project independently, combining my original Synth Nova Chronicles storyline with React programming concepts.

**Key development accomplishments:**

- Created a React application using Vite.
- Integrated an original historical events dataset.
- Built reusable components to reduce repeated JSX.
- Implemented search, filtering, record selection, and Load More.
- Designed a responsive Archive Directory and Timeline Events grid.
- Created a futuristic interface using Flexbox, CSS Grid, Orbitron, and Rajdhani.
- Used Git and GitHub to track and save development changes.

**Challenges and Solutions:**

| Challenge | Solution |
|---|---|
| CSS styles not applying | Corrected mismatched JSX class names and CSS selectors |
| Event cards displaying in one column | Used Chrome Developer Tools to debug the grid declaration |
| Responsive layout alignment | Adjusted Flexbox, CSS Grid, and media queries |
| Overpowering text effects | Simplified colors and shadows for readability |
| Maintaining functionality | Retested interactive features after layout changes |

These challenges improved my understanding of debugging, React component structure, and CSS specificity.

---

## Testing and Results

I tested the application's primary features throughout development.

| Feature | Result |
|---|---|
| Dataset rendering | Passed |
| Search and event filtering | Working |
| View Details | Passed |
| Load More | Passed |
| Responsive category grid | Passed |
| Three-column event layout | Passed |
| Button interactions after styling | Passed |

Responsive layouts were inspected using Chrome Developer Tools at desktop, tablet, and mobile viewport widths.

---

## GitHub Workflow and Project Links

This project uses a GitHub development workflow with a dedicated `build` branch, incremental commits, and repository updates.

**Repository:** [Add GitHub URL]

**Live Application:** [Add Netlify URL after deployment]

**Pull Request:** [Add PR URL after review]

Development includes GitHub issue tracking, a reviewed pull request, and final deployment verification as part of the hackathon submission process.

---

## Reflection and Future Development

This project strengthened my understanding of React components, props, state management, JavaScript array methods, and responsive CSS design.

One of my biggest lessons was learning to investigate coding issues systematically using Developer Tools instead of repeatedly changing code without understanding the cause.

I am proud of transforming my original creative work into a functioning interactive application.

**Future Improvements:**

- Connect the remaining Archive categories to their datasets.
- Expand character profiles and historical records.
- Integrate prerecorded ChronoLink transmissions.
- Introduce Citizen clearance levels and mission-based access.
- Develop more advanced interactions within the Synth Nova Chronicles universe.

The Unity Nexus Archive is an early step toward creating an immersive digital universe where storytelling, technology, and Citizen participation connect.

---

**Created by CharityCP**

**Project:** Synth Nova Chronicles — Unity Nexus Archive

**October 2026**
