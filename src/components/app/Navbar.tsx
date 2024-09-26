import Link from "next/link";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Navbar() {
	return (
		<nav className="fixed left-0 top-0 z-20 mx-auto flex h-[88px] w-full items-center border-b-4 border-border dark:border-darkNavBorder bg-white dark:bg-secondaryBlack px-5 m500:h-16">
			<div className="mx-auto flex w-[1300px] dark:text-darkText text-text max-w-full items-center justify-between">

				<div className="flex items-center gap-10">
					<Link className="text-[20px] w-[172px] m900:w-[unset] font-heading m500:text-xl" href={'/'}>
						FIVE FRIENDS STORE
					</Link>
				</div>

				<div className="flex items-center gap-10 m900:hidden">
					{/* <Link className="text-xl font-base" href="/docs">
						Docs
					</Link> */}

					{/* <NavDropdown /> */}

					{/* <Link className="text-xl font-base" href="/templates">
						Templates
					</Link> */}

				</div>

				<div className="flex w-[172px] items-center justify-end gap-5 m800:w-[unset] m400:gap-3">
					<a
						target="_blank"
						href="https://shopee.co.id/five_friendsstoreshop"
						className="m800:hidden flex items-center justify-center rounded-base border-2 border-border shadow-nav dark:shadow-navDark dark:border-darkBorder p-2 transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none dark:hover:shadow-none"
					>
						<svg
							className="h-6 w-6 m500:h-4 m500:w-4"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 192 192"
						>
							<path
								className="fill-text dark:fill-darkText"
								d="m29.004 157.064 5.987-.399-5.987.399ZM22 52v-6a6 6 0 0 0-5.987 6.4L22 52Zm140.996 105.064-5.987-.399 5.987.399ZM170 52l5.987.4A6 6 0 0 0 170 46v6ZM34.991 156.665 27.987 51.601l-11.974.798 7.005 105.064 11.973-.798Zm133.991.798 7.005-105.064-11.974-.798-7.004 105.064 11.973.798Zm-11.973-.798a10 10 0 0 1-9.978 9.335v12c11.582 0 21.181-8.98 21.951-20.537l-11.973-.798Zm-133.991.798C23.788 169.02 33.387 178 44.968 178v-12a10 10 0 0 1-9.977-9.335l-11.973.798ZM74 48c0-12.15 9.85-22 22-22V14c-18.778 0-34 15.222-34 34h12Zm22-22c12.15 0 22 9.85 22 22h12c0-18.778-15.222-34-34-34v12ZM22 58h148V46H22v12Zm22.969 120H147.03v-12H44.969v12Z"
							/>
							{/* <path className="dark:fill-darkText" stroke="#000000" stroke-linecap="round" stroke-width="12" d="M114 84H88c-7.732 0-14 6.268-14 14v0c0 7.732 6.268 14 14 14h4m-2 0h14c7.732 0 14 6.268 14 14v0c0 7.732-6.268 14-14 14H78" /> */}
						</svg>
					</a>
					<a
						target="_blank"
						href="https://instagram.com/fivefriendsstore_"
						className="m800:hidden flex items-center justify-center rounded-base border-2 border-border shadow-nav dark:shadow-navDark dark:border-darkBorder p-2 transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none dark:hover:shadow-none"
					>
						<svg
							className="h-6 w-6 m500:h-4 m500:w-4"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
						>
							<path
								className="fill-text dark:fill-darkText"
								d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
							/>
						</svg>
					</a>

					<ThemeSwitcher />
				</div>
			</div>
		</nav>
	)
}