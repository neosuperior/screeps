var be_spawn = require('role_spawn');
var be_harvester = require('role_harvester');
var be_builder = require('role_builder');
var be_guard = require('role_guard');

var ROLE_HARVESTER = "1";
var ROLE_BUILDER = "2";
var ROLE_GUARD = "3";

for (var i in Game.spawns) {
    be_spawn(Game.spawns[i]);
}

for (var i in Game.creeps) {
    var creep = Game.creeps[i];

    switch (creep.name[0]) {
        case ROLE_HARVESTER:
            be_harvester(creep);
            break;

        case ROLE_BUILDER:
            be_builder(creep);
            break;

        case ROLE_GUARD:
            be_guard(creep);
            break;
    }
}
