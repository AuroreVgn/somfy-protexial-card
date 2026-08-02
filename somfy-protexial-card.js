/* ========================================================
   Somfy Protexial / Protexiom Card
   ======================================================== */

const CARD_VERSION = "v0.0.5";

const SENSORS_DEF = [
  { key: "capteur1", defaultEntity: "binary_sensor.somfy_protexial_batterie", defaultText: "battery", type: "binary", okState: "off" },
  { key: "capteur2", defaultEntity: "binary_sensor.somfy_protexial_centrale", defaultText: "controlPanel", type: "binary", okState: "off" },
  { key: "capteur3", defaultEntity: "binary_sensor.somfy_protexial_portes_ou_fenetres", defaultText: "doorsWindows", type: "binary", okState: "off" },
  { key: "capteur4", defaultEntity: "binary_sensor.somfy_protexial_mouvement", defaultText: "motion", type: "binary", okState: "off" },
  { key: "capteur5", defaultEntity: "binary_sensor.somfy_protexial_camera", defaultText: "camera", type: "binary", okState: "on" },
  { key: "capteur6", defaultEntity: "binary_sensor.somfy_protexial_comm_centrale_capteurs", defaultText: "sensors", type: "binary", okState: "on" },
  { key: "capteur7", defaultEntity: "binary_sensor.somfy_protexial_communication_gsm", defaultText: "gsm", type: "binary", okState: "on" },
  { key: "capteur8", defaultEntity: "sensor.somfy_protexial_operateur_gsm", defaultText: "operator", type: "info" },
  { key: "capteur9", defaultEntity: "sensor.somfy_protexial_signal_gsm_5", defaultText: "gsmSignal", type: "info" },
];

const RESET_DEF = [
  { key: "battery", configKey: "reset_battery_entity", defaultEntity: "button.somfy_protexial_reinitialiser_defaut_piles", icon: "mdi:battery-sync", text: "resetBattery" },
  { key: "alarm", configKey: "reset_alarm_entity", defaultEntity: "button.somfy_protexial_reinitialiser_defaut_alarme", icon: "mdi:shield-refresh", text: "resetAlarm" },
  { key: "link", configKey: "reset_link_entity", defaultEntity: "button.somfy_protexial_reinitialiser_defaut_liaison_radio", icon: "mdi:access-point", text: "resetLink" },
];

