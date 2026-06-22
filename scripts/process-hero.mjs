import sharp from "sharp"
import path from "node:path"

const dir = path.resolve("public/images")
const src = path.join(dir, "hero-malsaker.jpg")
const out = path.join(dir, "hero-malsaker-graded.jpg")

// 1. Level the horizon: subtle clockwise tilt in the source, correct with a
//    small counter-clockwise rotation. Background is extended then cropped away.
const ROTATE_DEG = -0.35

// 2. Cinematic 16:9 crop with the castle composed off-center (rule of thirds).
//    We bias the crop toward the left so the lake reads as negative space and
//    the central tower sits just right of center.
const TARGET_AR = 16 / 9

const base = sharp(src).rotate(ROTATE_DEG, {
  background: { r: 0, g: 0, b: 0, alpha: 0 },
})

const rotated = await base.png().toBuffer()
const meta = await sharp(rotated).metadata()
const W = meta.width
const H = meta.height

// Trim a thin safety margin introduced by rotation so no transparent edges remain.
const margin = Math.ceil(Math.max(W, H) * 0.012)
const innerLeft = margin
const innerTop = margin
const innerW = W - margin * 2
const innerH = H - margin * 2

// Compute the largest 16:9 window that fits, biased left + trimming some sky.
let cropW = innerW
let cropH = Math.round(cropW / TARGET_AR)
if (cropH > innerH) {
  cropH = innerH
  cropW = Math.round(cropH * TARGET_AR)
}

// Horizontal: keep the left (lake) edge, pushing the castle right of center.
const left = innerLeft
// Vertical: trim ~22% of the excess from the top (sky) and the rest from foreground.
const excessV = innerH - cropH
const top = innerTop + Math.round(excessV * 0.45)

await sharp(rotated)
  .extract({ left, top, width: cropW, height: cropH })
  .resize(2560, 1440, { fit: "cover" })
  // Subtle editorial finish: gentle warmth, lift, and clarity.
  .modulate({ brightness: 1.04, saturation: 1.03 })
  .sharpen({ sigma: 0.6 })
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(out)

console.log(`[v0] source ${W}x${H} -> crop ${cropW}x${cropH} @ (${left},${top}) -> 2560x1440`)
