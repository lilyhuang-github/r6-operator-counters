'use strict';

import counterType from '../core/counterTypeEnums.js';
import operatorId from '../core/operatorIdEnum.js';
import Operator from '../core/operatorFactory.js';
import r6operators from "r6operators";

let nomad = new Operator(r6operators.nomad, operatorId.nomad, "Operation Wind Bastion");

nomad.addCounterNode(operatorId.clash, counterType.hard, "Nomad's Airjab can be used to knock Clash to the ground leaving her extremely vulnerable.");
nomad.addCounterNode(operatorId.oryx, counterType.soft, "Nomad's Airjab can be used to interrupt Oryx's Remah Dashes.");

export default nomad