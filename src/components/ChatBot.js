import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faHeadset, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { getChatBot } from "../apis/ChatBotAPI";

function ChatBot() {
  let [chatBot, setChatBot] = useState(false);

  return (
    <div className="w-8 fixed bottom-1 left-96 z-50">
      <FontAwesomeIcon
        icon={faHeadset}
        size="2xl"
        onClick={() => setChatBot(true)}
      />
      {chatBot ? <ChatApp setChatBot={setChatBot} /> : null}
    </div>
  );
}

function ChatApp({ setChatBot }) {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputDisabled, setInputDisabled] = useState(false);

  const sendMessage = async () => {
    if (inputValue.trim() === "") return;
    let msgs = [...messages, { content: inputValue, role: "user" }];
    setMessages(msgs);
    setInputValue("");

    try {
      setInputDisabled(true);
      let data = await getChatBot(msgs);
      setMessages([...msgs, data]);
    } finally {
      setInputDisabled(false);
    }
  };

  const closeModal = () => {
    setChatBot(false);
    setMessages([]);
  };

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
        <div className="flex flex-col bg-white p-4 rounded-lg w-96 min-h-96">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">챗봇</h2>
            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-700"
            >
              <FontAwesomeIcon className="h-5 w-5" icon={faX} />
            </button>
          </div>
          <div className="flex-1 bg-gray-100 p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${
                  message.role === "user" ? "text-right" : "text-left"
                }`}
              >
                <div
                  style={{ whiteSpace: "pre-line" }}
                  className="bg-blue-500 text-white rounded-lg p-2 inline-block mb-2"
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          <div className="input-area flex items-center mt-5">
            <input
              type="text"
              placeholder="메시지를 입력하세요..."
              className="w-full rounded-lg border border-gray-300 py-2 px-4 focus:outline-none"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              disabled={inputDisabled}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-2"
              onClick={sendMessage}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;
