
 # WD66 ver 0.1 
---
 
- Layout: 65%, footprint modeled on the Leopold FC660M
- Type: MX, Mechanical
- Firmwware: QMK + VIA
- Case compatibility: drops straight into a Leopold FC660M case if you leave 2 switches unsoldered
- Status: Archived as of 12/01/2025 | I might work on the firmware & case at some point
- Production repo: [11Customs/WD66-ver-0.1](https://github.com/11Customs/WD66-ver-0.1)
- By: [11customs](https://11customs.com)

![WD66 PCB render](https://i.imgur.com/zI6nKso.png "WD66 PCB render")
 
WD66 is our take on a 65% board, sized and shaped after the Leopold FC660M. Originally it was developed bacause FOXY spilled some borscht on his FC660M. At some point I will make a case for it, so it could be used as a standalone keyboard. To use as a drop-in don't solder-in 2 switches specified below. The v0.1 is a prototype with a lot of compromises. It uses the [Legacy C Series Unified Daughterboard](https://github.com/Unified-Daughterboard/UDB-C-Legacy) for USB, which is an admitedly not the best way to power a drop-in replacement board. 
 
 
---
 
## Status
 
The ver 0.1 PCB was finished and tested back in December 2023. As of December 2025 the non-dev repo is archived and read-only. As of September 2026 firmware and hardware are separated into two different repos, proper QMK & VIA integration is done via the repo below. Upstream in progress.
 
## Resources
 
- **Firmware** — QMK & VIA files can be found [here](https://github.com/11Customs/WD66-Firmware)
- **Hardware** — can be found [here](https://github.com/1215-tech/WD66)
- **Submodules** — [MX_Alps_Hybrid](https://github.com/ai03-2725/MX_Alps_Hybrid), [marbastlib](https://github.com/ebastler/marbastlib), [random-keyboard-parts.pretty](https://github.com/ai03-2725/random-keyboard-parts.pretty)

## Using this design
 
Forking, modifying, and producing your own is fair game. If you're planning to produce it for profit though, keep 11customs in the loop - contact info is on the [GitHub profile](https://github.com/11Customs). And leave the solder mask art.

## Credits
 
Thanks to FOXY and ANV3R for their support throughout the project.
 
---
 
## Layouts[​](#layouts)
 
![Layout](https://i.imgur.com/I7TdzwW.png "Implemented layout")
![Layout](https://i.imgur.com/GY7Oimh.png "Planned layout")
 
## PCB renders[​](#pcb-renders)
 
![PCB render](https://i.imgur.com/zI6nKso.png "PCB render")
![PCB render](https://i.imgur.com/7HqgUfl.png "PCB render")
 
## Photos[​](#photos)
 
![Photo](https://i.imgur.com/nJFyATA.jpg "Build photo")
![Photo](https://i.imgur.com/FjCnWen.jpg "Build photo")
