/*Given a departure city, arrival city, flight duration, and travel direction (east/west), calculate the traveller's jet lag hours.

Rules:
- Find the timezone difference between the cities.
- Use a direction multiplier:
  - East: 1.5
  - West: 1.0
- Formula:
  timezoneDifference + (flightDuration × 0.1 × multiplier)
- Return the result rounded to one decimal place. */


function getJetLagHours(departure, arrival, duration, direction) {
    const offsets = {
        "Los Angeles": -8,
        "New York": -5,
        "London": 0,
        "Istanbul": 3,
        "Dubai": 4,
        "Hong Kong": 8,
        "Tokyo": 9
    };

    const timeDiff = Math.abs(offsets[arrival] - offsets[departure]);
    const multiplier = direction === "east" ? 1.5 : 1.0;

    const jetLag = timeDiff + (duration * 0.1) * multiplier;

    return Number(jetLag.toFixed(1));
}


/*
Concepts Used:
- Objects
- Key-Value Lookup
- Math Operations
- Absolute Difference
- Conditional Logic
- Rounding Numbers
- Functions
*/