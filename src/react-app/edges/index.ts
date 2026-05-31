
import MassActionEdge from "./MassAction";
export { default as MassActionEdge } from "./MassAction";
export type { MAEdgeType } from "./MassAction";
export { MassActionDrawerInfo } from "./MassAction";


import ReversibleMassActionEdge from "./ReversibleMassAction";
export { default as ReversibleMassActionEdge } from "./ReversibleMassAction";
export type { RevMAEdgeType } from "./ReversibleMassAction";
export { ReversibleMassActionDrawerInfo } from "./ReversibleMassAction";

import MichaelisMentenEdge from "./MichaelisMenten"
export { default as MichaelisMentenEdge } from "./MichaelisMenten";
export type { MichaelisEdgeType } from "./MichaelisMenten";
export { MichaelisMentenDrawerInfo } from "./MichaelisMenten";
export { initializeMichaelisEdge } from "./MichaelisMenten";

import CustomEdge from "./Custom";
export { default as CustomEdge } from "./Custom";
export type { CustomEdgeType } from "./Custom";
export { CustomDrawerInfo } from "./Custom";


export type AppEdge = MichaelisEdgeType | RevMAEdgeType | MAEdgeType | CustomEdgeType;


export const edgeTypes = {
  mass_action: MassActionEdge,
  rev_mass_action: ReversibleMassActionEdge,
  michaelis_menten: MichaelisMentenEdge,
  custom: CustomEdge,
};