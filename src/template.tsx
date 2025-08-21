import { type TemplateProps } from 'rasengan'

export default function Template({ Head, Body, Script }: TemplateProps) {
	return (
		<html lang="en">
			<Head>
				<meta charSet="UTF-8" />
				<link rel="icon" type="image/x-icon" href="/makiti_sarl.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>

			<Body>
				<Script />
			</Body>
		</html>
	)
}
