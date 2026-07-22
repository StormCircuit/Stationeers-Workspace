**Setup:**
1. Setup 3 COMPACT ic10 HOUSING per aimee. Do NOT turn any of them on.
2. Setup transmitter per aimee. Do NOT turn any of them on.
3. Setup 1 switch of some kind per aimee for recalling them. Set them to ON after placing them.
4. Set the device pins as per their device alias's (recallSwitch must be a switch for example)
5. Set robotXmitter to the housings respective aimee transmitter
6. Set recallLever to your lever you will use to trigger an aimee recall for this specific aimee
7. Again, set the switch/lever/whatever to ON
8. Turn all the IC10 on
9. Set waypoints and configuration using stack/roboCoordinator
10. Turn lever off to release aimee. She should instantly begin following waypoints in increasing order starting at SP0

**Error modes:**  
Aimee will set roboroutine's housing Setting to 1 to indicate an error.  
This could mean one of two things:  
She did not find any ore at the mining site with the given mining range or  
Her battery is below 70,000 Kw. Small batteries will instantly error her  
Any of these errors will cause the housing of roboroutine to have Setting = 1  
Mining site errors can be cleared by having recallLever's Setting = 1. Doing so will make the roboroutine housing Setting go from 1  to 0 and reset her as if she never went to the mining site. If the site is still empty, she will flag as such and return.  
Battery errors can only be cleared by recharging aimee  

**Using roboCoordinator**
Instructions:
1. Rename your roboroutine housings to aimee1 up to a max of aimee16.
2. Open the roboCoordinator code and manually enter the waypoints to exit the base up to the mining site
3. Turn the roboCoordinator housing on and it will write the waypoints to the labeled aimee1 to aimee16 housings
4. Optional: hook a advanced tablet/hardsuit up as per the code. You can walk around and click "Activate" to send the current coordinates as the mining site which will instantly recall all the Aimees and write the waypoint.

**Configuration:**  
These can be adjusted in real time as they are loaded when checked.  
**robotXmitter** is a transmitter connected to an Aimee unit  
**recallLever** is a device with a Setting. If this Setting = 1, and only 1, aimee will go and stay at home.  
**SP 511** is the last waypoint multiplied by 2 which is literally the last SP address aimee will use before she begins mining  
**SP 510** is the radius of the mining range centered on the final waypoint. Aimees will randomly go to a coordinate pair within that diameter, creating a circle around the waypoint over time
**SP 509** is Minimum Ore, if Aimee sees LESS ore than this, she will go home once the Timeout is reached  
**SP 508** is Timeout. Aimee will drive in circles doing nothing for this many seconds, attempting to mine, before she gives up and flags an error and returns
**SP 505** is Charge Error. Aimee will flag a charge error if below this number in Watts  

**Read-only Variables:**
**SP 506** is Aimee's ra register. You can determine where she is in the program with this 
**SP 507** is current SP 
**SP 504** is Aimee's internal stuck register. If this value exceeds SP 508 while mining, she will go home  
**SP 502** is the set TargetZ  
**SP 501** is the set TargetX
**SP 500** is the public facing error flag. This will be 1 if Aimee has a mining or battery error.

**Resetting a stuck/broken aimee unit:**
1. Turn recall lever on
2. Pull roboroutine chip out and put it back in
3. Put aimee at unload spot or with line of sight to it
4. Turn recall lever off when ready
5. Note: You can clear an error by setting the setting of recallSwitch, the device attached to roboroutine, to 1. This will set roboroutine's Setting to 0 indicating the error is cleared.
