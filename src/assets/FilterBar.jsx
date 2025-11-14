import { ListFilterPlus } from "lucide-react";

export default function FilterBar() {
    return (
        <div className="bg-white px-4 flex items-center justify-between">
            <span className="text-[#807D7E] text-base font-medium">Filter</span>
            <ListFilterPlus className="text-[#807D7E] h-5 w-5" />
        </div>
    );
}
