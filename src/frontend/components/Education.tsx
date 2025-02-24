import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

function Education() {
    return (
        <DropdownMenu>
            {/* Dropdown Trigger Button */}
            <DropdownMenuTrigger className="text-white">
                Education
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                <DropdownMenuItem>
                    <Link to="/what-are-algae" className="block w-full px-4 py-2 hover:bg-gray-100">
                        What Are Algae?
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link to="/why-are-algae-important" className="block w-full px-4 py-2 hover:bg-gray-100">
                        Why Are Algae Important?
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link to="/problems-caused-by-algae" className="block w-full px-4 py-2 hover:bg-gray-100">
                        Problems Caused By Algae
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link to="/types-of-algae" className="block w-full px-4 py-2 hover:bg-gray-100">
                        Types of Algae
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link to="/algae-and-climate" className="block w-full px-4 py-2 hover:bg-gray-100">
                        Algae and Climate Change
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link to="/fun-facts" className="block w-full px-4 py-2 hover:bg-gray-100">
                        Fun Facts About Algae!
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default Education;