import React from 'react'

function Td({ data }) {
    return (
        <td className={`px-1 xl:px-4 py-2 whitespace-nowrap text-sm ${data.style} text-gray-800 dark:text-gray-200`}>{data.main}</td>
    )
}

export default Td