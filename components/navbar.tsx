export default function Navbar() {
  return (
    <>
      <div className="
        relative
        flex p-6
        border-b
        justify-between
        items-center
        top-0 sticky
        backdrop-blur bg-white/20
        overflow-hidden
        z-99
        ">
        <h2 className="text-xl">Aloblacar</h2>
        <div className="flex gap-3 items-center">
          <div>
            <button className="
              bg-blue-500
              text-white
              rounded-2xl
              px-3 py-1
              hover:scale-105
              hover:shadow-lg
              transition-all ease duration-250
              ">Log In</button>
          </div>
          <div>
            <button>Sign In</button>
          </div>
        </div>
      </div>
    </>
  )
}