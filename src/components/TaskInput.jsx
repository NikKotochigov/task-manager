import styled from "styled-components";

const Input = styled.input`
    outline: none;
    border-style: solid none none solid;
    border-right-color: initial;
    border-bottom-color: initial;
    border-image: initial;
    cursor: text;
    padding: 3px 3px 5px;
    background-color: rgb(255, 255, 255);
    border-width: 1px 0px 0px 1px;
    border-top-color: rgb(134, 138, 142);
    border-left-color: rgb(134, 138, 142);
    box-shadow: rgb(195 199 203) -1px -1px 0px 0px inset, rgb(0 0 0) 1px 1px 0px 0px inset, rgb(255 255 255) 0.5px 0.5px 0px 0.5px;
    appearance: none;
    margin-top: 0.5em;
    margin-left: 0.5em;
    margin-bottom: 1em;
    width: 95%;
}
`

function TaskInput(props) {
    const { currentTaskName, onChangeValue } = props
    return <Input placeholder="What are you working for?" value={currentTaskName} onChange={onChangeValue}/>
}

export default TaskInput