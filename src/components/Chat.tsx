import { Box, Button, Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import React, { useState } from "react";
import axios from "axios";

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<any>([]);

  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    // Make a request to the ChatGPT API with the user input
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: input },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer YOUR_OPENAI_API_KEY`,
        },
      }
    );

    setMessages([
      ...messages,
      { role: "assistant", content: response.data.choices[0].message.content },
    ]);

    setInput("");
  };

  return (
    <div className="main-styling">
     <Box>
        {messages.map((message: any, index: number) => (
          <div key={index} className={message.role}>
            {message.content}
          </div>
        ))}
     </Box>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Message UnstuckGPT"
          variant="outlined"
          value={input}
          onChange={handleInputChange}
          sx={{
            color: "#61dafb",
            borderRadius: 1000, // Set border radius
            borderColor: "#61dafb", // Set border color
            "& fieldset": {
            
              borderColor: "#61dafb"
            },
          }}
        />
        <ArrowCircleRightIcon onClick={handleSendMessage}/>
      </Box>

    </div>
  );
};

export default Chat;
