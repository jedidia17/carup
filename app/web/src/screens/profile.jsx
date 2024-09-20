import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Profile() {


    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/v1/profile'); // Adjust the URL as necessary
                setUser(response.data);
                setFormData({ name: response.data.name, email: response.data.email, password: '' });
            } catch (error) {
                console.error('Error fetching user profile:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    const handleEditToggle = () => {
        setEditing(!editing);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put('http://localhost:8000/api/v1/profile', formData); // Adjust the URL as necessary
            setUser(response.data);
            setEditing(false);
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">User Profile</h1>
            {editing ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border border-gray-300 p-2 w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border border-gray-300 p-2 w-full"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="border border-gray-300 p-2 w-full"
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save Changes</button>
                    <button type="button" onClick={handleEditToggle} className="text-gray-500 ml-2">Cancel</button>
                </form>
            ) : (
                <div>
                    <p><strong>Name:</strong> {user?.name}</p>
                    <p><strong>Email:</strong> {user?.email}</p>
                    <button onClick={handleEditToggle} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Edit Profile</button>
                </div>
            )}
        </div>
    );
}