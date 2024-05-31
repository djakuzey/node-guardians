"use client";
import styled from "styled-components";
import Header from "@/components/Header";

import { ClientProviders } from './providers';
import StyledComponentsRegistry from './registry';

export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				<link rel='manifest' href='/manifest.json' crossOrigin='use-credentials' />

				<meta name='application-name' content='Node Guardians' />
				<meta name='theme-color' content='#151515' />
			</head>

			<body>
				<StyledComponentsRegistry>
					<ClientProviders>
						<Content>
							<Header/>
							{children}
						</Content>
					</ClientProviders>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}

const Content = styled.div`
	background: url("/assets/background.png") no-repeat center center fixed;
	height: 100vh;
	background-size: cover;
	display: flex;
	flex-direction: column;
`
