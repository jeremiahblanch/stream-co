import Content from '../../page-sections/Content/Content'
import TileGrid from '../../components/TileGrid/TileGrid'

import tiles from './content/tiles';

function Home() {
  return (
      <Content title="Popular Titles">
        <TileGrid tiles={tiles} />
      </Content>
  )
}

export default Home
