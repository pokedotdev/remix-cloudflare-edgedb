import e from '$root/dbschema/edgeql-js'
import type { MandeInstance } from 'mande'
import { mande } from 'mande'

let client: MandeInstance

export function setupEdgeQLClient(url: string) {
	client = mande(url)
}

export async function query<T>(
	query: string | TemplateStringsArray,
	variables?: Record<string, unknown>
) {
	if (typeof query !== 'string') query = query[0]
	query = query.replace(/^\s+|\s+$/g, '')

	let params: Record<string, unknown> = { query }
	if (variables) params.variables = variables

	const result = await client.get<{
		data: T
	}>('', {
		query: params,
	})

	return result?.data
}

export { client, e }
