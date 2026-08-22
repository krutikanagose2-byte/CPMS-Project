import fitz
import glob
import os

pdf_files = glob.glob("*.pdf")
for pdf_path in pdf_files:
    try:
        doc = fitz.open(pdf_path)
        page = doc.load_page(0)
        pix = page.get_pixmap()
        image_name = os.path.splitext(pdf_path)[0] + "_thumb.png"
        pix.save(image_name)
        print(f"Saved {image_name}")
    except Exception as e:
        print(f"Error processing {pdf_path}: {e}")
