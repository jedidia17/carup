// src/Notifications.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/v1/cars');
                const upcomingNotifications = response.data.filter(car => {
                    const lastServiceDate = new Date(car.lastService);
                    const today = new Date();
                    const daysUntilService = Math.ceil((lastServiceDate - today) / (1000 * 60 * 60 * 24));

                    // Assuming a reminder should be sent if the service is due within the next 30 days
                    return daysUntilService >= 0 && daysUntilService <= 30;
                });

                setNotifications(upcomingNotifications);
            } catch (error) {
                console.error('Error fetching notifications:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchNotifications();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Upcoming Service Notifications</h1>

            {notifications.length === 0 ? (
                <p>No upcoming services.</p>
            ) : (
                <ul className="space-y-2">
                    {notifications.map(car => (
                        <li key={car.id} className="border border-gray-300 p-4 rounded shadow">
                            <h2 className="font-semibold">{car.model} ({car.year})</h2>
                            <p>Last Service Date: {car.lastService ? new Date(car.lastService).toLocaleDateString() : 'N/A'}</p>
                            <p>
                                {new Date(car.lastService) > new Date()
                                    ? 'Service due soon!'
                                    : 'Service overdue!'}
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Notifications;