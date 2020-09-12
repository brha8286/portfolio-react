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

import bottom_0 from "./lumibar/bottom_0.png"
import bottom_1 from "./lumibar/bottom_1.png"
import riser_assembled from "./lumibar/riser_assembled.png"
import riser_parts from "./lumibar/riser_parts.png"
import snap_fit from "./lumibar/snap_fit.png"
import top_glow from "./lumibar/top_glow.png"

export const PROJECTS = [
  {
    id: "lumibar",
    title: "Lumibar",
    short: "Personal project to create modular touch activated lighting fixtures",
    long: [
      "Everyone needs a quarantine LED project.",
      "I’ve had an idea of creating modular backlit aluminum touch controlled lighting for years.  It’s hopefully more exciting than it sounds.  ",
      `I set out with the goal of inexpensive units which could be strung together in any quantity.  
      To this end, I designed Lumistrip without any smart or costly components, a single power supply,
       and the ability to connect any number together inline.  Each 16” strip features 14” of RGB LEDs, 
      12V/GND/R/G/B rails, the capacitive touch sensor circuit switching 12V to the individual strip, and 3d printed fixtures for all parts.
      `
    ],
    images: [top_glow, bottom_0, riser_parts, riser_assembled, bottom_1, snap_fit],
    skills: ["Product Design", "DC Electronics", "PCB Design", "3d Printing", "Iterative Design", "DFA/DFM"],
  },
  
  {
    id: "supersonic",
    title: "Supersonic Mass Flow Controller",
    short: "Active closed loop mass flow controller for small supersonic wind tunnel",
    long: [
      "For an independent study research project, I designed and implemented a mass flow controller for a small supersonic wind tunnel " +
      "previously made for use in student labs in the CU Aerospace department.  With minimal budget, I accomplished this using existing " +
      "data acquisition equipment and manual pressure regulator, sourced a small DC brushed motor, and designed and manufactured custom SLA plastic and machined aluminum parts.",
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
