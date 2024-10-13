import next from "next";
import React from "react";

interface Users {
    id: number;
    name: string;
}

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });
    const users: Users[] = await res.json();

    return (
        <div>
            Users Page

            <ul>
                {users.map((user) => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    )
}

export default UsersPage;