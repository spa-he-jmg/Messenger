import SearchBar from "../components/SearchBar";
import Rooms from "../components/Rooms";

const SearchRooms = () => {
    return ( 
        <div className="chat-route">
            <SearchBar />
            <Rooms />
        </div>
     );
}
 
export default SearchRooms;