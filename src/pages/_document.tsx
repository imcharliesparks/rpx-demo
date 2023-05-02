import { Html, Head, Main, NextScript } from 'next/document'
import useSound from 'use-sound'

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="manifest" href="/manifest.json" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
