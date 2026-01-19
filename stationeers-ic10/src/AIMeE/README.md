**Setup:**
1. Setup 3 COMPACT ic10 HOUSING per aimee. Do NOT turn any of them on.
2. Setup transmitter per aimee. Do NOT turn any of them on.
3. Setup 1 switch of some kind per aimee for recalling them. Set them to ON after placing them.
4. Set the device pins as per their device alias's (recallSwitch must be a switch for example)
5. Set robotXmitter to the housings respective aimee transmitter
6. Set recallLever to your lever you will use to trigger an aimee recall for this specific aimee
7. Again, set the switch/lever/whatever to ON
8. Turn all the IC10 on
9. Set waypoints and configuration using stack/robomapsParallel
10. Turn lever off to turn on aimee

This is readme mentioned in robomapsParallel for those who don't know french:
**Using RobomapsParallel**
Instructions:
1. Using GPS tablet and write down X and Z coordinates (ignore y)
2. Put them in for waypoints below.
3. If you do not need 15 waypoints, set LastWaypoint to the number you need (max 250)
4. To update waypoints, edit coordinates, LastWaypoint, MiningRange
5. Export to this chip, reinsert this ic10 chip into the robomaps housing
Note: MinimumError, and TimeoutError can be left alone
**CAUTION: AIMEE CAN WANDER FROM HER MINING AREA, TIGHTEN TIMEOUT TIME AND**
**MINING RANGE IN DANGEROUS AREAS!!! SHE HAS NO GEOFENCING!!**

**Resetting a stuck/broken aimee unit:**
1. Turn recall lever on
2. Pull roboroutine chip out and put it back in
3. Put aimee at unload spot or with line of sight to it
4. Turn recall lever off when ready
5. Note: You can clear an error by setting the setting of recallSwitch, the device attached to roboroutine, to 1. This will set roboroutine's Setting to 0 indicating the error is cleared.

**Error modes:**
Aimee will set roboroutine's housing Setting to 1 to indicate an error.
This could mean one of three things:
The mining site is not viable (go out and check or just set a new site)
Her battery is below 70,000 Kw. Small batteries will instantly error her.
Her damage is over 0
Any of these errors will cause the housing of roboroutine to have Setting = 1.
Mining site errors can be cleared by having recallLever's Setting = 1. Doing so will make the roboroutine housing Setting go from 1 to 0.
Battery and damage errors can only be cleared by repairing aimee

**Configuration:**
**SP 511** is the last waypoint multiplied by 2 which is literally the last SP address aimee will use before she begins mining
**SP 510** is the diameter of the mining range centered on the final waypoint. Aimees will randomly go to a coordinate pair within that diameter, creating a circle around the waypoint over time

**Error variables:**
These can be adjusted in real time as they are loaded when checked.
**SP 509** is MinimumOreError, if Aimee sees LESS ore than this, she will go home once TimeoutError is reached
**SP 508** is TimeoutError. Aimee will drive in circles doing nothing for this many seconds, attempting to mine, before she gives up and flags an error

**Other Variables:**
**SP 507** is current SP.
**SP 506** is Aimee's ra register. You can determine where she is in the program with this
Valid numbers are:
Traveling: 83
Mining: 59
Going to mine site: 35
Going home: 16
Unloading: 7
**SP 506** is Aimee's internal stuck register. You can read how high the timeout currently is when traveling and when mining. Once this value is equal to SP 508, she will trigger pathfinding mode while traveling or while mining she triggers a mining error if MineablesInVicinity are less than SP 509.
