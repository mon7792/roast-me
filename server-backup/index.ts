import { ElevenLabsClient, play } from "elevenlabs";
import fs from 'fs';
import { Buffer } from 'buffer';
import { Readable } from 'stream';

// Peter - annoyingly pitchy and enforcing
const voiceId = "nEz3UWnuZev3PiDL0CKP";

const client = new ElevenLabsClient({ apiKey: "" });


// read from file
const response= fs.readFileSync('data.txt', 'utf8');



async function generateSpeech(text: string, stability: number, similarityBoost: number) {
    // const audioResp = await client.textToSpeech.convertWithTimestamps(
    //     voiceId,
    //     {
    //         text: text,
    //         voice_settings: {
    //             stability: stability,
    //             similarity_boost: similarityBoost,
    //         },
    //     }
    // );

    // console.log(response);


    // const audio = (response as any).audio_base64;
    const audio = (response);
    const audioBuffer = Buffer.from(audio, 'base64');
    const readableStream = Readable.from(audioBuffer);
    await play(readableStream);

    console.log(response);
    // console.log(JSON.stringify(response));
}

async function main() {
    await generateSpeech("Hello! Welcome to the world of AI. How can I help you today?", 0.2, 0.8);
}

main();
