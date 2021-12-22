import React, { useState } from "react";
import { Button, Input } from "reactstrap";

export default function Message(props: {
  messages: string[];
  addMessage: any;
  sendmsg: any;
}) {
  const [msgInput, setmsgInput] = useState("");

  function handleClick() {
    props.addMessage([...props.messages, msgInput]);
    props.sendmsg(msgInput);
    setmsgInput("");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setmsgInput(e.target.value);
  }
  return (
    <div className="d-flex ">
      <Input bsSize="sm" name="msg" value={msgInput} onChange={handleChange} />
      <Button
        color="primary"
        outline
        size="sm"
        onClick={handleClick}
        style={{ width: "114px" }}
      >
        Send Message
      </Button>
    </div>
  );
}
