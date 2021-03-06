import styled from "@emotion/styled"
import {
  space,
  width,
  maxWidth,
  display,
  alignItems,
  justifyContent,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  textStyle,
  color,
  borders,
  borderColor,
} from 'styled-system'

const H5 = styled.h5(
  space,
  width,
  maxWidth,
  display,
  alignItems,
  justifyContent,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  textStyle,
  color,
  borders,
  borderColor,
  textStyle,
  {
    boxSizing: 'border-box',
  },
)

H5.defaultProps = {}

export default H5
