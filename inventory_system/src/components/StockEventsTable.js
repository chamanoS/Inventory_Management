import React from 'react'

function StockEventsTable(props) {
    const {products, stockEvents} = props

        return (
            <div className="StockEventsTable">
                {products.map(product => {
                    const {id} = product

                    const relevantStockEvents = stockEvents.filter(se => se.product.id === product.id)
                    const stockTotal = relevantStockEvents.reduce((accumulator, currentElement) =>{
                        return accumulator + currentElement.qty
                    },0)

                    return(
                        <div className="StockEventsTable_ProductsContainer">
                            <h2>Product: {product.name} | Total:{stockTotal}</h2>
                            {relevantStockEvents.map(event =>(
                              <div className="StockEventTable_Card">
                                <p>Id:{event.id}</p>
                                <p>Type:{event.type}</p>
                                <p>Quantity:{event.qty}</p>
                                <p>Product Name:{event.product.name}</p>
                              </div>
                            ))}

                        </div>
                    )
                })}
               
            </div>
        )
}

export default StockEventsTable;
