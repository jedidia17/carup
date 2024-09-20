import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import axiosInstance from "@/config/axios.config";

export default function UploadButton() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = async (data) => {
        console.log(data);
        // Assuming you've gathered your data here
        const carData = {
            userId: localStorage.getItem("id"),
            model: data.model,
            year: parseInt(data.year),
            lastService: data.lastService,
        };

        try {
            const response = await axios.post("http://localhost:8000/api/v1/cars", carData);
            console.log('Car created:', response.data);
        } catch (error) {
            console.error('Error creating car:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Ajouter un Vehicule</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogHeader>
                        <DialogTitle>Ajouter un vehicule</DialogTitle>
                        <DialogDescription>
                            En ajoutant vos informations de votre vehicule nous permettrant de bien vous servir
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <Input
                            defaultValue="Model"
                            className="col-span-3"
                            {...register('model', { required: 'Model is required' })}
                        />
                        {errors.model && <p className="text-red-500">{errors.model.message}</p>}
                        <Input
                            defaultValue="Year"
                            className="col-span-3"
                            {...register('year', { required: 'Year is required' })}
                        />
                        {errors.year && <p className="text-red-500">{errors.year.message}</p>}
                        <Input
                            defaultValue="Last Service"
                            className="col-span-3"
                            {...register('lastService', { required: 'Last service is required' })}
                        />
                        {errors.lastService && <p className="text-red-500">{errors.lastService.message}</p>}
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
