import { client } from "../client.js";

export default class CarController {
    static async create(req, res) {
        const { userId, model, year, lastService } = req.body;
        try {
            const car = await client.car.create({
                data: {
                    userId,
                    model,
                    year,
                    lastService,
                },
            });
            res.status(201).json(car);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Failed to create car' });
        }
    }

    static async read(req, res) {
        const { id } = req.params;

        try {
            const car = await client.car.findUnique({
                where: { id },
            });
            if (!car) {
                return res.status(404).json({ error: 'Car not found' });
            }
            res.status(200).json(car);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch car' });
        }
    }

    static async update(req, res) {
        const { id } = req.params;
        const { model, year, lastService } = req.body;

        try {
            const car = await client.car.update({
                where: { id },
                data: { model, year, lastService },
            });
            res.status(200).json(car);
        } catch (error) {
            res.status(500).json({ error: 'Failed to update car' });
        }
    }

    static async remove(req, res) {
        const { id } = req.params;

        try {
            await client.car.delete({
                where: { id },
            });
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete car' });
        }
    }

    static async list(_, res) {
        try {
            const cars = await client.car.findMany();
            res.status(200).json(cars);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch cars' });
        }
    }
}