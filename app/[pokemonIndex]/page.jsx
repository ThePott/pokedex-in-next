import DetailPageContainer from "./_detailComponents/DetailPageContainer"

const DetailPage = async ({ params }) => {
  const resolvedParams = await params
  const pokemonIndex = Number(resolvedParams?.pokemonIndex) ?? 1

  return (
    <DetailPageContainer pokemonIndex={pokemonIndex} />
  )
}
export default DetailPage