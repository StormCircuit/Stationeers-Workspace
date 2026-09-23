# Setup
1. Place 4 IC10 housings
2. Put dirciroutine in 1, dircidisplay in another, and dircidisplay2 in another.
5. See dirciCoordinatorStack for loading the routes. dirciCoordinator is its own program and will need the 4th housing mentioned. Set screws as per their alias'.
6. Set the recallSwitch to on to ensure all start in idle state. Note: this is anything with a Setting. 1 = recall, 0 = Resume normal function. If using dirciCoordinator, set the secondaryRecall to dirciCoordinator.
7. Once all IC10 are running and stack is properly configured, switch recall off and robot will automatically begin route.

# Resetting system from a corrupted state:
1. Turn Dirci off to ensure she doesn't die (this is always a safe action)
2. Turn recall switch on to ensure program synchronization
3. Reseat coordinator (this will make sure the reroute flag exists for dirci to see on startup)
4. Reseat dirciroutine
5. Turn off recall

# DiRCI Configuration Registers

Memory addresses in the SP 500 range reserved for system configuration, status signaling, and safety thresholds.

| Stack Address | Name | Description |
|:---:|---|---|
| **500** | Inter IC10 communications | Do not touch or you can corrupt Dirci and the coordinator's memory Meaning: READ-ONLY. |
| **509** | Max Loading Ticks | Maximum ticks to wait in loading mode before forcing departure. |
| **510** | Minimum Battery Cutoff | Minimum charge threshold in Watts before initiating emergency return-home routine. |
| **511** | Route Length | Total number of stack values (waypoint pairs * 2) in the active route. |
