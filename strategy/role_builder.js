﻿// build first construction site in list
module.exports = function (creep) {
    if (creep.energy === 0) {
        creep.moveTo(Game.spawns.Spawn1);
        Game.spawns.Spawn1.transferEnergy(creep);
    }
    else {
        var targets = creep.room.find(Game.CONSTRUCTION_SITES);
        if (targets.length) {
            creep.moveTo(targets[0]);
            creep.build(targets[0]);
        }
    }
};