import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { CarTaxiFront } from 'lucide-react';

export default function CardCar({ model, year, lastService }) {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Model: {model}</CardTitle>
                <CardDescription>year: {year}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-center">
                    <CarTaxiFront className="fill-primary stroke-primary" size={60} />
                </div>
            </CardContent>
            <CardFooter>
                <p>Entretien: {lastService}</p>
            </CardFooter>
        </Card>
    )
}
