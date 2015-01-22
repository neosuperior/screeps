module.exports = function (spawn) {
    spawnCreep(spawn);
};

var HARVESTER_BODY = [Game.WORK, Game.CARRY, Game.MOVE];

function spawnCreep(spawn) {
    
    if (!spawn.spawning) {
        var harvesterCount = spawn.room.find(Game.MY_CREEPS, 
            {
                filter: function (object) {
                    return object.memory.parent != spawn.name;
                }
            }).length;

        if (harvesterCount < 5) {
            spawn.createCreep(HARVESTER_BODY, createName(1), { parent: spawn.name });
        }
    }
}

function createName(role) {
    return (role + "_" + Game.time);
}