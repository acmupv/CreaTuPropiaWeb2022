import Head from 'next/head';
import '../styles/globals.scss';

function App({ Component, pageProps }) {
	return (
		<div className="bg-white text-base text-gray-900">
			<Head>
				<title>Álvaro Hernández — Product Designer</title>
				<meta property="og:title" content="Portfolio" key="title" />
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" href="/favicon.ico" />
				<meta name="theme-color" content="#000000" />
			</Head>
			<Component {...pageProps} />
		</div>
	);
}

export default App;
