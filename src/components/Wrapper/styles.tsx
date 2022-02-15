import styled from 'styled-components'
import * as T from './types'

export const Wrapper = styled.div<T.Wrapper>`
  background: blue;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`
