import type { NextPage } from 'next'
import { Field, Form } from '../components'
/* import ReactPlayer from 'react-player'
 import { Button } from '../components/Button/styles' */

const Home: NextPage = () => {
  return (
    <div className="wrapper">
      {/* <Wrapper>children={}</Wrapper>
      <Nav>children={}</Nav>
      <Link>children={}</Link> */}
      {/* <span className="text">Olá mundo</span>
      <nav className="nav">
        <a className="link" href="https://www.facebook.com">
          {'Eu sou um link qualquer'}
        </a>{' '}
        | {''}
        <a className="link" href="https://www.github.com">
          {'Eu sou link do Github'}
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ckfjX0B-KfM"
            width={150}
            height={200}
          />
          <Button wight={150} height={200}></Button>
          
        </a>
      </nav> */}
      <Form>
        <Field.Text label="Email" name="email" type="email"></Field.Text>
      </Form>
    </div>
  )
}

export default Home
