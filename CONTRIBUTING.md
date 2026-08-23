# Contributing to Cassinux

Thank you for your interest in contributing to Cassinux!

Cassinux is an experimental Ubuntu-based Linux distribution with a customized KDE Plasma desktop. The project is currently in **alpha development**, so there are many areas where contributors can help.

## Ways to Contribute

You can contribute by:

- Fixing bugs
- Testing Cassinux on different hardware
- Improving KDE Plasma configuration
- Creating Cassinux artwork and wallpapers
- Improving documentation
- Reviewing packages
- Improving the ISO build process
- Suggesting features and improvements

## Before Contributing

Before starting work:

1. Check the existing **Issues** to see whether the problem or feature already exists.
2. For larger changes, open an Issue first to discuss the proposed change.
3. Make sure your contribution does not include private or personal information.
4. Only contribute files that you created yourself or are legally allowed to distribute.

## Building Cassinux

Cassinux is currently being developed using **Cubic**, a tool for creating customized Ubuntu-based live ISO images.

The current development process is still being improved, so the build instructions may change.

### Basic Cubic Workflow

1. Start a new Cubic project using the appropriate Ubuntu base ISO.
2. Enter the Cubic terminal environment.
3. Apply Cassinux packages, configurations, artwork, and other customizations.
4. Test the changes.
5. Generate the Cassinux ISO.
6. Test the resulting ISO before submitting changes.

### Important

Do **not** commit large generated Cubic files to this repository.

Examples include:

- Extracted root filesystems
- Disk images
- Temporary Cubic files
- Backup directories
- Large ISO files

The goal is to make Cassinux's build process reproducible so contributors can build the project without relying on the original development computer.

## Reporting Bugs

When reporting a bug, include:

- Cassinux version
- Hardware specifications
- Steps to reproduce the problem
- Expected behavior
- Actual behavior
- Relevant error messages
- Screenshots, if useful

## Pull Requests

When submitting a pull request:

1. Explain what you changed.
2. Explain why the change is needed.
3. Reference the related Issue, if one exists.
4. Test your changes when possible.
5. Keep the pull request focused on one change or issue.
6. Remove personal information before submitting.

## Artwork

Artwork contributions are welcome.

Artwork should be placed in the appropriate directory, such as:

- `artwork/logos/`
- `artwork/wallpapers/`
- `artwork/icons/`
- `artwork/themes/`

Only submit artwork that you created yourself or have permission to distribute.

## Package and Configuration Changes

Changes to packages, system configuration, KDE Plasma settings, or build scripts should be tested before submitting a pull request.

Document important changes so other contributors can understand how they affect Cassinux.

## Testing

Contributors can help by testing Cassinux on:

- Different computers
- Virtual machines
- Different graphics hardware
- Different Wi-Fi hardware
- Different storage configurations
- Different screen resolutions

Please report compatibility problems through GitHub Issues.

## Community Guidelines

Please be respectful and constructive when communicating with other contributors.

Different opinions about the direction of Cassinux are welcome. Personal attacks, harassment, and discrimination are not.

## Project Status

Cassinux is currently an **alpha / work in progress**.

The project may still contain:

- Incomplete customization
- Remaining Ubuntu/Kubuntu branding
- Bugs
- Experimental configurations
- Unfinished build processes

Contributors are welcome to help improve these areas.

Thank you for helping build Cassinux!
