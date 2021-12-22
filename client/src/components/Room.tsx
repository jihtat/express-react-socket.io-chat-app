import { useState } from "react";
import { Button, Input } from "reactstrap";
export default function Room(props: { setRoom: any }) {
  const [roomInput, setRoomInput] = useState("");

  function handleClick() {
    props.setRoom(roomInput);
    setRoomInput("");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setRoomInput(e.target.value);
  }
  return (
    <div className="d-flex ">
      <Input bsSize="sm" onChange={handleChange} />
      <Button
        color="primary"
        outline
        size="sm"
        style={{ width: "114px" }}
        onClick={handleClick}
      >
        Join Room
      </Button>
    </div>
  );
}
