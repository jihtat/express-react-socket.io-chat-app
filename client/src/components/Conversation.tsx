import React from "react";
import { Card, CardBody } from "reactstrap";

export default function Conversation(props: { messages: string[] }) {
  return (
    <div className="">
      <Card body>
        <CardBody>
          <ul>
            {props.messages.map((message, index) => {
              return <li key={index}>{message}</li>;
            })}
          </ul>
        </CardBody>
      </Card>
    </div>
  );
}
