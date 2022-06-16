const RoomHeader = (roomInfo) => {
    return ( 
        <header className="room-header">
            <h1>{ roomInfo.roomName }</h1>
            <button>Room test btn</button> 
        </header>
     );
}
 
export default RoomHeader;