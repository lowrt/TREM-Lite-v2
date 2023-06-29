/* eslint-disable no-undef */
const title_general = document.getElementById("setting.general");
const title_graphics = document.getElementById("setting.graphics");
const title_sound_effects = document.getElementById("setting.sound-effects");
const title_plugin = document.getElementById("setting.plugin");
const title_info = document.getElementById("setting.info");

const general = document.getElementById("general");
const graphics = document.getElementById("graphics");
const sound_effects = document.getElementById("sound-effects");
const plugin = document.getElementById("plugin");
const info = document.getElementById("info");

title_general.onclick = () => {
	general.style.display = "";
	graphics.style.display = "none";
	sound_effects.style.display = "none";
	plugin.style.display = "none";
	info.style.display = "none";
	title_general.style.color = "white";
	title_graphics.style.color = "grey";
	title_sound_effects.style.color = "grey";
	title_plugin.style.color = "grey";
	title_info.style.color = "grey";
};
title_graphics.onclick = () => {
	general.style.display = "none";
	graphics.style.display = "";
	sound_effects.style.display = "none";
	plugin.style.display = "none";
	info.style.display = "none";
	title_general.style.color = "grey";
	title_graphics.style.color = "white";
	title_sound_effects.style.color = "grey";
	title_plugin.style.color = "grey";
	title_info.style.color = "grey";
};
title_sound_effects.onclick = () => {
	general.style.display = "none";
	graphics.style.display = "none";
	sound_effects.style.display = "";
	plugin.style.display = "none";
	info.style.display = "none";
	title_general.style.color = "grey";
	title_graphics.style.color = "grey";
	title_sound_effects.style.color = "white";
	title_plugin.style.color = "grey";
	title_info.style.color = "grey";
};
title_plugin.onclick = () => {
	general.style.display = "none";
	graphics.style.display = "none";
	sound_effects.style.display = "none";
	plugin.style.display = "";
	info.style.display = "none";
	title_general.style.color = "grey";
	title_graphics.style.color = "grey";
	title_sound_effects.style.color = "grey";
	title_plugin.style.color = "white";
	title_info.style.color = "grey";
};
title_info.onclick = () => {
	general.style.display = "none";
	graphics.style.display = "none";
	sound_effects.style.display = "none";
	plugin.style.display = "none";
	info.style.display = "";
	title_general.style.color = "grey";
	title_graphics.style.color = "grey";
	title_sound_effects.style.color = "grey";
	title_plugin.style.color = "grey";
	title_info.style.color = "white";
};

document.getElementById("jma").checked = storage.getItem("jma") ?? true;
document.getElementById("nied").checked = storage.getItem("nied") ?? true;
document.getElementById("kma").checked = storage.getItem("kma") ?? true;
document.getElementById("scdzj").checked = storage.getItem("scdzj") ?? true;

document.getElementById("show_eew").checked = storage.getItem("show_eew") ?? true;
document.getElementById("show_report").checked = storage.getItem("show_report") ?? true;
document.getElementById("show_trem").checked = storage.getItem("show_trem") ?? true;
document.getElementById("show_palert").checked = storage.getItem("show_palert") ?? true;

document.getElementById("ota_restart").checked = storage.getItem("ota_restart") ?? false;
document.getElementById("disable_autoZoom").checked = storage.getItem("disable_autoZoom") ?? false;
document.getElementById("speecd_use").checked = storage.getItem("speecd_use") ?? false;
document.getElementById("start_up").checked = storage.getItem("start_up") ?? true;

document.getElementById("audio.EEW").checked = storage.getItem("audio.EEW") ?? true;
document.getElementById("audio.EEW2").checked = storage.getItem("audio.EEW2") ?? true;
document.getElementById("audio.palert").checked = storage.getItem("audio.palert") ?? true;
document.getElementById("audio.PGA1").checked = storage.getItem("audio.PGA1") ?? true;
document.getElementById("audio.PGA2").checked = storage.getItem("audio.PGA2") ?? true;
document.getElementById("audio.Report").checked = storage.getItem("audio.Report") ?? true;
document.getElementById("audio.Shindo0").checked = storage.getItem("audio.Shindo0") ?? true;
document.getElementById("audio.Shindo1").checked = storage.getItem("audio.Shindo1") ?? true;
document.getElementById("audio.Shindo2").checked = storage.getItem("audio.Shindo2") ?? true;
document.getElementById("audio.1/ding").checked = storage.getItem("audio.1/ding") ?? true;

document.getElementById("client-version").textContent = app.getVersion();
document.getElementById("client-uuid").title = `點擊複製 UUID\n${localStorage.UUID}`;
document.getElementById("client-uuid").onclick = () => {
	navigator.clipboard.writeText(localStorage.UUID).then(() => {
		console.log(localStorage.UUID);
		console.log("複製成功");
	});
};

const intensity_text = ["0級", "1級", "2級", "3級", "4級", "5弱", "5強", "6弱", "6強", "7級"];
const rts = document.getElementById("rts-level");
const eew = document.getElementById("eew-level");
for (let i = 0; i < intensity_text.length; i++) {
	const o1 = document.createElement("option");
	o1.textContent = intensity_text[i];
	o1.value = i;
	if ((storage.getItem("rts-level") ?? -1) == i) o1.selected = true;
	rts.appendChild(o1);
	const o2 = document.createElement("option");
	o2.textContent = intensity_text[i];
	o2.value = i;
	if ((storage.getItem("eew-level") ?? -1) == i) o2.selected = true;
	eew.appendChild(o2);
}

document.getElementById(`map.style.${storage.getItem("map_style") ?? 1}`).selected = true;