import React, { memo } from "react";

const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef(); //접근하고자 하는 곳의 이름을 보통 따서 Ref를 붙여줌. document.querySelector 와 같은 기능(react에서는 이런 식으로 씀)

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    // inputRef.current.value = "";  첫번째 방법. input창 submit 후 초기화 방법
    formRef.current.reset(); //두번째 방법
  };
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef} //접근하고자 하는 곳에 이런 식으로 넣어준다.
        type="text"
        className="add-input"
        placeholder="Please enter your Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;

// export default class HabitAddForm extends PureComponent {
//   formRef = React.createRef();
//   inputRef = React.createRef(); //접근하고자 하는 곳의 이름을 보통 따서 Ref를 붙여줌. document.querySelector 와 같은 기능(react에서는 이런 식으로 씀)
//   onSubmit = (event) => {
//     event.preventDefault();
//     const name = this.inputRef.current.value;
//     if (name) {
//       this.props.onAdd(name);
//     }
//     // this.inputRef.current.value = "";  첫번째 방법. input창 submit 후 초기화 방법
//     this.formRef.current.reset(); //두번째 방법
//   };

//   render() {

//   }
// }
