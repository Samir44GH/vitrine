#!/usr/bin/env python3
"""Prépare la police des titres du site à partir du fichier variable complet.

Elle garde ses deux axes — la graisse et la taille optique, que le CSS
confie au navigateur via font-optical-sizing — et réduit le jeu de
caractères au français. Usage :

    python3 scripts/titre.py <source.woff2> <sortie.woff2>

La licence de la police doit être copiée à côté du fichier produit.
"""
import sys
from fontTools.ttLib import TTFont
from fontTools import subset

CARACTERES = (
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    " àâäéèêëîïôöùûüÿçœæÀÂÄÉÈÊËÎÏÔÖÙÛÜŸÇŒÆ"
    ".,;:!?'’\"“”«»()[]–—-…·•/&%+×=°€$"
)


def fabriquer(source, sortie):
    f = TTFont(source)
    s = subset.Subsetter(subset.Options(
        layout_features=["kern", "liga", "calt", "clig", "ccmp", "locl",
                         "mark", "mkmk"],
        name_IDs="*", name_legacy=True, name_languages="*",
        notdef_outline=False, recalc_bounds=True,
    ))
    s.populate(text=CARACTERES)
    s.subset(f)
    f.flavor = "woff2"
    f.save(sortie)
    print(sortie)


if __name__ == "__main__":
    fabriquer(sys.argv[1], sys.argv[2])
