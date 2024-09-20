import { useState, useEffect } from 'react';
import UploadButton from '@/components/shared/upload-button';
import axiosInstance from '@/config/axios.config';
import { Button } from '@/components/ui/button';
export default function Dashboard() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await axiosInstance.get('/api/v1/cars');
                setCars(response.data);
            } catch (error) {
                console.error('Error fetching cars:', error);
            }
        };

        fetchCars();
    }, []);

    return (
        <>
            <div className="h-screen p-4">
                <header className="mb-4 flex items-center justify-between">
                    <h1 className="text-3xl font-bold">Maintenance Reminder</h1>
                    <UploadButton />
                </header>


                <div className="p-4">
                    <h2 className="text-xl font-semibold mt-6">My Cars</h2>
                    <table className="min-w-full border-collapse border border-gray-300 mt-4">
                        <thead>
                            <tr>
                                <th className="border border-gray-300 p-2">Model</th>
                                <th className="border border-gray-300 p-2">Year</th>
                                <th className="border border-gray-300 p-2">Last Service</th>
                                <th className="border border-gray-300 p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cars?.filter(car => car.userId === localStorage.getItem('id'))?.map(car => (
                                <tr key={car.id}>
                                    <td className="border border-gray-300 p-2">{car.model}</td>
                                    <td className="border border-gray-300 p-2">{car.year}</td>
                                    <td className="border border-gray-300 p-2">{car.lastService ?? ""}</td>
                                    <td className="border border-gray-300 p-2 flex items-center gap-4">
                                        {/* Edit and Delete buttons can be added here */}
                                        <Button>Edit</Button>
                                        <Button variant="destructive">Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    );
}