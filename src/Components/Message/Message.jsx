import React from "react";
import style from "./Message.module.css";
import { useState, useEffect } from "react";

// Функциональный компонент

export const Message = () => {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [messagesList, setMessagesList] = useState([]);
  const [countMessage, setCountMessage] = useState(0);

  const addMessage = () => {
    let messageItem = { author: author, message: text };
    setMessagesList([...messagesList, messageItem]);
    setCountMessage(countMessage + 1);
    setAuthor("");
    setText("");
  };

  useEffect(() => {
    setTimeout(() => {
      if (messagesList.length > 0) {
        alert("Сообщение доставлено!");
      }
    }, 1500);
  }, [messagesList]);

  const messages = messagesList.map((message, index) => {
    return (
      <li key={index}>
        Cообщение от: {message.author} <br />
        Текст сообщения: {message.message}
      </li>
    );
  });
  return (
    <>
      {/* Можно было вывести в отдельную компоненту, но я не успеваю, позже исправлю */}
      <div className={style.title}>
        <h3>Всего сообщений: {countMessage}</h3>
      </div>
      <div className={style.formMessage}>
        <input
          className={style.input}
          value={author}
          placeholder="Введите имя"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          className={style.input}
          value={text}
          placeholder="Введите сообщение"
          onChange={(e) => setText(e.target.value)}
        />
        <button className={style.btn} onClick={addMessage}>
          Отправить сообщение
        </button>
      </div>
      <div>
        <ul>{messages}</ul>
      </div>
    </>
  );
};

// Классовый компонент

// export default class Message extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "", item: [props.messageList], count: 2 };
//     // console.log(this.state.item);
//   }

//   addMessage = () => {
//     this.setState({ item: [...this.state.item, this.state.value] });
//     this.setState({ count: this.state.count + 1 });
//     this.setState({ value: "" });
//   };

//   updateMessage = (e) => {
//     this.setState({ value: e.target.value });
//   };
//   render() {
//     return (
//       <>
//         <div className={style.title}>
//           <h3>Всего сообщений: {this.state.count}</h3>
//         </div>
//         <div className={style.formMessage}>
//           <input
//             style={{
//               padding: "20px",
//               borderRadius: "10px",
//               marginRight: "10px",
//             }}
//             value={this.state.value}
//             placeholder="Введите сообщение"
//             onChange={this.updateMessage}
//           />
//           <button className={style.btn} onClick={() => this.addMessage()}>
//             Отправить сообщение
//           </button>
//         </div>
//         <div>
//           <ul>
//             {this.state.item.map((message, index) => {
//               return <li key={index}>{message}</li>;
//             })}
//           </ul>
//         </div>
//       </>
//     );
//   }
// }
