from PIL import Image, ImageChops

def crop_border(p):
    try:
        img = Image.open(p).convert('RGB')
        # Background is the pixel at (0,0) - likely the green border
        bg = Image.new('RGB', img.size, img.getpixel((0,0)))
        diff = ImageChops.difference(img, bg)
        diff = ImageChops.add(diff, diff, 2.0, -100)
        bbox = diff.getbbox()
        if bbox:
            cropped = img.crop(bbox)
            
            # The user might have a white border inside the green border, let's crop that too just in case
            bg2 = Image.new('RGB', cropped.size, cropped.getpixel((0,0)))
            diff2 = ImageChops.difference(cropped, bg2)
            diff2 = ImageChops.add(diff2, diff2, 2.0, -100)
            bbox2 = diff2.getbbox()
            if bbox2:
                cropped = cropped.crop(bbox2)
                
            cropped.save(p)
            print("Cropped", p)
        else:
            print("No border found", p)
    except Exception as e:
        print("Error processing", p, e)

crop_border("frontend/src/assets/game1.png")
crop_border("frontend/src/assets/game2.png")
crop_border("frontend/src/assets/game3.png")
