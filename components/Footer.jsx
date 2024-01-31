import { FiGlobe } from 'react-icons/fi'

const Footer = () => {
  return (
    <div
      className="fixed left-0 right-0 bottom-0 px-20 py-6 flex flex-col sm:flex-row
    justify-center sm:justify-between bg-cyan-300 border-t-2 border-t-slate-900 z-50"
    >
      <p className="flex space-x-4 items-center text-cyan-900 text-lg">
        With ♥️ BookingBox-TX &copy;{new Date().getFullYear()}
      </p>
      <div className="flex space-x-4 justify-center items-center font-semibold text-lg">
        <FiGlobe />
        <p>English (US)</p>
      </div>
    </div>
  )
}

export default Footer
