const ThumbnailSkeleton = () => {
  return (
    <div className="bg-zinc-800 border-1 border-zinc-700 h-[200px] flex flex-col items-center rounded-3xl" />
  )
}

const MainPageSkeleton = () => {
  return (
    <div className="w-full h-full overflow-hidden flex flex-col gap-3">
        
      <div className="w-full h-[74px] rounded-3xl border-1 border-zinc-700" />

      <div style={{ scrollbarColor: "oklch(0.5 0 0) transparent" }} className="flex-1 overflow-hidden overflow--scroll">
        <section className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
          {[...Array(30).keys()].map((_value, index) => <ThumbnailSkeleton key={index} />)}
        </section>
      </div>
    </div>
  )
}

export default MainPageSkeleton