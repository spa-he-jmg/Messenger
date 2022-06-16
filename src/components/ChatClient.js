const ChatClient = () => {
    return ( 
        <div className="chat-client">
            <div className="chat-feed">
                <ul>
                    
                </ul>
            </div>
            <div className="chat-controls">
                <input id="chat-input" type="text" />
                <button className="send-message-btn">Send</button>
            </div>
        </div>
     );
}
 
export default ChatClient;