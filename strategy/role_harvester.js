// harvest nearest source
module.exports = function (creep) {
    if (creep.energy < creep.energyCapacity) {
        var target = creep.pos.findNearest(Game.SOURCES, { maxOps: 500 });
        creep.moveTo(target);
        creep.harvest(target);
    }
    else {
        var spawn = creep.pos.findNearest(Game.MY_SPAWNS, { maxOps: 500 });
        creep.moveTo(spawn);
        creep.transferEnergy(spawn);
    }
};