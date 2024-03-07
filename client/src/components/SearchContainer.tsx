import { useState } from "react"
import { Icons } from "./Icons"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

export default function SearchContainer() {
	const [searchValue, setSearchValue] = useState("")

	return (
		<>
			{searchValue !== "" && (
				<div className="fixed inset-0 z-[50] bg-background/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" />
			)}
			<div
				className={cn(
					"absolute rounded-2xl border border-border bg-primary-foreground  max-w-xl w-full mb-3 transition-transform duration-300 z-[80]",
					{
						"scale-105 bg-background dark:bg-primary-foreground":
							searchValue !== "",
						"scale-100": searchValue === "",
					},
				)}
			>
				<div className="relative w-full flex px-3 py-2 ring-offset-background placeholder:text-muted-foreground pl-14 h-[65px]">
					<Icons.search className="h-4 w-4 text-[#4D4D4D] absolute left-6 -translate-y-2/4 top-2/4 " />
					<input
						value={searchValue}
						className="resize-none text-base bg-transparent w-full placeholder:text-[#777777] outline-none placeholder:text-[15px]"
						placeholder="Search"
						onChange={(e) => setSearchValue(e.target.value)}
					/>
				</div>
				{searchValue !== "" && (
					<div className="flex-1 max-h-[60vh] border-t border-border overflow-y-auto no-scrollbar">
						<div className="flex items-center w-full">
							<div className="mx-[30px]">
								<Icons.search className="h-4 w-4 text-[#4D4D4D]" />
							</div>
							<div className="flex justify-between items-center w-full py-5 mr-6 cursor-pointer">
								<div className="text-base font-semibold tracking-normal">
									{searchValue}{" "}
								</div>
								<ChevronRight className="h-5 w-5 text-secondary" />
							</div>
						</div>
						{/* <SearchResults /> */}
					</div>
				)}
			</div>
		</>
	)
}
