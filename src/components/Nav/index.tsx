import * as S from './styles'
import * as T from './types'

function Navbar({ children, height, width }: T.Navbar) {
  return (
    <S.Navbar height={height} width={width}>
      {children}
    </S.Navbar>
  )
}

export default Navbar
