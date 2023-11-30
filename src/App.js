import './App.css'
import Container from './components/Container'
import Section from './components/Section'
import Form from './components/Form'

const App = () =>{

  return (
    <Container>
      <Section>
        <h1> Formulario de registro: </h1>
        <Form />
      </Section>
    </Container>
  )
}

export default App;