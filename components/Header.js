export default function Header() {
  return (
    <header className="mt-[2em] text-center flex flex-col align-middle">
      <img 
        src="/dabaz.jpg" 
        alt="DabAZ"
        className="h-[8em] w-[8em] mx-auto rounded-full ring-4 ring-white shadow-xl"
      />
      <h1 className="mt-2 inline-block text-[3em] font-bold">
        DabAZ
      </h1>
      <p className="-mt-1 inline-block text-[1.2em] text-gray-600">
        I live my life.
      </p>
    </header>
  )
}