import styled from 'styled-components'
import TaskForm from './components/TaskForm';
import GlobalStyle from './globalStyles'

const Header = styled.h1`
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    font-weight: bold;
`
const AppDiscription = styled.div`
    height: 18px;
    margin-bottom: 8px;
    padding: 2px;
    background: rgb(127, 120, 127);
    color: rgb(198, 198, 198);
`

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Header>TASK TRACK 95</Header>
      <AppDiscription>BYASKAS.EXE</AppDiscription>
      <TaskForm />
    </div>    
  )
}

export default App;
