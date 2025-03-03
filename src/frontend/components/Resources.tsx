import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

function Resources() {
    return (
        <DropdownMenu>
            {/* Dropdown Trigger Button */}
            <DropdownMenuTrigger className="text-white">
                Resources
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                <DropdownMenuItem>
                    <Link to="/overview" className="block w-full px-4 py-2 hover:bg-gray-100">
                        Overview
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link to="/choosing-location" className="block w-full px-4 py-2 hover:bg-gray-100">
                        Choosing a Location
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link to="/obtaining-additional" className="block w-full px-4 py-2 hover:bg-gray-100">
                        Obtaining Additional Parameters
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link to="/centro-fuging" className="block w-full px-4 py-2 hover:bg-gray-100">
                        Centrifuging
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link to="/preservation" className="block w-full px-4 py-2 hover:bg-gray-100">
                        Preservation
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link to="/microscopy" className="block w-full px-4 py-2 hover:bg-gray-100">
                        Microscopy
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link to="/taking-images" className="block w-full px-4 py-2 hover:bg-gray-100">
                        Taking Images
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link to="/citation" className="block w-full px-4 py-2 hover:bg-gray-100">
                        Citation
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default Resources;
