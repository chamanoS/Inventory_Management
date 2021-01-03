import React from 'react'

function StockEventsTable(props) {
    const {stockEvents} = props
        return (
            <div className="StockEventsTable">
                {stockEvents.map(event =>(
                    <div>
                        <p>Id:{event.id}</p>
                        <p>Title:{event.title}</p>
                        <p>Quantity:{event.qty}</p>
                        <p>Name:{event.name}</p>
                    </div>
                ))}
            </div>
        )
}

export default StockEventsTable;
