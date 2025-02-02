import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/auth/profile',{ withCredentials: true});
                // console.log(response.data)
                setUser(response.data);
            } catch (err) {
                // console.log(err)
                setError(err.message || "Failed to load profile");
                navigate("/signin"); // Redirect to login if unauthorized
            }
        };

        fetchProfile();
    }, [navigate]);

    if (error) return <p className="text-red-500">{error}</p>;
    if (!user) return <p>Loading...</p>;

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-xl font-bold mb-4">User Profile</h2>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>User ID:</strong> {user._id}</p>
            </div>
        </div>
    );
};

export default Profile;
