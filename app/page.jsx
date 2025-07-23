import { getAllPokemonSsr } from '@/_utils/apiUtils'
import MainPageSkeleton from "./_mainComponents/MainPageSkeleton"

import MainPageContainer from "./_mainComponents/MainPageContainer"

const MainPage = async () => {
  const pokemonArray = await getAllPokemonSsr()

  if (pokemonArray.length === 0) { return <MainPageSkeleton /> }

  return (
    <MainPageContainer pokemonArray={pokemonArray} />
  )
}

export default MainPage