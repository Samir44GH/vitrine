"""Fabrique la variante de Fraunces dont le site a besoin.

Le paquet livré n'expose que l'axe de graisse : la taille optique était donc
sans effet, et les lettres excentriques (l'axe WONK) ne pouvaient pas être
désactivées. On part du fichier complet, on fige WONK et SOFT à zéro, on garde
la taille optique et la graisse variables, puis on réduit au jeu de caractères
français.
"""
import sys
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer
from fontTools import subset

CARACTERES = (
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    " àâäéèêëîïôöùûüÿçœæÀÂÄÉÈÊËÎÏÔÖÙÛÜŸÇŒÆ"
    ".,;:!?'’\"“”«»()[]–—-…·•/&%+×=°€$"
)

def fabriquer(source, sortie):
    f = TTFont(source)
    avant = [a.axisTag for a in f["fvar"].axes]
    # WONK 0 : lettres conventionnelles. SOFT 0 : terminaisons nettes.
    f = instancer.instantiateVariableFont(f, {"WONK": 0, "SOFT": 0}, updateFontNames=False)

    s = subset.Subsetter(subset.Options(
        layout_features=["kern", "liga", "calt", "clig", "ccmp", "locl", "mark", "mkmk"],
        name_IDs="*", name_legacy=True, name_languages="*",
        notdef_outline=False, recalc_bounds=True,
    ))
    s.populate(text=CARACTERES)
    s.subset(f)

    f.flavor = "woff2"
    f.save(sortie)
    apres = [a.axisTag for a in f["fvar"].axes] if "fvar" in f else []
    return avant, apres

if __name__ == "__main__":
    src, dst = sys.argv[1], sys.argv[2]
    a, b = fabriquer(src, dst)
    print(f"{dst}  axes {a} → {b}")
