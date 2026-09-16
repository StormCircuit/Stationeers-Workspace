Storm's Stationeers Scripts (SSS) Repo

Backups of all my MIPS scripts. Use them at your own caution.

This entire repo is entirely free open source. Please use this code to make your life easier. Copy it wholesale, just give me/anyone involved credit please. If you used it, I would love to hear about it!

automation folder contains minifier.js which can take an input ic10 file and reduce the line numbers by stripping out human readable portions of the code like labels and constants. Credit for the script goes to dev_doggo on the Stationeers Discord.

Consistent registers unless otherwise stated:
r15 = prev ra (for Jal'ing within a jal)
r14 = prev prev ra (for jal'ing within a jal when already within a jal)
r13 = count, an iterable
r0 = temp
r1 = temp
r2 = temp
r3 = temp