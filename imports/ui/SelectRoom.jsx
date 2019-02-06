import React from 'react';

const onChange = changeRoom => event => {
  changeRoom(event.target.value);
};

export function SelectRoom({changeRoom, rooms}) {
  return (
    <div className="select-room">
      <select onChange={onChange(changeRoom)}>
        {rooms.map(r => (
          <option key={r._id} value={r._id}>{r.name}</option>
        ))}
      </select>
    </div>

  )
}