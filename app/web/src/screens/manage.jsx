import { useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import {Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Manage() {
    const [carName, setCarName] = useState('');
    const [cars, setCars] = useState([]);

    const addCar = async () => {
        try {
            await axios.post('http://localhost:8000/api/v1/cars/', { name: carName });
            setCars([...cars, { name: carName }]);
            setCarName('');
        } catch (error) {
            console.error('Error adding car:', error);
        }
    };

    const removeCar = async (carId) => {
        try {
            await axios.delete(`http://localhost:8000/api/v1/cars/${carId}`);
            setCars(cars.filter(car => car.id !== carId));
        } catch (error) {
            console.error('Error removing car:', error);
        }
    };
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-2xl">Manage Cars</h2>
            <div className="mb-4">
                <Label htmlFor="carName">Car Name</Label>
                <Input
                    id="carName"
                    type="text"
                    value={carName}
                    onChange={(e) => setCarName(e.target.value)}
                />
                <Button onClick={addCar}>Add Car</Button>
            </div>
            <ul>
                {cars.map(car => (
                    <li key={car.id}>
                        {car.name}
                        <Button onClick={() => removeCar(car.id)}>Remove</Button>
                    </li>
                ))}
            </ul>
        </div>
    );
}