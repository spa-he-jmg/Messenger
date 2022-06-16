const Rooms = ({ results }) => {
    return ( 
        <div id="search-results">
            <ul>
                {results ? <p>No results match</p> : results.map((result, i) => {
                    return <li className="result" key={i.tostring()}>{ result }</li>
                })}
            </ul>
        </div>
     );
}
 
export default Rooms;