"""Prépare une texture pour servir de fond web.

1. Niveaux de gris.
2. Passe-haut : on retire la variation à grande échelle. C'est elle qui, en
   mosaïque, fait apparaître des taches claires et sombres qui se répètent.
3. Amplitude ramenée à une valeur douce, recentrée près du blanc pour que le
   mode « multiply » texture sans assombrir la page.
4. Raccords fondus pour que la mosaïque soit sans couture.
"""
import sys
from PIL import Image, ImageFilter
import numpy as np


def prepare(src, dst, size, highpass_radius, amplitude, centre, feather):
    im = Image.open(src).convert('L').resize((size, size), Image.LANCZOS)
    base = np.asarray(im, dtype=np.float32)

    # Passe-haut : détail local seulement
    blur = np.asarray(im.filter(ImageFilter.GaussianBlur(highpass_radius)), dtype=np.float32)
    detail = base - blur

    # Amplitude maîtrisée
    sd = detail.std()
    if sd > 0:
        detail = detail / sd * amplitude
    out = np.clip(centre + detail, 0, 255)

    # Raccords : on décale d'une demi-image et on fond la couture
    half = size // 2
    rolled = np.roll(np.roll(out, half, axis=0), half, axis=1)
    ramp = np.ones(size, dtype=np.float32)
    x = np.arange(size)
    edge = np.minimum(x, size - 1 - x)
    ramp = np.clip(edge / feather, 0, 1)
    mask = np.minimum(ramp[:, None], ramp[None, :])
    out = out * mask + rolled * (1 - mask)

    img = Image.fromarray(np.clip(out, 0, 255).astype(np.uint8), 'L')
    img.save(dst, 'WEBP', quality=82, method=6)
    arr = np.asarray(img, dtype=np.float32)
    return img.size, arr.mean(), arr.std(), arr.min(), arr.max()


if __name__ == '__main__':
    src, dst, size, radius, amp, centre, feather = sys.argv[1:8]
    r = prepare(src, dst, int(size), float(radius), float(amp), float(centre), float(feather))
    print(f'{dst} | {r[0]} | moyenne {r[1]:.1f} | écart-type {r[2]:.1f} | min {r[3]:.0f} max {r[4]:.0f}')
