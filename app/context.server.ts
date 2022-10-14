import type { AppLoadContext } from '@remix-run/cloudflare'
import { z } from 'zod'
import { setupEdgeQLClient } from '~/db.server'

let isSetup = false

export async function setup(context: AppLoadContext) {
	if (isSetup) return
	isSetup = true

	const env = ContextSchema.parse(context)

	setupEdgeQLClient(env.EDGEDB_SERVER)
}

const ContextSchema = z.object({
	EDGEDB_SERVER: z.string(),
})
