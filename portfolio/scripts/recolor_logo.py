from PIL import Image

src = r"public\brand\asmo-icon.png"
img = Image.open(src).convert("RGBA")
pixels = img.load()
w, h = img.size

# Portfolio accent orange
target = (255, 107, 0)  # #FF6B00

for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        if a == 0:
            continue
        # Recolor any visible (non-transparent) pixel to orange, keep alpha
        # Preserve soft edges via original alpha
        pixels[x, y] = (target[0], target[1], target[2], a)

img.save(src, "PNG")
print(f"recolored {src} to #FF6B00")
