/* eslint-disable react/prop-types */
import {Container, Input, Button, Text, Break} from "./styles/opt-form"

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

OptForm.Input = function OptFormInput({...restProps }) {
  return <Input {...restProps}/>
}

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return <Button {...restProps}>
    {children}
    <img src="/images/icons/chevron-right.png" alt="Try Now"/>
  </Button>
}

OptForm.Break = function OptFormBreak({...restProps }) {
  return <Break {...restProps} />
}

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}