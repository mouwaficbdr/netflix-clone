/* eslint-disable react/prop-types */
import { Spinner, LockBody, ReleaseBody, Picture } from "./styles/loading"

export default function Loading({children, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      {children}
    </Spinner>
  )
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />
}

// eslint-disable-next-line no-unused-vars
Loading.Picture = function LoadingPicture({ src, ...restProps }) {
      return <Picture src={`/images/users/${src}.png`} />
};