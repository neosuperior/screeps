// attack first enemy in list
module.exports = function (creep) {
    var target = creep.pos.findNearest(Game.HOSTILE_CREEPS, {
        filter: function (object) {
            return object.getActiveBodyparts(Game.ATTACK) == 0;
        }
    });
    if (target) {
        creep.moveTo(target);
    }
    else {
        target = creep.pos.findNearest(Game.MY_SPAWNS);
        creep.moveTo(target);
    }
};