import { useState } from "react";
import Users from "../Users";

export default function UserForm({
    handleSubmit,
    handCancel,
    initialState = {
        firstName = "",
        lastName = "",
        createdAt = "",
        id = "",
    }
}) {
    const [formData, setFormData] = useState(initialState)

    
}
