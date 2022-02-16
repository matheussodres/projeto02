/* eslint-disable react/no-children-prop */
import type { NextPage } from 'next'
import { Wrapper, Nav, Link } from '../components'

const Home: NextPage = () => {
  return (
    <div className="wrapper">
      <Wrapper children={undefined}></Wrapper>
      <Nav children={undefined}></Nav>
      <Link children={undefined}></Link>
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
