import React from "react";

export default function Habit({ habit, onToggleHabit, onDeleteHabit }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={habit.isCompleted}
        onChange={() => onToggleHabit(habit.id)} 
      />
      <span style={{ textDecoration: habit.isCompleted ? "line-through" : "none" }}>
        {habit.name}
      </span>
      <button onClick={() => onDeleteHabit(habit.id)}>Delete</button> 
    </li>
  );
}
