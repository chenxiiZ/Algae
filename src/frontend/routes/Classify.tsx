import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Classify() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-10 mt-4">Algae Image Classification</h1>

            {/* Upload Image Box */}
            <Card className="w-[40rem] shadow-md">
                <CardHeader>
                    <h2 className="text-xl font-medium text-center">
                        Upload an Image
                    </h2>
                </CardHeader>

                {/* Upload Area */}
                <CardContent>
                    {/* Upload Box */}
                    <div className="border border-gray-300 border-dashed h-[10rem] rounded-md p-6 text-center mb-6">
                        <Label
                            htmlFor="imageUpload"
                            className="block text-gray-500 cursor-pointer hover:text-gray-700"
                        >
                            <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                            >
                                <path
                                    d="M14 30v10h-4a2 2 0 01-2-2V22m26 18v-6m-17.5-9H23l3 4h8l-11-16m8 22h4a2 2 0 002-2V10m-8 22v4m-5-4v2a2 2 0 002 2h6"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className="mt-2 block text-sm font-medium">
                                Click to upload or drag-and-drop
                            </span>
                        </Label>
                        <Input
                            id="imageUpload"
                            type="file"
                            className="sr-only"
                            accept="image/*"
                        />
                    </div>

                    <div className="flex justify-center">
                        <Button variant="default">Re-upload</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}