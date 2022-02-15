/* eslint-disable react/no-children-prop */
import type { NextPage } from 'next'
import { Wrapper, Nav, Link } from '../components'

const Home: NextPage = () => {
  return (
    <div className="wrapper">
      <Wrapper children={undefined} height={'50px'} width={'100px'}></Wrapper>
      <Nav></Nav>
      <Link></Link>
      <span className="text">Olá mundo</span>
      <nav className="nav">
        <a className="link" href="https://www.facebook.com">
          {'Eu sou um link'}
        </a>
        <a className="link" href="https://www.github.com">
          {'Eu sou outro link'}
        </a>
      </nav>
    </div>
  )
}

export default Home
