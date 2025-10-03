import React, { useState } from 'react'
import clsx from 'clsx'
import { callApi } from '../../utils/functions/callApi'

import { inputBase } from '../../utils/ui/inputs'
import { buttonBase, buttonVariants, buttonSizes } from '../../utils/ui/buttons'

export default function Authentication() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const authenticate = (e) => {
    e.preventDefault();
    callApi("get", "/facts")
        .then((data) => console.log("Cat Facts:", data))
        .catch((err) => console.error("Error:", err));
    };

    return (
        <div id="auth-page" className="min-w-[500px] mx-auto">
            <h1 className="text-3xl font-bold">Login Page</h1>
            <p className="my-5">Please log in to access your account.</p>
            <form className="flex flex-col gap-5" onSubmit={authenticate}>
                <input type="text" value={formData.username} name="username" onChange={handleChange} placeholder="Username" className={inputBase} />
                <input type="password" value={formData.password} name="password" onChange={handleChange} placeholder="Password" className={inputBase} />
                <input type="submit" value="Login" className={clsx(buttonBase, buttonVariants.default, buttonSizes.md)} />
            </form>
        </div>
    )
}