from PIL import Image

src = r"public\brand\asmo-logo.png"
img = Image.open(src).convert("RGBA")
pixels = img.load()
w, h = img.size

for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        # Treat dark near-black as transparent (logo bg)
        if r < 55 and g < 55 and b < 55:
            pixels[x, y] = (0, 0, 0, 0)
        # Soften dark edges slightly
        elif r < 80 and g < 80 and b < 80 and (r + g + b) < 180:
            pixels[x, y] = (0, 0, 0, 0)

bbox = img.getbbox()
if not bbox:
    raise SystemExit("No visible content found")
img = img.crop(bbox)

cw, ch = img.size
icon = img.crop((0, 0, max(1, int(cw * 0.48)), ch))
icon_bbox = icon.getbbox()
if icon_bbox:
    icon = icon.crop(icon_bbox)

# Add a little transparent padding
pad = 8
padded = Image.new("RGBA", (icon.width + pad * 2, icon.height + pad * 2), (0, 0, 0, 0))
padded.paste(icon, (pad, pad), icon)

scale = 4
out = padded.resize((padded.width * scale, padded.height * scale), Image.Resampling.LANCZOS)
out_path = r"public\brand\asmo-icon.png"
out.save(out_path, "PNG")

# Verify transparency exists
sample = out.getpixel((2, 2))
print(f"saved {out_path} size={out.size} corner_alpha={sample[3]}")
