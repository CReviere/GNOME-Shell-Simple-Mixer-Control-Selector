const Lang = imports.lang;
const Main = imports.ui.main;
const PopupMenu = imports.ui.popupMenu;
const Util = imports.misc.util;

const switchAudioSource = "/home/cr/Scripts/switchAudioSource"

const AudioOutputSubMenu = new Lang.Class ({
	Name: 'AudioOutputSubMenu',
	Extends: PopupMenu.PopupSubMenuMenuItem,

	_init: function () {
		this.parent ('Audio Output: Connecting...', true);
		this.label.set_text ("Select Audio Output Device");
		this._listOutputDevices();
	},

	_listOutputDevices: function () {
		this.menu.removeAll();

		let headphones = new PopupMenu.PopupMenuItem ('Headphones (Front)');
		headphones.connect ('activate', Lang.bind (this, function () {
			Util.spawnCommandLine ("sh " + switchAudioSource + " front");
		}));
		this.menu.addMenuItem (headphones);

		let speakers = new PopupMenu.PopupMenuItem ('Speakers (Rear)');
		speakers.connect ('activate', Lang.bind (this, function () {
			Util.spawnCommandLine ("sh " + switchAudioSource + " back");		
		}));
		this.menu.addMenuItem (speakers);
	},

	destroy: function () {
		this._control.disconnect (this._controlSignal);
		this.parent();
	}
});

let audioOutputSubMenu = null;

function init() {
}

function enable() {
	if (audioOutputSubMenu !== null)
		return;
	audioOutputSubMenu = new AudioOutputSubMenu();

	// Try to add the output-switcher right below the output slider...
	let volMen = Main.panel.statusArea.aggregateMenu._volume._volumeMenu;
	let items = volMen._getMenuItems();
	let i = 0;
	while (i < items.length)
		if (items[i] === volMen._output.item)
			break;
		else
			i++;
	volMen.addMenuItem (audioOutputSubMenu, i + 1);
}

function disable() {
	audioOutputSubMenu.destroy();
	audioOutputSubMenu = null;
}

