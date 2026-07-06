from PIL import Image

img = Image.open(r'C:\Users\atony\OneDrive\ドキュメント\Desktop\J portfolio\src\assets\curiosity.png')
w, h = img.size

# Let's crop 15 pixels off the bottom to remove the orange mark
cropped = img.crop((0, 0, w, h - 15))
cropped.save(r'C:\Users\atony\OneDrive\ドキュメント\Desktop\J portfolio\src\assets\curiosity.png')
print("Cropped curiosity.png to remove the orange mark at the bottom.")
