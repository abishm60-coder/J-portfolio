from PIL import Image

# Open the composite image uploaded by the user in this conversation
img = Image.open(r'C:\Users\atony\.gemini\antigravity\brain\cc4e3d26-f259-4185-be50-35a144849322\media__1783317324472.png')

# Bounding boxes for the 4 polaroid photos (X1, Y1, X2, Y2)
# Refined based on the aspect ratio and rotations in the screenshot
crops = {
    "digital": (22, 60, 215, 215),
    "campaign": (262, 38, 461, 192),
    "brand": (502, 85, 703, 240),
    "interface": (741, 55, 935, 210)
}

for name, box in crops.items():
    cropped = img.crop(box)
    # Save directly to assets
    cropped.save(f"c:\\Users\\atony\\OneDrive\\ドキュメント\\Desktop\\J portfolio\\src\\assets\\{name}.png")
    print(f"Saved {name}.png")