const TRANSLATIONS = {
  fr: {
    cardSettings: "Paramètres de la carte", alarmEntity: "Entité alarme", cardTitle: "Titre de la carte",
    entity: "Entité", displayedName: "Nom affiché", alarm: "Alarme", sensorsTitle: "Capteurs",
    resetsTitle: "Réinitialisations", noSensors: "Aucun capteur sélectionné", disarm: "Désarmer",
    away: "Absent", home: "Présent", confirmReset: "Confirmer la réinitialisation :",
    resetBattery: "Défauts piles", resetAlarm: "Défauts alarme", resetLink: "Liaison radio",
    battery: "Batterie", controlPanel: "Centrale", doorsWindows: "Portes/Fenêtres", motion: "Mouvement",
    camera: "Caméra", sensors: "Capteurs", gsm: "GSM", operator: "Opérateur", gsmSignal: "Signal GSM (/5)",
    defaultTitle: "Somfy Protexial — Contrôle", unavailable: "Indisponible", unknown: "Inconnu",
    lessThanMinute: "depuis moins d’une minute", sinceMinutes: "depuis {n} min", sinceHours: "depuis {n}",
    resetBatteryEntity: "Bouton de réinitialisation des piles", resetAlarmEntity: "Bouton de réinitialisation de l’alarme",
    resetLinkEntity: "Bouton de réinitialisation de la liaison radio"
  },
  en: {
    cardSettings: "Card settings", alarmEntity: "Alarm entity", cardTitle: "Card title", entity: "Entity",
    displayedName: "Displayed name", alarm: "Alarm", sensorsTitle: "Sensors", resetsTitle: "Resets",
    noSensors: "No sensor selected", disarm: "Disarm", away: "Away", home: "Home",
    confirmReset: "Confirm reset:", resetBattery: "Battery faults", resetAlarm: "Alarm faults", resetLink: "Radio link",
    battery: "Battery", controlPanel: "Control panel", doorsWindows: "Doors/Windows", motion: "Motion",
    camera: "Camera", sensors: "Sensors", gsm: "GSM", operator: "Operator", gsmSignal: "GSM signal (/5)",
    defaultTitle: "Somfy Protexial — Control", unavailable: "Unavailable", unknown: "Unknown",
    lessThanMinute: "for less than a minute", sinceMinutes: "for {n} min", sinceHours: "for {n}",
    resetBatteryEntity: "Battery reset button", resetAlarmEntity: "Alarm reset button", resetLinkEntity: "Radio-link reset button"
  },
  de: {
    cardSettings: "Karteneinstellungen", alarmEntity: "Alarm-Entität", cardTitle: "Kartentitel", entity: "Entität",
    displayedName: "Angezeigter Name", alarm: "Alarm", sensorsTitle: "Sensoren", resetsTitle: "Zurücksetzen",
    noSensors: "Kein Sensor ausgewählt", disarm: "Unscharf", away: "Abwesend", home: "Anwesend",
    confirmReset: "Zurücksetzen bestätigen:", resetBattery: "Batteriefehler", resetAlarm: "Alarmfehler", resetLink: "Funkverbindung",
    battery: "Batterie", controlPanel: "Zentrale", doorsWindows: "Türen/Fenster", motion: "Bewegung",
    camera: "Kamera", sensors: "Sensoren", gsm: "GSM", operator: "Anbieter", gsmSignal: "GSM-Signal (/5)",
    defaultTitle: "Somfy Protexial — Steuerung", unavailable: "Nicht verfügbar", unknown: "Unbekannt",
    lessThanMinute: "seit weniger als einer Minute", sinceMinutes: "seit {n} Min.", sinceHours: "seit {n}",
    resetBatteryEntity: "Taste zum Zurücksetzen der Batteriefehler", resetAlarmEntity: "Taste zum Zurücksetzen der Alarmfehler", resetLinkEntity: "Taste zum Zurücksetzen der Funkverbindung"
  },
  es: {
    cardSettings: "Ajustes de la tarjeta", alarmEntity: "Entidad de alarma", cardTitle: "Título de la tarjeta", entity: "Entidad",
    displayedName: "Nombre mostrado", alarm: "Alarma", sensorsTitle: "Sensores", resetsTitle: "Restablecimientos",
    noSensors: "Ningún sensor seleccionado", disarm: "Desarmar", away: "Ausente", home: "Presente",
    confirmReset: "Confirmar restablecimiento:", resetBattery: "Fallos de pilas", resetAlarm: "Fallos de alarma", resetLink: "Enlace de radio",
    battery: "Pila", controlPanel: "Central", doorsWindows: "Puertas/Ventanas", motion: "Movimiento",
    camera: "Cámara", sensors: "Sensores", gsm: "GSM", operator: "Operador", gsmSignal: "Señal GSM (/5)",
    defaultTitle: "Somfy Protexial — Control", unavailable: "No disponible", unknown: "Desconocido",
    lessThanMinute: "desde hace menos de un minuto", sinceMinutes: "desde hace {n} min", sinceHours: "desde hace {n}",
    resetBatteryEntity: "Botón de reinicio de pilas", resetAlarmEntity: "Botón de reinicio de alarma", resetLinkEntity: "Botón de reinicio del enlace de radio"
  },
  it: {
    cardSettings: "Impostazioni scheda", alarmEntity: "Entità allarme", cardTitle: "Titolo scheda", entity: "Entità",
    displayedName: "Nome visualizzato", alarm: "Allarme", sensorsTitle: "Sensori", resetsTitle: "Ripristini",
    noSensors: "Nessun sensore selezionato", disarm: "Disattiva", away: "Assente", home: "Presente",
    confirmReset: "Conferma ripristino:", resetBattery: "Errori batterie", resetAlarm: "Errori allarme", resetLink: "Collegamento radio",
    battery: "Batteria", controlPanel: "Centrale", doorsWindows: "Porte/Finestre", motion: "Movimento",
    camera: "Telecamera", sensors: "Sensori", gsm: "GSM", operator: "Operatore", gsmSignal: "Segnale GSM (/5)",
    defaultTitle: "Somfy Protexial — Controllo", unavailable: "Non disponibile", unknown: "Sconosciuto",
    lessThanMinute: "da meno di un minuto", sinceMinutes: "da {n} min", sinceHours: "da {n}",
    resetBatteryEntity: "Pulsante ripristino batterie", resetAlarmEntity: "Pulsante ripristino allarme", resetLinkEntity: "Pulsante ripristino collegamento radio"
  },
  nl: {
    cardSettings: "Kaartinstellingen", alarmEntity: "Alarmentiteit", cardTitle: "Kaarttitel", entity: "Entiteit",
    displayedName: "Weergavenaam", alarm: "Alarm", sensorsTitle: "Sensoren", resetsTitle: "Resetten",
    noSensors: "Geen sensor geselecteerd", disarm: "Uitschakelen", away: "Afwezig", home: "Aanwezig",
    confirmReset: "Reset bevestigen:", resetBattery: "Batterijfouten", resetAlarm: "Alarmfouten", resetLink: "Radioverbinding",
    battery: "Batterij", controlPanel: "Centrale", doorsWindows: "Deuren/Ramen", motion: "Beweging",
    camera: "Camera", sensors: "Sensoren", gsm: "GSM", operator: "Provider", gsmSignal: "GSM-signaal (/5)",
    defaultTitle: "Somfy Protexial — Bediening", unavailable: "Niet beschikbaar", unknown: "Onbekend",
    lessThanMinute: "sinds minder dan een minuut", sinceMinutes: "sinds {n} min", sinceHours: "sinds {n}",
    resetBatteryEntity: "Knop batterijfouten resetten", resetAlarmEntity: "Knop alarmfouten resetten", resetLinkEntity: "Knop radioverbinding resetten"
  },
  pt: {
    cardSettings: "Definições do cartão", alarmEntity: "Entidade do alarme", cardTitle: "Título do cartão", entity: "Entidade",
    displayedName: "Nome apresentado", alarm: "Alarme", sensorsTitle: "Sensores", resetsTitle: "Reposições",
    noSensors: "Nenhum sensor selecionado", disarm: "Desarmar", away: "Ausente", home: "Presente",
    confirmReset: "Confirmar reposição:", resetBattery: "Erros das pilhas", resetAlarm: "Erros do alarme", resetLink: "Ligação de rádio",
    battery: "Pilha", controlPanel: "Central", doorsWindows: "Portas/Janelas", motion: "Movimento",
    camera: "Câmara", sensors: "Sensores", gsm: "GSM", operator: "Operador", gsmSignal: "Sinal GSM (/5)",
    defaultTitle: "Somfy Protexial — Controlo", unavailable: "Indisponível", unknown: "Desconhecido",
    lessThanMinute: "há menos de um minuto", sinceMinutes: "há {n} min", sinceHours: "há {n}",
    resetBatteryEntity: "Botão de reposição das pilhas", resetAlarmEntity: "Botão de reposição do alarme", resetLinkEntity: "Botão de reposição da ligação de rádio"
  }
};

