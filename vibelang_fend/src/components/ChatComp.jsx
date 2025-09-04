import React from 'react';
import { useState } from 'react';
import ChatBubble from './ChatBubble';
import searchIcon from '../assets/icons/searchIcon.png';

const ChatComp = () => {

  const chatRooms = [
    {
      id: 1,
      name: 'Alice',
      lastMessage: 'Hey, how are you?',
      lastTime: '10:45 AM',
      messages: [
        { id: 101, text: "Hey, how are you?", isSender: false, time: "10:44 AM" },
        { id: 102, text: "I'm good, thanks!", isSender: true, time: "10:45 AM" }
      ],
    },
    {
      id: 2,
      name: 'Bob',
      lastMessage: 'Let’s catch up tomorrow.',
      lastTime: 'Yesterday',
      messages: [
        { id: 201, text: "Are you free tomorrow?", isSender: false, time: "Yesterday 9:00 AM" },
        { id: 202, text: "Sure, let's meet!", isSender: true, time: "Yesterday 9:15 AM" }
      ],
    },
    {
      id: 3,
      name: 'Charlie',
      lastMessage: 'Sent the files.',
      lastTime: '08 Aug',
      messages: [
        { id: 301, text: "Sent the files.", isSender: false, time: "08 Aug 02:00 PM" },
        { id: 302, text: "Thanks, got them!", isSender: true, time: "08 Aug 02:15 PM" }
      ],
    },
    {
      id: 4,
      name: 'Diana',
      lastMessage: 'See you soon!',
      lastTime: 'Today',
      messages: [
        { id: 401, text: "Are you coming today?", isSender: false, time: "Today 10:00 AM" },
        { id: 402, text: "Yes, see you soon!", isSender: true, time: "Today 10:05 AM" }
      ],
    },
    {
      id: 5,
      name: 'Ethan',
      lastMessage: 'Got it, thanks.',
      lastTime: '2 days ago',
      messages: [
        { id: 501, text: "Please review the document.", isSender: true, time: "2 days ago 11:00 AM" },
        { id: 502, text: "Got it, thanks.", isSender: false, time: "2 days ago 11:15 AM" }
      ],
    },
    {
      id: 6,
      name: 'Fiona',
      lastMessage: 'Happy Birthday!',
      lastTime: 'Yesterday',
      messages: [
        { id: 601, text: "Happy Birthday!", isSender: false, time: "Yesterday 08:00 AM" },
        { id: 602, text: "Thank you!", isSender: true, time: "Yesterday 08:05 AM" }
      ],
    },
    {
      id: 7,
      name: 'George',
      lastMessage: 'Meeting at 3 PM.',
      lastTime: 'Today',
      messages: [
        { id: 701, text: "Meeting at 3 PM.", isSender: false, time: "Today 09:30 AM" },
        { id: 702, text: "Got it, I’ll be there.", isSender: true, time: "Today 09:35 AM" }
      ],
    },
    {
      id: 8,
      name: 'Hannah',
      lastMessage: 'Can you send the report?',
      lastTime: 'Yesterday',
      messages: [
        { id: 801, text: "Can you send the report?", isSender: false, time: "Yesterday 04:00 PM" },
        { id: 802, text: "Sure, sending now.", isSender: true, time: "Yesterday 04:05 PM" }
      ],
    },
    {
      id: 9,
      name: 'Ian',
      lastMessage: 'Lunch tomorrow?',
      lastTime: 'Today',
      messages: [
        { id: 901, text: "Lunch tomorrow?", isSender: false, time: "Today 11:00 AM" },
        { id: 902, text: "Yes, sounds good!", isSender: true, time: "Today 11:05 AM" }
      ],
    },
    {
      id: 10,
      name: 'Jenny',
      lastMessage: 'Check your email.',
      lastTime: '2 days ago',
      messages: [
        { id: 1001, text: "Check your email.", isSender: false, time: "2 days ago 10:00 AM" },
        { id: 1002, text: "Will do, thanks.", isSender: true, time: "2 days ago 10:10 AM" }
      ],
    },
    {
      id: 11,
      name: 'Kyle',
      lastMessage: 'Project deadline extended.',
      lastTime: 'Today',
      messages: [
        { id: 1101, text: "Project deadline extended.", isSender: false, time: "Today 08:30 AM" },
        { id: 1102, text: "Great news!", isSender: true, time: "Today 08:35 AM" }
      ],
    },
    {
      id: 12,
      name: 'Lena',
      lastMessage: 'Got tickets for the concert.',
      lastTime: 'Yesterday',
      messages: [
        { id: 1201, text: "Got tickets for the concert.", isSender: false, time: "Yesterday 07:00 PM" },
        { id: 1202, text: "Awesome, thanks!", isSender: true, time: "Yesterday 07:05 PM" }
      ],
    }
  ];

  const [messageInput, setMessageInput] = useState('');

  const sendMessage = () => {
    if (!messageInput.trim()) return;
    // TODO: Add logic to send message and update state/data
    console.log('Sending message:', messageInput);
    setMessageInput('');
  };


  const [selectChatRoom, setSelectChatRoom] = useState(null);
  const selectedRoom = chatRooms.find(room => room.id === selectChatRoom) || { messages: [] };

  return (
    <div className='mainbox' style={styles.mainbox}>
      <div className='chatlist' style={styles.chatlist}>
        <div className='chatlistheader' style={styles.chatlistheader}>
          <div style={{ width: '100%' }}><span style={styles.chatlistheadertext}>Chats</span></div>
          <div style={{ width: '100%' }}>
            <input
              type="text"
              //value={value}
              // onChange={handleChange}
              placeholder="Search"
              style={styles.chatsearchinput}
            />
          </div>
        </div>

        <div className='conversationwrapper' style={styles.conversationwrapper}>
          {chatRooms.map((room) => (
            <div
              key={room.id}
              onClick={() => setSelectChatRoom(room.id)}
              style={{
                ...styles.chatRoomItem,
                backgroundColor: selectChatRoom === room.id ? '#d3d3d3' : 'white',
                cursor: 'pointer'
              }}>
              <div style={styles.chatRoomAvatar}></div>
              <div style={styles.chatRoomContent}>
                <div style={styles.chatRoomNameRow}>
                  <div style={styles.chatRoomName}>{room.name}</div>
                  <div style={styles.chatRoomTime}>{room.lastTime}</div>
                </div>
                <div style={styles.chatRoomLastMessage}>{room.lastMessage}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
      <div className='chatwindow' style={styles.chatwindow}>
        {!selectChatRoom ? (
          <div style={styles.selectTextPlaceholder}>
            Please select a chat to start messaging.
          </div>
        ) : (
          <>
            <div className='chatwindowheader' style={styles.chatwindowheader}>
              <div style={styles.info}>
                <div style={styles.profileCircle}></div>
                <div style={styles.profiletexts}>
                  <div style={styles.name}>{selectedRoom?.name}</div>
                  <div style={styles.lastseeninfo}>{selectedRoom?.lastTime}</div>
                </div>
              </div>
              <img src={searchIcon} alt="Search" style={styles.searchIconImg} />
            </div>
            <div className='messageswrapper' style={styles.messageswrapper}>
              <div style={styles.messagesContainer}>
                {selectedRoom?.messages?.map((msg) => (
                  <ChatBubble key={msg.id} message={msg} isSender={msg.isSender} />
                ))}
              </div>
              <div style={styles.messageInputContainer}>
                {/* <button style={styles.emojiButton} aria-label="Add emoji">
                  😊
                </button> */}
                <input
                  type="text"
                  placeholder="Type a message"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  style={styles.messageInput}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') sendMessage();
                  }}
                />
                <button style={styles.sendButton} onClick={sendMessage} aria-label="Send message">
                  ➤
                </button>
              </div>

            </div>
          </>
        )}
      </div>

    </div>
  );
};

const styles = {
  mainbox: {
    width: '60%',
    margin: '10px auto',
    borderRadius: '18px',
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.28)',
    display: 'flex',
    flexDirection: 'row',
    height: '75vh',
    position: 'relative',
    overflow: 'hidden',
    border: '5px solid #000',
  },
  chatlist: {
    width: '30%',
    borderRight: '5px solid #000',
    backgroundImage: 'linear-gradient(to top, #e5e5be90 40%, #003a7395)',
    display: 'flex',
    flexDirection: 'column',
  },
  chatlistheader: {
    padding: '10px',
    fontWeight: 'bold',
    color: '#000',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'

  },
  chatlistheadertext: {
    fontSize: '35px',
    color: '#fff',
    fontFamily: "'Cal_Sans', sans-serif",
    letterSpacing: '3px',
  },
  chatsearchinput: {
    padding: '8px',
    width: '100%',
    borderRadius: '10px',
    fontFamily: "'Montserrat_Regular', sans-serif",
    border: '1px solid #ccc',
    boxSizing: 'border-box'
  },
  conversationwrapper: {
    flex: 1,
    backgroundColor: '#F6F4F5',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  chatRoomItem: {
    display: 'flex',
    height: '45px',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '12px 16px',
    borderBottom: '1px solid #f0f0f0',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    gap: '12px',
  },
  chatRoomItemHover: {
    backgroundColor: '#f5f5f5',
  },
  chatRoomAvatar: {
    width: 48,
    height: 48,
    borderRadius: '50%',
    backgroundColor: '#b8aee8', // placeholder color for avatar
    flexShrink: 0,
  },
  chatRoomContent: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  chatRoomNameRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  chatRoomName: {
    fontWeight: '600',
    fontSize: 16,
    color: '#111',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  chatRoomTime: {
    fontSize: 12,
    color: '#999',
    flexShrink: 0,
    marginLeft: 8,
  },
  chatRoomLastMessage: {
    fontSize: 14,
    color: '#555',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  chatwindow: {
    width: '70%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  chatwindowheader: {
    display: 'flex',
    alignItems: 'center',
    padding: '14px 20px',
    background: '#fff',
    borderRadius: '18px 18px 0 0',
    boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
    justifyContent: 'space-between'
  },
  info: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  profileCircle: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    background: '#b8aee8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profiletexts: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  name: {
    fontSize: 17,
    fontWeight: 500,
    color: '#222',
    marginBottom: 2,
    fontFamily: "'Cal_Sans', sans-serif",
    letterSpacing: '2px',
  },
  lastseeninfo: {
    fontSize: 13,
    color: '#888',
    fontFamily: "'Montserrat_Regular', sans-serif",
  },
  searchIconImg: {
    width: 22,
    height: 22,
    cursor: 'pointer',
    marginLeft: 8,
  },
  messageswrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F6F4F5', // Light gray
    overflowY: 'auto',
  },
  selectTextPlaceholder: {
    textAlign: 'center',
    color: '#888',
    fontFamily: "'Montserrat_Regular', sans-serif",
  },
  messagesContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    overflowY: 'auto',
    backgroundColor: '#F6F4F5',
    gap: '10px',
  },
  messageInputContainer: {
  display: 'flex',
  alignItems: 'center',
  padding: '10px 10px',
  borderTop: '1px solid #ddd',
  backgroundColor: '#fff',
  borderRadius: '0 0 18px 18px',
  gap: '10px',
},
emojiButton: {
  background: 'transparent',
  border: 'none',
  fontSize: '24px',
  cursor: 'pointer',
},
messageInput: {
  flex: 1,
  borderRadius: '20px',
  border: '1px solid #ccc',
  padding: '10px 15px',
  fontSize: '16px',
  fontFamily: "'Montserrat_Regular', sans-serif",
  outline: 'none',
},
sendButton: {
  background: '#4e8cff',
  border: 'none',
  borderRadius: '50%',
  color: '#fff',
  fontSize: '20px',
  width: '36px',
  height: '36px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},


};

export default ChatComp;
