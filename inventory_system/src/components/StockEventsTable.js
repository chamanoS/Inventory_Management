import React from 'react'

function StockEventsTable(props) {
    const {stockEvents} = props
        return (
            <div className="StockEventsTable">
                {stockEvents.map(event =>(
                    <div className="StockEventTable_Card">
                        <p>Id:{event.id}</p>
                        <p>Type:{event.type}</p>
                        <p>Quantity:{event.qty}</p>
                        <p>Product Name:{event.product.name}</p>
                    </div>
                ))}
            </div>
        )
}

export default StockEventsTable;
