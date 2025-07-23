"use client"

import { getRegExp } from 'korean-regexp'
import Link from 'next/link'
// import { useState } from 'react'
import MainPageSkeleton from "./MainPageSkeleton"
import Searchbar from './Searchbar'
import Thumbnail from "./Thumbnail"
import { useDispatch, useSelector } from 'react-redux'

const MainPageContainer = ({ pokemonArray }) => {
  
  // const [filterText, setFilterText] = useState("")
  // const [doFilterHeart, setDoFilterHeart] = useState(false)
  
  const filterText = useSelector((state) => state.filterTextState)
  const doFilterHeart = useSelector((state) => state.doFilterHeartState)

  

  if (pokemonArray.length === 0) { return <MainPageSkeleton /> }

  const regExp = getRegExp(filterText ? filterText.trim() : "")

  const isVisibleArray = pokemonArray.map((pokemon) => {
    if (!doFilterHeart) {
      return !!pokemon.name.match(regExp)
    }
  })

  return (
    <div className="w-full h-full overflow-hidden flex flex-col gap-3">
      <Searchbar />
      <div style={{ scrollbarColor: "oklch(0.5 0 0) transparent" }} className="flex-1 overflow-x-hidden overflow-y-scroll">

        <section className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
          {pokemonArray.map((pokemon, index) => (
            <Link key={index} href={`/${pokemon.pokemonIndex}`} className={`${!isVisibleArray[index] && "hidden"}`}>
              <Thumbnail pokemon={pokemon} />
            </Link>
          ))}
        </section>

      </div>
    </div>
  )
}

export default MainPageContainer