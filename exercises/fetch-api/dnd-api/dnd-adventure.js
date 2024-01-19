import { promptUser } from "./prompts.js"

console.log('**************** DUNGEONS & DRAGONS ****************')

// promptUser()
await startCampaign()

async function startCampaign() {
    const prompts = await promptUser()
    return prompts
}