(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

// EVERYTHING WORKS GREAT IN THE CONSOLE.

'use strict';
var newPlayer = $('#newPlayer');
var teamName = $('#teamName');
var addPlayer = $('#addPlayer');
var quarterback = $('#radio_1');
var runningback = $('#radio_2');
var kicker = $('#radio_3');

var quarterbacksBox = $('#quarterbacksBox'); // boxes with players in them
var runningbacks = $('#runningbacks');
var kickers = $('#kickers');

// var Bob = new Quarterback ('Bob Mcc', 'Broncos');

// quarterbacks.append('<div class="seperator"><div>Player: '+Bob.name+'</div>'+'<div>Team: '+Bob.team+'</div>'+'<div>Attempts: '+Bob.attempts+'</div>'+'<div>Completions: '+Bob.completions+'</div>'+'<div>Yards: '+Bob.yards+'</div>'+'<div>Touchdowns: '+Bob.touchdowns+'</div>'+'<div>Interceptions: '+Bob.interceptions+'</div>'+'<div>Sacks: '+Bob.sacks+'</div>'+'<div>Longest Completion: '+Bob.longestCompletion+'</div></div>');

// var Joe = new Runningback('Joe Blo', 'Broncos');

// runningbacks.append('<div class="seperator"><div>Player: '+Joe.name+'</div>'+'<div>Team: '+Joe.team+'</div>'+'<div>Rushes: '+Joe.rushes+'</div>'+'<div>Yards: '+Joe.yards+'</div>'+'<div>20+ Yard Rushes: '+Joe.over20+'</div>'+'<div>Touchdowns: '+Joe.touchdowns+'</div>'+'<div>First Downs: '+Joe.firstDowns+'</div>'+'<div>Fumbles: '+Joe.fumbles+'</div>'+'<div>Longest Rush: '+Joe.longestRush+'</div></div>');

// var Gib = new Kicker('Gib Big', 'Broncos');

// kickers.append('<div class="seperator"><div>Player: '+Gib.name+'</div>'+'<div>Team: '+Gib.team+'</div>'+'<div>Attempts: '+Gib.attempts+'</div>'+'<div>Made: '+Gib.made+'</div>'+'<div>Longest Field Goal: '+Gib.longestFieldGoal+'</div>'+'<div>Points: '+Gib.points+'</div>');

var playerArrayQB = [];
var playerArrayRB = [];
var playerArrayK = [];

addPlayer.click(function (e) {
	e.preventDefault();
	var newP = {};
	if (quarterback.is(':checked')) {
		// console.log(newP);
		newP = new Quarterback(newPlayer.val(), teamName.val());
		// console.log(newP);
		playerArrayQB.push(newP);
		// console.log(playerArrayQB);
	}
	if (runningback.is(':checked')) {
		var newP = new Runningback(newPlayer.val(), teamName.val());
		playerArrayRB.push(newP);
	}
	if (kicker.is(':checked')) {
		var newP = new Kicker(newPlayer.val(), teamName.val());
		playerArrayK.push(newP);
	}
	// console.log(newP);
	newPlayer.val('');
	teamName.val('');
	$('input[name=PositionSelector]').attr('checked', false);
});

function Quarterback(name, team) {
	this.name = name;
	this.team = team;
	this.attempts = 0;
	this.completions = 0;
	this.yards = 0;
	this.touchdowns = 0;
	this.interceptions = 0;
	this.sacks = 0;
	this.longestCompletion = 0;
	// console.log(this);
	playerArrayQB.push(this);
	// console.log(playerArrayQB);

	quarterbacksBox.append('<div id="index" class="seperator"><div>Player: ' + this.name + '</div>' + '<div>Team: ' + this.team + '</div>' + '<div>Attempts: ' + this.attempts + '</div>' + '<div>Completions: ' + this.completions + '</div>' + '<div>Yards: ' + this.yards + '</div>' + '<div>Touchdowns: ' + this.touchdowns + '</div>' + '<div>Interceptions: ' + this.interceptions + '</div>' + '<div>Sacks: ' + this.sacks + '</div>' + '<div>Longest Completion: ' + this.longestCompletion + '</div></div>');

	this.completionPercentage = function () {
		return Math.round(this.completions / this.attempts * 100) + '%';
	};
	this.yardsPerAttempt = function () {
		return this.yards / this.attempts;
	};
	this.addAttempt = function (type, yards) {
		type = type.toLowerCase();
		if (type === 'touchdown') {
			this.touchdowns++;
			this.attempts++;
			this.completions++;
			this.yards += yards;
			// return this;
			if (yards > this.longestCompletion) {
				this.longestCompletion = yards;
				return this;
			}
		} else if (type === 'completion') {
			this.attempts++;
			this.completions++;
			this.yards += yards;
			// return this;
			if (yards > this.longestCompletion) {
				this.longestCompletion = yards;
			}
		} else if (type === 'incomplete') {
			this.attempts++;
			// return this;
		} else if (type === 'interception') {
				this.interceptions++;
				this.attempts++;
				// return this;
			} else if (type === 'sack') {
					this.sacks++;
					this.yards += yards;
					// return this;
				}
		quarterbacksBox.html('');
		console.log('I am a funny man');
		for (var i = 0; i < playerArrayQB.length; i++) {
			quarterbacksBox.append('<div id="index" class="seperator"><div>Player: ' + playerArrayQB[i].name + '</div>' + '<div>Team: ' + playerArrayQB[i].team + '</div>' + '<div>Attempts: ' + playerArrayQB[i].attempts + '</div>' + '<div>Completions: ' + playerArrayQB[i].completions + '</div>' + '<div>Yards: ' + playerArrayQB[i].yards + '</div>' + '<div>Touchdowns: ' + playerArrayQB[i].touchdowns + '</div>' + '<div>Interceptions: ' + playerArrayQB[i].interceptions + '</div>' + '<div>Sacks: ' + playerArrayQB[i].sacks + '</div>' + '<div>Longest Completion: ' + playerArrayQB[i].longestCompletion + '</div></div>');
		}
	};
}

// setInterval(function() {
// 	quarterbacks.html('');
// 	updateQB();
// },1000);

// function updateQB(){
// 	// console.log(playerArrayQB[0]);
// 	for (var i=0; i<playerArrayQB.length;i++){
// 		quarterbacks.append('<div id="index" class="seperator"><div>Player: '+playerArrayQB[i].name+'</div>'+'<div>Team: '+playerArrayQB[i].team+'</div>'+'<div>Attempts: '+playerArrayQB[i].attempts+'</div>'+'<div>Completions: '+playerArrayQB[i].completions+'</div>'+'<div>Yards: '+playerArrayQB[i].yards+'</div>'+'<div>Touchdowns: '+playerArrayQB[i].touchdowns+'</div>'+'<div>Interceptions: '+playerArrayQB[i].interceptions+'</div>'+'<div>Sacks: '+playerArrayQB[i].sacks+'</div>'+'<div>Longest Completion: '+playerArrayQB[i].longestCompletion+'</div></div>');
// 	}//tried to add a button for each added player

// }
// function updateStats(){
// 	console.log('clicked with');
// }
function Runningback(name, team) {
	this.name = name;
	this.team = team;
	this.rushes = 0;
	this.yards = 0;
	this.over20 = 0;
	this.touchdowns = 0;
	this.firstDowns = 0;
	this.fumbles = 0;
	this.longestRush = 0;

	this.yardsPerRush = function () {
		return this.yards / this.rushes;
	};
	this.addAttempt = function (type, yards) {
		type = type.toLowerCase();
		if (type === 'touchdown') {
			this.touchdowns++;
			this.rushes++;
			this.yards += yards;
			if (yards > 20) {
				this.over20++;
			}
			if (yards > this.longestRush) {
				this.longestRush = yards;
			}
		} else if (type === 'rush') {
			this.rushes++;
			this.yards += yards;
			if (yards > 20) {
				this.over20++;
			}
			if (yards > this.longestRush) {
				this.longestRush = yards;
			}
		} else if (type === 'first down') {
			this.rushes++;
			this.yards += yards;
			if (yards > 20) {
				this.over20++;
			}
			if (yards > this.longestRush) {
				this.longestRush = yards;
			}
		} else if (type === 'fumble') {
			this.rushes++;
			this.fumbles++;
		}
	};
}
// setInterval(function() {
// 	runningbacks.html('');
// 	updateRB();
// },2000);

// function updateRB(){
// 	for (var i=0; i<playerArrayRB.length;i++){
// 		runningbacks.append('<div class="seperator"><div>Player: '+playerArrayRB[i].name+'</div>'+'<div>Team: '+playerArrayRB[i].team+'</div>'+'<div>Attempts: '+playerArrayRB[i].attempts+'</div>'+'<div>Yards: '+playerArrayRB[i].yards+'</div>'+'<div>Over 20yds in a play: '+playerArrayRB[i].over20+'</div>'+'<div>Touchdowns: '+playerArrayRB[i].touchdowns+'</div>'+'<div>First Downs: '+playerArrayRB[i].firstDowns+'</div>'+'<div>Fumbles: '+playerArrayRB[i].fumbles+'</div>'+'<div>Longest Rush: '+playerArrayRB[i].longestRush+'</div></div>');
// 	}
// }
function Kicker(name, team) {
	this.name = name;
	this.team = team;
	this.attempts = 0;
	this.made = 0;
	this.longestFieldGoal = 0;
	this.points = 0;

	this.fieldGoalPercentage = function () {
		return this.made / this.attempts * 100 + '%';
	};

	this.addAttempt = function (type, yards) {
		type = type.toLowerCase();
		if (type === 'field goal') {
			this.points += 3;
			this.attempts++;
			this.made++;
			if (yards > this.longestFieldGoal) {
				this.longestFieldGoal = yards;
			}
			if (yards > this.longestRush) {
				this.longestRush = yards;
			}
		} else if (type === 'miss') {
			this.attempts++;
		}
	};
}
// setInterval(function() {
// 	kickers.html('');
// 	updateK();
// },2000);

// function updateK(){
// 	for (var i=0; i<playerArrayK.length;i++){
// 		kickers.append('<div class="seperator"><div>Player: '+playerArrayK[i].name+'</div>'+'<div>Team: '+playerArrayK[i].team+'</div>'+'<div>Attempts: '+playerArrayK[i].attempts+'</div>'+'<div>Made: '+playerArrayK[i].made+'</div>'+'<div>Longest Field Goal: '+playerArrayK[i].longestFieldGoal+'</div></div>');
// 	}
// }

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map