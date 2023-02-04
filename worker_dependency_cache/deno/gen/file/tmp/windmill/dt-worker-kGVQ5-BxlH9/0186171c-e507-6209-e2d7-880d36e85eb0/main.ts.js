import { main } from "./inner.ts";
const args = await Deno.readTextFile("args.json").then(JSON.parse).then(({ webhookUrl , scriptArgs , token  })=>[
        webhookUrl,
        scriptArgs,
        token
    ]);
async function run() {
    let res = await main(...args);
    const res_json = JSON.stringify(res ?? null, (key, value)=>typeof value === 'undefined' ? null : value);
    await Deno.writeTextFile("result.json", res_json);
    Deno.exit(0);
}
run().catch(async (e)=>{
    await Deno.writeTextFile("result.json", JSON.stringify({
        message: e.message,
        name: e.name,
        stack: e.stack
    }));
    Deno.exit(1);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGU6Ly8vdG1wL3dpbmRtaWxsL2R0LXdvcmtlci1rR1ZRNS1CeGxIOS8wMTg2MTcxYy1lNTA3LTYyMDktZTJkNy04ODBkMzZlODVlYjAvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IG1haW4gfSBmcm9tIFwiLi9pbm5lci50c1wiO1xuXG5jb25zdCBhcmdzID0gYXdhaXQgRGVuby5yZWFkVGV4dEZpbGUoXCJhcmdzLmpzb25cIilcbiAgICAudGhlbihKU09OLnBhcnNlKVxuICAgIC50aGVuKCh7IHdlYmhvb2tVcmwsc2NyaXB0QXJncyx0b2tlbiB9KSA9PiBbIHdlYmhvb2tVcmwsc2NyaXB0QXJncyx0b2tlbiBdKVxuXG5hc3luYyBmdW5jdGlvbiBydW4oKSB7XG4gICAgbGV0IHJlczogYW55ID0gYXdhaXQgbWFpbiguLi5hcmdzKTtcbiAgICBjb25zdCByZXNfanNvbiA9IEpTT04uc3RyaW5naWZ5KHJlcyA/PyBudWxsLCAoa2V5LCB2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiB2YWx1ZSk7XG4gICAgYXdhaXQgRGVuby53cml0ZVRleHRGaWxlKFwicmVzdWx0Lmpzb25cIiwgcmVzX2pzb24pO1xuICAgIERlbm8uZXhpdCgwKTtcbn1cbnJ1bigpLmNhdGNoKGFzeW5jIChlKSA9PiB7XG4gICAgYXdhaXQgRGVuby53cml0ZVRleHRGaWxlKFwicmVzdWx0Lmpzb25cIiwgSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiBlLm1lc3NhZ2UsIG5hbWU6IGUubmFtZSwgc3RhY2s6IGUuc3RhY2sgfSkpO1xuICAgIERlbm8uZXhpdCgxKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLFNBQVMsSUFBSSxRQUFRLGFBQWE7QUFFbEMsTUFBTSxPQUFPLE1BQU0sS0FBSyxZQUFZLENBQUMsYUFDaEMsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUNmLElBQUksQ0FBQyxDQUFDLEVBQUUsV0FBVSxFQUFDLFdBQVUsRUFBQyxNQUFLLEVBQUUsR0FBSztRQUFFO1FBQVc7UUFBVztLQUFPO0FBRTlFLGVBQWUsTUFBTTtJQUNqQixJQUFJLE1BQVcsTUFBTSxRQUFRO0lBQzdCLE1BQU0sV0FBVyxLQUFLLFNBQVMsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLEtBQUssUUFBVSxPQUFPLFVBQVUsY0FBYyxJQUFJLEdBQUcsS0FBSztJQUN4RyxNQUFNLEtBQUssYUFBYSxDQUFDLGVBQWU7SUFDeEMsS0FBSyxJQUFJLENBQUM7QUFDZDtBQUNBLE1BQU0sS0FBSyxDQUFDLE9BQU8sSUFBTTtJQUNyQixNQUFNLEtBQUssYUFBYSxDQUFDLGVBQWUsS0FBSyxTQUFTLENBQUM7UUFBRSxTQUFTLEVBQUUsT0FBTztRQUFFLE1BQU0sRUFBRSxJQUFJO1FBQUUsT0FBTyxFQUFFLEtBQUs7SUFBQztJQUMxRyxLQUFLLElBQUksQ0FBQztBQUNkIn0=