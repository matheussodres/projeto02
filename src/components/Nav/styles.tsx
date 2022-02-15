import styled from 'styled-components'
import * as T from './types'

export const Navbar = styled.div<T.Navbar>`
  background: blue;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`
