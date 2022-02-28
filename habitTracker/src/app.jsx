import React, { Component } from "react";
import Habits from "./components/habits";
import "./app.css";
import Navbar from "./components/navbar";
import HabitAddForm from "./components/habitAddForm";

export default class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits }); // key와 value가 동일한 이름에서는 생략이 가능.habits: habits === habits
  };
  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits }); // key와 value가 동일한 이름에서는 생략이 가능.habits: habits === habits
  };
  handleDelete = (habit) => {
    const habits = this.state.habits.filter((el) => el.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    // console.log(this.state.habits);
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name, count: 0 }, // name은 동일한 이름이어서 생략 name:
    ];
    // const add = { id: this.state.habits.length + 1, name: name, count: 0 };
    // habits.push(add);
    this.setState({ habits });
  };

  handleReset = () => {
    // const habits = [...this.state.habits];
    const habits = this.state.habits.map((el) => {
      if (el.count !== 0) {
        return { ...el, count: 0 };
      }
      return el;
    });
    // const habits = [...reset];

    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />

        {/* <HabitAddForm /> */}
      </>
    );
  }
}
{
  /* <i class="fa-regular fa-face-smile"></i>; */
}
