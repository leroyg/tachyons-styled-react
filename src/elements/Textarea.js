import styled from "@emotion/styled"
import {
  display,
  space,
  width,
  maxWidth,
  fontSize,
  color,
  borders,
  borderRadius
} from "styled-system"

const Textarea = styled.textarea(
  display,
  space,
  width,
  maxWidth,
  fontSize,
  color,
  borders,
  borderRadius,
  {
    overflow: "auto"
  }
)

Textarea.defaultProps = {}

export default Textarea
