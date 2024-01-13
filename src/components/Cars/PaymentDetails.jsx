function PaymentDetails({ PayDetails }) {
    return (
        <div>
            <div className="grid grid-cols-2">
                <div className="mb-2">
                    <div className="grid justify-items-start font-bold text-black/80">{PayDetails.mainOne}</div>
                    <div className="grid justify-items-start">{PayDetails.extraOne}</div>
                </div>
                <div className="mb-2">
                    <div className="grid justify-items-end font-bold text-black/80">{PayDetails.mainTwo}</div>
                    <div className="grid justify-items-end">{PayDetails.extraTwo}</div>
                </div>
            </div>
        </div>
    )
}

export default PaymentDetails