type PatientDetailItemProps = {
    label: string
    data: string
}

export const PatientDetailItem = ({label, data}:PatientDetailItemProps) => {
  return (
    <>
        <p className="text-gray-700 mb-3 font-bold uppercase">
            {label}: <span className="font-normal normal-case">{data}</span>
        </p>
    </>
  )
}
