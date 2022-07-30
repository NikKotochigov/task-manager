import styled from "styled-components";
import { useEffect, useState } from "react";
import ClearButton from "./ClearButton";
import TaskButton from "./TaskButton";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList"
import Timer from "./Timer";

const Form = styled.div`
    padding: 1em;
    width: 350px;
    height: auto;
    background-color: rgb(195, 199, 203);
    --x-shadow: inset 0.5px 0.5px 0px 0.5px #ffffff, inset 0 0 0 1px #868a8e, 1px 0px 0 0px #000000, 0px 1px 0 0px #000000, 1px 1px 0 0px #000000;
    box-shadow: var(--x-ring-shadow,0 0 #0000),var(--x-shadow);
`
const Fieldset = styled.fieldset`
    margin-top: 0.5em;
    border-style: groove solid solid groove;
    border-width: 2px 1px 1px 2px;
    border-color: rgb(230, 230, 230) rgb(134, 138, 142) rgb(134, 138, 142) rgb(230, 230, 230);
    box-shadow: rgb(230 230 230) 1px 1px 0px 0px;
    margin-bottom: 2em;
`

const Legend = styled.legend`
    padding-left: 4px;
    padding-right: 1px;
`

const TimerHeader = styled.div`
    display: flex;
    padding-bottom: 10px;
`

const ListConteiner = styled.div`
    width: 100%;
    overflow-y: scroll;
    height: 300px;
    --x-shadow: inset 0px 0px 0px 0px, inset 1px 1px 0px 0px #868a8e, 0.5px 0.5px 0px 0.5px #ffffff;
    box-shadow: var(--x-ring-shadow,0 0 #0000),var(--x-shadow);
    background-color: rgb(195, 199, 203);
    margin-bottom: 2em;
`

const FooterContainer = styled.div`
    display: flex;
`

const TotalTimeFooter = styled.div`
    display:flex;
`

const TotalIns = styled.div`
    font-size: 12px;
    padding-left: 1em;
    padding-top: 7px;
    vertical-align: middle;
`

function TaskForm() {

    const [time, setTime] = useState({
        h: 0,
        m: 0,
        s: 0
    })
    const [totalTime, setTotalTime] = useState(() => {
        let totalTime = JSON.parse(localStorage.getItem("totalTime"))
        if (totalTime) {
            return totalTime
        }
        return {
            h: 0,
            m: 0,
            s: 0
        }
    }
    )

    const [interv, setInterv] = useState()
    const [isStarted, setIsStarted] = useState(false)
    const [currentTaskName, setCurrentTaskName] = useState("")
    const [taskItems, setTaskItems] = useState(() => {
        let taskItems = JSON.parse(localStorage.getItem("taskItems"))
        if (taskItems) {
            return taskItems
        }
        return []
    })

    useEffect(() => {
        localStorage.setItem("taskItems", JSON.stringify(taskItems))
    }, [taskItems])

    useEffect(() => {
        localStorage.setItem("totalTime", JSON.stringify(totalTime))
    }, [totalTime])

    function onClickStart() {
        if (isStarted) {
            stop()
        } else {
            setInterv(setInterval(run, 1000))
        }
        setIsStarted(isStarted => !isStarted)
    }

    function onChangeValue(event) {
        setCurrentTaskName(event.target.value)
    }

    const run = () => {
        if (time.s === 59) {
            time.s = 0
            if (time.m === 59) {
                time.m = 0
                time.h += 1
            } else {
                time.m += 1
            }
        } else {
            time.s += 1
        }
        setTime({
            h: time.h,
            m: time.m,
            s: time.s
        })
    }

    const stop = () => {
        clearInterval(interv)
        setTotalTime({
            h: totalTime.h + time.h,
            m: totalTime.m + time.m,
            s: totalTime.s + time.s
        })
        setTime({
            h: 0,
            m: 0,
            s: 0
        })
        setTaskItems([...taskItems, {
            name: currentTaskName,
            time: time
        }]);
    }

    return (
        <Form>
            <Fieldset>
                <Legend>Current Task</Legend>
                <TaskInput
                    currentTaskName={currentTaskName}
                    onChangeValue={onChangeValue}
                />
                <TimerHeader>
                    <TaskButton
                        onClickStart={onClickStart}
                        isStarted={isStarted}
                    />
                    <Timer time={time} />
                </TimerHeader>
            </Fieldset>
            <p>History:</p>
            <ListConteiner>
                <TaskList
                    taskItems={taskItems}
                    setTaskItems={setTaskItems}
                    setTime={setTime}
                    setCurrentTaskName={setCurrentTaskName}
                    setIsStarted={setIsStarted}
                    onClickStart={onClickStart}
                    setTotalTime={setTotalTime}
                    totalTime={totalTime}
                />
            </ListConteiner>
            <FooterContainer>
                <ClearButton
                    setTaskItems={setTaskItems}
                    setTotalTime={setTotalTime}
                />
                <TotalTimeFooter>
                    <TotalIns>Total:</TotalIns>
                    <Timer time={totalTime} />
                </TotalTimeFooter>
            </FooterContainer>
        </Form>
    )
}

export default TaskForm