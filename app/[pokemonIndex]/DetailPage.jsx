import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import HeartButton from '../../components/HeartButton'
import BackButton from '../../components/BackButton'
import DetailPageSkeleton from "./DetailPageSkeleton"

const commonFlipSx = {
  transitionProperty: "transform",
  transitionDuration: "0.5s",
  transitionTimingFunction: "cubic-bezier(.01,.81,.09,1.13)"
}

const imgFlipSx = {
  ...commonFlipSx,
  backfaceVisibility: "hidden",
}

const ImageSkeleton = () => {
  return (
    <div className="flex-1 w-full rounded-3xl border-1 border-amber-950 absolute z-10 h-full" />
  )
}

const FrontBackImage = React.memo(({ pokemon, isFront }) => {
  const [isLoadedArray, setIsLoadedArray] = useState({ front: false, back: false })

  const baseStyle = `flex-1 absolute w-full h-full object-contain scale-150`
  const frontStyle = `${baseStyle} ${isFront ? "" : "rotate-y-180"}`
  const backStyle = `${baseStyle} ${!isFront ? "" : "rotate-y-180"}`

  const isLoaded = useMemo(
    () => Object.values(isLoadedArray).reduce((acc, cur) => acc && cur, true),
    [isLoadedArray]
  )

  const handleLoad = (isForFront) => {
    setIsLoadedArray((prev) => {
      if (isForFront) {
        return { ...prev, front: true }
      }
      return { ...prev, back: true }
    })
  }

  return (
    <div className={`relative select-none flex-1 w-full pointer-events-none`}>
      {!isLoaded && <ImageSkeleton />}
      <img onLoad={() => handleLoad(true)} style={imgFlipSx} src={pokemon.front} alt={`${pokemon.name}__front`} className={frontStyle} />
      <img onLoad={() => handleLoad(false)} style={imgFlipSx} src={pokemon.back} alt={`${pokemon.name}__back`} className={backStyle} />
    </div>
  )
})

const FlippingBackground = React.memo(({ isFront }) => {
  return (
    <div style={{ ...commonFlipSx, transform: `rotateY(${isFront ? 0 : 180}deg)` }}
      className="bg-zinc-800 w-[600px] h-[600px] rounded-3xl absolute top-0 left-0 -z-10"></div>
  )
})

const DetailPage = () => {
  const [isFront, setIsFront] = useState(true)
  const [isMouseOver, setIsMouseOver] = useState(false)

  const pokemonArray = useSelector((state) => state.pokemonArrayState)

  const params = useParams()
  if (!params) { return null }

  const pokemonIndex = Number(params.pokemonIndex) ?? 1
  const pokemon = pokemonArray.find((pokemon) => pokemon.pokemonIndex === pokemonIndex)

  if (!pokemon) { return <DetailPageSkeleton /> }

  const buttonText = isFront ? "등이 가려워!" : "배가 가려워!"

  return (
    <div className="w-[600px] h-[600px] flex flex-col items-center rounded-3xl overflow-hidden p-6 px-16 gap-3 mx-auto mt-15 relative"
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}>

      <FlippingBackground isFront={isFront} />
      <BackButton />
      <HeartButton pokemon={pokemon} isBig={true} />

      <h2 className="text-4xl font-semibold">{pokemon.name}</h2>
      <p className="text-xl break-keep">{pokemon.text}</p>

      <FrontBackImage pokemon={pokemon} isFront={isFront} isMouseOver={isMouseOver} />

      <button onClick={() => setIsFront((prev) => !prev)}
        className="transition p-6 bg-zinc-900 border-1 border-zinc-300 rounded-3xl text-xl  hover:bg-zinc-950 active:border-zinc-500">{buttonText}</button>

    </div>
  )
}

export default DetailPage