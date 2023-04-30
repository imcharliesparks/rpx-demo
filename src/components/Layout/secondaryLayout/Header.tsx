import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Header = () => {
	const router = useRouter()

	const handleBackButton = () => {
		router.back()
	}

	// TODO: Also update once client application form flow is done
	return (
		<header>
			<nav id="topnav" className="mx-auto defaultscroll is-sticky nav-sticky animate-gradualLoad pt-6">
				<Link className="cursor-pointer" href="/">
					<Image
						className="max-w-[200px] mx-auto translate-y-[10px]"
						alt="RPX logo"
						src={require('../../../resources/images/rpxlogo.png')}
					/>
				</Link>
				<div className="cursor-pointer inline-block ml-6 translate-y-[-35px]" onClick={handleBackButton}>
					<Image
						className="w-[22px] mx-auto translate-y-[10px]"
						alt="Back button"
						src={require('../../../resources/images/back.png')}
					/>
				</div>
			</nav>
		</header>
	)
}

export default Header