import React, { useState } from 'react';
import { TemplatesCollection } from '/imports/api/TemplatesCollection';

export const TemplateForm = () => {
    const [color, setColor] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        if (!color) return;

        TemplatesCollection.insert({
            color: color.trim(),
            createdAt: new Date()
        })

        setColor("");
    }

    return (
        <form className="template-form" onSubmit={handleSubmit}>
            <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />

            <button type="submit">Add Template</button>
        </form>
    );
};