# Gnome-Shell Extension Audio-Output-Switcher-Workaround

This fork is a hard-coded workaround for the issue of being unable to switch between headphones (front case audio out) and speakers (rear case audio out) while both devices were plugged in. It simply displays an option in GNOME's volume menu, and calls a wrapper script for `amixer` to set the volume levels accordingly.

The extension expects the `switchAudioSources` script that is contained in the repository root to be copied/moved to `~/Scripts/`. If you wish to store the script somewhere else, make sure to modify the filepath constant at the top of the `extension.js` file.

The script uses alsa sound card #1, and assumes the simple mixer control names 'Headphone' and 'Front' for the headphone and speaker outs, respectively. To tweak this configuration for your setup, modify the `switchAudioSources` script at the root of this repository. If you don't know which card or simple mixer controls to use, run `alsamixer` and cycle through the sound cards (F6) and the simple mixer controls for each until you are able to manually adjust the volume for both your headphones and your speakers.

Once the script is configured for your setup, you should be able to switch between devices by running `switchAudioSources front` or `switchAudioSources back`. Once this is working, the extension should be ready to use.


![The menu](https://extensions.gnome.org/static/extension-data/screenshots/screenshot_1028.png)

## Compatibility
  - Gnome Shell 3.10
  - Gnome Shell 3.12
  - Gnome Shell 3.14
  - Gnome Shell 3.16
  - Gnome Shell 3.18
  - Gnome Shell 3.20
  - Gnome Shell 3.22

## About

This extension adds a little entry to the status-menu that lets you choose between headphones and speaker outputs.

This extension is based on kgaut's work at https://github.com/kgaut/gnome-shell-audio-output-swticher which was in turn based on anduchs' work at https://github.com/anduchs/audio-output-switcher but it's not supporting last versions of gnome-shell.

## Installation

Either via

via git

`git clone git@github.com:CReviere/gnome-shell-audio-output-switcher-workaround.git ~/.local/share/gnome-shell/extensions/gnome-shell-audio-output-switcher-workaround@CReviere`

Then restart the gnome-shell via ALT+F2 r and enable the extension using gnome-tweak-tool

To update later, just issue

`(cd ~/.local/share/gnome-shell/extensions/gnome-shell-audio-output-switcher-workaround@CReviere && git pull)`
