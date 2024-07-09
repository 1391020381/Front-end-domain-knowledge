const init = {
    output: handleFrame,
    error: (e) => {
      console.log(e.message);
    },
  };
  
  const config = {
    codec: "vp8",
    codedWidth: 640,
    codedHeight: 480,
  };
  let decoder  = null
  const { supported } = await VideoDecoder.isConfigSupported(config);
  if (supported) {
     decoder = new VideoDecoder(init);
    decoder.configure(config);
  } else {
    // Try another config.
  }


const responses = await downloadVideoChunksFromServer(timestamp);
for (let i = 0; i < responses.length; i++) {
  const chunk = new EncodedVideoChunk({
    timestamp: responses[i].timestamp,
    type: responses[i].key ? "key" : "delta",
    data: new Uint8Array(responses[i].body),
  });
  decoder.decode(chunk);
}
await decoder.flush();

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let pendingFrames = [];
let underflow = true;
let baseTime = 0;

function handleFrame(frame) {
  pendingFrames.push(frame);
  if (underflow) setTimeout(renderFrame, 0);
}

function calculateTimeUntilNextFrame(timestamp) {
  if (baseTime == 0) baseTime = performance.now();
  let mediaTime = performance.now() - baseTime;
  return Math.max(0, timestamp / 1000 - mediaTime);
}

async function renderFrame() {
  underflow = pendingFrames.length == 0;
  if (underflow) return;

  const frame = pendingFrames.shift();

  // Based on the frame's timestamp calculate how much of real time waiting
  // is needed before showing the next frame.
  const timeUntilNextFrame = calculateTimeUntilNextFrame(frame.timestamp);
  await new Promise((r) => {
    setTimeout(r, timeUntilNextFrame);
  });
  ctx.drawImage(frame, 0, 0);
  frame.close();

  // Immediately schedule rendering of the next frame
  setTimeout(renderFrame, 0);
}