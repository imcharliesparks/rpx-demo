import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Modal from '@/components/modal'
import SampleModalContent from '@/components/modal/SampleModalContent'
import { useAuth } from '@clerk/nextjs'
import LandingPage from './landing'
import Loading from '@/components/general/Loading'

const inter = Inter({ subsets: ['latin'] })

// 1. Display the background everywhere
// 2. Add loading spinner if not loaded here
// 3. If not signed in, display the landing page
// 4. If signed in, redirect somewhere else idk it just has to match landing

export default function Home() {
	const [isModalOpen, setIsModalOpen] = React.useState(false)
	const { isLoaded, isSignedIn, signOut } = useAuth()

	React.useEffect(() => {
		console.log('isSignedIn', isSignedIn)
	}, [isSignedIn])

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<>
				{!isLoaded ? (
					<Loading />
				) : !isSignedIn ? (
					<LandingPage />
				) : (
					<>
						<div>signed in</div>
						<button className="btn btn-primary mt-4" onClick={signOut}>
							Sign out
						</button>
					</>
				)}
			</>
			{/* <main className={styles.main}>
				<div className={`${styles.description}`}>
					<p>
						Get started by editing&nbsp;
						<code className={styles.code}>src/pages/index.tsx</code>
					</p>
					<div>
						<a
							href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
							target="_blank"
							rel="noopener noreferrer"
						>
							By{' '}
							<Image
								src="/vercel.svg"
								alt="Vercel Logo"
								className={`${styles.vercelLogo} mx-auto`}
								width={100}
								height={24}
								priority
							/>
						</a>
					</div>
					<button className="btn btn-primary mt-4" onClick={() => setIsModalOpen(!isModalOpen)}>
						Open Modal
					</button>
				</div>

				<div className={styles.center}>
					<Image className={styles.logo} src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
					<div className={styles.thirteen}>
						<Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
					</div>
				</div>
				<Modal isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)} content={<SampleModalContent />} />

				<div className={`${styles.grid}`}>
					<Link href="/auth/sign-up" className={styles.card}>
						<h2 className={inter.className}>
							Sign Up <span>-&gt;</span>
						</h2>
						<p className={inter.className}>Sign Up with Clerk</p>
					</Link>
					<Link href="/auth/sign-in" className={styles.card}>
						<h2 className={inter.className}>
							Sign In <span>-&gt;</span>
						</h2>
						<p className={inter.className}>Sign In with Clerk</p>
					</Link>
				</div>

				<div className={`${styles.grid}`}>
					<Link href="/app/entity/create-entity" className={styles.card}>
						<h2 className={inter.className}>
							Create an entity <span>-&gt;</span>
						</h2>
						<p className={inter.className}>Requires auth</p>
					</Link>
					<Link href="/app/entity/all-entities" className={styles.card}>
						<h2 className={inter.className}>
							View all entities <span>-&gt;</span>
						</h2>
						<p className={inter.className}>Also requires auth</p>
					</Link>
				</div>
			</main> */}
		</>
	)
}