function languageFor(hass) {
  const language = (hass?.locale?.language || hass?.language || navigator.language || "en").toLowerCase();
  const short = language.split("-")[0];
  return TRANSLATIONS[short] ? short : "en";
}

function tr(hass, key, values = {}) {
  const lang = languageFor(hass);
  let text = TRANSLATIONS[lang]?.[key] ?? TRANSLATIONS.en[key] ?? key;
  Object.entries(values).forEach(([name, value]) => { text = text.replace(`{${name}}`, value); });
  return text;
}

class SomfyProtexialCardEditor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._hass = null;
    this._config = {};
    this._built = false;
  }

  set hass(hass) {
    const languageChanged = this._hass && languageFor(this._hass) !== languageFor(hass);
    this._hass = hass;
    if (languageChanged) {
      this._render();
      return;
    }
    this.shadowRoot.querySelectorAll("ha-form").forEach(el => { el.hass = hass; });
  }

  setConfig(config) {
    this._config = { ...config };
    if (!this._built) {
      this._built = true;
      this._render();
    }
  }

  _fireConfig(config) {
    this._config = config;
    this.dispatchEvent(new CustomEvent("config-changed", {
      detail: { config }, bubbles: true, composed: true,
    }));
  }

  _render() {
    const cfg = this._config || {};
    const shown = [...(cfg.sensors || SENSORS_DEF.map(sensor => sensor.key))];
    const labels = cfg.labels || {};
    const entities = cfg.entities || {};

    this.shadowRoot.innerHTML = `
      <style>
        :host { display:block; font-family:var(--primary-font-family, sans-serif); }
        ha-form { display:block; margin-bottom:8px; }
        ha-expansion-panel { display:block; margin-bottom:8px; --expansion-panel-content-padding:12px; border-radius:6px; --ha-card-border-radius:6px; }
        ha-expansion-panel h3 { margin:0; font-size:inherit; font-weight:600; }
        .block { border-top:1px solid var(--divider-color); padding:12px 0 4px; }
        .header { display:flex; align-items:center; gap:10px; margin-bottom:8px; }
        .name { font-size:13px; font-weight:600; color:var(--primary-text-color); flex:1; }
        input[type=checkbox] { width:16px; height:16px; accent-color:var(--primary-color); cursor:pointer; flex-shrink:0; }
      </style>
      <ha-form id="form_alarm"></ha-form>
      <ha-expansion-panel outlined>
        <ha-icon slot="leading-icon" icon="mdi:cog"></ha-icon>
        <h3 slot="header">${tr(this._hass, "cardSettings")}</h3>
        <div>
          <ha-form id="form_title"></ha-form>
          <div id="sensors_container"></div>
          <div class="block"><ha-form id="form_resets"></ha-form></div>
        </div>
      </ha-expansion-panel>`;

    requestAnimationFrame(() => {
      const formAlarm = this.shadowRoot.getElementById("form_alarm");
      formAlarm.hass = this._hass;
      formAlarm.schema = [{ name: "alarm_entity", selector: { entity: { domain: "alarm_control_panel" } } }];
      formAlarm.data = { alarm_entity: cfg.alarm_entity || "alarm_control_panel.alarme" };
      formAlarm.computeLabel = field => tr(this._hass, field.name === "alarm_entity" ? "alarmEntity" : field.name);
      formAlarm.addEventListener("value-changed", event => {
        event.stopPropagation();
        this._fireConfig({ ...this._config, alarm_entity: event.detail.value.alarm_entity });
      });

      const formTitle = this.shadowRoot.getElementById("form_title");
      formTitle.hass = this._hass;
      formTitle.schema = [{ name: "title", selector: { text: {} } }];
      formTitle.data = { title: cfg.title || "" };
      formTitle.computeLabel = () => tr(this._hass, "cardTitle");
      formTitle.addEventListener("value-changed", event => {
        event.stopPropagation();
        this._fireConfig({ ...this._config, title: event.detail.value.title });
      });

      const container = this.shadowRoot.getElementById("sensors_container");
      SENSORS_DEF.forEach(sensor => {
        const block = document.createElement("div");
        block.className = "block";
        block.innerHTML = `
          <div class="header">
            <input type="checkbox" id="chk_${sensor.key}" ${shown.includes(sensor.key) ? "checked" : ""}>
            <div class="name">${tr(this._hass, sensor.defaultText)}</div>
          </div>
          <ha-form id="form_${sensor.key}"></ha-form>`;
        container.appendChild(block);

        block.querySelector(`#chk_${sensor.key}`).addEventListener("change", () => {
          const newShown = shown.includes(sensor.key) ? shown.filter(key => key !== sensor.key) : [...shown, sensor.key];
          shown.length = 0;
          shown.push(...newShown);
          this._fireConfig({ ...this._config, sensors: newShown });
        });

        const form = block.querySelector(`#form_${sensor.key}`);
        form.hass = this._hass;
        form.schema = [
          { name: `entity_${sensor.key}`, selector: { entity: {} } },
          { name: `label_${sensor.key}`, selector: { text: {} } },
        ];
        form.data = {
          [`entity_${sensor.key}`]: entities[sensor.key] || sensor.defaultEntity,
          [`label_${sensor.key}`]: labels[sensor.key] || "",
        };
        form.computeLabel = field => field.name.startsWith("entity_") ? tr(this._hass, "entity") : tr(this._hass, "displayedName");
        form.addEventListener("value-changed", event => {
          event.stopPropagation();
          const value = event.detail.value;
          const newEntities = { ...(this._config.entities || {}) };
          const newLabels = { ...(this._config.labels || {}) };
          const entityValue = value[`entity_${sensor.key}`];
          const labelValue = value[`label_${sensor.key}`]?.trim();
          if (entityValue && entityValue !== sensor.defaultEntity) newEntities[sensor.key] = entityValue;
          else delete newEntities[sensor.key];
          if (labelValue) newLabels[sensor.key] = labelValue;
          else delete newLabels[sensor.key];
          this._fireConfig({ ...this._config, entities: newEntities, labels: newLabels });
        });
      });

      const formResets = this.shadowRoot.getElementById("form_resets");
      formResets.hass = this._hass;
      formResets.schema = RESET_DEF.map(reset => ({ name: reset.configKey, selector: { entity: { domain: "button" } } }));
      formResets.data = Object.fromEntries(RESET_DEF.map(reset => [reset.configKey, cfg[reset.configKey] || reset.defaultEntity]));
      formResets.computeLabel = field => {
        const reset = RESET_DEF.find(item => item.configKey === field.name);
        return tr(this._hass, reset ? `${reset.text}Entity` : field.name);
      };
      formResets.addEventListener("value-changed", event => {
        event.stopPropagation();
        this._fireConfig({ ...this._config, ...event.detail.value });
      });
    });
  }
}

