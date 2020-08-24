import assembled from "./amarcs/assembled.png";
import components from "./amarcs/components.png";
import hotfire from "./amarcs/hotfire.png"

import pitch from "./compass/pitch.png"
import roll from "./compass/roll.png"
import system from "./compass/system.png"
import yaw from "./compass/yaw.png"

import buckling from "./buckling/buckling_rig.png"
import buckling_annotated from "./buckling/buckling_annotated.png"

import pressureSystem from "./supersonic/system.png"
import coupling from "./supersonic/coupling.PNG"
import nozzle from "./supersonic/nozzle.png"

export const PROJECTS = [
  {
    id: "supersonic",
    title: "Supersonic Mass Flow Controller",
    short: "Active closed loop mass flow controller for small supersonic wind tunnel",
    long: [
      "For an independent study research project, I designed and implemented a mass flow controller for a small supersonic wind tunnel " +
      "previously made for use in student labs in the CU Aerospace department.  With minimal budget, I accomplished this using existing " +
      "data acquisition equipment and manual pressure regulator, sourced a small DC brushed motor, and designed and manufactured custom 3d printed and aluminum parts.",
      "This process included designing new supersonic converging-diverging nozzle blocks with internal pressure tap channels and a regulator-motor " +
      "coupling which allowed electronic control of the manual regualator. These parts were printed on a Formlabs SLA printer.  Data acquisition " +
      "was done through NI DAQ modules and a custom LabVIEW GUI.  All told, I was able to maintain Mach=1.25 within about +-2% for a 5 second test."
    ],
    images: [pressureSystem, coupling, nozzle],
    skills: ["Nozzle Design", "Aerodynamics", "SLA 3D Printing", "Solidworks CAD", "LabVIEW", "NI Module Data Acquisition", "MATLAB", "Manual Lathe Operation"],
  },
  {
    id: "amarcs",
    title: "AMARCS",
    short: "Additive Manufactured Aerospike Reaction Control System (graduate project)",
    long: "As part of my Master's degree, I contributed on a team of 11 other graduate student engineers to develop a proof-of-concept " +
      "additive manufactured rocket engine to validate a new SLM printer at a Denver ULA location. Over a year, I served as Testing Lead " +
      "and later Systems Engineering Lead.  As Testing Lead, I developed testing and safety procedures to carry out a full system cold-flow test " +
      "and various subsystem tests.  As Systems Engineering Lead, I owned a redesign of the fuel/oxidizer feed system to accommodate " +
      "higher flow rates while maintaining combatibility with existing software and electrical components for control.",
    images: [assembled, hotfire, components],
    skills: ["Project Management", "High Pressure and Temperature Safety", "Test Documentation", "Fluid Feed System Design", "Cryogenic Liquid Fuel"],
  },
  {
    id: "compass",
    title: "COMPASS",
    short: "4 degree of freedom wind tunnel model positioning system (senior project)",
    long: "I worked as the Mechanical Engineering Lead on a team of 8 to develop a model positioning system for a newly installed wind tunnel " +
      "at CU Boulder.  I designed and manufactured all mechanisms and structural components to dynamically control yaw, pitch, and plunge; and statically set roll. " +
      "A DC motor controlled yaw via a worm gear, and a pair of linear actuators with a linkage controlled pitch/plunge. Roll was achieved with " +
      "pins which indexed the model mount to a plate with regularly spaced holes.",
    images: [system, yaw, pitch, roll],
    skills: ["Solidworks CAD", "Manual Lathe Operation", "Manual and CNC Mill Operation", "Gearing Design and Installation", "Mechanism Design"],
  },
  {
    id: "buckling",
    title: "Column Buckling Rig",
    short: "Test stand for measuring buckling strength of various column test specimens",
    long: "While working in the CU Aerospace machine shop, I developed a column buckling test stand for use in undergraduate student labs.  " +
      "I designed the mechanical structure and sourced an appropriate bar load cell to interface with existing data acquisition hardware and software.  " +
      "I manufactured, assembled, and validated the first prototype, then built a procedure for other machinists to manufacture and assemble an additional 12 units.  " +
      "The test stands are still used in undergraduate labs today.",
    images: [buckling, buckling_annotated],
    skills: ["Solidworks CAD", "Small Batch Production", "DFM/DFA", "Manual Lathe Operation", "Manual and CNC Mill Operation", "Stress analysis"],
  }
];
