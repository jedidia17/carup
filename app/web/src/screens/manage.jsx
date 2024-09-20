import { useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useEffect } from 'react';
import axiosInstance from '@/config/axios.config';
import CardCar from '@/components/shared/card-car';
export default function Manage() {
    const [carList, setCarList] = useState([]);

    useEffect(() => {
        try {
            async function fetctData() {
                const response = await axiosInstance.get(`/api/v1/cars/`);
                console.log(response.data);
                setCarList(response.data);
            }
            fetctData();
        } catch {

        } finally {

        }
    }, []);

    return (
        <div className='flex flex-col h-screen p-4'>
            <p>List of cars</p>
            <div className='my-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12'>
                {
                    carList?.filter(car => car.userId === localStorage.getItem('id'))?.map(car => (
                        <CardCar model={car.model} year={car.year} lastService={car.lastService} />
                    ))
                }
                <CardCar />
            </div>
        </div>
    );
}