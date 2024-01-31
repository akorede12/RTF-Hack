import { FaAirbnb } from 'react-icons/fa'
import Link from 'next/link'
import { ConnectBtn } from '.'

const Header = () => {
  return (
    <header
      className="flex justify-between items-center p-4 px-8
    sm:px-10 md:px-14 border-b-2 border-b-slate-900 w-full bg-cyan-300"
    >
      <Link href={'/'}>
        <p className="text-cyan-800 flex items-center text-3xl">
          {/* <FaAirbnb className=" font-semibold" /> */}
          BookingBox-TX
        </p>
      </Link>

      <ButtonGroup />
      <ConnectBtn />
    </header>
  )
}

const ButtonGroup = () => {
  return (
    <div
      className="md:flex hidden items-center justify-center border-slate-900
      border overflow-hidden rounded-md cursor-pointer"
    >
      <div className="inline-flex" role="group">
        <Link href={'/about/about'}>
        <button
          className="
            px-5
            py-3
            text-cyan-800
            font-medium
            text-sm
            leading-tight
            hover:bg-black hover:bg-opacity-5
            focus:outline-none focus:ring-0
            transition
            duration-150
            ease-in-out
          "
        >
          About
        </button>
        </Link>
        <Link href={'/room/add'}>
          <button
            type="button"
            className="
              px-5
              py-3
              border-x border-slate-900
              text-cyan-800
              font-medium
              text-sm
              leading-tight
              hover:bg-black hover:bg-opacity-5
              focus:outline-none focus:ring-0
              transition
              duration-150
              ease-in-out
            "
          >
            Add Rooms
          </button>
        </Link>

        <button
          className="
            px-5
            py-3
            text-cyan-800
            font-medium
            text-sm
            leading-tight
            hover:bg-black hover:bg-opacity-5
            focus:outline-none focus:ring-0
            transition
            duration-150
            ease-in-out
          "
        >
          <p className="flex items-center">Any week</p>
        </button>
      </div>
    </div>
  )
}

export default Header
