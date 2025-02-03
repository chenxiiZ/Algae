import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import React from 'react';
export function Classify() {
    const [preview, setPreview] = useState<string>('');
    const [formData, setFormData] = useState({
        time: '',
        date: '',
        location: ''
    });
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => typeof reader.result === 'string' && setPreview(reader.result);
        reader.readAsDataURL(file);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Data:', { ...formData, image: preview });
        alert('Check console for form data');
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 space-y-6">
            {/* Image Upload Section */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFile}
                    ref={fileInputRef}
                    className="hidden"
                />

                {preview ? (
                    <div className="space-y-4">
                        <img
                            src={preview}
                            alt="Preview"
                            className="max-h-48 mx-auto rounded-lg object-cover"
                        />
                        <Button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            variant="outline"
                        >
                            Change Image
                        </Button>
                    </div>
                ) : (
                    <div
                        className="cursor-pointer space-y-2"
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <p className="text-gray-500">Click to upload an image</p>
                        <p className="text-sm text-gray-400">PNG, JPG, JPEG up to 5MB</p>
                    </div>
                )}
            </div>

            {/* Form Inputs */}
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-2">Time</label>
                    <input
                        name="time"
                        type="text"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-md"
                        placeholder="Example: 2:30 PM"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Date</label>
                    <input
                        name="date"
                        type="text"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-md"
                        placeholder="Example: March 15, 2024"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Location</label>
                    <input
                        name="location"
                        type="text"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-md"
                        placeholder="Example: Central Park, NY"
                    />
                </div>
            </div>

            <Button type="submit" className="w-full">Submit</Button>
        </form>
    );
}
export default Classify;