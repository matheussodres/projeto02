import * as S from './styles'
import * as T from './types'

function Wrapper({ children, height, width }: T.Wrapper) {
  return (
    <S.Wrapper height={height} width={width}>
      {children}
    </S.Wrapper>
  )
}

export default Wrapper
