import React from 'react'

function StockEventsTable(props) {
    const {stockEvents} = props
        return (
            <div className="StockEventsTable">
                {stockEvents.map(event =>(
                    <p>Quantity:{event.qty}</p>
                ))}
            </div>
        )
}

export default StockEventsTable;