if (!customElements.get("somfy-protexial-card-editor")) {
  customElements.define("somfy-protexial-card-editor", SomfyProtexialCardEditor);
}

class SomfyProtexialCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._rendered = false;
    this._language = null;
  }

  static getConfigElement() { return document.createElement("somfy-protexial-card-editor"); }

  static getStubConfig() {
    return {
      alarm_entity: "alarm_control_panel.alarme",
      sensors: SENSORS_DEF.map(sensor => sensor.key),
      labels: {}, entities: {}, title: "",
      ...Object.fromEntries(RESET_DEF.map(reset => [reset.configKey, reset.defaultEntity])),
    };
  }

  setConfig(config) {
    console.info(`%c SOMFY-PROTEXIAL-CARD %c ${CARD_VERSION} `,
      "color:#c8a96e;background:#1e1e2e;font-weight:700;padding:2px 4px;border-radius:4px 0 0 4px",
      "color:#1e1e2e;background:#c8a96e;font-weight:700;padding:2px 4px;border-radius:0 4px 4px 0");
    this.config = {
      alarm_entity: config.alarm_entity || "alarm_control_panel.alarme",
      sensors: config.sensors || SENSORS_DEF.map(sensor => sensor.key),
      labels: config.labels || {}, entities: config.entities || {}, title: config.title || "",
      ...Object.fromEntries(RESET_DEF.map(reset => [reset.configKey, config[reset.configKey] || reset.defaultEntity])),
      alarm_code: config.alarm_code,
    };
    this._rendered = false;
  }

  set hass(hass) {
    this._hass = hass;
    const language = languageFor(hass);
    if (!this._rendered || language !== this._language) {
      this._language = language;
      this._rendered = true;
      this._render();
    } else {
      this._update();
    }
  }

  _getState(entityId) { return this._hass?.states?.[entityId]; }

  _formatState(entity) {
    if (!entity) return tr(this._hass, "unavailable");
    if (entity.state === "unavailable") return tr(this._hass, "unavailable");
    if (entity.state === "unknown") return tr(this._hass, "unknown");
    try { return this._hass.formatEntityState(entity); } catch (_) { return entity.state; }
  }

  _formatName(entity, fallbackKey) {
    if (entity) {
      try { return this._hass.formatEntityName(entity); } catch (_) { /* fallback below */ }
      if (entity.attributes?.friendly_name) return entity.attributes.friendly_name;
    }
    return tr(this._hass, fallbackKey);
  }

  _alarmValues() {
    const entity = this._getState(this.config.alarm_entity);
    const state = entity?.state ?? "unavailable";
    const colors = {
      disarmed: "var(--secondary-text-color)", armed_away: "#206633", armed_home: "#f59e0b",
      armed_night: "#8b5cf6", pending: "#f59e0b", arming: "#f59e0b", triggered: "#ef4444",
      unavailable: "var(--disabled-color)", unknown: "var(--disabled-color)",
    };
    return { label: this._formatState(entity), color: colors[state] || "var(--secondary-text-color)", state };
  }

  _sinceLabel(entityId) {
    const entity = this._getState(entityId);
    if (!entity?.last_changed) return "";
    const diffMin = Math.floor((Date.now() - new Date(entity.last_changed).getTime()) / 60000);
    if (diffMin < 1) return tr(this._hass, "lessThanMinute");
    if (diffMin < 60) return tr(this._hass, "sinceMinutes", { n: diffMin });
    const hours = Math.floor(diffMin / 60), minutes = diffMin % 60;
    const value = minutes === 0 ? `${hours}h` : `${hours}h${String(minutes).padStart(2, "0")}`;
    return tr(this._hass, "sinceHours", { n: value });
  }

  _entityIcon(entity, sensor) {
    if (entity?.attributes?.icon) return entity.attributes.icon;

    const state = entity?.state;
    const deviceClass = entity?.attributes?.device_class;
    const domain = entity?.entity_id?.split(".")[0];

    const deviceClassIcons = {
      battery: state === "on" ? "mdi:battery-alert" : "mdi:battery",
      connectivity: state === "on" ? "mdi:radio-tower" : "mdi:radio-tower-off",
      door: state === "on" ? "mdi:door-open" : "mdi:door-closed",
      window: state === "on" ? "mdi:window-open-variant" : "mdi:window-closed-variant",
      motion: "mdi:motion-sensor",
      tamper: state === "on" ? "mdi:shield-alert" : "mdi:shield-check",
      problem: state === "on" ? "mdi:alert-circle" : "mdi:check-circle",
      running: state === "on" ? "mdi:play-circle" : "mdi:pause-circle",
    };
    if (deviceClassIcons[deviceClass]) return deviceClassIcons[deviceClass];

    const sensorIcons = {
      capteur1: state === "on" ? "mdi:battery-alert" : "mdi:battery",
      capteur2: state === "on" ? "mdi:alert-circle" : "mdi:shield-check",
      capteur3: state === "on" ? "mdi:door-open" : "mdi:door-closed",
      capteur4: "mdi:motion-sensor",
      capteur5: state === "on" ? "mdi:cctv" : "mdi:cctv-off",
      capteur6: state === "on" ? "mdi:radio-tower" : "mdi:radio-tower-off",
      capteur7: state === "on" ? "mdi:signal" : "mdi:signal-off",
      capteur8: "mdi:access-point-network",
      capteur9: "mdi:signal-cellular-3",
    };
    if (sensorIcons[sensor?.key]) return sensorIcons[sensor.key];

    const domainIcons = {
      binary_sensor: "mdi:radiobox-marked",
      sensor: "mdi:gauge",
      button: "mdi:gesture-tap-button",
    };
    return domainIcons[domain] || "mdi:help-circle-outline";
  }

  _sensorValues(sensor) {
    const entityId = this.config.entities[sensor.key] || sensor.defaultEntity;
    const entity = this._getState(entityId);
    const state = entity?.state ?? "unavailable";
    const unavailable = ["unavailable", "unknown"].includes(state);
    const statusLabel = this._formatState(entity);
    if (sensor.type === "binary") {
      const isOk = state === sensor.okState;
      const color = unavailable ? "var(--disabled-color)" : isOk ? "#4ade80" : "#ef4444";
      return { entity, statusLabel, statusColor: color, dotColor: color, icon: this._entityIcon(entity, sensor) };
    }
    return {
      entity, statusLabel,
      statusColor: unavailable ? "var(--disabled-color)" : "var(--primary-text-color)",
      dotColor: unavailable ? "var(--disabled-color)" : "var(--primary-color)",
      icon: this._entityIcon(entity, sensor),
    };
  }

  _render() {
    if (!this._hass) return;
    const alarm = this._alarmValues();
    const isArmed = !["disarmed", "unavailable", "unknown"].includes(alarm.state);
    const isTriggered = alarm.state === "triggered";
    const activeSensors = SENSORS_DEF.filter(sensor => this.config.sensors.includes(sensor.key));
    const availableResets = RESET_DEF.map(reset => ({ ...reset, entityId: this.config[reset.configKey] || reset.defaultEntity }));
    const iconAlarm = `<svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>`;
    const iconLock = `<svg class="ei" viewBox="0 0 24 24" fill="currentColor"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>`;

    this.shadowRoot.innerHTML = `
      <style>
        :host { display:block; font-family:var(--primary-font-family, sans-serif); }
        .card { background:var(--ha-card-background, var(--card-background-color)); border-radius:var(--ha-card-border-radius, 12px); overflow:hidden; border:1px solid var(--divider-color); box-shadow:var(--ha-card-box-shadow, none); }
        .alarm-section { padding:16px; background:var(--secondary-background-color); border-bottom:1px solid var(--divider-color); }
        .section-title { font-size:11px; font-weight:600; letter-spacing:2px; text-transform:uppercase; color:var(--secondary-text-color); margin-bottom:14px; }
        .alarm-row { display:flex; align-items:center; gap:14px; }
        .alarm-icon-wrap { width:48px; height:48px; display:flex; align-items:center; justify-content:center; border-radius:12px; background:var(--primary-background-color); flex-shrink:0; }
        .alarm-info { flex:1; display:flex; flex-direction:column; gap:3px; min-width:0; }
        .alarm-name { font-size:15px; font-weight:600; color:var(--primary-text-color); }
        .alarm-state-row { display:flex; align-items:baseline; gap:8px; flex-wrap:wrap; }
        .alarm-state { font-size:13px; }
        .alarm-since { font-size:11px; color:var(--secondary-text-color); font-style:italic; }
        .alarm-actions { display:flex; flex-direction:column; gap:8px; flex-shrink:0; }
        .btn { min-height:36px; min-width:110px; padding:0 10px; border-radius:8px; border:none; box-sizing:border-box; font:600 12px var(--primary-font-family, sans-serif); cursor:pointer; display:flex; align-items:center; justify-content:center; gap:6px; transition:opacity .2s, transform .1s; white-space:nowrap; }
        .btn:hover { opacity:.85; transform:translateY(-1px); } .btn:active { transform:translateY(0); }
        .ei { width:16px; height:16px; flex-shrink:0; }
        .btn-disarm { background:#4b5563; color:#fff; } .btn-arm-away { background:#206633; color:#fff; } .btn-arm-home { background:#f59e0b; color:#fff; }
        .section { padding:16px; background:var(--ha-card-background, var(--card-background-color)); }
        .section + .section { border-top:1px solid var(--divider-color); }
        .sensor-row { display:flex; align-items:center; gap:12px; padding:10px 0; border-bottom:1px solid var(--divider-color); }
        .sensor-row:last-child { border-bottom:none; }
        .sensor-icon { --mdc-icon-size:22px; color:var(--secondary-text-color); flex-shrink:0; }
        .sensor-label { flex:1; font-size:14px; color:var(--primary-text-color); }
        .sensor-status { display:flex; align-items:center; gap:6px; font-size:13px; font-weight:600; text-align:right; }
        .dot { width:7px; height:7px; border-radius:50%; flex-shrink:0; }
        .no-sensors { font-size:13px; color:var(--secondary-text-color); padding:8px 0; text-align:center; }
        .reset-grid { display:grid; grid-template-columns:repeat(3, minmax(0, 1fr)); gap:8px; }
        .reset-btn { min-width:0; width:100%; min-height:42px; padding:6px 8px; background:var(--secondary-background-color); color:var(--primary-text-color); border:1px solid var(--divider-color); white-space:normal; }
        .reset-btn ha-icon { --mdc-icon-size:18px; }
        .card-version { font-size:10px; color:var(--disabled-color); text-align:right; padding:6px 16px 8px; border-top:1px solid var(--divider-color); letter-spacing:.5px; }
        @media (max-width:500px) { .alarm-row { align-items:flex-start; } .alarm-actions { width:100px; } .btn { min-width:100px; } .reset-grid { grid-template-columns:1fr; } }
      </style>
      <div class="card">
        <div class="alarm-section">
          <div class="section-title">${this.config.title || tr(this._hass, "defaultTitle")}</div>
          <div class="alarm-row">
            <div class="alarm-icon-wrap" style="color:${alarm.color};${isArmed || isTriggered ? `box-shadow:0 0 14px ${alarm.color}88;` : ""}">${iconAlarm}</div>
            <div class="alarm-info">
              <span class="alarm-name">${this._formatName(this._getState(this.config.alarm_entity), "alarm")}</span>
              <div class="alarm-state-row"><span class="alarm-state" style="color:${alarm.color}">${alarm.label}</span><span class="alarm-since">${this._sinceLabel(this.config.alarm_entity)}</span></div>
            </div>
            <div class="alarm-actions">
              <button class="btn btn-disarm" data-alarm-action="disarm">${iconLock} ${tr(this._hass, "disarm")}</button>
              <button class="btn btn-arm-away" data-alarm-action="arm_away">${iconLock} ${tr(this._hass, "away")}</button>
              <button class="btn btn-arm-home" data-alarm-action="arm_home">${iconLock} ${tr(this._hass, "home")}</button>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="section-title">${tr(this._hass, "sensorsTitle")}</div>
          ${activeSensors.length ? activeSensors.map(sensor => {
            const values = this._sensorValues(sensor);
            const label = this.config.labels[sensor.key] || this._formatName(values.entity, sensor.defaultText);
            return `<div class="sensor-row" data-key="${sensor.key}"><ha-icon class="sensor-icon" icon="${values.icon}"></ha-icon><span class="sensor-label">${label}</span><span class="sensor-status" style="color:${values.statusColor}"><span class="dot" style="background:${values.dotColor}"></span><span class="sensor-val">${values.statusLabel}</span></span></div>`;
          }).join("") : `<div class="no-sensors">${tr(this._hass, "noSensors")}</div>`}
        </div>
        <div class="section">
          <div class="section-title">${tr(this._hass, "resetsTitle")}</div>
          <div class="reset-grid">${availableResets.map(reset => `<button class="btn reset-btn" data-reset-key="${reset.key}" data-entity-id="${reset.entityId}"><ha-icon icon="${reset.icon}"></ha-icon><span>${tr(this._hass, reset.text)}</span></button>`).join("")}</div>
        </div>
        <div class="card-version">Somfy Protexial Card ${CARD_VERSION}</div>
      </div>`;

    this.shadowRoot.querySelectorAll("[data-alarm-action]").forEach(button => {
      button.addEventListener("click", () => this._callAlarmAction(button.dataset.alarmAction));
    });
    this.shadowRoot.querySelectorAll("[data-reset-key]").forEach(button => {
      button.addEventListener("click", () => this._callReset(button.dataset.resetKey, button.dataset.entityId));
    });
  }

  _callAlarmAction(action) {
    const entity = this._getState(this.config.alarm_entity);
    const codeRequired = Boolean(entity?.attributes?.code_format || entity?.attributes?.code_arm_required === true);
    let code = this.config.alarm_code;
    if (codeRequired && !code) {
      code = prompt("Code / PIN:");
      if (!code) return;
    }
    const service = action === "disarm" ? "alarm_disarm" : action === "arm_home" ? "alarm_arm_home" : "alarm_arm_away";
    this._hass.callService("alarm_control_panel", service, code ? { code } : {}, { entity_id: this.config.alarm_entity });
  }

  _callReset(key, entityId) {
    const reset = RESET_DEF.find(item => item.key === key);
    if (!reset || !entityId) return;
    const entity = this._getState(entityId);
    const label = this._formatName(entity, reset.text);
    if (!confirm(`${tr(this._hass, "confirmReset")} ${label} ?`)) return;
    this._hass.callService("button", "press", {}, { entity_id: entityId });
  }

  _update() {
    if (!this._hass) return;
    const alarm = this._alarmValues();
    const isArmed = !["disarmed", "unavailable", "unknown"].includes(alarm.state);
    const isTriggered = alarm.state === "triggered";
    const root = this.shadowRoot;
    const iconWrap = root.querySelector(".alarm-icon-wrap");
    if (iconWrap) {
      iconWrap.style.color = alarm.color;
      iconWrap.style.boxShadow = isArmed || isTriggered ? `0 0 14px ${alarm.color}88` : "";
    }
    const stateElement = root.querySelector(".alarm-state");
    if (stateElement) { stateElement.textContent = alarm.label; stateElement.style.color = alarm.color; }
    const sinceElement = root.querySelector(".alarm-since");
    if (sinceElement) sinceElement.textContent = this._sinceLabel(this.config.alarm_entity);

    SENSORS_DEF.filter(sensor => this.config.sensors.includes(sensor.key)).forEach(sensor => {
      const row = root.querySelector(`.sensor-row[data-key="${sensor.key}"]`);
      if (!row) return;
      const values = this._sensorValues(sensor);
      const statusElement = row.querySelector(".sensor-status");
      const dotElement = row.querySelector(".dot");
      const valueElement = row.querySelector(".sensor-val");
      const labelElement = row.querySelector(".sensor-label");
      const iconElement = row.querySelector(".sensor-icon");
      if (statusElement) statusElement.style.color = values.statusColor;
      if (dotElement) dotElement.style.background = values.dotColor;
      if (valueElement) valueElement.textContent = values.statusLabel;
      if (labelElement && !this.config.labels[sensor.key]) labelElement.textContent = this._formatName(values.entity, sensor.defaultText);
      if (iconElement) iconElement.setAttribute("icon", values.icon);
    });
  }

  getCardSize() { return 7; }
}

if (!customElements.get("somfy-protexial-card")) {
  customElements.define("somfy-protexial-card", SomfyProtexialCard);
}

window.customCards = window.customCards || [];
if (!window.customCards.some(card => card.type === "somfy-protexial-card")) {
  window.customCards.push({
    type: "somfy-protexial-card",
    name: "Somfy Protexial Card",
    description: "Multilingual card for Somfy Protexial and Protexiom alarm systems",
    configurable: true,
  });
}
