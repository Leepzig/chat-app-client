import React from 'react'
import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles';

const MessageLine = ({msg, currentUser}) => {

  const colors = ['green', 'brown', 'orange', 'purple', 'indigo', 'black', 'gold', 'yellow', 'ruby', 'forest-green']

  const getRandomElement = (arr) => {
    const index = Math.floor(Math.random() * arr.length)
    const result = arr[index]
    arr.splice(index, 1)
    return result
  }

    const Div = styled('div')(({ theme }) => ({
        ...theme.typography.body1,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
      }));
    const Username = styled('span')(({ theme }) => ({
        ...theme.typography.body1,
        fontWeight:'bold',
        color: msg.user = getRandomElement(colors),
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
      }));
    const Time = styled('span')(({ theme }) => ({
        ...theme.typography.body1,
        fontWeight:'bold',
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
      }));

  return (
    <>
        {/* <Typography variant="body1">{msg.user}</Typography> */}
        <Div><Username>{msg.user}</Username> <Time>{msg.time}</Time>{msg.content}</Div>
    </>
  )
}

export default MessageLine