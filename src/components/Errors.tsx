
export const Errors = ({children}:{children:React.ReactNode}) => {
  return (
    <p className="bg-red-600 text-center text-white text-sm uppercase font-bold p-2 mt-4 ">
        {children}
    </p>
  )
}
