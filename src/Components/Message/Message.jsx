import React from "react";
import style from "./Message.module.css";

// ФУНКЦИОНАЛЬНАЯ КОМПОНЕНТА

const Message = (props) => {
  const [value, setValue] = React.useState("");
  const [messageItem, setMessageItem] = React.useState(props.messageList);
  const [countMessage, setCountMessage] = React.useState(2);

  const addMessage = () => {
    setMessageItem([...messageItem, value]);
    setValue("");
    setCountMessage(countMessage + 1);
  };

  const messages = messageItem.map((message, index) => {
    return <li key={index}>{message}</li>;
  });
  // console.log(props.messageList);
  return (
    <>
      <div className={style.title}>
        <h3>Всего сообщений: {countMessage}</h3>
      </div>
      <div className={style.formMessage}>
        <input
          style={{ padding: "20px", borderRadius: "10px", marginRight: "10px" }}
          value={value}
          placeholder="Введите сообщение"
          onChange={(e) => setValue(e.target.value)}
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

export default Message;

// КЛАССВАЯ КОМПОНЕНТА

// export default class Message extends React.Component {
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
