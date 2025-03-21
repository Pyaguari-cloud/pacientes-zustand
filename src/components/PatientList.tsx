import { usePatientStore } from "../store"
import { PatientDetails } from "./PatientDetails"

export const PatientList = () => {

    const patients = usePatientStore(store => store.patients)
    
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {
                patients.length ? (
                    <>
                        <h2 className="font-black text-3xl text-center">
                            Listado de Pacientes
                        </h2>
                        <p className="text-xl text-center mt-5 mb-10">
                            Administra tus {''}
                            <span className="text-indigo-600 font-bold">
                                Pacientes y Citas
                            </span>
                        </p>
                        {
                            patients.map( patient => (
                                <PatientDetails
                                    key={patient.id}
                                    patient={patient}
                                />
                            ))
                        }
                    </>
                ) : (
                    <>
                        <h2 className="font-black text-3xl text-center">
                            No hay pacientes
                        </h2>
                        <p className="text-xl text-center mt-5 mb-10">
                            Comienza agregando pacientes {''}
                            <span className="text-indigo-600 font-bold">
                                y apareceran en este lugar
                            </span>
                        </p>
                    </>
                )
            }
        </div>
    )
}
