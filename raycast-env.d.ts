/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Lightdash Instance URL - Your Lightdash instance URL (e.g., https://app.lightdash.cloud or https://lightdash.yourcompany.com) */
  "lightdashUrl": string,
  /** Personal Access Token - Personal Access Token created in Lightdash Settings */
  "personalAccessToken": string,
  /** Project UUID - UUID of the Lightdash project to search in. Found in the project URL: /projects/{projectUuid}/... */
  "projectUuid": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `lightdash-search` command */
  export type LightdashSearch = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `lightdash-search` command */
  export type LightdashSearch = {}
}

