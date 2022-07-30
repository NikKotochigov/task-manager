import styled from "styled-components";

const TimerButton = styled.button`
    width: 70px;
    background-color: rgb(195, 199, 203);
    padding: 7px 20px 5px;
    border: none;
    color: rgb(0, 0, 0);
    font-size: 12px;
    margin-left: 0.5em;
    box-shadow: rgb(255 255 255) 1px 1px 0px 1px inset, rgb(134 138 142) 0px 0px 0px 1px inset, rgb(0 0 0) 1px 1px 0px 0px;
}
`

function TaskButton(props) {
    return <TimerButton onClick={props.onClickStart} >
        {(props.isStarted) ? "Stop" : "Start"}
    </TimerButton>
}

export default TaskButton