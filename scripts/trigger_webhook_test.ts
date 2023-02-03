import * as wmill from 'https://deno.land/x/windmill@v1.61.1/mod.ts'
/**
 * Interact with Windmill's webhooks using standard fetch.
 *
 * @param webhookUrl {string} Webhook URL from Script Details page
 * @param scriptArgs {Object} JSON with arguments to pass
 * to the underlying script/flow
 * @param token {string} User token from User Settings page
 */
export async function main(
   webhookUrl: string = "https://7912-62-2-177-133.eu.ngrok.io/api/w/starter/jobs/run/p/u/admin/aws_vpc_compose",
  
  scriptArgs = { "cidrBlock": "5.0.0.0/16" },
  token: string = "ALOcHkLwMutBRZTzKYzfdsEaKAR2ZK",
) {
  
  const options = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`, 
      "Content-Type": "application/json"
    },
    body: JSON.stringify(scriptArgs),
  };
  const response = await fetch(webhookUrl, options);

  console.log(response)
  
  return response;
}
