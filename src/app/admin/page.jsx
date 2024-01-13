"use client"
import axios from 'axios'
import { useState, useRef } from 'react'

import styles from '@/ModuleStyles/home.module.css';
import style from '@/ModuleStyles/headerDay.module.css';
import {
    InformacionGeneral,
    PropiedadesImagenes,
    MotorInfo,
    PropulsionInfo,
    SuspensionInfo,
    BrakeInfo,
    SteeringInfo,
    SpecialInfo,
} from '@/data/Propiedades';

function AdminPage() {
    const Mock = {
        Id: 0,
        name: "",
        PowerSteering: "",
        FrontBrakes: "",
        RearBrakes: "",
        SpecialPackage: "",
        MainImgUrl: "",
        ImageUrls0: "",
        ImageUrls1: "",
        ImageUrls2: "",
        ImageUrls3: "",
        ImageUrls4: "",
        Generation: "",
        Engine: "",
        ProductionYear: 0,
        EndYear: 0,
        BodyType: "",
        EngineArchitecture: "",
        NumberSeats: 0,
        NumberDoors: 0,
        FuelType: "",
        Power: "",
        Displacement: "",
        NumberCylinders: 0,
        EngineConfiguration: "",
        FuelInjectionSystem: "",
        Distributor: "",
        EngineOilCapacity: "",
        Length: "",
        Width: "",
        Height: "",
        Wheelbase: "",
        TurningDiameter: "",
        PropulsionArchitecture: "",
        Drivetrain: "",
        FrontSuspension: "",
        RearSuspension: "",
        SteeringType: "",
        TiresAndRimSizeSize: "",
        Trim: "",
        price: 0
    }

    const [product, setProduct] = useState(Mock)
    const form = useRef(null)

    const handleChange = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('api/cars', product)

        form.current.reset();
    }

    const renderPropertySection = ({ propertyArray, handleChange }) => {
        return (
            <div className='grid grid-cols-1 xl:grid-cols-4 '>
                {propertyArray.map((info, i) => (
                    <div key={i} >
                        <div className=''>
                            <label htmlFor={info.key} className='block my-1 text-black/90 font-bold text-lg'>
                                {info.key}
                            </label>
                            <input
                                type={info.type}
                                id={info.key}
                                name={info.key}
                                onChange={handleChange}
                                className='rounded-lg mb-2 mr-2 border-slate-200'
                                required
                            />
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className={`${styles.bg}`}>
            <div className={`py-8 flex justify-center`}>
                <div className={`bg-white rounded-lg w-fit ${styles.shadow} ${styles.border} px-4`}>
                    <div
                        className={`${styles.borderInside} bg-black/10 rounded-b-lg text-black/70 text-lg text-center py-4 font-bold`}
                    >
                        Insert New Car
                    </div>
                    <form className='p-4' ref={form} onSubmit={handleSubmit} >
                        <div className='bg-black/10 rounded-b-lg mb-4 px-4'>
                            {renderPropertySection({ propertyArray: InformacionGeneral, handleChange })}
                        </div>
                        <div className='bg-black/10 rounded-lg mb-4 px-4'>
                            {renderPropertySection({ propertyArray: PropiedadesImagenes, handleChange })}
                        </div>
                        <div className='bg-black/10 rounded-lg mb-4 px-4'>
                            {renderPropertySection({ propertyArray: MotorInfo, handleChange })}
                        </div>
                        <div className='bg-black/10 rounded-lg mb-4 px-4'>
                            {renderPropertySection({ propertyArray: PropulsionInfo, handleChange })}
                        </div>
                        <div className='bg-black/10 rounded-lg mb-4 px-4'>
                            {renderPropertySection({ propertyArray: SuspensionInfo, handleChange })}
                        </div>
                        <div className='bg-black/10 rounded-lg mb-4 px-4'>
                            {renderPropertySection({ propertyArray: BrakeInfo, handleChange })}
                        </div>
                        <div className='bg-black/10 rounded-lg mb-4 px-4'>
                            {renderPropertySection({ propertyArray: SteeringInfo, handleChange })}
                        </div>
                        <div className='bg-black/10 rounded-lg mb-4 px-4'>
                            {renderPropertySection({ propertyArray: SpecialInfo, handleChange })}
                        </div>
                        <div className='flex justify-center'>
                            <button className={`${style.btn} px-6 py-2 w-full`}>Insert Car</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AdminPage;
