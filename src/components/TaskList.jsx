import styled from "styled-components";
import { useEffect, useState } from "react"
import Timer from "./Timer"

const List = styled.ul`
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    padding: 0px;
    margin: 1px;
`

const ListElement = styled.li`
    display: list-item;
    text-align: -webkit-match-parent;
    background: rgb(255, 255, 255);
    margin-top: 1px;
`

const ListElementConteiner = styled.div`
    display: flex;
`
const ListButton = styled.button`
    background-color: white;
    color: black;
    border: none;
    padding: 5px;
    font-size: 16px;
    border-radius: 0px;
    cursor: pointer;
    transition: opacity 200ms ease-out 0s;
    width: 36px;
`

const ListInput = styled.input`
    border: none;
    background-color: white;
    outline-style: none;
`

function TaskList(props) {

    const { taskItems, setTaskItems, setTime, setCurrentTaskName, onClickStart, setTotalTime, totalTime } = props
    const [isClickedRestart, setIsClickedRestart] = useState(0)

    useEffect(() => {
        if (isClickedRestart) {
            onClickStart()
        }
    }, [isClickedRestart])

    function handleOnChange(event, index) {
        const copy = Object.assign([], taskItems)
        copy[index].name = event.target.value
        setTaskItems(copy)
    }

    function handleRestart(item) {
        setTime({
            h: item.time.h,
            m: item.time.m,
            s: item.time.s
        })
        setTotalTime({
            h: totalTime.h - item.time.h,
            m: totalTime.m - item.time.m,
            s: totalTime.s - item.time.s
        })
        setCurrentTaskName(item.name)
        deleteTask(item)
        setIsClickedRestart(isClickedRestart + 1)
    }

    function handleDelete(item) {
        deleteTask(item)
        setTotalTime({
            h: totalTime.h - item.time.h,
            m: totalTime.m - item.time.m,
            s: totalTime.s - item.time.s
        })
    }

    function deleteTask(currItem) {
        setTaskItems(taskItems.filter((item) => {
            return currItem !== item
        }))
    }

    return (
        <List>
            {taskItems.map((item, index) =>
                <ListElement key={index}>
                    <ListElementConteiner>
                        <ListButton onClick={() => handleRestart(item)}>▶</ListButton>
                        <ListButton onClick={() => handleDelete(item)}>✖</ListButton>
                        <ListInput value={item.name} onChange={(event) => handleOnChange(event, index)} />
                        <Timer time={item.time} />
                    </ListElementConteiner>
                </ListElement>
            )}
        </List>
    )
}

export default TaskList
