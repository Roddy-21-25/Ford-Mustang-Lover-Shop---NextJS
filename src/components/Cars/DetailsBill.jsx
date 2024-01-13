import React from 'react'

function DetailsBill({ detils }) {
    return (
        <>
            <div className="grid grid-cols-2 my-1">
                <div className="grid justify-items-start font-bold text-black/80">{detils.main}</div>
                <div className="grid justify-items-end">{detils.extra}</div>
            </div>
            <hr />
        </>
    )
}

export default DetailsBill