Instructions for using the AIMEE scripts in this folder:

1. Setup 3 COMPACT ic10 HOUSING roboroutine per aimee. Do NOT turn any of them on.
2. Setup transmitter per aimee. Do NOT turn any of them on.
3. Setup 1 switch of some kind per aimee for recalling them (set them to on after placing them)
4. Choose either robomaps or robomapsParallel for an army of AIMEES. Note that robomapsParallel supports up to 6 aimees on a private subnet (utilizes name hashes)
5. Set the device pins as labeled
6. If using robomapsParallel, set the names of the housings containing roboroutine as required
7. Turn everything on
8. Turn lever/switch off to enable aimee units

Resetting a stuck/broken aimee unit:
1. Turn recall lever on
2. Pull roboroutine chip out and put it back in
3. Turn recall lever off when ready

Error modes:
Aimee will set roboroutine's housing Setting to 1 to indicate an error.
This could mean a couple things:
1. The mining site is not viable (go out and check or just set a new site)
2. Her battery is below 70,000 Kw. Small batteries will instantly error her.