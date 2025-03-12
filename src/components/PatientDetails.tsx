import { toast } from "react-toastify"
import { usePatientStore } from "../store"
import { Patient } from "../types"
import { PatientDetailItem } from "./PatientDetailItem"

type PatientDetailsProps = {
    patient: Patient
}

export const PatientDetails = ({ patient }: PatientDetailsProps) => {

    const deletePatient = usePatientStore(store => store.deletePatient)
    const getPatientById = usePatientStore(store => store.getPatientById)

    const handleDelete = () => {
        deletePatient(patient.id)
        toast.error('Paciente eliminado correctamente')
    }

    return (
        <div className="bg-white mx-5 my-10 px-5 py-10 shadow-md rounded-lg">
            <PatientDetailItem label="id" data={patient.id} />
            <PatientDetailItem label="nombre" data={patient.name} />
            <PatientDetailItem label="Propietario" data={patient.caretaker} />
            <PatientDetailItem label="email" data={patient.email} />
            <PatientDetailItem label="fecha alta" data={patient.date.toString()} />
            <PatientDetailItem label="Sintomas" data={patient.symptoms} />
            <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
                <button
                    onClick={ ()=>getPatientById(patient.id) }
                    className="bg-indigo-600 hover:bg-indigo-700 px-10 py-2 text-white font-bold uppercase 
                rounded-lg"
                >Editar
                </button>
                <button
                    onClick={handleDelete}
                    className="bg-red-600 hover:bg-red-700 px-10 py-2 text-white font-bold uppercase 
                rounded-lg"
                >Eliminar
                </button>
            </div>
        </div>

    )
}
