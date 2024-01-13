function Th({ data }) {
    return (
        <th scope="col" className={`px-3 xl:px-6 py-2 text-center text-xs ${data.styles} text-gray-500 uppercase`}>{data.main}</th>
    )
}

export default Th