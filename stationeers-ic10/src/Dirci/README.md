# Setup
1. Place 3 or 4 IC10 housings
2. Put dirciroutine in 1, dircidisplay in another, and dircidisplay2 in another.
3. If you want dirci to go to multiple vending machines then you'll need dirciCoordinator, else dirciStackloader
4. For dirciStackloader, setup the waypoints and settings below on dirciRoutine's IC10 chip. This configuration only requires 3 IC10 housings.
5. For dirciCoordinator, see dirciCoordinatorStack for loading the routes. dirciCoordinator is its own program and will need the 4th housing mentioned. Set screws as per their alias'.
6. Set the recallSwitch to on to ensure all start in idle state. Note: this is anything with a Setting. 1 = recall, 0 = Resume normal function. If using dirciCoordinator, set the secondaryRecall to dirciCoordinator.
7. Once all IC10 are running and stack is properly configured, switch recall off and robot will automatically begin route.

# Dirci Vending Monitor

If you want to only service a single vending but don't want Dirci to constantly run back and forth, you can use vending monitor to monitor the vending machine and act as the secondaryRecall for dirciRoutine. Set dirciRoutine's secondaryRecall screw to Dirci Vending Monitor.

# DiRCI Configuration Registers

Memory addresses in the SP 500 range reserved for system configuration, status signaling, and safety thresholds.

| Stack Address | Name | Description |
|:---:|---|---|
| **500** | Reserved for inter IC10 communications. Do not touch or you can corrupt Dirci and the coordinator's memory. Meaning: READ-ONLY. |
| **509** | Max Loading Ticks | Maximum ticks to wait in loading mode before forcing departure. |
| **510** | Minimum Battery Cutoff | Minimum charge threshold in Watts before initiating emergency return-home routine. |
| **511** | Route Length | Total number of stack values (waypoint pairs * 2) in the active route. |
