# Ext Stream Plus
This extension enables full datetime fields in stream comments and posts.

## Table of Contents

* [Introduction](#introduction)
* [Requires](#requires)
* [Installation](#installation)
    * [Pre-build extension release](#pre-build-extension-release)

## Introduction

This extension adds two features to the EspoCRM stream:
- displaying the full date and time; By default, EspoCRM shows a short datetime on the stream, but with this extension, users can see the full date and time directly in the stream.
- Stream updates expanded by default, so users can see the full update without having to click on the 'expand' button.

Both features are enabled automatically while the module is installed.

![image](https://user-images.githubusercontent.com/32223252/221196649-8c7339fd-79ac-41b7-b514-72d588738428.png)


![image](https://user-images.githubusercontent.com/32223252/220250006-23fb2521-6108-4b9b-b357-0a59677f6c11.png)

## Requirements

- EspoCRM >= 10.1

## Build the extension

Install dependencies and build the installable ZIP:

```sh
npm ci
npm run extension
```

The ZIP is created in `build/`. Bundled modules also register their `lib/init.js` in `Resources/metadata/app/client.json`.

## Set up a local EspoCRM instance

Install Node.js, npm, PHP, Composer, Git, and a database supported by EspoCRM. Copy the default configuration, then set the database connection, site URL, and webserver owner/group for your environment:

```sh
cp config-default.json config.json
```

Create the configured database, then run:

```sh
npm run all
```

This downloads EspoCRM into `site/` and installs the extension. It replaces an existing `site/` directory. The default login is `admin` / `1`.

After editing extension files, synchronize and rebuild the local instance:

```sh
npm run sync
npm run rebuild
```

For an existing EspoCRM installation, download the latest package from the [release page](https://github.com/bandtank/ext-stream-plus/releases/latest) and upload it under **Administration** -> **Extensions**.
