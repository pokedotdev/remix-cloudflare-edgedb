import { json } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'
import { query } from '~/db.server'

export const loader = async () => {
	const notes = await query<string[]>('select Note .body;')

	return json({ notes })
}

export default function Index() {
	const data = useLoaderData<typeof loader>()

	return (
		<div>
			<h1>Index</h1>
			<div className="grid grid-cols-2 w-full">
				<h2>Notes</h2>
				<ul>
					{data.notes.map((note) => (
						<li key={note}>{note}</li>
					))}
				</ul>
			</div>
		</div>
	)
}
