**Setup:**
1. Setup 3 COMPACT ic10 HOUSING roboroutine per aimee. Do NOT turn any of them on.
2. Setup transmitter per aimee. Do NOT turn any of them on.
3. Setup 1 switch of some kind per aimee for recalling them. Set them to ON after placing them.
4. Set the device pins as per their device alias's (recallSwitch must be a switch for example)
5. Set robotXmitter to the housings respective aimee transmitter
6. Set recallLever to your lever you will use to trigger an aimee recall for this specific aimee
7. Again, set the switch/lever/whatever to ON
8. Turn all the IC10 on
9. Set waypoints and configuration using stack/robomapsParallel
10. Turn lever off to turn on aimee

**Resetting a stuck/broken aimee unit:**
11. Turn recall lever on
12. Pull roboroutine chip out and put it back in
13. Put aimee at unload spot or with line of sight to it
14. Turn recall lever off when ready

**Error modes:**
Aimee will set roboroutine's housing Setting to 1 to indicate an error.
This could mean one of two things:
The mining site is not viable (go out and check or just set a new site)
Her battery is below 70,000 Kw. Small batteries will instantly error her.

**Configuration:**
**SP 511** is the last waypoint multiplied by 2 which is literally the last SP address aimee will use before she begins mining
**SP 510** is the diameter of the mining range centered on the final waypoint. Aimees will randomly go to a coordinate pair within that diameter, creating a circle around the waypoint over time

**Error variables:**
All these variables can probably be left alone, I tuned them on my own save on the moon.
Still, I exposed them in case I want to make an Aimee super army
**SP 509** is MinimumError. If Aimee sees less ore than this, she will go home instantly.
**SP 508** is MaximumError. If Aimee sees more ore than this instead of giving up she will go home and go back out
**SP 507** is TimeoutError. Aimee will drive in circles doing nothing for this long before she tries to give up