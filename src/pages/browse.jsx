import { BrowseContainer } from "../containers/browse";
import { useContent } from "../hooks";
import { selectionMap } from "../utils"

export default function Browse() {
  const { series } = useContent("series")
  const { films } = useContent("films")
  const slides = selectionMap({ series, films })

  console.log(slides)

  return <BrowseContainer />
}