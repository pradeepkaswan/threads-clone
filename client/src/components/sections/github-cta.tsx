import { Icons } from "../../assets/icons"

const GitHubCTA = () => {
  return (
    <a
      href="https://github.com/pradeepkaswan/threads-clone-client"
      target="_blank"
    >
      <div className="hidden xl:flex min-w-[8rem]  border border-border bg-transparent p-1 rounded-full text-[14px] py-4 px-6 text-muted-foreground shadow-lg font-medium tracking-wide hover:scale-105 active:scale-95 cursor-pointer select-none transform transition-all duration-150 ease-out">
        <span className="flex justify-center items-center">
          <Icons.github className="mr-3 w-5 h-5" />
          <div className="text-[16px]">GitHub</div>
        </span>
      </div>
    </a>
  )
}

export default GitHubCTA
