/**
 * Interact with Windmill's webhooks using standard fetch.
 *
 * @param webhookUrl {string} Webhook URL from Script Details page
 * @param scriptArgs {Object} JSON with arguments to pass
 * to the underlying script/flow
 * @param token {string} User token from User Settings page
 */ export async function main(webhookUrl = "https://<URL>/api/w/starter/jobs/run/p/u/admin/aws_vpc_compose", scriptArgs = {
    "cidrBlock": "5.0.0.0/16"
}, token = "t3s3GjjhjaMcYqSczNrXkrkmbT7xKJ") {
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(scriptArgs)
    };
    const response = await fetch(webhookUrl, options);
    console.log(response);
    return response;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vdG1wL3dpbmRtaWxsL2R0LXdvcmtlci1rR1ZRNS1CeGxIOS8wMTg2MTcxYy1lNTA3LTYyMDktZTJkNy04ODBkMzZlODVlYjAvaW5uZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgd21pbGwgZnJvbSAnaHR0cHM6Ly9kZW5vLmxhbmQveC93aW5kbWlsbEB2MS42MS4xL21vZC50cydcbi8qKlxuICogSW50ZXJhY3Qgd2l0aCBXaW5kbWlsbCdzIHdlYmhvb2tzIHVzaW5nIHN0YW5kYXJkIGZldGNoLlxuICpcbiAqIEBwYXJhbSB3ZWJob29rVXJsIHtzdHJpbmd9IFdlYmhvb2sgVVJMIGZyb20gU2NyaXB0IERldGFpbHMgcGFnZVxuICogQHBhcmFtIHNjcmlwdEFyZ3Mge09iamVjdH0gSlNPTiB3aXRoIGFyZ3VtZW50cyB0byBwYXNzXG4gKiB0byB0aGUgdW5kZXJseWluZyBzY3JpcHQvZmxvd1xuICogQHBhcmFtIHRva2VuIHtzdHJpbmd9IFVzZXIgdG9rZW4gZnJvbSBVc2VyIFNldHRpbmdzIHBhZ2VcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1haW4oXG4gICB3ZWJob29rVXJsOiBzdHJpbmcgPSBcImh0dHBzOi8vPFVSTD4vYXBpL3cvc3RhcnRlci9qb2JzL3J1bi9wL3UvYWRtaW4vYXdzX3ZwY19jb21wb3NlXCIsXG4gIFxuICBzY3JpcHRBcmdzID0geyBcImNpZHJCbG9ja1wiOiBcIjUuMC4wLjAvMTZcIiB9LFxuICB0b2tlbjogc3RyaW5nID0gXCJ0M3MzR2pqaGphTWNZcVNjek5yWGtya21iVDd4S0pcIixcbikge1xuICBcbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7dG9rZW59YCwgXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoc2NyaXB0QXJncyksXG4gIH07XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2god2ViaG9va1VybCwgb3B0aW9ucyk7XG5cbiAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gIFxuICByZXR1cm4gcmVzcG9uc2U7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7Ozs7Ozs7Q0FPQyxHQUNELE9BQU8sZUFBZSxLQUNuQixhQUFxQixnRUFBZ0UsRUFFdEYsYUFBYTtJQUFFLGFBQWE7QUFBYSxDQUFDLEVBQzFDLFFBQWdCLGdDQUFnQyxFQUNoRDtJQUVBLE1BQU0sVUFBVTtRQUNkLFFBQVE7UUFDUixTQUFTO1lBQ1AsaUJBQWlCLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQztZQUNsQyxnQkFBZ0I7UUFDbEI7UUFDQSxNQUFNLEtBQUssU0FBUyxDQUFDO0lBQ3ZCO0lBQ0EsTUFBTSxXQUFXLE1BQU0sTUFBTSxZQUFZO0lBRXpDLFFBQVEsR0FBRyxDQUFDO0lBRVosT0FBTztBQUNULENBQUMifQ==