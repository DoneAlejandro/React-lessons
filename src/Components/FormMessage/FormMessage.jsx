import React from "react";
import  Message  from "../Message/Message";
import style from "./FormMessage.module.css";

// ФУНКЦИОНАЛЬНАЯ КОМПОНЕНТА

const FormMessage = () => {
  const messageList = [
    "Привет, как настроение?)",
    "Это первое задание по react",
  ];

  return (
    <div className={style.wrapper}>
      <Message messageList={messageList} />
    </div>
  );
};

export default FormMessage;


// КЛАССВАЯ КОМПОНЕНТА

// export default class formMessage extends React.Component {
//    constructor(props) {
// 	super(props);
//     this.messageList = [
//       "Привет, как настроение?)",
//       "Это первое задание по react",
	  
//     ];
//   }

//   render() {
//     return (
//       <div className={style.wrapper}>
//         <Message messageList={this.messageList} />
//       </div>
//     );
//   }
// }
