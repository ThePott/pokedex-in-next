"use client"

import { getRegExp } from 'korean-regexp'
import { useMemo } from 'react'
import { Provider, useSelector } from 'react-redux'
// import { useNavigate, useSearchParams } from 'react-router'
import MainPageSkeleton from "./_main-components/MainPageSkeleton"
import Thumbnail from "./_main-components/Thumbnail"
import Searchbar from './_main-components/Searchbar'
import store from './_store/RTK/store'
import { usePokemon } from './_hooks/hooks'

const MainPage = () => {
  // const [searchParams, _setSearchParams] = useSearchParams()
  // const navigate = useNavigate()

  const pokemonArray = useSelector((state) => state.pokemonArrayState)
  const doFilterHeart = useSelector((state) => state.doFilterHeartState)

  usePokemon()

  // const filterText = useMemo(() => searchParams.get("name") ?? "", [searchParams])
  const filterText = "" // --------------------------dummy---------------------------------
  const regExp = useMemo(() => getRegExp(filterText.trim()), [filterText])

  const isVisibleArray = useMemo(
    () => pokemonArray.map((pokemon) => {
      if (!doFilterHeart) {
        return !!pokemon.name.match(regExp)
      }

      return !!pokemon.name.match(regExp) && pokemon.doLike
    }),
    [pokemonArray, doFilterHeart, regExp]
  )



  if (pokemonArray.length === 0) { return <MainPageSkeleton /> }

  return (
    <div className="w-full h-full overflow-hidden flex flex-col gap-3">
      <Searchbar />
      <div style={{ scrollbarColor: "oklch(0.5 0 0) transparent" }} className="flex-1 overflow-x-hidden overflow-y-scroll">

        <section className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
          {pokemonArray.map((pokemon, index) => (
            // <div key={index} onClick={() => navigate(`/${pokemon.pokemonIndex}`)} className={`${!isVisibleArray[index] && "hidden"}`}>
            <div key={index} className={`${!isVisibleArray[index] && "hidden"}`}>
              <Thumbnail pokemon={pokemon} />
            </div>
          ))}
        </section>

      </div>
    </div>
  )
}

const WrappedPage = () => {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  )
}

export default WrappedPage