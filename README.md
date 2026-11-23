# Ext Stream Plus

EspoCRM extension that displays full date-times in stream notes and expands stream updates by default. Both features are enabled while the extension is installed.

Requires EspoCRM 10.1 or newer and PHP 8.5 or newer.

## Configuration

Copy `config-default.json` to `config.json` to configure the local development instance:

```sh
cp config-default.json config.json
```

`config-default.json` supplies defaults. Override the EspoCRM repository and branch, database connection, site URL, and webserver owner/group in `config.json` as needed.

To override EspoCRM configuration after installation, create a root `config.php` that returns an array of configuration values. For example:

```php
<?php
return [
    'useCacheInDeveloperMode' => true,
];
```

## Building

### Preparation

Install Node.js 24 or newer, npm 11 or newer, PHP, Composer, Git, and a database supported by EspoCRM. Install the project dependencies:

```sh
npm ci
```

Create the database configured in `config.json` before building a local instance.

### Full EspoCRM instance

Run:

```sh
npm run all
```

This downloads EspoCRM, builds it under `site/`, and installs the extension. It replaces an existing `site/` directory but leaves the database intact. The default login is `admin` with password `1`. Check `site/data/logs/` if the build fails.

### Copying extension files to EspoCRM

After changing files under `src/`, sync them to the local instance and rebuild its metadata:

```sh
npm run sync
npm run rebuild
```

Run the after-install hook manually when needed:

```sh
node build --after-install
```

### Extension package

Build the installable ZIP with:

```sh
npm run extension
```

The package is written to `build/`; its version comes from `package.json`. For an existing EspoCRM installation, upload the ZIP under **Administration** → **Extensions**.

This extension is bundled. Keep `bundled` and `jsTranspiled` enabled in `src/files/custom/Espo/Modules/ExtStreamPlus/Resources/module.json`, and keep the bundle initializer registered in `src/files/custom/Espo/Modules/ExtStreamPlus/Resources/metadata/app/client.json`.

### Additional extensions

To install other extension ZIPs automatically during `npm run all`, place them in the root `extensions/` directory.

## Development workflow

1. Edit extension files under `src/`.
2. Run `npm run sync`.
3. Run `npm run rebuild` and test the changes in the EspoCRM instance under `site/`.

## Versioning

The package version is stored in `package.json` and `package-lock.json`. Bump it with:

```sh
npm version patch --no-git-tag-version
npm version minor --no-git-tag-version
npm version major --no-git-tag-version
```

## Updating build tools

Update `espo-extension-tools` in `package.json` to the desired release, then refresh the lockfile and dependencies:

```sh
npm update espo-extension-tools espo-frontend-build-tools
```
