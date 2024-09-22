
import { Intro } from './components/intro'

import '../index.css'
import { OurCoffees } from './components/our-coffees'
import { Header } from '@/components/header'
import { Container, Content } from './styles'

function App() {

  return (
    <Container>
      <Content>
        <Header />
        <Intro />
        <OurCoffees />
      </Content>
    </Container>

  )
}

export default App
